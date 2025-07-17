//classes

class Human{
    //properties
    age = 19; //by default data members as public but if you want to make it private 
    wt = 70;  //use #before declaration
    #ht = 170;// now height(ht) is pvt.

    //behaviour
    walking(){
        console.log("I am walking");
    }

    running(){
        console.log("Running");
    }

    sleeping(){
        console.log("Sleeping");
    }

    eating(){
        console.log("Eating");
    }
    //the pvt data member can only be accessed inside the class
    printHeight(){
        console.log(this.#ht);
    }
};
let obj = new Human();
console.log(obj);
console.log(obj.age);
obj.walking();
console.log(typeof(Human));
// console.log(obj.ht); //undefined cuz ht is pvt