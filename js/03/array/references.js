console.log([1] == [1]);
console.log([1] === [1]);

// js compares object by reference not by value
// by reference it means address of the memory allocated


// the real thing
let arr = ['a', 'b'];
let arrCopy = arr; // allocating the same address
console.log(arrCopy);
arrCopy.push('c');
console.log(arr);

// but
let newArr = ['a'];
let copyArr = ['a']; // allocating a new address with same data
newArr.push('b');
console.log(copyArr);
