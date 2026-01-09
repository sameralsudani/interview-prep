class Pizza {
  constructor(pizzaSize) {
    this.size = pizzaSize; // property
    this.crust = "original"; // property
  }

  getPizzaCrust() {
    return this.crust;
  }

  setPizzaCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }

  bake() {
    console.log(`Baking a ${this.size} ${this.type} ${this.crust} pizza`);
  }
}

class SpecialPizza extends Pizza {
  constructor(pizzaSize) {
    super(pizzaSize);
    this.type = "The works";
  }

  slice() {
    console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
  }
}

const mySpecialty = new SpecialPizza("meduim");
mySpecialty.slice(); // Our The works meduim pizza has 8 slices
