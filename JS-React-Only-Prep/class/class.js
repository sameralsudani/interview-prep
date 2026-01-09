class Pizza {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType; // property
    this.size = pizzaSize; // property
    this.crust = "original"; // property
  }

  bake() {
    // method
    console.log(`Baking a ${this.size} ${this.type} ${this.crust} pizza`);
  }
}

const myPizza = new Pizza("pepperoni", "small");
myPizza.type = "supreme"; // it's not recommended to access this property like that
myPizza.bake(); // Baking a small supreme original pizza
console.log(myPizza.type); //supreme

///////////////////////////////

class Pizza2 {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType; // property
    this.size = pizzaSize; // property
    this.crust = "original"; // property
  }

  get pizzaCrust() {
    // getter
    return this.crust;
  }

  set pizzaCrust(pizzaCrust) {
    // setter
    this.crust = pizzaCrust;
  }

  bake() {
    // method
    console.log(`Baking a ${this.size} ${this.type} ${this.crust} pizza`);
  }
}

const myPizza2 = new Pizza2("pepperoni", "small");
myPizza2.pizzaCrust = "thin";
myPizza2.bake(); // Baking a small pepperoni thin pizza
console.log(myPizza2.pizzaCrust); // thin

///////////////////////////////

class Pizza3 {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType; // property
    this.size = pizzaSize; // property
    this.crust = "original"; // property
    this.toppings = [];
  }

  getPizzaCrust() {
    // method is easier to read that a getter
    return this.crust;
  }

  setPizzaCrust(pizzaCrust) {
    // method is easier to read that a setter
    this.crust = pizzaCrust;
  }

  getToppings() {
    return this.toppings;
  }
  setToppings(topping) {
    this.toppings.push(topping);
  }
  bake() {
    // method
    console.log(`Baking a ${this.size} ${this.type} ${this.crust} pizza`);
  }
}

const myPizza3 = new Pizza3("pepperoni", "small");
myPizza3.setPizzaCrust("thin");
myPizza3.bake(); // Baking a small pepperoni thin pizza
console.log(myPizza3.getPizzaCrust()); // thin
myPizza3.setToppings("sausage");
myPizza3.setToppings("olives");
console.log(myPizza3.getToppings()); // [ 'sausage', 'olives' ]
