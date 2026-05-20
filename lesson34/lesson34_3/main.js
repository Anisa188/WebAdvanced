var nrSelect = document.getElementById('nrSelect');
var btnGuess = document.getElementById('Guess');

var count = 1;
var guessNumber = false;

while(guessNumber == false){
    var random = Math.floor(Math.random()*6);
    console.log(random);

    if(nrSelect.value == random){
        guessNumber = true;
        console.log("Guessed within: " + count +"times");
    }else{
        count = count + 1;
    }
}