//creating an object
const songLibrary = {
    title: "At Peace",
    artist: "Karan Aujla and Ikky",
    duration: 173,
    genre: "Punjabi Hip-Hop",
    releaseYear: 2025,
    isFavourite: true,
    greet: function(){
        console.log(`You're listening to : ${songLibrary.title}`);
    }
};
console.log(songLibrary);
console.log(songLibrary.title);
songLibrary.greet();