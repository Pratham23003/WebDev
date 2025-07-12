//modifying existing properties 
const album = {
    title : "Aate Di Chiri",
    artist : "Sharry Maan",
    releaseYear : 2012
};
console.log("Original Album : ", album);

//modifying using dot notation 
album.releaseYear = 2011;
console.log("After Modifying releaseYear :", album);

//modifying using bracket notation
album["artist"] = "Sharry Mann";
console.log("After modifying artist :", album);