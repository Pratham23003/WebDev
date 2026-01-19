fetch("https://randomuser.me/api");
// .then(function (data){
//     console.log(data.status);
// })
// .catch(function(err){
//     console.log(err);
// });
async function getDataStatus(data) {
    try{
        await data.status;
        if (data.response == 200){
            console.log("Data aagya, status : ", response);
        }
        // else console.log("Data nhi aya", response);
    }
    catch(err){
        console.log("error : ",err);
    }
}