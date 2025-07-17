//object cloning
let obj = {
    age: 12,
    wt: 68,
    ht: 170
};
console.log(obj);
obj.color = "white";
console.log(obj);

//clone copy
let clonedObj = {...obj};
clonedObj.color = "black";
console.log("Original Object :",obj);
console.log("Cloned Object :",clonedObj);

//cloning using assign
let obj2 = {
    name: 'temp',
    address: 'Ludhiana',
    isTrue: true
};
let cloneUsingAssign = Object.assign({}, obj,obj2); //cloned two objects (obj and obj2 into cloneUsingAssign)
console.log("Cloned Using Assign :",cloneUsingAssign);

//cloning using iteration
//creating a demo obj
let randomObj1 = {
    name : "Demo1",
    type : 'Text',
    isObj1 : true,
    randomNumber : 1203
}
//cloning
let clonedRandomObj1 = {};
for(let key in randomObj1){
    let newKey = key;
    let newValue = randomObj1[key];
    //clone values into clonedRandomObj1
    clonedRandomObj1[newKey] = newValue;
}
randomObj1.randomNumber = 9787;
console.log("Object :",randomObj1);
console.log("Cloned Object :",clonedRandomObj1);
