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