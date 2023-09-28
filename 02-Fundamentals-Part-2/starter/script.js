"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");

// const interface = "Audio"; // interface is a reserved word


// Functions
function logger() {
	console.log("My name is Tom");
}

logger(); // calling / running / invoking function
logger();
logger();

function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0)); // this is the same as above

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYear) {
	return 2023 - birthYear;
}
const age1 = calcAge1(1988);

// Function expression
const calcAge2 = function (birthYear) {
	return 2023 - birthYear;
};
const age2 = calcAge2(1988);

console.log(age1, age2);


// Arrow Functions
const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(1988);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2023 - birthYear;
	const retirement = 65 - age;
	return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1988, `Tom`));


// Functions Calling Other Functions
function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);

	const juice = `Juice with ${applePieces} pices of apple and ${orangePieces} pieces of orange.`;
	return juice;
}

console.log(fruitProcessor(2, 3));


// Reviewing Functions
const calcAge = function (birthYear) {
	return 2023 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
	const age = calcAge(birthYear);
	const retirement = 65 - age;

	if (retirement > 0) {
		console.log(`${firstName} retires in ${retirement} years.`);
		return retirement;
	} else {
		console.log(`${firstName} has already retired.`);
		return -1;
	}
};

console.log(yearsUntilRetirement(1988, "Tom"));
console.log(yearsUntilRetirement(1940, "Mike"));


// Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]); // last element

friends[2] = "Jay";
console.log(friends);

const firstName = "Tom";
const tom = [firstName, "Reset", 2023 - 1988, "programmer", friends];
console.log(tom);

// Exercise
const calcAge = function (birthYear) {
	return 2023 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
	calcAge(years[0]),
	calcAge(years[1]),
	calcAge(years[years.length - 1]),
];
console.log(ages);
*/

// Basic Array Operations (Methods)
// Add elements
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay"); // add element to the end of the array
console.log(friends);
console.log(newLength);

friends.unshift("John"); // add element to the beginning of the array
console.log(friends);

// Remove elements
friends.pop(); // remove last element from the array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // remove first element from the array
console.log(friends);

friends.push(23);
console.log(friends.indexOf("Steven")); // returns index of the element
console.log(friends.indexOf("Bob")); // returns -1 if element is not in the array
console.log(friends.includes(23)); // returns true if element is in the array

if (friends.includes("Steven")) {
	console.log("You have a friend called Steven");
}
