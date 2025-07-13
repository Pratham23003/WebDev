// Arrays Basic Challenge
// Create Array:
// Declare a const variable named cloudPlayMediaFiles.
// Initialize it as an array containing at least 5 strings representing various media files (e.g., "video.mp4", "song.mp3", "picture.jpg", "playlist.m3u", "another_video.mov").
// Access Elements:
// console.log the first item in your cloudPlayMediaFiles array.
// console.log the third item.
// console.log the item at an index that doesn't exist (e.g., index 10) and observe the undefined output.
// Modify Element:
// Change the value of the second item in cloudPlayMediaFiles to a new string (e.g., "updated_song.flac").
// console.log the array to see the change.
// Array Length:
// console.log the current length of your cloudPlayMediaFiles array.
// Add/Remove Elements (using methods):
// Use push() to add one new media file to the end of the array. console.log the array.
// Use unshift() to add one new media file to the beginning of the array. console.log the array.
// Use pop() to remove the last item. console.log the array and the item that was removed.
// Use shift() to remove the first item. console.log the array and the item that was removed.

const cloudPlayMediaFiles = ["video.mp4", "song.mp3", "picture.jpg", "playlist.m3u", "another_video.mkv"];
//access elements
console.log(cloudPlayMediaFiles[0]);
console.log(cloudPlayMediaFiles[2]);
console.log(cloudPlayMediaFiles[10]);
//modify elements
cloudPlayMediaFiles[1] = "updated_song.flac";
console.log("Array after changing 2nd item :",cloudPlayMediaFiles);
//array length
console.log(cloudPlayMediaFiles.length);
///adding/removing elements using methods
//push
cloudPlayMediaFiles.push("video2.mkv");
console.log("Array after push(): ",cloudPlayMediaFiles);
//unshift
cloudPlayMediaFiles.unshift("new_audio.wav");
console.log("Array after unshift(): ",cloudPlayMediaFiles);
//pop
let poppedItem = cloudPlayMediaFiles.pop();
console.log("Array after pop(): ",cloudPlayMediaFiles);
console.log("Item that was popped :",poppedItem);
//shift()
let shiftItem = cloudPlayMediaFiles.shift();
console.log("Array after shift() :",cloudPlayMediaFiles);
console.log("Item that was shifted :",shiftItem);