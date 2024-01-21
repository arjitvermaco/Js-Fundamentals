// Equality Operator (== and ===)
const age = '18';
if (age == 18) {
    console.log('You are allowed to vote!!');
}

if (age === 18) {
    console.log('You are allowed to drive!!');
} else {
    console.log('You are not allowed to drive!!');
}
//  ==  "Only matches the values"
// === "Matches values and also data type "

let myAge = 32;
if (myAge === 32) {
    console.log("You are 32!!")
}

// let userAge = Number(prompt("Enter your age"));

// console.log(typeof userAge)

// // console.log(" YOur age is: ",userAge)
// if (userAge === 32) {
//     console.log("You are 32!!")
// } else if (userAge < 32) {
//     console.log("You are younger!!")
// } else {
//     console.log("You are older!!")
// }

// // if(userAge !== 32){

// // }

// if (userAge !== 32) console.log("You are not 32!!")

//Logical Operators && and ||

const hasDriversLicence = true;
const hasCar = false;

if (hasDriversLicence && hasCar) {
    console.log("You are allowed to drive!!")
} else {
    console.log("You are not allowed to drive!!")
}


if (hasDriversLicence || hasCar) {
    console.log("You are allowed to drive!!")
} else {
    console.log("You are not allowed to drive!!")
}

//SwitchCase
const day = 'saturday';

switch (day) {
    case 'monday':
        console.log("You have to work!!");
        break;
    case 'tuesday':
        console.log("You have to work!!");
        break;
    case 'wednesday':
        console.log("You have to work!!");
        break;
    case 'thursday':
        console.log("You have to work!!");
        break;
    case 'friday':
        console.log("You have to work!!");
        break;
    case 'saturday':
        console.log("Its weekend");
        break;
    case 'sunday':
        console.log("Its weekend");
        break;
    default:
        console.log("Enter a valid day!!");
}

//Ternary Operator

const userAge = 14;
// if(userAge === 18){
//     console.log("You can drive!!")
// }else{
//     console.log('You cannot drive!!')
// }

// userAge === 23? console.log("You can drive!!") : console.log('You cannot drive!!');

let canDrive = userAge >= 18 ? "You can drive" : "You cannot drive";

console.log("Can a user drive??", canDrive)

//Functions 

function logMyName() {
    console.log("My name is Arjit!!");
}
//envoke / run / execute \ calling
logMyName();
logMyName();
logMyName();
logMyName();


function logAnyName(userName, userAge) {
    console.log(typeof userName)
    console.log(`My Name is ${userName} and my age is ${userAge}`);
}



logAnyName(0, "Twenty Five")

//Function declaration and Function expression

// //Function declaration
// function calculateAge1(birthYear) {
//     console.log(`Your age is ${2024 - birthYear}`)
// }

//Function expression
// const calculateAge2 = function (birthYear) {
//     console.log(`Your age is ${2024 - birthYear}`)
// }


// console.log(typeof calculateAge2)
// calculateAge1(1990);
// calculateAge2(1993);

//Function can return value

// function addNumbers(num1, num2) {
//     return num1 + num2;
//     console.log("hello this is function")
// }
// addNumbers(10, 20)

// let sum = addNumbers(10, 20);
// console.log(`Sum is ${sum}`);


//Arrow Function

// const addNumbers3 = ()=>{

// }

// const addNumbers3 = (num1,num2)=>{
//     return num1 + num2;
// }

//if function has only one line and that is return statement
//  youi can remove return keyword and {}
const addNumbers3 = (num1, num2) => num1 + num2;

let sum = addNumbers3(10, 20);
console.log(sum)

//example of function calling another function

const returnSquare = (num) => {
    return num * num;
}

const addSquares = (num1, num2) => {
    const sum = num1 + num2;
    const square = returnSquare(sum);
    return square;
}

//Arrays => Ordered collection of values

// let student1 = "Abdul"
// let student2 = "Aman"
// let student3 = "Amena"

let students = ["Abdul", "Aman", "Amena", "Arjit"]
// console.log(students)

// let students2 = new Array("Abdul", "Aman", "Amena");

// console.log(students[0])
// console.log(students[1])
// console.log(students[2])
// //Length of an array
// console.log(students.length)

// console.log(students[students.length - 1])

// students[2] = "Ankit"
// console.log(students)

//Array Operations
//Add to end of array
let newLength = students.push("Ankit")
console.log(newLength)
console.log(students)

//Add to begining of array
let newLength2 = students.unshift("Raj")
console.log(newLength2)
console.log(students)

//Remove elements
//To remove from end of an array
let removedStudent = students.pop()
console.log(removedStudent)

//To remove from beginning of an array
let removedStudent2 = students.shift();
console.log(removedStudent2)


console.log(students.indexOf("Aman"))
console.log(students.indexOf("Amena"))
console.log(students.indexOf("Arjit"))

if (students.indexOf("Arjit") == -1) {
    console.log("No Arjit in array")
} else {
    console.log("There is Arjit in array")
}
//includes

console.log(students.includes("Aman"))
console.log(students.includes("Arjit"))
console.log(students.includes("Ketan"))


//Objects

// let aboutArjit = ["Arjit Verma", 32, "Developer and Trainer",
//     "India"]

let aboutArjit = {
    firstName : "Arjit",
    lastName : "Verma",
    age:32,
    profession:"Developer and Trainer",
    country:"India",
    friends:["Raj", "Ankit", "Ketan"],
    canDrive:true
}
// Dot notation
console.log(aboutArjit)
console.log(aboutArjit.age)
console.log(aboutArjit.friends.length)

//Bracket Notation
let nameKey = "Name";
console.log(aboutArjit['first'+nameKey])
console.log(aboutArjit['firstName'])


console.log(aboutArjit['last'+nameKey])
console.log(aboutArjit["age"])




