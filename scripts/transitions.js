//for menu scrolling

var element1 = document.getElementById("menu");
var element2 = document.getElementById("addspace");
var last_known_scroll_position = 0;

window.addEventListener('scroll', function(e) {
	last_known_scroll_position = window.scrollY;
	if(last_known_scroll_position > 115){
		element1.classList.add("scroll");
		element2.classList.add("scroll2");
	}
	else{
		element1.classList.remove("scroll");
		element2.classList.remove("scroll2");	
	}
});

//for contacts
document.getElementById("6").addEventListener("click", displayBio);

var profiles = [];


for(i=1;i<7;i++){
	profiles.push(document.getElementById(i));
};



var element3 = document.getElementById("6");
var element3_full = document.getElementById("6_full");
var exit = document.getElementById("exit");

var clicked = false;

function displayBio(){
	if(clicked == false){
		clicked = true;
		element3_full.classList.add("displayProfile_full");
		exit.add("displayProfile_full");
	}
	else{
		clicked = false;
		element3_full.classList.remove("displayProfile_full");
	}
}