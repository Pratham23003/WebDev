//get dom elements
const cards = document.querySelectorAll('.card');
const lists = document.querySelectorAll('.list');

for(const card of cards){
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
    console.log(card);
}
for(const list of lists){
    list.addEventListener("dragover", dragOver);
    list.addEventListener("dragenter", dragEnter);
    list.addEventListener("dragleave", dragLeave);
    list.addEventListener('drop', dragDrop);   
}
function dragStart(event){
    console.log(`Drag Started : ${event}`);
    event.dataTransfer.setData('text/plain', event.target.id);

}
function dragEnd(event){
    console.log(`Drag Ended : ${event}`);
}
function dragOver(event){
    //by default browsers dont allow you to to drop elements onto other elements.
    //so we need to include the preventDefault() method to prevent browser's default behaviour.
    event.preventDefault();
    console.log(`Drag Over Event : ${event}`);
}
function dragEnter(event){
    //by default browsers dont allow you to to drop elements onto other elements.
    //so we need to include the preventDefault() method to prevent browser's default behaviour.
    event.preventDefault();
    console.log(this);
    this.classList.add('over');
}
function dragLeave(event){
    this.classList.remove('over')
}
function dragDrop(event){
    const id = event.dataTransfer.getData('text/plain')
    const card = document.getElementById(id);
    this.appendChild(card);
    this.classList.remove('over');
}