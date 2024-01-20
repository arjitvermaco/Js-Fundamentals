console.log("Hello World from JS file!!!");

//Values and Variables

//Names 
//Places 
//Phone No
//Address
//Email
//List of users 
//List of products of your website

// Creating a variables 
// let , var and const 
let myName = "Arjit Verma";
let yourName = "Aman"
let myAge = 32;

// console.log(myName)
// console.log(yourName)
// console.log(myAge)

//How to name your variables 
let a = "someting";

//Snake Case
let snake_case = "someting";

//Camel Case
let camelCase = "someting";

let job1 = "Developer";
let job2 = "Teacher";

let firstJob = "Developer";

// console.log("My First Job was", firstJob)
let secondJob = "Teacher";

const PI = 3.14;
let MILES_PER_KILOMETER = 1.60934;

//Variables can re assigned - let and var

firstJob = "Tester"
// console.log("My First Job was", firstJob)

// console.log("Value of PI is", PI)

//Not allowed to do this . const can be assigned only once
// PI = 1.2;

// Data Types 
//Boolean - true or false
let hasDrivingLicense = true;//Boolean
let userName = "Ankit Singh";//String
let userAge = 24;//Number

console.log(typeof hasDrivingLicense);
console.log(typeof userName);
console.log(typeof userAge);

//Declare a variable but dont assign any value then value will be undefined
// And typeof will also be undefined
// let birthYear;

// console.log(typeof birthYear);
// console.log(birthYear);

//let vs var
//var is a keyword in javascript and it is not a
//variable but it is a variable declaration

var currentlyLearning  = "JavaScript";
currentlyLearning = "React"
console.log(currentlyLearning)
var currentlyLearning = "CSS"
console.log(currentlyLearning)


// let education = "btech";
// education = "MCA"


// let education = "MBA";


// Basic Operations 
//Math operations
let currentYear = 2024;
let birthYear = 1992;


console.log(currentYear - birthYear);
console.log(currentYear - 1992);


let currentAge = currentYear - birthYear;
console.log(currentAge);

console.log(currentAge*2)
console.log(currentAge/10)

console.log(2**3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 *2

let firstName = "Arjit"
let lastName = "Verma";
let fullName = firstName  + " " + lastName
console.log(fullName)

// Assignment Operator
let x = 10 + 15;


x = x + 10;
x+=10; // x = x +10
x*=4  // x = x * 4
x++ // x = x + 1
x-- // x = x - 1

console.log(x)

//Comparision Operator
let ageArjit = 32;
let ageAnkit = 14;

console.log(ageArjit > ageAnkit); // > , < , >=,<=
console.log(ageArjit >= 18);
console.log(ageAnkit >= 18);

//Operator Precedence
// let c,d = 10;

let num = (3+5)*2;
let num2 = 3+5*2;//13
console.log(num)
// Bracket 
// Off
// Division
// Multiply 
// Add 
// Sub

//Strings and Template Literals

let myFullName = "Arjit Verma";
let job = "Developer";
let myLocation = "India";
let myBirthYear = 1992;
//Hey My name is Arjit Verma . I am a Developer from India 
// and my age is 32 

console.log("My name is " + myFullName + " and I am a " + job + " from " + myLocation + " and my age is " + (2024 - myBirthYear));
console.log(`My name is ${myFullName} and I am a ${job} from ${myLocation} and my age is ${2024 - myBirthYear}`);


//Conditionals In JS
// if else 
let myCurrentAge = 16;

if(myCurrentAge >= 18){
    console.log("You are eligible to vote");
}else{
    console.log("You are not eligible to vote");
}

//Type Conversion and Type Coercion
// Type Conversion

let inputYear = '1991';
// console.log(inputYear + 100)
console.log(Number(inputYear) + 100)

console.log(typeof inputYear)
console.log(typeof Number(inputYear))

console.log(typeof String(100))

//Type Coercion - when js converts data type automatically

console.log("Hey My Name is Arjit and My age is " + 32);

console.log('23' + '12' - 10)
console.log('23'/'2')
console.log('23'*'2')


//Truthy and Flasy Values
// 0, "", null, undefined, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));


console.log(Boolean("Arjit"))
console.log(Boolean(-1))
console.log(Boolean('a'))


