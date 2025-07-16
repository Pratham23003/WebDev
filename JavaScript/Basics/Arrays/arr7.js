// Mini-Exercise 6.3: Iteration and Transformation
// Open your script.js file.
// Create Data:
// Declare a const array named cloudPlayFiles that contains at least 5-6 objects. Each object should represent a media file with properties like:
// name (string, e.g., "My Favorite Song.mp3")
// type (string, e.g., "audio", "video", "image")
// duration (number in seconds, e.g., 240)
// sizeMB (number, e.g., 5.3)
// isPremium (boolean, true or false)
// Make sure you have a mix of types and isPremium values.
// Using forEach():
// Iterate over cloudPlayFiles using forEach().
// For each file, console.log a message like: "File: [name], Type: [type]".
// Using map():
// Create a new array named fileSummaries using map().
// For each file object in cloudPlayFiles, transform it into a string summary (e.g., "My Song (240s) - 5.3MB").
// console.log the fileSummaries array.
// Using filter():
// Create a new array named premiumContent using filter().
// Include only the files where isPremium is true.
// console.log the premiumContent array.
// Create another new array named shortVideos using filter().
// Include only files where type is "video" AND duration is less than 300 seconds.
// console.log the shortVideos array.
const cloudPlayFiles = [
    {
        name: "My Favourite Song.mp3",
        type: "audio",
        duration: 190,
        sizeMB: 8.50,
        isPremium: false,
    },
    {
        name: "Vacation Highlights.mp4",
        type: "video",
        duration: 360,
        sizeMB: 1200.75,
        isPremium: true,
    },
    {
        name: "Sunset.jpg",
        type: "image",
        duration: 0,
        sizeMB: 2.3,
        isPremium: false,
    },
    {
        name: "Podcast Episode 5.mp3",
        type: "audio",
        duration: 2400,
        sizeMB: 55.1,
        isPremium: true,
    },
    {
        name: "Documentary Trailer.mov",
        type: "video",
        duration: 180,
        sizeMB: 950.8,
        isPremium: false,
    },
    {
        name: "Profile Picture.png",
        type: "image",
        duration: 0,
        sizeMB: 16.8,
        isPremium: true,
    },
];

//using for each 
console.log(`\n ------- Using For Each --------- `);
cloudPlayFiles.forEach((key) => {
    console.log("File :",key.name,",","Type :",key.type);
})
console.log(` ------- ________________ --------- `);

//using map()
console.log(`\n ------- Using Map --------- `);
const fileSummaries = cloudPlayFiles.map((key) => {
    return(`${key.name}(${key.duration}s) - ${key.sizeMB}`);
})
console.log(fileSummaries);
console.log(` ------- ___________________ --------- `);

//using filter
console.log(`\n ------- Using Filter --------- `);
const premiumContent = cloudPlayFiles.filter((key) => {
    if(key.isPremium === true) return key.isPremium;
})
console.log("Objects with premium content :",premiumContent);

const shortVideos = cloudPlayFiles.filter((key) => {
    if(key.type === "video" && key.duration < 300) return key.type;
})
console.log("Objects with videos <300s:",shortVideos);
console.log(` ------- ____________________ --------- `);