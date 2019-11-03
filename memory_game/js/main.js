

// array to store card values
var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
} 
else	{
	alert("select another card to start.");
}

console.log("Up and running!");

console.log("User flipped " + cardsInPlay[cardsInPlay.length - 1]);

