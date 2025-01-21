// removes, replace, add elements in the original array itself
// .splice(START, DELETE_COUNT, ITEM_INDEX(START), ITEM_INDEX(START+1), ...)

let colors = ['blue', 'red', 'yellow'];

console.log(colors.splice(2));
console.log(colors);
console.log(colors.splice(0, 1));
console.log(colors);
console.log(colors.splice(0, 1, 'green', 'red'));
console.log(colors);
console.log(colors.splice(1, 0, 'purple')); // adding in between
console.log(colors);
