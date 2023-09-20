console.log("------------- ASSIGNMENT 1: -------------");

// Lectuer 1. Values and Variables
const country = "Norway";
const continent = "Europe";
let population = 5.4;

console.log(
	country +
		" is in " +
		continent +
		" and has a population of " +
		population +
		" million people."
);

// Lecture 2. Data Types
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Lecture 3. let, const and var
language = "Norwegian";

// Lecture 4. Basic Operators
population / 2; // 2.7
population++; // 6.4
population > 6; // false
population < 33; // true
const descrption =
	country +
	" is in " +
	continent +
	", and its " +
	population +
	" million people speak " +
	language;
console.log(descrption);

// Lecture 5. Strings and Template Literals
const descriptionNew = `${country} is in ${continent}, and it's ${population} million peaople speak ${language}.`;
console.log(descriptionNew);

// Lecture 6. Taking Decisions: if / else Statements
if (population > 33) {
	console.log(`${country}'s population is above average.`);
} else {
	console.log(`${country}'s population is below average.`);
}

// Lecture 7. Type Conversion and Coercion
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // "617"
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

// Lecture 8. Equality Operators: == vs. ===
// const numNeighbours = Number(
// 	prompt("How many neighbour countries does your country have?")
// );
// if (numNeighbours === 1) {
// 	console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
// 	console.log("More than 1 border");
// } else {
// 	console.log("No borders");
// }

// Lecture 9. Logical Operators
if (language === "English" && population < 50 && !isIsland) {
	console.log(`You should live in ${country} :)`);
} else {
	console.log(`${country} does not meet your criteria :(`);
}

// Lecture 10. The switch Statement
switch (language) {
	case "Chinese":
	case "Mandarin":
		console.log("MOST number of native speakers!");
		break;
	case "Spanish":
		console.log("2nd place in number of native speakers");
		break;
	case "English":
		console.log("3rd place");
		break;
	case "Hindi":
		console.log("Number 4");
		break;
	case "Arabic":
		console.log("5th most spoken language");
		break;
	default:
		console.log("Great language too :D");
}

// Lecture 11. The Conditional (Ternary) Operator
console.log(
	`${country}'s population is ${population > 33 ? "above" : "below"} average`
);
