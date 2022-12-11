const drinks = ["coffee", "tea", "orange juice"];
const mystery2 = drinks.push("milk");

// What do you predict this will log?
//drinks will be logged and will contain the element 'milk' at the last index.
//actually...I think this might just log the original array!
console.log(drinks);

// What value do you think this will log?
// If you were surprised at the value, research online what this value represents

//I think this will log the original array plus 'milk' at the last index.
console.log(mystery2);

//I was wrong on both. drinks logged the array with the additional element and mystery2 logged the length of 'drinks' arrayS
