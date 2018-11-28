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
		case "attack with fist":
            darkDeath1();
            break;
		case "run away":
            runAway1();
            break;
		case "go back":
            timeToWake();
            break;
		case "ask to join you":
            heJoins();
            break;
		case "go to shadow":
            shadow();
            break;
		case "get a drink":
            takeDrink();
            break;
		case "go back2":
            meetGalloway();
            break;	
		case "friendly":
            frendlyOne();
            break;
		case "go back3":
            meetGalloway();
            break;
		case "have Galloway guard you":
            win1();
            break;
		case "attack together":
            win2();
            break;
		case "fire an arrow":
            win3();
            break;
		case "continue1":
           outside();
            break;
		case "continue2":
            outside();
            break;
		case "continue3":
            outside();
            break;
		case "continue4":
            camp1();
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
    choices = ["run away","attack with fist"];
    answer = setOptions(choices);
}

function darkDeath1(){
  story("You die trying to attack with your bare hands against someone who is much better armed than you ");
  choices = ["darkness"]
  answer = setOptions(choices);
}

function runAway1(){
  story("You run away back to the beginning because you see that you are outmatched");
  choices = ["go back"];
  answer = setOptions(choices);
}

function meetGalloway() {
    story("You approach the man that is sitting in fancy armor and a huge bag of some sorts that is full of many swords while he is drinking some whiskey out of a enchanted bottle that somehow can fill itself back up");
    choices = ["get a drink","ask to join you","friendly"];
    answer = setOptions(choices);
}

function takeDrink(){
  story("he says sure and gives you the bottle");
  choices = ["go back2"];
  answer = setOptions(choices);
}
function heJoins(){
  story("he says yes and he says that you are going to need a weapon  and something to wear and gives you a bow and a quiver with  lots of arrows and some chain mail armor ");
  choices = ["go to shadow"];
  answer = setOptions(choices);
}

function frendlyOne(){
  story("I am if you are");
  choices = ["go back3"];
  answer = setOptions(choices);
}
function shadow(){
  story("you go back and go after the shadow with your new friend Galloway and with the gear that he gave you and you both following the shadow together with Galloway taking the front line and you right behind him with your bow pulled back ready to fire and it does not take long for the two of you to catch up with the shadow and see what it actually was you both encounter the crazed man wearing leather armor and wielding a broadsword and is yelling random words with no sense of sense of understandable language and he lunges at the two of you swinging his sword and Galloway blocks it and then the battle begins what will you your move be");
  choices = ["have Galloway guard you","attack together","fire an arrow"];
  answer = setOptions(choices);
}

function win1(){
  story("");
  choices = ["continue1"];
  answer = setOptions(choices);
}

function win2(){
  story("");
  choices = ["continue2"];
  answer = setOptions(choices);
}

function win3(){
  story("");
  choices = ["continue3"];
  answer = setOptions(choices);
}

function outside(){
  story("After you beat the crazed man you leave the cave and it is starting to get darker outside and the four moons the light the shadow realm are starting to disappear for the night");
  choices = ["continue4"];
  answer = setOptions(choices);
}

function camp1(){
  story("you leave the cave with your friend Galloway and see that it is actually getting darker because the four moons that light the realm are starting to disappear for the night and Galloway recommends that we find a place to spend the night and he names a few places nearby that they could go for the night which will you chose");
  choices = ["go to the tree ","go to the rock ","go to the river"];
  answer = setOptions(choices);
}



