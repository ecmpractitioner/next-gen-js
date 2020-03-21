let a = 10;
const b = 20;

console.log(a);
console.log(b);
//b=30;
//console.log("new b is" +b);

let x = 30;
let y = 30;
console.log(x);
console.log(y);

/**
 * Arrow Functions
 */

//normal function

function printMyName(name) {
    console.log("Printing name through normal function " + name);
}

printMyName("Manju");

//arrow function

const printName = (name) => {
    console.log("Printing name through arrow funtion " + name);
}

printName("Praveena");

const printUserDetails = (name, age) => {
    console.log("Name is " + name + " age is " + age);
}

printUserDetails("Manjunatha", 35);

const multiply = number => number * 2;
console.log(multiply(3));

const printEmpNameFormat2 = (name) => {

    console.log(name + " printed in printEmpNameFormat2()");

}

console.log(printEmpNameFormat2("Anil"));

/**
 * classes ES6
 */

class Human {
    constructor() {
        this.gender = 'male';
    }
}
class Person extends Human {
    constructor() {
        super();
        this.name = "manju from class"
    }
    printPersonDetails() {
        console.log("Person mae is " + this.name + " and the gender is " + this.gender);
    }
}

const person = new Person();
person.printPersonDetails();

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printUserDetails() {
        console.log("User name is " + this.name + " and age is " + this.age);
    }
}

const user = new User("Manju", 37);
user.printUserDetails();

/**
 * Classes in ES7
 */

class Animal {
    name;

}

class Dog extends Animal {

    name = 'Dog';
    sound = 'Bark';
    printAnimalDetail = () => {
        console.log(this.name + " " + this.sound);
    }

}

const dog = new Dog();
dog.printAnimalDetail();

/**
 * Spread/Rest operator
 */

const arry = [0, 1, 2, 3, 4];
console.log(arry);

const newArry = [...arry];
console.log("new array is " + newArry);

const obj = {
    prop: 5
}
console.log(obj);

const newObj = {
    ...obj,
    newProp: 10,
    prop: 15
};
console.log(newObj);

const filter=(...args)=>{
    return args.filter(el=>el===1);
};


console.log(filter(1,2,3,4));

const sortArr=(...args)=>{
    return args.sort().reverse();
}

console.log(sortArr(1,4,3,5));

/**
 * Destructring
 */

 const arr1=['manju','praveena','vaishnav','test'];
 [p,q,r]=arr1;
 console.log(p);
 console.log(q);
 console.log(r);

 const destructObj={
    name:'manju',
    age:37
 };

 const {userName}=destructObj;
 console.log(userName);