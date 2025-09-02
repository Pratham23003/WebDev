// dom elements
const balanceEl = document.getElementById('current-balance');
const incomeAmountEl = document.getElementById('income-amount');
const expenseAmoutnEl = document.getElementById('expense-amount');
const transactionListEl = document.getElementById('transaction-list');
const transactionFormEl = document.getElementById('transaction-form');
const descriptionEl = document.getElementById('description');
const amountEl = document.getElementById('amount');

//if theres something in the localStorage pull it up OR empty array init
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

transactionFormEl.addEventListener(('submit'), addTransactions);

function addTransactions(event){
    event.preventDefault();
    //getting form values
    const description = descriptionEl.value.trim();
    const amount = parseFloat(amountEl.value);

    //pushing values to the transaction list
    transactions.push({
        id: Date.now(),
        description,
        amount,
        date: new Date().toLocaleDateString()
    });
    //setting it to localStorage as well
    localStorage.setItem("transactions", JSON.stringify(transactions));
    
    console.log('pre-appending : ',transactionListEl);

    updateTransactionList();
    updateSummary();

    //this clears the values entered by user (resets or clear the inputs)
    transactionFormEl.reset();
}
function updateTransactionList(){
    transactionListEl.innerHTML = "";
    //sorting according to latest transaction
    console.log('pre-sorting : ', transactions);
    const sortedTransactions = [...transactions].reverse();
    console.log('postSorting : ',sortedTransactions);

    console.log(transactionListEl);
    sortedTransactions.forEach((transaction) => {
        const transactionEl = createTransactionElement(transaction);
        transactionListEl.appendChild(transactionEl);
        console.log('post-appending : ',transactionListEl);

    })
}


function createTransactionElement(transaction){
    const li = document.createElement('li');
    li.classList.add('transaction');
    li.classList.add(transaction.amount > 0 ? "income" : "expense")
    li.innerHTML = `
        <span class="transaction-description">${transaction.description}</span>
        <span class="transaction-date">${transaction.date}</span>
        <span class="transaction-amount">${transaction.amount}
            <button class = "delete-btn" onclick = "removeTransaction(${transaction.id})">x</button>
        </span>
    `
    return li;
}
function updateSummary(){
    const balance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

    const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

    const expenses = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

    const incomePercentage = (balance/income)*100;
    const expensesPercentage = (balance/expenses)*100;

    //updating the UI
    balanceEl.textContent = balance;
    incomeAmountEl.textContent = income;
    expenseAmoutnEl.textContent = expenses;

}
function removeTransaction(id){
    transactions = transactions.filter(transaction => transaction.id !== id);
    localStorage.setItem("transactions", JSON.stringify(transactions));

    updateTransactionList();
    updateSummary();
}
updateTransactionList();
updateSummary();
// just for clearing the localStorage temporarily for debugging
// localStorage.clear();