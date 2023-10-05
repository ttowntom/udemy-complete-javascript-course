'use strict';

/*
function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear > 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven'; // JS use the variable from the first scope
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT'; // Redefining the previous variable
      // const output = 'NEW OUTPUT'; // Creating a whole new variable within this scope
    }
    // console.log(str); // Not in scope
    console.log(millenial); // var are function scoped
    // console.log(add(2, 3)); // Not in scope in strict mode
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Tom';
calcAge(1988);
// console.log(age); // Not in scope


// Hoisting with variables
//console.log(me); // Hoisted as undefined
//console.log(job); // Not hoisted (in temperal dead zone)
//console.log(year); // Not hoisted (in temperal dead zone)

var me = 'Tom';
let job = 'Student';
const year = 1988;

// Hoisting with functions
console.log(addDecl(2, 3)); // Hoisted
console.log(addExpr(2, 3)); // Hoisted as undefined
console.log(addArrow(2, 3)); // Not hoisted (in temperal dead zone) (defined with const)

function addDecl(a, b) {
  return a + b;
}
var addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;


// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart(); // Deletes the cart because var is hoisted as undefined (falsy)

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}


var x = 1; // Found in global window object
let y = 2; // Not found in global window object
const z = 3; // Not found in global window object

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


console.log(this); // Window object in global scope

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
};
calcAge(1988); // Undefined in strict mode

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this);
};
calcAgeArrow(1980); // Arrow functions get lexical (partent) this (window for global scope)

const tom = {
  year: 1988,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};
tom.calcAge(); // This is the parent ('owner') object. The tom object called the method, thus this points to the tom object

const vr = {
  year: 1987,
};
vr.calcAge = tom.calcAge;
vr.calcAge(); // The object vr called the method, and so this points to vr

const f = tom.calcAge;
f(); // Undefined, because year is not defined in f, which called the method
*/

var firstName = 'VR';

const tom = {
  firstName: 'Tom',
  year: 1988,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   //   console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this); // Global window scope
    console.log(`Hey, ${this.firstName}`); // Global scope firstName is VR (arrow function) DON'T USE ARROW FUNCTIONS AS METHODS!
  },
  greet2: function () {
    console.log(this); // Local scope
    console.log(`Hey, ${this.firstName}`);
  },
};

tom.greet();
console.log(this.firstName); // Global scope firstName is VR
tom.greet2(); // tom calls the declerative function
tom.calcAge();

// Arguments keywoords
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8, 12); // Throwss error
