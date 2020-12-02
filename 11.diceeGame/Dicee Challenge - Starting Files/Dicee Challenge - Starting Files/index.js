var randomPlayer1 = Math.floor(Math.random() * 6 + 1);
var randomPlayer2 = Math.floor(Math.random() * 6 + 1);

var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");
var h1 = document.querySelector("h1");

dice1.setAttribute("src","images/dice"+ randomPlayer1 +".png");
dice2.setAttribute("src","images/dice"+randomPlayer2+".png");

var result = "";

if (randomPlayer1 > randomPlayer2) {
    result = "Player 1 Won";
} else if (randomPlayer1 < randomPlayer2) {
    result = "Player 2 Won";
} else{
    result = "Player 1 equal Play 2";
}

h1.textContent = result;

