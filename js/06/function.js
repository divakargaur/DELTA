function rollDice() {
    let random = Math.ceil(Math.random()*6);
    console.log(random);
}
rollDice();


function printTable(num) {
    let arr = [];
    for (let i=num; i<=num*10; i+=10) {
        arr.push(i);
    } return arr
}
console.log(printTable(10))

// var does not have block scope
// lexical scope -> nested function
// hoisting -> variables can be used before declaration (var)
// higher order function -> function as an argument or return

// methods -> function as a property of an object
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    sub (a, b) { // method shorthand
        return a - b;
    }
}

// internally (almost) everything is an object