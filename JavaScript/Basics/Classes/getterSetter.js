//to access/modify a private data member outside the class we can
//use getter and setter
class Human{
    //data members
    age = 20;
    wt = 70;
    #ht = 170;

    //behaviours or member functions
    get fetchHeight(){
        return this.#ht;
    }
    set modifyHeight(val){
        this.#ht = val;
        //setters dont return a value
    }
}
let object1 = new Human();
console.log("Entire Class : ",object1); //pvt datamember will still not be accessed 
console.log("Accessing Private Data Member using Get :",object1.fetchHeight);
// 
object1.modifyHeight = 160;
console.log("Modified pvt data member using Set :",object1.fetchHeight);