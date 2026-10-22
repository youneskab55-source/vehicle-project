interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void; // an interface only declares the method; classes provide the behaviour
}

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

const myCar = new Car("Toyota", "Corolla", 2022);
console.log(`${myCar.year} ${myCar.make} ${myCar.model}`);
myCar.start();
