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