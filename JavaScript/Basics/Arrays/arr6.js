// //array methods
// //Mini-Exercise 6.2: Advanced Array Methods
// Open your script.js file.
// // Create Array:
// // Declare a const variable named cloudPlaySearchTags.
// // Initialize it with an array of at least 6-7 string tags related to media (e.g., "pop", "rock", "2020s", "workout", "chill", "focus", "pop"). Ensure at least one duplicate tag.
// // Search & Check:
// // Use indexOf() to find the first occurrence of "pop". console.log the result.
// // Use lastIndexOf() to find the last occurrence of "pop". console.log the result.
// // Use includes() to check if "jazz" exists in the array. console.log the boolean result.
// // Use includes() to check if "workout" exists. console.log the boolean result.
// // Extract & Replace (slice vs. splice):
// // slice():
// // Create a new array called middleTags using slice() to get the middle 3 tags from cloudPlaySearchTags. console.log both middleTags and the original cloudPlaySearchTags to confirm the original is unchanged.
// // splice():
// // Take your cloudPlaySearchTags array.
// // Use splice() to remove 2 tags starting from index 1. console.log the array after removal, and also console.log the tags that were removed.
// // Now, use splice() again on cloudPlaySearchTags to insert two new tags at index 1 (where you just removed tags from). Don't remove any existing tags in this step (use 0 for deleteCount). console.log the array after insertion.
// // Combine Arrays (concat / Spread):
// // Create a new const array named newTags with 2-3 additional string tags.
// // Use concat() to combine cloudPlaySearchTags and newTags into a const combinedTags array. console.log combinedTags and confirm the originals are untouched.
// (Optional, but recommended): Try the same combination using the spread syntax (...) into a const combinedTagsSpread array and console.log it.

const cloudPlaySearchTags = ["pop", "rock", "2020s", "workout", "chill", "focus", "pop"];

//search nd check
console.log(`\n ------- Search and Check --------- `);
console.log("Pop's index:",cloudPlaySearchTags.indexOf("pop"));
console.log("Pop's lastIndex :",cloudPlaySearchTags.lastIndexOf("pop"));
console.log("Jazz Exists T/F :",cloudPlaySearchTags.includes("jazz"));
console.log("Workout Exists T/F :",cloudPlaySearchTags.includes('workout'));
console.log(`------- Search and Check Ends--------- `);

//extract and replace
//slice
console.log(`\n ------- Extract and Replace --------- `);
const middleTags = cloudPlaySearchTags.slice(2,5);
console.log("Extracted elements using slice :",middleTags);
console.log("Original Array (unchanged) :",`${cloudPlaySearchTags}`);
//splice
console.log("Array before removal of elements :",cloudPlaySearchTags);
const removeTags = cloudPlaySearchTags.splice(1,2);
console.log("Array after removal :",cloudPlaySearchTags);
console.log("Elements Removed :",removeTags);
console.log(`\ ------- Extract and Replace ends--------- `);

//combining arrays
//concat
console.log(`\n ------- Combining arrays --------- `);
const newTags = ["synth", "80s", "blues", "RnB"];
const combinedTags = newTags.concat(cloudPlaySearchTags);
console.log("Combined Array :",combinedTags);
console.log("Original Array (unchanged) :",cloudPlaySearchTags);
//spread syntax
const newTagsSpread = ["Punjabi", "Bollywood", "Punjabi Hip-Hop"];
const combinedTagsSpread = newTagsSpread.concat(...cloudPlaySearchTags,...newTags);
console.log("Combined Array using spread syntax... :",combinedTagsSpread);
console.log(` ------- Combining Arrays end --------- `);


