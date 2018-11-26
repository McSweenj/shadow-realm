/* Uses Case Statements */

// variables
var name = "";
var messages = [];
var choices;
var answer;

// start


function enterShadowRealm(){
	story("You wake up in your room that is in your old beat up house that you inherited from your grandparents and you hear a noise coming from an old mirror you walk up to it and the mirror asked you if you wanted to enter touch the mirror to enter");
	choices = ["touch the mirror"];
	answer = setOptions(choices);
}

function checkAnswers(answer) {
    switch(answer) {
        case "touch the mirror":
			nothingButDarkness();
            break;
		case "try to move":
            timeToWake();
            break;
		case "follow the shadow":
            obstacleAlone();
            break;
		case "see who is talking":
            meetGalloway();
            break;
    }
}
// Places

function nothingButDarkness(){
    story("You have finally have at least have gained back your conciseness it has been a long time since you could have a thought and you are still not sure what is going on will you try to wake up");
    choices = ["try to move"];
    answer = setOptions(choices);
}

function timeToWake(){
  story("You are finally waking up for real and you have full control of a body but it is not your own and all you can see are shadows you see one go in one direction and you can hear someone in the other direction what will you do now");
  choices = ["follow the shadow","see who is talking"];
  answer = setOptions(choices);
}

function obstacleAlone() {
    story("You approach the shadow and it turns out to be a crazed guy in leather armor with a broadsword");
    choices = ["run away","attack"];
    answer = setOptions(choices);
}

function darkDeath1(){
  story("You die trying to attack with your bare hands against someone who is much better armed than you ");
  choices = ["darkness"]
  answer = setOptions(choices);
}

function runAway1(){
  story("You run away back to the beginning because you see that you are outmatched");
  choices = [""];
  answer = setOptions(choices);
}

function meetGalloway() {
    story("You approach the man that is sitting in fancy armor and a huge bag of some sorts that is full of many swords while he is drinking some whiskey out of a enchanted bottle that somehow can fill itself back up");
    choices = ["ask for a drink","ask to join you","ask if friendly"];
    answer = setOptions(choices);
}








