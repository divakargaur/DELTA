// returns a part of the original string as a new string

let str = "ILoveCoding";

console.log(str.slice(5));
console.log(str.slice(1, 7));
console.log(str.slice(-5));         // slice(-n) = slice(length() - n)







// trims whitespace from both ends of string and returns a new one

let str1 = " radhe radhe "
const s = str1.trim()

console.log(str1);           // methods do not change the original data rather it creates a new string
console.log(str1.trim());
console.log(s);