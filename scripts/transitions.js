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

var body = document.getElementById("opcontainer");
var body2 = document.getElementById("opcontainer2");

document.getElementById("1").addEventListener("click", displayBio0);
document.getElementById("2").addEventListener("click", displayBio1);
document.getElementById("3").addEventListener("click", displayBio2);
document.getElementById("4").addEventListener("click", displayBio3);
document.getElementById("5").addEventListener("click", displayBio4);
document.getElementById("6").addEventListener("click", displayBio5);

var profiles = [];
var clicked = [];
var other = false;
for(i=1;i<7;i++){
	profiles.push(document.getElementById(i.toString() + "_full"));
	clicked.push(false);
};

function displayBio0(){
	if(clicked[0] == false){
		clicked[0] = true;
		profiles[0].classList.add("displayProfile_full");
	}
	else{
		clicked[0] = false;
		profiles[0].classList.remove("displayProfile_full");
	}
}

function displayBio1(){
	if(clicked[1] == false){
		clicked[1] = true;
		profiles[1].classList.add("displayProfile_full");
	}
	else{
		clicked[1] = false;
		profiles[1].classList.remove("displayProfile_full");
	}
}

function displayBio2(){
	if(clicked[2] == false){
		clicked[2] = true;
		profiles[2].classList.add("displayProfile_full");
	}
	else{
		clicked[2] = false;
		profiles[2].classList.remove("displayProfile_full");
	}
}

function displayBio3(){
	if(clicked[3] == false){
		clicked[3] = true;
		profiles[3].classList.add("displayProfile_full");
	}
	else{
		clicked[3] = false;
		profiles[3].classList.remove("displayProfile_full");
	}
}

function displayBio4(){
	if(clicked[4] == false){
		clicked[4] = true;
		profiles[4].classList.add("displayProfile_full");
	}
	else{
		clicked[4] = false;
		profiles[4].classList.remove("displayProfile_full");
	}
}

function displayBio5(){
	if(clicked[5] == false){
		clicked[5] = true;
		profiles[5].classList.add("displayProfile_full");
		body.classList.add("turnOpaque");
		body2.classList.add("turnOpaque");
	}
	else{
		clicked[5] = false;
		profiles[5].classList.remove("displayProfile_full");
	}
}