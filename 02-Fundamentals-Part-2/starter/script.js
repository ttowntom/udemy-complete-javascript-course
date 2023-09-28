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
*/

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
