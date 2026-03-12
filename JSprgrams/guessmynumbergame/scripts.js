// secret number

let secretnumber = Math.floor(Math.random() * 20) + 1
console.log(secretnumber)
let score = 20;
let highscore = 0;

function check() {
    guess = document.getElementById("g").value;
    console.log(guess)
    // guess
    if (guess == "") {
        document.getElementById("result").innerHTML = "No Number";
    }

    else if (guess == secretnumber) {
        document.getElementById("result").innerHTML = "Right Guess";
        document.getElementById("score").innerHTML = score;
        document.getElementById("b").innerHTML = guess;
        document.body.style.background = "green";

        if (score > highscore) {
            highscore = score;
            document.getElementById("Highscore").innerHTML = highscore;
        }


    }
    else if (guess != secretnumber) {
        if (score > 0) {
            if (guess < secretnumber) {
                document.getElementById("result").innerHTML = "Too Low";
                score--;
                document.getElementById("score").innerHTML = score;

            }
            else if (guess > secretnumber) {
                document.getElementById("result").innerHTML = "Too High";
                score--;
                document.getElementById("score").innerHTML = score;
            }
        }
        else {
            document.getElementById("result").innerHTML = "You Lost the game";
            score--;
            document.getElementById("score").innerHTML = 0;
        }
    }

}

function again() {
    secretnumber = Math.floor(Math.random() * 20) + 1
    console.log(secretnumber)
    score = 20;
    highscore = 0;
    document.getElementById("score").innerHTML = score;
    document.getElementById("result").innerHTML = "Start guessing.....";
    document.getElementById("b").innerHTML = '?';
    document.getElementById("g").value="";
    document.body.style.background = "rgb(45,42,40)";


}


