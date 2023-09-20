/* let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("TR");
console.log(23);

let firstName = "tTownTom";
console.log(firstName);
console.log(firstName);
console.log(firstName);


// 2. Data Types
console.log(typeof true);
console.log(typeof 23);
console.log(typeof "true");

let javascriptIsFun = true;
javascriptIsFun = "YES!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);

console.log(typeof null); // an object, but should be null

let age = 30 + 2;


// 3. let, const and var
let age = 30;
age = 31;

const birthYear = 1988;
// birthYear = 1990; // error
// const job; // error

var job = "programmer";
job = "teacher"; // var is old school, don't use it

lastName = "Tom";
console.log(lastName);


// 4. Basic Operators
// Math operators
const now = 2023;
const ageTom = now - 1988;
const ageSarah = now - 1993;
console.log(ageTom, ageSarah);

console.log(ageTom * 2, ageTom / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Tom";
const lastName = "Riddle";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators
console.log(ageTom > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1993 > now - 1988);


// 5. Operator Precedence
const now = 2023;
const ageTom = now - 1988;
const ageSarah = now - 1993;

console.log(now - 1993 > now - 1988);
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageTom + ageSarah) / 2;
console.log(averageAge);


// 6. Strings and Template Literals
const firstName = "Tom";
const job = "programmer";
const birthYear = 1988;
const year = 2023;

const tom =
	"I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!"; // old way
console.log(tom);

const tomNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`; // new way
console.log(tomNew);

console.log(`Just a regular string...`); // backticks are used for template literals

console.log(
	"String with \n\
multiple \n\
lines"
); // old way

console.log(`String
with 
multiple lines`); // new way


// 7. Taking Decisions: if / else Statements
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
	console.log("Sarah can start driving license training 🚗");
} else {
	const yearsLeft = 18 - age;
	console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1993;
let century; // must be declared outside of the if/else block
if (birthYear <= 2000) {
	century = 20;
} else {
	century = 21;
}
console.log(century);
*/

// 8. Type Conversion and Coercion
// Type Conversion
const inputYear = "1993";
console.log(inputYear + 18); // 199318
console.log(Number(inputYear) + 18); // 2011

console.log(Number("Tom")); // NaN
console.log(typeof NaN); // number

console.log(String(23), 23); // 23 "23"

// Type Coercion
console.log("I am " + 35 + " years old"); // I am 35 years old
console.log("23" - "10" - 3); // 10 (minus sign coerces strings to numbers)
console.log("23" + "10" + 3); // 23103 (plus sign coerces numbers to strings)
console.log("23" * "2"); // 46
