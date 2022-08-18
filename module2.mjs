
//! Default exports and name exports --> Javascript concept
const fruit1 = "apple";
const fruit2 = "banana";
const fruit3 = "mango";
const fruit4 = "grapes";

//* Default exports
// export default fruit1;

//* name exports
// individually
// export {fruit1};
// export {fruit2};
// export {fruit3};
// export {fruit4};

// combined
// export {fruit1,fruit2,fruit3,fruit4};


//* Default exports + name exports
export default fruit2;
export {fruit1};
export {fruit3};
export {fruit4};