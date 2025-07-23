const getAnchorTag = document.getElementById("anchor-tag");
console.log(getAnchorTag);

getAnchorTag.addEventListener("click", function (event) {
  event.preventDefault(); //prevents the default behaviour of the event
  getAnchorTag.textContent =
    "This Anchor Tag's default behaviour have been changed using JS.";
});
