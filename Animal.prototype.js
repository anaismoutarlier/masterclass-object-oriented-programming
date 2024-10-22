class Animal {
  name;
  constructor(name) {
    this.name = name;
  }

  eat() {
    return `${this.name} is eating.`;
  }
}

class Dog extends Animal {
  breed;
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    return `${this.name}: Arf!`;
  }
}

class Cat extends Animal {
  color;
  constructor(name, color) {
    super(name);
    this.color = color;
  }

  sleep() {
    return `${this.name} is sleeping.`;
  }
}

const animal = new Animal("Spots");
console.log(animal.name, animal.eat());

const dog = new Dog("Toto", "terrier");
const cat = new Cat("Garfield", "orange");

console.log(dog.name, dog.eat(), dog.bark());
dog.name = "Beethoven";
console.log(dog.name);
console.log(cat.name, cat.eat(), cat.sleep());
