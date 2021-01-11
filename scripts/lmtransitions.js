document.getElementById("lyrics_button").addEventListener("click", dispLyrics);

var lyr = document.getElementById("lyrics");
lyr.classList.add("toggleDisplay");
var toggled = false;
function dispLyrics(){
	if(toggled == false){
		document.getElementById("lyrics_button").innerHTML = "Hide Lyrics";
		lyr.style.display = "block";
		toggled = true;
	}
	else{
		document.getElementById("lyrics_button").innerHTML = "Show Lyrics";
		lyr.style.display = "none";
		toggled = false;
	}
}