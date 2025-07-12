// Mini-Exercise 6.2: Object Basics
// Open your script.js file.
// Create Object:
// Declare a const variable named myCloudPlayFile.
// Initialize it as an object representing a media file. Give it at least 4-5 properties that seem relevant for CloudPlay, for example:
// fileName (string)
// fileType (string, e.g., "video", "audio", "image")
// sizeKB (number)
// isFavorite (boolean)
// uploadedBy (string)
// description (string)
// Access Properties:
// console.log the fileName property using dot notation.
// console.log the fileType property using bracket notation.
// Use a variable to store a property name (e.g., let prop = "sizeKB";) and then console.log that property using bracket notation.
// console.log a property that doesn't exist and observe undefined.
// Modify & Add Properties:
// Change the isFavorite property to its opposite boolean value. console.log the object.
// Add a new property called playbackCount and set its value to a number (e.g., 0). console.log the object.
// Delete Property:
// Delete the description property (if you created it) or any other property from myCloudPlayFile. console.log the object after deletion.
// Object as Function Argument (Pass by Reference):
// Create a function named incrementPlaybackCount that takes one argument: an object (which will be myCloudPlayFile).
// Inside the function, increment the playbackCount property of the passed object by 1.
// After the increment, also add a new property lastPlayed with the current date/time string (e.g., new Date().toLocaleString()).
// Call incrementPlaybackCount with myCloudPlayFile.
// After the function call, console.log myCloudPlayFile again to see that it was modified directly by the function.

const myCloudPlayFile = {
    fileName : "Interstellar (2014) [1080p] [BluRay] [YTS.MX]",
    fileType : "Video",
    sizeInGB : 2.26,
    isFavourite : true,
    uploadedBy : 'user@gmail.com',
    description :  `The adventures of a group of explorer
                    who make use of a newly discovered wormhole to 
                    surpass the limitations on human space travel and 
                    conquer the vast distances involved in an 
                    interstellar voyage.`,
    mediaResolution : '1920x1080',
    mediaFPS : 23.976,
    mediaDuration: '2hr49min'
};

///access properties
console.log("File Name :",myCloudPlayFile.fileName);
console.log("File Type :",myCloudPlayFile.fileType);
//use a variable to store a property name and then 
//console.log that property using bracket notation
let storeData = myCloudPlayFile.description;
console.log(storeData);
console.log(myCloudPlayFile.subtitles);

///Modify and add properties
//modify
myCloudPlayFile["isFavourite"] = !myCloudPlayFile.isFavourite;
console.log(myCloudPlayFile["isFavourite"]);
//add
myCloudPlayFile["playbackCount"] = 0;
console.log(myCloudPlayFile.playbackCount);

///Deleting Properties
delete myCloudPlayFile["description"];
console.log(myCloudPlayFile["description"]); // should give undefined

///object as function argument(pass by reference)
const incrementPlaybackCount = (fileObject) => {
    if(fileObject.playbackCount !== undefined){
        fileObject.playbackCount ++;
    }
    else{
        fileObject.playbackCount = 1;
    }
        fileObject.lastPlayed = new Date().toLocaleDateString();
        console.log("Inside Function after modification :", fileObject);
}
console.log("\n --- Testing Pass by Reference ---");
console.log("Before function call :", myCloudPlayFile);
incrementPlaybackCount(myCloudPlayFile);
console.log("After function call (original object modified):",myCloudPlayFile)
