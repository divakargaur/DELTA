let max = prompt('enter the max number');
let random = Math.ceil(Math.random()*max);

let guess = prompt('guess the random number');

while(true){
    if(guess == 'quit'){
        console.log(`the random number was ${random}`)
        break
    }
    if(guess == random){
        console.log(`correct, the number is ${random}`)
        break
    } else if(guess>random){
        guess = prompt(`try smaller then ${guess}`)
    } else {
        guess = prompt(`try larger then ${guess}`)
    }
}