"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
const myCar = new Car("Toyota", "Corolla", 2022);
console.log(`${myCar.year} ${myCar.make} ${myCar.model}`);
myCar.start();
