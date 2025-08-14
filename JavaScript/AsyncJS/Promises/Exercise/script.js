//dom references
const fetchBtn = document.getElementById('fetch-btn');
const fetchErrorBtn = document.getElementById('fetch-error-btn');
const result = document.getElementById('result');

//logic
const successUrl = "https://jsonplaceholder.typicode.com/posts/1";
const errorUrl = "https://jsonplaceholder.typicode.com/posts/99999";

const successHandling = fetchBtn.addEventListener('click', (event) => {
    //clearing the styling 
    result.classList.remove("error");

    fetch(successUrl)
    .then((response) => {
        console.log("Response Status : ",response.status);
        //checks
        if(!response.ok){
            throw new Error(`Failed to fetch, status :${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        result.innerHTML = `Data Recieved ! 
                            Title: ${data.title}`;
        console.log(data);
    })
    .catch((error) => {
        result.classList.add("error");
        result.innerHTML = `Error: ${error.message}`
        console.log("Error :",error);
    })
    .finally(() => {
        console.log("Fetch Successful.");
    })
});

const failureHandling = fetchErrorBtn.addEventListener('click', (event) => {
    //clearing the styling 
    result.classList.remove('error');

    fetch(errorUrl)
    .then((response) => {
        console.log("Response Status :",response.status);
        if(!response.ok){
            throw new Error(`Error fetch failed with status: ${response.status}`);
        }
        result.innerHTML = `Error : ${response.status}`;
        return response.json();
    })
    .then((data) => {
        console.log("Data :",data);
    })
    .catch((error) => {
        result.classList.add('error');
        result.innerHTML = `Error: ${error.message}`;
        console.log("Error :",error);
    })
    .finally(() => {
        console.log("Fetch req for error URL has completed.");
    })
})