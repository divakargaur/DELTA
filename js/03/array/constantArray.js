const arr = [1, 2, 3];
// we can not assign a new array with the same variable name
// the address becomes constant

arr.push(4, 5);
arr.pop();

// let arr = []; -> will throw error
// let car = arr; -> will throw error