// Object Oriented Programming 

// object: is an instantiated version of a class essentially it's a specific version of a class that has all the extra information filled in such as the different values for the properties 
const user = {
    email: 'ali@yahoo.com',
    name: 'ali',
    login() {
        console.log(this.email, 'has logged in')
    },
    logout() {
        console.log(this.email, 'has logged out')
    }
}
///////////////////

// If we need to create multiple versions of users or different users, we can use a class 
// class is a blueprint that defines all the properties and methods that our objects are going to have, but it doesn't actually give it any data or information, it's just a blueprint or holder for what our object is going to look like  

// Constructor: This is the method that is called when creating an object from a class. It is usually used to set all of the specific details of the object such as color in the house example.
class User {
    constructor(email, name) {
        this.email= email,
        this.name= name,
        this.score = 0
    }
    login(){
        console.log(this.email, 'has logged in')
    }
    logout() {
        console.log(this.email, 'has logged out')
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'score is now', this.score);
    }
}

const user1= new User( 'ali@yahoo.com','ali') 
console.log(user1) // User { email: 'ali@yahoo.com', name: 'ali', score: 0 }
console.log(user1.login()) // ali@yahoo.com has logged in
console.log(user1.updateScore()) // ali@yahoo.com score is now 1

const user2= new User('sarah@yahoo.com','sarah')
// user2= {
//     email: 'sarah@yahoo.com',
//     name: 'sarah',
// }
// console.log(user2.login()) // sarah@yahoo.com has logged in

// Class Inheritance

let users= [user1, user2]

class Admin extends User { // with extends User, Admin will inherit/get all User properties and methods instead of copying them from User and paste them into Admin
    deleteUser(user) {
        users= users.filter(u=>{
            return u.email != user.email;
        })
    }
}
const admin = new Admin('samer@yahoo.com', 'samer')
console.log(admin) // Admin { email: 'samer@yahoo.com', name: 'samer', score: 0 }

admin.deleteUser(user1)
console.log(users) // [ User { email: 'sarah@yahoo.com', name: 'sarah', score: 0 } ]
console.log(admin.login()) // samer@yahoo.com has logged in

class House {
    constructor(color) {  // constructor takes in all the parameters we want to put in the house when we create a new instance/object  of that house
        this.color = color // this is going to save color on the house object that we are creating 
    }

    getFurniture() {
        return 'sofa'
    }
}

const house1= new House('red')
const house2= new House('blue')

console.log(house1.color) // red
console.log(house1.getFurniture()) // sofa

console.log(house2.color) // blue
console.log(house2.getFurniture()) // sofa


// More examples 
class Rectangle {
    constructor(width, height, color) {
        this.width= width
        this.height= height
        this.color= color
    }

    getArea() {
        return this.width + this.height
    }
}

const rectangle1 = new Rectangle(5,3,'blue')
console.log(rectangle1.getArea()) //8 

// getters && setters 
class Square {
    constructor(width, height) {
        this.width= width
        this.height= height
        this.numberOfRequestForArea= 0
    }

    get area() {  // this is a getter, area ia just a normal method now
        this.numberOfRequestForArea++ // will be incremented by 1
        return this.width * this.height
    }

    set area (area) { // this is a getter, area ia just a normal method now
        this.width= Math.sqrt(area);
        this.height= Math.sqrt(area);
    }
}

let square = new Square(4,4)
console.log(square.area) // 16 :note that we don't need parentheses() with area
console.log(square.area) // 16 
console.log(square.area) // 16 
console.log(square.width) // 4  
console.log(square.numberOfRequestForArea) // 3 

square.area = 25 // we set the area to 25 here instead of 16
console.log(square.area) // 25  . note that we don't need parentheses() with area
console.log(square.width) // 5  


// static method also called helper method is a method which you define on a class but it's not actually part of the instantiated object, static method does not require an instance of the class, it's relevant to the class but it don't have an object bound tp it  
class Square2 {
    constructor(width, height) {
        this.width= width
        this.height= height
    }

    static isValidDimension(width, height) {
        return width=== height
    }

   
}

let square2= new Square2(8,8)
console.log(square2) // Square2 { width: 8, height: 8 }
console.log(Square2.isValidDimension(6,6)) // true
console.log(Square2.isValidDimension(6,7)) // false