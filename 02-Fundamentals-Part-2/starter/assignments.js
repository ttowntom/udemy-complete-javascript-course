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
