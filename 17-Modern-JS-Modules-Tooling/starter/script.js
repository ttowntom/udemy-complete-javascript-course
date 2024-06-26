/*
// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);
*/

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price, tq);
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

/*
// const res = await fetch('https://api.chucknorris.io/jokes/random');
// const data = await res.json();
// console.log(data);
// console.log('something');

const getLastPost = async function () {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    // console.log(data[data.length - 1]);

    return { title: data.at(-1).title, text: data.at(-1).body };
  } catch (err) {
    console.error(err);
  }
};

const lastPost = getLastPost();
console.log(lastPost);
// Not very clean, but it works
// lastPost.then(data => console.log(data));
const lastPost2 = await getLastPost();
console.log(lastPost2);


///////////////////////////////////////
// MODULE PATTERN
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);


///////////////////
// COMMONJS MODULES
// Export
// export.addToCart = function (product, quantity) {
// 	cart.push({ product, quantity });
// 	console.log(`${quantity} ${product} added to cart`)

	// Import
	// const { addToCart } = require('./shoppingCart.js');

	*/

/////////////////////////
// INTRO TO NPM

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

/////////////////////////
// BUNDLING WITH PARCEL

if (module.hot) {
  module.hot.accept();
}

/////////////////////////
// CONFIGURING BABEL AND POLYFILLING

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');
console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('Test').then(x => console.log(x));

import 'core-js/stable';
// Polyfilling async functions
import 'regenerator-runtime/runtime';
