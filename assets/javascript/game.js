/* javascript and jquery for crystals collactor */

// variables for the crystals
var green;
var purple;
var silver;
var orange;

// variables for numbers
var newNum;
var numGuess;

// variables for win, loss, score
var wins = 0;
var losses = 0;
var score;

// variable to start the functions
var start = function () {

    // random number generator between 19 and 120
    numGuess = Math.floor(Math.random() * 101) + 19;
    numGuess = parseInt(numGuess);

    $("#number").html(numGuess);

    // crystal random number generator generates number between 1 and 12 for all crystals
    green = Math.floor(Math.random() * 12) + 1;
    green = parseInt(green);
    $("#green").attr({ "class": "crystal", "random-number": green
    })

    purple = Math.floor(Math.random() * 12) + 1;
    purple = parseInt(purple);
    $("#purple").attr({"class": "crystal", "random-number": purple
    })

    silver = Math.floor(Math.random() * 12) + 1;
    silver = parseInt(silver);
    $("#silver").attr({"class": "crystal", "random-number": silver
    })

    red = Math.floor(Math.random() * 12) + 1;
    red = parseInt(red);
    $("#red").attr({"class": "crystal", "random-number": red
    })

$("#guessed").text("");
newNum = 0
}

start();

$(".crystal").on('click', function () {
    var crystalValue = $(this).attr("random-number");
    newNum = newNum + parseInt(crystalValue);
    $("#guessed").text(newNum);

    if (newNum === numGuess) {
        wins++;
        $("#wins").text(wins);
        start()
    }

    else if (newNum > numGuess) {
        losses++;
        $("#losses").text(losses);
        start()  
    }
});