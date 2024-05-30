// Define an interface
interface Animal {
  methodOfInterface(): void;
}

// Define an abstract class
abstract class AbstractAnimal {
  abstract name: string;
  abstract sound: string;
  abstract makeSound(): void;
}

// Define a class that inherits from AbstractAnimal and implements Animal interface
class Dog extends AbstractAnimal {
  constructor(public name: string, public sound: string) {
    super();
  }

  makeSound(): void {
    console.log(`${this.name} barks: ${this.sound}`);
  }

  methodOfInterface(): void {
    console.log("methodOfInterface");
  }
}

// Define a function that enforces the first parameter to be of type AbstractAnimal
function interactWithAnimal(animal: AbstractAnimal) {
  // Cast the received object to the Animal interface
  const animalInterface: Animal = animal as unknown as Animal;

  // Now you can access the properties and methods of the Animal interface
  console.log(`Animal name: ${animal.name}`);
  console.log(`Animal sound: ${animal.sound}`);
  animal.makeSound();
  animalInterface.methodOfInterface();
}

// force the debugger to stops here
debugger;

// Create an instance of Dog
const myDog = new Dog("Buddy", "Woof");

// Call the function with an instance of Dog
interactWithAnimal(myDog);
