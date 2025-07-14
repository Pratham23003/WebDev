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