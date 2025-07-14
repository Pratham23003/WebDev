//some more array methods
//push(), pop(), shift(), unshift() done in arr3.js

//slice
console.log(`\n ------ Slice Method Array ------`);
const allTracks = ["Track1", "Track2", "Track3", "Track4", "Track5"];
//slicing from track1 to track3
const subset1 = allTracks.slice(1,3); //get tracks from index1(inclusive) to index3(exclusive)
console.log("Subset 1 :", subset1);
console.log("Original Array after Slice :",allTracks);
//get tracks from index2 to the end
const subset2 = allTracks.slice(2);
console.log("Subset 2 :",subset2);
console.log("Original Array after Slice :",allTracks);
//using negative indices: from 2nd to last to element(inclusive) to last element(exclusive)
const subset3 = allTracks.slice(-3, -1);
console.log("Subset 3 (-ve indices): ",subset3);
//shallow copy of entire array
const shallowCopyOfTracks = allTracks.slice();
console.log("Shallow Copy of tracks :",shallowCopyOfTracks);
console.log(`\n ----- Slice Method Array -------`);

//splice
console.log(`\n ------ Splice Method Array ------`);
const playlistToEdit = ["SongA", "SongB", "SongC", "SongD", "SongE"];
console.log("Initial playlist to Edit :",playlistToEdit);
//deleting elements -> remove 2 elements starting from index1
let deletedSongs = playlistToEdit.splice(1,2);
console.log("Deleted Songs (splice 1,2) :", deletedSongs);
console.log("Array after deleting using splice(1,2) :",playlistToEdit);
//adding elements (without Deleting): Insert "New Song 1" @ index 1
playlistToEdit.splice(0,0,"New Song 1");
console.log("Array after adding using splice :",playlistToEdit);
//replacing elements: remove 1 element @ index2 and add "Replacement Song"
let replacedSongs = playlistToEdit.splice(2,1,"Replacement Song");
console.log("Replaced Song @[2] using splice :",replacedSongs);
console.log("Array after replacing using splice :",playlistToEdit);
//remove all from startIndex: remove all elements from index2 to the end
let remainingDeleted = playlistToEdit.splice(2);
console.log("Remaining Deleted :",remainingDeleted);
console.log(`\n ----- Splice Method Array -------`);

//map
console.log(`\n ----- Map Functions array method -------`);
const numArray = [10,20,30,40];
console.log("Original Array :",numArray);
let numberIndexPrint = numArray.map((number,index) =>{
    return(`Number :",${number}," ",Index :", ${index}`);

})
let answerArray = numArray.map((number) => {
    return number*number;
})
console.log("Map Function (number and index param) :",numberIndexPrint);
console.log("Map Function (deep copy):",answerArray);
console.log(`\n ----- Map Functions Array method -------`);

//filter

