const newPromise = new Promise((resolve, reject) => {
    setTimeout(function printName(){
        console.log("Sasrikaall g gudd mawning, Async Task Complete.");
        resolve();
    },5000);
});
newPromise.then(function(){
    console.log("Promise Consumed.");
    
})

new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log("Async Task2 Complete");
        resolve();
    },2000);
}).then(function(){
    console.log("AsyncTask2 Consumed.");
});

const promise3 = new Promise(function(resolve,reject) {
    setTimeout(function(){
        resolve({username: "Pratham", mail: "pratham23003@gmail.com"})
    },5000);
});
promise3.then(function(user){
    console.log(user);
});

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({
                username: "pratham",
                password: "123"
            })
        }
        else{
            reject('Error: Something went wrong');
        }
    },2000);
});
promise4
.then(function(user){
    console.log(user);
    return user.username;
})
.then((usernameReturned) => {
    console.log(usernameReturned);
})
.catch(function(error){
    console.log(error);
})
.finally(() => {
    console.log("Promise is either resolved or rejected.");
});

const promise5 = new Promise(function(resolve, reject){
    let error = false;
    if(!error){
        resolve({username: "javaScript", password: "123"});
    }
    else{
        reject("Error: JS went wrong");
    }
});
async function consumePromise5() {
    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromise5();

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error :",error);
    }
    finally{
        console.log("getAllUsers Executed");
    }
}
getAllUsers();

//following piece of code does the same job as above but uses .this and .catch methods instead of async/await
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    console.log("Response Status :",response.status);
    return response.json();
})
.then((data)=> {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Finally. Promise either resolved or rejected");
})

