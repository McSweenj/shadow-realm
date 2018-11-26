/* This is a starter with examples.  Remove the examples once you have made your own versions. */

'use strict'

// core variables
var messages = []; // for a sequence of messages
var choices = [];
var answer = null;

// story function variables
var name = null;
var spin = 0;

function checkAnswers(answer) {  // Function names match story scenes. Replace with your functions
if (answer == "touch the mirror") {
	nothingButDarkness();
	} 
	else if (answer == "get sucked in") {
	nothingButDarkness();
	}
	else if (answer == "scream") {
	nothingButDarkness();
}


function enterShadowRealm(){  
story("You wake up in your room that is in your old beat up house that you inherited from your grandparents and you hear a noise coming from an old mirror you walk up to it and the mirror asked you if you wanted to enter what do you do");
choices = ["touch the mirror","get sucked in","scream"];
answer = setOptions(choices);

}

function nothingButDarkness(){  
story("You have finally have at least have gained back your conciseness it has been a long time since you could have a thought and you are still not sure what is going on what will  you try to do first");
choices = ["try to move","try to see","try to feel"];
answer = setOptions(choices);

}

 function timeToWake(){  
story("You are finally waking up for real and you have full control of a body but it is not your own and all you can see are shadows you see one go in one direction and you can hear someone in the other direction what will you do now");
choices = ["follow the shadow","go see who is talking","just dont do anything"];
answer = setOptions(choices);
}

function meetGalloway() {
    story("You approach the man that is sitting in fancy armor and a huge bag of some sorts that is full of many swords while he is drinking some whiskey out of a enchanted bottle that somehow can fill itself back up");
    choices = ["ask for a drink","ask to join you","ask if friendly"];
    answer = setOptions(choices);

}

function obstacleAlone() {
    story("You approach the shadow and it turns out to be a crazed guy in leather armor with a broadsword");
    choices = ["run away","attack with fist","attack with a rock"];
    answer = setOptions(choices);
}







