// Imagine you have an array of file names (strings).
// Create a function formatFileName that takes a raw file name string (e.g., "  my_awesome_video.mp4  ") and returns a cleaned-up version (e.g., "My awesome video.mp4").
// It should trim whitespace.
// Replace underscores _ with spaces.
// Test this function with a few different messy filenames.
const formatFileName = (rawFileName) => {
    let trimmedFile = rawFileName.trim();
    let replacedUnderscore = trimmedFile.replaceAll("_"," ");

    console.log("");
}
formatFileName("  my_awesome_video.mp4 ");

