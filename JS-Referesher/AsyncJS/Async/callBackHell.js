function getProfile(username, callBack){
    console.log(`getting profile : ${username}\n`);
    setTimeout(()=>{
        callBack({_id: 141003,username, age: 22, email: 'pratham@gmail.com'});
    },3000)
}
function getPosts(id, callBack){
    console.log(`getting posts ...\n`);
    setTimeout(()=>{
        callBack({_id: id, posts: ["Hiiii", "Morningggg", "Paris Tripp !!!"]});
    },3000)
}
function getSavedPosts(id, callBack){
    console.log('getting saved posts ...\n');
    setTimeout(()=>{
        callBack({_id: id, savedPosts: ["New year new me, Sigma sigma boii sigma boi, meme1.jpg"]});
    },3000)
}

getProfile("Pratham", (data)=>{
    console.log(data);
        
    getPosts(data._id, (posts)=>{
            console.log(posts);
    });

    getSavedPosts(data._id, function(savedPosts){
        console.log(savedPosts);
    })

})
