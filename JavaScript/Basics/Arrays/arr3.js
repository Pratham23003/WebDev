////Basic Array Methods

//push() - Add elements to the END.
const favouriteSongs = ["California Love", "Picture Me Rollin'", "A Horse With No Name"];
console.log("Initial Songs:", favouriteSongs);
favouriteSongs.push("Everything I Am");
console.log("Updated after push() :",favouriteSongs);
//pop() - Remove from the END.
const playlist = ["A", "B", "C", "D", "E"];
console.log("Original Playlist :", playlist);
playlist.pop();
console.log("Playlist After Pop :",playlist);
//unshift - Add to the Beginning 
const queue = ["Person B", "Person C"];
console.log("Original Array :",queue);
queue.unshift("Person A");
console.log("After unshift() :",queue);
//shift - Remove from the Beginnning
const dailyLog = ["Entry1", "Entry2", "Entry3", "Entry4"];
console.log("Original dailyLog :",dailyLog);
dailyLog.shift();
console.log("After removing first elem using shift() :",dailyLog);