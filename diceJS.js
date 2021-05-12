//***********************************************//
// Dice Number 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource)


//***********************************************//
// Dice Number 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource)


//***********************************************//
// Decide which text to change to
var newText = "Refresh The Page";
if(randomNumber1 > randomNumber2){
  newText = "Player 1 Wins!"
}
else if(randomNumber2 > randomNumber1){
  newText = "Player 2 Wins!"
}
else{
  newText = "It's a tie!"
}
// Change text from 'Refresh me' to something else

var oldMessage = document.querySelectorAll("h1")[0];

oldMessage.innerHTML = newText;
