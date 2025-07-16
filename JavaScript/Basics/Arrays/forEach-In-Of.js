//for Each
const arr = [10,20,30];
arr.forEach((value, index) => {
    console.log("Value :",value,"Index :",index);
})

//traditional loop
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//for In
const obj1 = {
    name: "My Favourite Song.mp3",
    type: "audio",
    duration: 190,
    sizeMB: 8.50,
    isPremium: false,
};

for(let keys in obj1){
    console.log(keys, " ", obj1[keys]);
}

// for Of
let arr2 = [10,20,30,40,50,60];
for(let val of arr2){
    console.log(val);
}