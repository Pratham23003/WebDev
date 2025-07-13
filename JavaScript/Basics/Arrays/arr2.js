////accessing array elements
const playlist = ["Song A", "Song B", "Song C", "Song D"];

console.log(playlist[0]);
console.log(playlist[1]);
console.log(playlist[2]);
console.log(playlist[3]);
console.log(playlist[4]);//trying to access non-existent index

////modifying array elements
const dailyTasks = ["Wake Up", "Brush", "Have BreakFast", "Go to College"];
console.log("Original Tasks:", dailyTasks);
//changing the array elements
dailyTasks[1] = "Exercise";
console.log("After Changing Tasks :", dailyTasks);
//can also add elements beyond the current length of the array
dailyTasks[4] = "Study";
console.log("After Adding New Elements :", dailyTasks);

////array length
const epTracks = ["Intro", "Track1", "Track2", "Outro"];
console.log("Number of Tracks : ", epTracks.length);
//using length to add elements to the end
let numbers = [1,2,3,4];
console.log("Original Array :",numbers);
numbers[numbers.length] = 5;
console.log("Array after adding element using .length() :",numbers);
//usin length to truncate an array
let letters = ["a", "b", "c", "d", "e"];
console.log("Original Array :",letters)
letters.length = 3;//will truncate till 3 elements
console.log("Array after truncating using .length :",letters);