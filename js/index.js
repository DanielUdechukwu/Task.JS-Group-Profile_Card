
let bg = document.querySelector('.card');
bg.style.color = '#000';
document.getElementById("groupID").innerHTML = "Group 9: Demeter";
document.getElementById("heading").innerHTML = "KodeCamp";
document.getElementById("heading").style.color = "#fff";
document.getElementById("groupID").style.color = "#fff";



// Question 2: Array

let team = ['Jaybee', 'Danny', 'Spaghettiii', 'Francis', 'Chidimma', 'Smartlify', 'I_Am_DanielIkpe']

console.log(team[1]);


// Question 3: Object

let me = {
  firstName: 'Daniel',
  lastName: 'Udechukwu',
  bestMovie: 'Avengers End-game',
  bestFood: 'Fufu and Egusi',
  complexion: 'Medium dark',
  birthMonth: 'October',
  state: 'Anambra',
  groupID: 'Demeter',
}

console.log(me.bestMovie);


// Question 4: Variable concatenation

let noun = 'Abuja';
let verb = 'swimming';
let adjective = 'tired';

console.log("I was in " + noun + " some weeks ago, and I went " + verb + ". I got " + adjective + " after 2 hours.")


// Question 5: Modulo function

function remainder(input1, input2){
  return input1 % input2;
}


// Question 6: Quadratic Equation
// Formula: x = -b +- sqrt(b^2 - 4ac)
//                      2a

let a = 3;
let b = 5;
let c = -7;
let z = ((b ** 2) - (4 * a * c));
console.log(z);
let squareRoot = Math.sqrt(z);
console.log(squareRoot);
let x = ((-b) + squareRoot) / 2*a;
console.log(x);


// Question 7: const concatenation

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

console.log("My " + myNoun + " saw a " + myAdjective + " racoon and " + myVerb + " towards it as " + myAdverb + " as possible.");


// Question 8: Area of a circle

function areaOfCircle(radius){
  const pi = 3.142;

  return pi * (radius ** 2);
}
console.log("Area of circle with radius 9cm = " + areaOfCircle(9));


// Question 9:

let principal = 8200;     //Naira
let rate = 17.5;         //in percentage
let time = 2.6;         //in years

let simpleInterest = (principal * rate * time) / 100;

console.log("Simple interest = ₦" + simpleInterest);
console.log("Amount = ₦" + (simpleInterest + principal));


// Question 10: Modulo

let first = 10;
let second = 4;

let mod = first % second;

console.log("The remainder of 10 % 4 = " +mod);


// Question 11: BMI calculator

// Test case 1
let meritCase1 = {
  height: 1.69,
  weight: 78
}

let nutJobCase1 = {
  height: 1.95,
  weight: 92
}

let meritCase1BMI = (meritCase1.weight) / meritCase1.height ** 2;
console.log("Test case 1");
console.log("Merit's BMI = " + meritCase1BMI);

let nutJobCase1BMI = (nutJobCase1.weight) / nutJobCase1.height ** 2;
console.log("NutJob's BMI = " + nutJobCase1BMI);

let finalCheck = nutJobCase1BMI > meritCase1BMI;
console.log("For test case 1, is nutJob's BMI greater than Merit's BNI? =  " + finalCheck);


// Test case 2

let meritCase2 = {
  height: 1.76,
  weight: 85
}

let nutJobCase2 = {
  height: 1.88,
  weight: 95
}

let meritCase2BMI = (meritCase2.weight) / meritCase2.height ** 2;
console.log("Test case 2");
console.log("Merit's BMI = " + meritCase2BMI);

let nutJobCase2BMI = (nutJobCase2.weight) / nutJobCase2.height ** 2;
console.log("NutJob's BMI = " + nutJobCase2BMI);

let finalCheck2 = nutJobCase2BMI > meritCase2BMI;
console.log("For test case 2, is nutJob's BMI greater than Merit's BMI? =  " + finalCheck2);

let color = 'red';
let displayColor = true;

let show = displayColor ? 'red' : 'blue';

console.log(show);