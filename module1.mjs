
//! Default exports and name exports --> Javascript concept
//* Default exports
// import fruits from './module2.mjs'
// console.log(fruits);

//* name exports
// M-1:
/*
import {fruit1} from './module2.mjs'
import {fruit3,fruit4} from './module2.mjs'
import {fruit2} from './module2.mjs'
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
console.log(fruit4);
*/

// M-2:
/*
import {fruit1,fruit2,fruit3,fruit4} from './module2.mjs'
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
console.log(fruit4);
*/


//* Default exports + name exports
import fruits, {fruit1,fruit3,fruit4} from './module2.mjs'
console.log(fruits);
console.log(fruit1);
console.log(fruit3);
console.log(fruit4);