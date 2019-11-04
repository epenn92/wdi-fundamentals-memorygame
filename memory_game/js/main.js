

// array to store card values
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"  
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png" 
}
];
var cardsInPlay = [];






function checkForMatch(){
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
		
	}
} 

};

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	checkForMatch(this);


};



var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
		

	}
	
};

createBoard();

 /*How to update content in the DOM
innerHTML property- can get/set content for an element  ex: change HTML for 1st li
document.getElementsByTagName('li')[0].innerHTML = '<a href="http://allrecipes.com/recipe/17500/corn-tortillas/">Corn Tortillas</a>';    changes HTML content of first li to corn tortillas/link
Can save it in a variable for later too
var firstListItem = document.getElementsByTagName('li')[0].innerHTML;

textContent property- get/set text content for an element
document.getElementById('important').textContent = 'Check!'; changes text content of important li id to check

These are not interchangable, textContent cannot insert links/make an a tag will just add text, while innterHTML will update all text you add as a link

Adding Elements - 3 step process
1. createElement() makes new element - w/ an empty node to be stored in a variable!!!
2. add content to element w/ innerHTML or textContent
3. add it as a child of an element using appendChild() method - add element as last child of its parent
To add a sixth item to our list we can execute the following code:
// First, let's create a new list item and store it in a variable.
var newListItem = document.createElement('li');
// Alright, now let's update the text content of that list item.
newListItem.textContent = 'Jalapenos';
// And finally, let's add that list item as a child of the ul.
document.getElementsByTagName('ul')[0].appendChild(newListItem);

Getting/Setting Attributes
 o add a sixth item to our list we can execute the following code:
// First, let's create a new list item and store it in a variable.
var newListItem = document.createElement('li');
// Alright, now let's update the text content of that list item.
newListItem.textContent = 'Jalapenos';
// And finally, let's add that list item as a child of the ul.
document.getElementsByTagName('ul')[0].appendChild(newListItem);
  setAttribute() - can set/update attributes for example update href attribute on anchor tag
document.getElementsByTagName('a')[0].setAttribute('href', 'http://newurl.com');
href is the name of the attribute we want to change and url is new value for that attribute
If there's mutiple elements on the page and we only want the element we just clicked to respond to the event listerner this can be really useful
//Select all elements with the class .circle on the page
var circles = document.querySelectorAll('.circle');
//loop through each .circle element and add an event handler.
for (var i = 0; i < circles.length; i++) {
    circles[i].addEventListener('click', turnRed);
}
var turnRed = function () {
    this.style.backgroundColor = "red";
}; 
int: Remember: the syntax for calling a method looks like this:
objectName.methodName();
*/


