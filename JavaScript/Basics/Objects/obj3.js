//adding new properties and deleting object properties
const myFile = {
    name: "presentation.pptx",
    size: "10MB",
    dateCreated: "12-07-2025"
};
console.log("Initial File :",myFile);

//add now property using dot notation 
myFile.owner = "Pratham 23";
console.log("After adding owner :", myFile);

//add new property using bracket notation 
myFile["timeCreated"] = "16:17";
console.log("After adding timeCreated :",myFile);

//deleting using . notation and delete keyword
delete myFile.dateCreated;
console.log("After deleting dateCreated :",myFile);