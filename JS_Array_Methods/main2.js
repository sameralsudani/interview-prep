const items = [
  {
    name: "Bike",
    price: 100,
  },
  {
    name: "TV",
    price: 200,
  },
  {
    name: "Album",
    price: 10,
  },
  {
    name: "Book",
    price: 5,
  },
  {
    name: "Phone",
    price: 500,
  },
  {
    name: "Computer",
    price: 100,
  },
];

// items.filter(): filter/get all items with price is less or equal 100  and store in a new array(filterdItem)
// check evey item in this array and add it to the new array if item.price is less or equal 100
const filterdItem = items.filter((item) => {
  return item <= 100; // return a condition
});

console.log("filterdItem", filterdItem);
// [
//     {
//       name: "Bike",
//       price: 100,
//     },

//     {
//       name: "Album",
//       price: 10,
//     },
//     {
//       name: "Book",
//       price: 5,
//     },

//     {
//       name: "Computer",
//       price: 100,
//     },
//  ];

// items.map(): create a new array of item.name and store in a variable (itemName)
const itemName = items.map((item) => {
  return item.name; // reurn what we want in a new array
});

console.log("itemName", itemName);

//  ["Bike","TV", "Album", "Book","Phone","Computer"]

// items.find(): find/get first item with name equal Book and store/return in a variable (foundName)
const foundName = items.find((item) => {
  return item.name === "Book"; // reurn a condition
});

console.log("foundName", foundName);

//  {
//     name: "Book",
//     price: 5,
//  }

// items.forEach(): it do create or return anythings
items.forEach((item) => {
  console.log(item.price); // we can work with every item in items array =>
  // 100
  // 10
  // 5
  // 500
  // 100
});

// items.some(): Check if some/any of items in this array has a price lass or equal $100 (price <= 100) then store/return a ture in hasInexpensiveItems esle false
const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100; // reurn a condition
});
console.log(hasInexpensiveItems); // since we have item lass or equal 100 => true

const hasInexpensiveItems2 = items.some((item) => {
  return item.price <= 0; // reurn a condition
});
console.log(hasInexpensiveItems2); // since we don't have lass or equal 0 => false

// items.every(): Check if every/all items in this array has a price lass or equal $100 (price <= 100) then store/return a ture in hasInexpensiveItems esle false
const hasInexpensiveItems3 = items.every((item) => {
  return item.price <= 100; // reurn a condition
});

console.log(hasInexpensiveItems); // since not every/all items are lass or equal 100 => false

const hasInexpensiveItems4 = items.every((item) => {
  return item.price <= 1000; // reurn a condition
});

console.log(hasInexpensiveItems4); // since  every/all items are lass or equal 1000 => true

// items.reduce(): reduce/add items into a total and store/return in a vairable (total)
//
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal; // runs this on every single item in array
}, 0); // 0 is start/initial currentTotal (on first iteration currentTotal=0)

console.log(total); // 1840
