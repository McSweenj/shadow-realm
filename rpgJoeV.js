/* This is a starter with examples.  Remove the examples once you have made your own versions. */
waking 
'use strict'  
// rpg-ShadowLand.js
// core variables
var messages = []; // for a sequence of messages
var choices = [];
var answer = null;
// story function variables
var name = null;
var spin = 0;

function ShadowRealm(answer) {  // Matches Scenes  - replace with yours
	if (answer == "Enter now") {
		enterShadowRealm();
	} 1
	else if (answer == "Get sucked in") {
		TheChill();
	}
	else if (answer == "Scream") {
		NobodyCame();
	}
}

function enterShadowRealm() {
	story("You wake up in your room that is in your old beat up house that you inherited from your grandparents and you hear a noise coming from an old mirror you walk up to it and the mirror asked you if you wanted to enter what do you do");
	choices = ["yes I wish to enter", "I do not wish to enter yet", "lay back down "];
	answer = setOptions(choices);
}

function nothingDarkness () {
	story("You have finally have at least have gained back your conciseness it has been a long time since you could have a thought and you are still not sure what is going on what will  you try to do first ");
	choices = ["try to move", "try to see", "try to feel"];
	answer = setOptions(choices);
}

function timeToWakeUp () {
	story("You are finally waking up for real and you have full control of a body but it is not your own and all you can see are shadows you see one go in one direction and you can hear someone in the other direction what will you do now");
	choices = ["follow the shadow", "go see who is talking", "just don't do anything"];
	answer = setOptions(choices);
}
function nothingYet() {
	story("Undefined");
	choices = ["Undefined"];
	answer = setOptions(choices);
}
function nothingYet() {
	story("Undefined");
	choices = ["Undefined"];
	answer = setOptions(choices);
}
function nothingYet() {
	story("Undefined");
	choices = ["Undefined"];
	answer = setOptions(choices);
}
function nothingYet() {
	story("Undefined");
	choices = ["Undefined"];
	answer = setOptions(choices);
}
function nothingYet() {
	story("Undefined");
	choices = ["Undefined"];
	answer = setOptions(choices);
}
function nothingYet() {
	story("Undefined");
	choices = ["Undefined"];
	answer = setOptions(choices);
}

function Mirror(){  // FIRST SCENE - WELCOMES PLAYER
	var name = prompt("what is your name?");
	story("You see a Mirror appear from nowhere. \
	\n On the Mirror is a a peace of paper tucked in to it\
	\n That says \"Enter,  " + name + ".\"\
	\n What do you do?");

	choices = ["Enter now", "Sleep on it", "Tell mom"];
	answer = setOptions(choices);
}

  
/* function forest() {  // SET A SCENE
 * story("There is a house made of candy\
 * \nThere is a fruit vender\
 * \nThere is a small opening in the trees with a ring of mushroom in the middle");
 * 
 * choices = ["Candy house", "Fruit vender", "Field", "Hang out here", "spin in a circle"];
 * answer = setOptions(choices);
 *    
 * }
 */ 
 
/* function spinInCircle() { // CHANGE VALUE IF RETURN
 *     spin = spin + 1;
 *    if (spin == 3) {
 *         story("Why are you doing that?\
 *         \n It makes me a little nauseous just to watching you\n\n");
 *         forest();
 *     } else if (spin == 4) {
 *         story("Seriously, please stop\
 *         \nI can't keep watching this\n\n");
 *        forest();
 *    } else if (spin == 5) {
 *         story("Oh god I have to go\n\n");
 *         forest();
 *    } else if (spin > 5) {
 *         story("We are sorry but the narrator for this bit went home sick.\n\n");
 *         forest();
 *     } else {
 *        story("You let you arm fly freely at your side as you spin in a circle.\
 *         \nAround and around you go as the world blurs in front of you\
 *         \nyou get dizzy and fall to the ground\
 *         \nyou take a moment to gather your thoughts then you stand back up\n\n");
 *         forest();
 *     }
 * }
 */
 
/* function stayQuite() { // Message Example
 * messages=["so your too good to talk to me huh",
 *         "big old person too proud to talk to a pixie",
 *         " you hear the pixie fly away in disgust"];
 *    delayText(messages, 3000, field);
 * 
 * } 
