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


// Introduction to Objects
const tom = {
	firstName: "Tom",
	lastName: "Reset",
	age: 2023 - 1988,
	job: "programmer",
	friends: ["Michael", "Peter", "Steven"],
};
console.log(tom);

// Dot vs. Bracket Notation
console.log(tom.lastName); // dot notation
console.log(tom["lastName"]); // bracket notation

const nameKey = "Name";
console.log(tom["first" + nameKey]); // bracket notation takes expressions

// const interestedIn = prompt(
// 	"What do you want to know about Tom? Choose between firstName, lastName, age, job and friends"
// );

// if (tom[interestedIn]) {
// 	console.log(tom[interestedIn]);
// } else {
// 	console.log(
// 		"Wrong request! Choose between firstName, lastName, age, job and friends"
// 	);
// }

// Adding New Properties
tom.location = "Norway";
tom["twitter"] = "@ttowntomtoo";
console.log(tom);

// Challenge
// "Tom has 3 friends, and his best friend is called Michael"
console.log(
	`${tom.firstName} has ${tom.friends.length} friends, and his best friend is called ${tom.friends[0]}`
);


// Object Methods
const tom = {
	firstName: "Tom",
	lastName: "Reset",
	birthYear: 1988,
	job: "programmer",
	friends: ["Michael", "Peter", "Steven"],
	hasDriversLicense: true,

	// a function within an object is called a method
	// calcAge: function (birthYear) {
	// 	return 2023 - birthYear;
	// },

	// calcAge: function () {
	// 	return 2023 - this.birthYear;
	// },

	calcAge: function () {
		this.age = 2023 - this.birthYear;
		return this.age;
	},

	getSummary: function () {
		return `${this.firstName} is a ${this.calcAge()}-year old ${
			this.job
		}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
	},
};
// console.log(tom.calcAge(1988));
// console.log(tom["calcAge"](1988));
console.log(tom.calcAge());

console.log(tom.age);
console.log(tom.age);
console.log(tom.age);

// Challenge
// "Tom is a 35-year old programmer, and he has a driver's license"
console.log(tom.getSummary());


// Iteration: The for Loop
// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
	console.log(`Lifting weights repetition ${rep}`);
}

// Looping Arrays, Breaking and Continuing
const tom = [
	"Tom",
	"Reset",
	2023 - 1988,
	"programmer",
	["Jerry", "Spike", "Tyke"],
];

const types = [];

for (let i = 0; i < tom.length; i++) {
	console.log(tom[i], typeof tom[i]);

	// Fill types array
	// types[i] = typeof tom[i];
	types.push(typeof tom[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
	ages.push(2023 - years[i]);
}
console.log(ages);

// Continue and Break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < tom.length; i++) {
	if (typeof tom[i] !== "string") continue; // skip the current iteration

	console.log(tom[i], typeof tom[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < tom.length; i++) {
	if (typeof tom[i] === "number") break; // break the loop

	console.log(tom[i], typeof tom[i]);
}


// Looping Backwards and Loops in Loops
const tom = [
	"Tom",
	"Reset",
	2023 - 1988,
	"programmer",
	["Jerry", "Spike", "Tyke"],
];

// Looping Backwards
for (let i = tom.length - 1; i >= 0; i--) {
	console.log(i, tom[i]);
}

// Loops in Loops
for (let exercise = 1; exercise < 4; exercise++) {
	console.log(`----- Starting exercise ${exercise}`);

	for (let rep = 1; rep < 6; rep++) {
		console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
	}
}
*/

// The while Loop
// for (let rep = 1; rep <= 10; rep++) {
// 	console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
// 	console.log(`WHILE: Lifting weights repetition ${rep}`);
// 	rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	if (dice === 6) console.log("Loop is about to end...");
}
