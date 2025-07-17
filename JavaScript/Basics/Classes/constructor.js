//constructors
class Car{
    //properties or data members
    brand;
    model;
    make;
    #engine_number; //pvt data member
    mileage;
    //using constructors to initialise data members
    constructor(passedBrand, passedModel, passedMake, passedEngine_number, passedMileage){
        this.brand = passedBrand;
        this.model = passedModel;
        this.make = passedMake;
        this.#engine_number = passedEngine_number;
        this.mileage = passedMileage;
    }
    get getEngineNumber(){
        return this.#engine_number;
    }
    set setEngineNumber(setEngineNumber){
        this.#engine_number = setEngineNumber;
    }
    printDetails(){
        console.log("Brand :",this.brand);
        console.log("Model :",this.model);
        console.log("Make :",this.make);
        console.log("Engine Number: ",this.#engine_number);
        console.log("Mileage :", this.mileage);
    }
}
const obj1 = new Car("Hyundai", "Creta N-Line", 2025, "Engine001_Hyundai", 20);
obj1.printDetails();
console.log(" ");

const obj2 = new Car("Toyota", "Land Cruiser 300", 2025, "Engine001_Toyota", 14.2);
obj2.printDetails();
console.log(" ");

const obj3 = new Car("Suzuki", "Swift Dzire", 2025, "Engine001_Suzuki",18.5);
console.log("Before Changing Engine Number :");
obj3.printDetails();

obj3.setEngineNumber = "Engine001_Suzuki_SDZ25";
console.log("After Updating Engine Number using setter :");
obj3.printDetails();
