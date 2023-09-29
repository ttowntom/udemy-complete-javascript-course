console.log(`-----------
ASSIGNMENTS
-----------`);
// Functions
function describeCountry(country, population, capitalCity) {
	const description = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
	return description;
}

const usa = describeCountry("USA", 328, "Washington, D.C.");
const germany = describeCountry("Germany", 83, "Berlin");
const canada = describeCountry("Canada", 38, "Ottawa");

console.log(usa);
console.log(germany);
console.log(canada);

// Function Declarations vs. Expressions
function percentageOfWorld1(population) {
	return (population / 7900) * 100;
}

const usaPercentage = percentageOfWorld1(328);
const germanyPercentage = percentageOfWorld1(83);
const canadaPercentage = percentageOfWorld1(38);

console.log(usaPercentage, germanyPercentage, canadaPercentage);

const percentageOfWorld2 = function (population) {
	return (population / 7900) * 100;
};

const usaPercentage2 = percentageOfWorld2(328);
const germanyPercentage2 = percentageOfWorld2(83);
const canadaPercentage2 = percentageOfWorld2(38);

console.log(usaPercentage2, germanyPercentage2, canadaPercentage2);

// Arrow Functions
const percentageOfWorld3 = (population) => (population / 7900) * 100;
console.log(
	percentageOfWorld3(328),
	percentageOfWorld3(83),
	percentageOfWorld3(38)
);

// Functions Calling Other Functions
function describePopulation(country, population) {
	const percentage = percentageOfWorld1(population);
	const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
	return description;
}

console.log(describePopulation("USA", 328));
console.log(describePopulation("Germany", 83));
console.log(describePopulation("Canada", 38));

// Coding Challenge #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
	if (avgDolphins >= 2 * avgKoalas) {
		console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
	} else if (avgKoalas >= 2 * avgDolphins) {
		console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
	} else {
		console.log(`No team wins..`);
	}
};

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);

// Introduction to Arrays
const populations = [328, 83, 38, 1441];
console.log(populations.length === 4);
const percentages = [
	percentageOfWorld1(328),
	percentageOfWorld1(83),
	percentageOfWorld1(38),
	percentageOfWorld1(1441),
];
console.log(percentages);

// Basic Array Operations (Methods)
const neighbours = ["Sweden", "Finland", "Russia", "Denmark", "Iceland"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
	console.log(`Probably not a central European country :D`);
}

neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden";
console.log(neighbours);

// Coding Challenge #2
const calcTip = (bill) =>
	bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

// Introduction to Objects
const myCountry = {
	country: "Norway",
	capital: "Oslo",
	language: "Norwegian",
	population: 5.4,
	neighbours: ["Sweden", "Finland", "Russia"],
	describe: function () {
		console.log(
			`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
		);
	},
	checkIsland: function () {
		this.isIsland = this.neighbours.length === 0 ? true : false;
	},
};
console.log(myCountry.describe());

// Dot vs. Bracket Notation
console.log(
	`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);
myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

// Coding Challenge #3
const mark = {
	fullName: "Mark Miller",
	mass: 78,
	height: 1.69,

	calcBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	},
};

const john = {
	fullName: "John Smith",
	mass: 92,
	height: 1.95,

	calcBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	},
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
	console.log(
		`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
	);
} else if (john.bmi > mark.bmi) {
	console.log(
		`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
	);
}

// Iteration: The for Loop
// for (let voter = 1; voter <= 50; voter++) {
// 	console.log(`Voter number ${voter} is currently voting`);
// }

// Looping Arrays, Breaking and Continuing
const populations2 = [328, 83, 38, 1441];
const percentages2 = [];

for (let i = 0; i < populations2.length; i++) {
	percentages2.push(percentageOfWorld1(populations2[i]));
}
console.log(percentages2);

// Looping Backwards and Loops in Loops
const listOfNeighbours = [
	["Canada", "Mexico"],
	["Spain"],
	["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
	for (let y = 0; y < listOfNeighbours[i].length; y++) {
		console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
	}
}
