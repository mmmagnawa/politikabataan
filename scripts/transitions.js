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

//FOR CONTACTS

//initializing variables

var body = document.getElementById("opcontainer");
var body2 = document.getElementById("opcontainer2");
document.getElementById("1").addEventListener("click", displayBio0);
document.getElementById("1_full").addEventListener("click", exitBio0);
document.getElementById("2").addEventListener("click", displayBio1);
document.getElementById("2_full").addEventListener("click", exitBio1);
document.getElementById("3").addEventListener("click", displayBio2);
document.getElementById("3_full").addEventListener("click", exitBio2);
document.getElementById("4").addEventListener("click", displayBio3);
document.getElementById("4_full").addEventListener("click", exitBio3);
document.getElementById("5").addEventListener("click", displayBio4);
document.getElementById("5_full").addEventListener("click", exitBio4);
document.getElementById("6").addEventListener("click", displayBio5);
document.getElementById("6_full").addEventListener("click", exitBio5);

var profiles_full = [];
var profiles = []
var clicked = [];
var other = false;
for(i=1;i<7;i++){
	profiles_full.push(document.getElementById(i.toString() + "_full"));
	profiles.push(document.getElementById(i));
	clicked.push(false);
}

function displayBio0(){
	if(clicked[0] == false && other == false){
		clicked[0] = true;
		other = true;
		for(i=0;i<6;i++){profiles[i].classList.remove("hover");}
		body.classList.add("turnOpaque");
		body2.classList.add("turnOpaque");
		profiles_full[0].classList.add("displayProfile_full");
	}
}

function exitBio0(){
	if(clicked[0] == true){
		clicked[0] = false;
		other = false;
		for(i=0;i<6;i++){profiles[i].classList.add("hover");}
		body.classList.remove("turnOpaque");
		body2.classList.remove("turnOpaque");
		profiles_full[0].classList.remove("displayProfile_full");
	}
}

function displayBio1(){
	if(clicked[1] == false && other == false){
		clicked[1] = true;
		other = true;
		for(i=0;i<6;i++){profiles[i].classList.remove("hover");}
		body.classList.add("turnOpaque");
		body2.classList.add("turnOpaque");
		profiles_full[1].classList.add("displayProfile_full");
	}
}

function exitBio1(){
	if(clicked[1] == true){
		clicked[1] = false;
		other = false;
		for(i=0;i<6;i++){profiles[i].classList.add("hover");}
		body.classList.remove("turnOpaque");
		body2.classList.remove("turnOpaque");
		profiles_full[1].classList.remove("displayProfile_full");
	}
}

;function displayBio2(){
	if(clicked[2] == false && other == false){
		clicked[2] = true;
		other = true;
		for(i=0;i<6;i++){profiles[i].classList.remove("hover");}
		body.classList.add("turnOpaque");
		body2.classList.add("turnOpaque");
		profiles_full[2].classList.add("displayProfile_full");
	}
}

function exitBio2(){
	if(clicked[2] == true){
		clicked[2] = false;
		other = false;
		for(i=0;i<6;i++){profiles[i].classList.add("hover");}
		body.classList.remove("turnOpaque");
		body2.classList.remove("turnOpaque");
		profiles_full[2].classList.remove("displayProfile_full");
	}
}


function displayBio3(){
	if(clicked[3] == false && other == false){
		clicked[3] = true;
		other = true;
		for(i=0;i<6;i++){profiles[i].classList.remove("hover");}
		body.classList.add("turnOpaque");
		body2.classList.add("turnOpaque");
		profiles_full[3].classList.add("displayProfile_full");
	}
}

function exitBio3(){
	if(clicked[3] == true){
		clicked[3] = false;
		other = false;
		for(i=0;i<6;i++){profiles[i].classList.add("hover");}
		profiles_full[3].classList.remove("displayProfile_full");
		body.classList.remove("turnOpaque");
		body2.classList.remove("turnOpaque");
	}
}


function displayBio4(){
	if(clicked[4] == false && other == false){
		clicked[4] = true;
		other = true;
		for(i=0;i<6;i++){profiles[i].classList.remove("hover");}
		body.classList.add("turnOpaque");
		body2.classList.add("turnOpaque");
		profiles_full[4].classList.add("displayProfile_full");
	}
}

function exitBio4(){
	if(clicked[4] == true){
		clicked[4] = false;
		other = false;
		for(i=0;i<6;i++){profiles[i].classList.add("hover");}
		profiles_full[4].classList.remove("displayProfile_full");
		body.classList.remove("turnOpaque");
		body2.classList.remove("turnOpaque");
	}
}

function displayBio5(){
	if(clicked[5] == false && other == false){
		clicked[5] = true;
		other = true;
		for(i=0;i<6;i++){profiles[i].classList.remove("hover");}
		body.classList.add("turnOpaque");
		body2.classList.add("turnOpaque");
		profiles_full[5].classList.add("displayProfile_full");
	}
}

function exitBio5(){
	if(clicked[5] == true){
		clicked[5] = false;
		other = false;
		for(i=0;i<6;i++){profiles[i].classList.add("hover");}
		profiles_full[5].classList.remove("displayProfile_full");
		body.classList.remove("turnOpaque");
		body2.classList.remove("turnOpaque");
	}
}