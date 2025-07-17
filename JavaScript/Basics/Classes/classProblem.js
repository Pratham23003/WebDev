// 1. Create a Base MediaItem Class:
// * Define a class named MediaItem.
// * Its constructor should take id, title, and type as arguments.
// * Initialize these properties.
// * Add a property playbackCount initialized to 0.
// * Add a method incrementPlayback() that increments playbackCount and console.logs the new count.

// 2. Create Derived Classes Video and Audio:
// * Define a Video class that extends MediaItem.
// * Its constructor should take id, title, duration, and resolution.
// * Call super() with the appropriate parent arguments (id, title, type which should be hardcoded as "video").
// * Initialize duration and resolution properties.
// * Add a new method getResolution() that returns the resolution property.
// * Define an Audio class that extends MediaItem.
// * Its constructor should take id, title, artist, and album.
// * Call super() with the appropriate parent arguments (id, title, type which should be hardcoded as "audio").
// * Initialize artist and album properties.
// * Add a new method getArtistAndAlbum() that returns a string like "Artist: [artist], Album: [album]".

// 3. Create Instances and Test:
// * Create an instance of Video (e.g., myVideo = new Video(...)).
// * Create an instance of Audio (e.g., mySong = new Audio(...)).
// * console.log both instances to see their properties.
// * Call myVideo.incrementPlayback() a couple of times. console.log myVideo.playbackCount.
// * Call mySong.incrementPlayback().
// * console.log myVideo.getResolution().
// * console.log mySong.getArtistAndAlbum().

class MediaItem{
    id;
    title;
    type;
    playbackCount;

    constructor(id,title,type){
        this.id = id;
        this.title = title;
        this.type = type;
        this.playbackCount = 0;
    }

    incrementPlayback(){
        this.playbackCount += 1;
        console.log(`${this.id} Playback count :${this.playbackCount}`);
    }
};
// let obj1 = new MediaItem(1,"interstellar.mkv","video");
// console.log(obj1);

class Video extends MediaItem{
    duration;
    resolution;

    constructor(id,title,duration,resolution){
        super(id, title, "video");
        this.duration = duration;
        this.resolution = resolution;
    }

    getResolution(){
        return this.resolution;
    }
};

class Audio extends MediaItem{
    artist;
    album;

    constructor(id, title, artist, album){
        super(id,title,"audio");
        this.artist = artist;
        this.album = album;
    }

    getArtistAndAlbum(){
        return (`Artist :${this.artist}, Album :${this.album}`);
    }
}


//test cases created by gemini
console.log("\n--- Testing MediaItem, Video, and Audio Classes ---");

// 1. Create Instances:
console.log("\n--- Creating Instances ---");
const myVideo = new Video(
    "vid001",                   // id
    "Interstellar Trailer",     // title
    180,                        // duration (seconds)
    "1920x1080"                 // resolution
);

const mySong = new Audio(
    "aud005",                  // id
    "Bohemian Rhapsody",       // title
    "Queen",                   // artist
    "A Night at the Opera"     // album
);

const myImage = new MediaItem(
    "img001",
    "Mountain View",
    "image"
);


// 2. Console.log instances to see their properties:
console.log("My Video Object:", myVideo);


console.log("My Song Object:", mySong);


console.log("My Image Object:", myImage);

// 3. Test Methods:
console.log("\n--- Testing Methods ---");

// Test Video methods
myVideo.incrementPlayback(); // Should log: 'vid001 playback count: 1'
myVideo.incrementPlayback(); // Should log: 'vid001 playback count: 2'
console.log("My Video Playback Count:", myVideo.playbackCount); // Expected: 2
console.log("My Video Resolution:", myVideo.getResolution());   // Expected: 1920x1080

// Test Audio methods
mySong.incrementPlayback(); // Should log: 'aud005 playback count: 1'
console.log("My Song Playback Count:", mySong.playbackCount); // Expected: 1
console.log("My Song Artist & Album:", mySong.getArtistAndAlbum()); // Expected: Artist: Queen, Album: A Night at the Opera

// Test base class method on a base instance
myImage.incrementPlayback(); // Should log: 'img001 playback count: 1'
console.log("My Image Playback Count:", myImage.playbackCount); // Expected: 1

console.log("--- End of Class Test Cases ---");