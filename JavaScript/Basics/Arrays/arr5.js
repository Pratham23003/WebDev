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
console.log(`\ ----- Slice Method Array end-------`);

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
console.log(`\ ----- Splice Method Array end-------`);

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
console.log(`\ ----- Map Functions Array method end-------`);

//filter
console.log(`\n ----- Filter Array method -------`);
let numArray2 = [10,25,30,11,13,17,18,22];
let evenFilterArray = numArray2.filter((number) => {    //filters even numbers
    if(number%2 === 0) return true;
    else return false;
})
console.log("Og Array :", numArray2);
console.log("New Filtered Array :",evenFilterArray);

let anotherArray = [1,2,'hello', "webDev", null];
let stringFilterArray = anotherArray.filter((element) => {
    if(typeof(element) === "string") return true;
    else return false;
})
console.log("Original Array with multiple values :",anotherArray);
console.log("New Filtered Array with String :",stringFilterArray);
console.log(`\ ----- Filter Array method end-------`);

//reduce
console.log(`\n ----- Reduce Array method -------`);
let numArray3 = [10,20,30,40,50];
let reduceOperationArray = numArray3.reduce((acc,curr) => {
    return (acc + curr);
},0)
console.log("Reduce Operation Array :",reduceOperationArray);
console.log(`\ ----- Reduce Array method end-------`);

//sort 
console.log(`\n ----- Sort Array method -------`);
let arrUnsorted = [9,4,2,0,1,9];
console.log("Unsorted Array :",arrUnsorted);
let sortedArray = arrUnsorted.sort((a,b) => b - a);
console.log("Sorted Array :",arrUnsorted);
console.log(`\ ----- Sort Array method end -------`);

//indexOf
console.log(`\n ----- indexOf Array method start -------`);
let newArray = [10,20,30,40,50,60];
console.log(`Index Of 40 in this array : `,newArray.indexOf(40));
console.log(`\ ----- indexOf Array method end -------`);

//find
console.log(`\n ----- find() Array method start -------`);
let demoArray = [20,12,33,44,11,9,19,21];
const findElement = demoArray.find((element) => element<10); //finds element based on a condition
console.log("Element < 10: ",findElement);
console.log(`\ ----- find() Array method end -------`);

//lastIndexOf()
console.log(`\n ----- lastIndexOf Array method start -------`);
const genresWithDuplicates = ["Rock", "Pop", "Jazz", "Pop", "Classical"];
console.log(genresWithDuplicates.lastIndexOf("Pop")); // Output: 3 (the last "Pop")
console.log(genresWithDuplicates.lastIndexOf("Rock")); // Output: 0
console.log(genresWithDuplicates.lastIndexOf("Blues")); // Output: -1
console.log(` ----- lastIndexOf Array method end -------`);

//includes()
console.log(`\n ----- includes() Array method start -------`);
const availableResolutions = ['720p', '1080p', '4K'];
console.log(availableResolutions.includes("1080p"));
console.log(availableResolutions.includes("2K"));
console.log(`\ ----- includes() Array method end -------`);

//concat()
console.log(`\n ----- concat() Array method start -------`);
const playlist1 = [1,2,3,4];
const playlist2 = [4,5,6,7];
const playlist3 = [7,8,9,10];

const fullPlaylist = playlist1.concat(playlist2,playlist3);
console.log("Full Playlist :", fullPlaylist);

const combinedPlaylistUsingSpreadSyntax = [...playlist1,...playlist2,...playlist3]; //combining using spread syntax
console.log("Combined using ...spread syntax :",combinedPlaylistUsingSpreadSyntax);
console.log(` ----- concat() Array method end -------`);
