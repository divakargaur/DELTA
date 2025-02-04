const favMovie = 'avatar';

let guess = prompt('Guess movie:');

while( (guess!=favMovie) && (guess!='quit') ) {
    guess = prompt('wrong guess, try again')
}

if (guess == 'Avatar') {
    console.log('correct')
} else {
    console.log('you quit')
}

// break keyword if (guess=='quit')