let heading = document.getElementById("body");
console.log(heading);

let username = window.prompt("Enter username : ");

if (username === "Carol" && "carol") {
  heading.innerHTML = `<h1>Hello ${username}</h1><p>Our feelings for you haven't changed, Carol. But after everything that's happened, we just need a little space</p>`;
}
else heading.innerHTML = `<h1> Hello ${username} </h1>`;
