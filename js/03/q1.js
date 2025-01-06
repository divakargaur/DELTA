let months = ["january", 'july', 'march', "august"];

months.shift();
let nd = months.shift();

months.unshift("june");
months.unshift(nd);

console.log(months);
