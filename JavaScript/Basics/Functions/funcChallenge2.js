// Imagine you have a list of file names and you want to categorize them.
// Create a function getFileCategory that:
// Takes a fileName string as an argument (e.g., "my_song.mp3", "vacation_video.mp4", "holiday_pic.jpeg", "document.pdf").
// It should return a string indicating the category based on the file extension.
// .mp3, .wav, .flac: "Audio"
// .mp4, .mov, .avi: "Video"
// .jpg, .jpeg, .png, .gif: "Image"
// Any other extension: "Other"

const getFileCategory = (fileName) => {
    let fileNameLowerCase = (fileName.toLowerCase());

    if  (fileNameLowerCase.endsWith(".mp3") ||
        fileNameLowerCase.endsWith(".acc") ||
        fileNameLowerCase.endsWith(".flac") ||
        fileNameLowerCase.endsWith (".ogg")){
        return("Audio");
    }
    
    else if (fileNameLowerCase.endsWith(".mp4") ||
            fileNameLowerCase.endsWith(".mkv") ||
            fileNameLowerCase.endsWith(".mov") ||
            fileNameLowerCase.endsWith (".avi")){
        return ("Video");
    }

    else if (fileNameLowerCase.endsWith(".jpg") ||
            fileNameLowerCase.endsWith(".png") ||
            fileNameLowerCase.endsWith (".jpeg") ||
            fileNameLowerCase.endsWith(".gif")){
        return ("Image");
    }

    else{
        return "Other";
    }
}
//Test Cases
console.log("--- File Categorization ---");
console.log(`"Summer_Jam.mp3": ${getFileCategory("Summer_Jam.mp3")}`);     // Expected: Audio
console.log(`"Family_Vacation.MP4": ${getFileCategory("Family_Vacation.MP4")}`); // Expected: Video
console.log(`"profile_photo.PNG": ${getFileCategory("profile_photo.PNG")}`); // Expected: Image
console.log(`"report.pdf": ${getFileCategory("report.pdf")}`);         // Expected: Other
console.log(`"mystery_file": ${getFileCategory("mystery_file")}`);       // Expected: Other (no extension)
console.log(`"audio.ogg": ${getFileCategory("audio.ogg")}`);             // Expected: Other (not in your current list, but shows it falls through)
console.log(`"document.txt": ${getFileCategory("document.txt")}`);       // Expected: Other
