/*Below you will find the 3 files for the Background Generator. 
A few things you can try: 

1. Write code so that the colour inputs match the background 
generated on the first page load. 

2. Display the initial CSS linear gradient property on page 
load.

3. BONUS: Add a random button which generates two random 
numbers for the colour inputs.*/

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
var randomColor1 = document.querySelector(".color1");
var randomColor2 = document.querySelector(".color2");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

window.onload = setGradient; // For #1 & 2

function randomizeColor () {
	var colorA = Math.floor(Math.random() * 256);
	var colorB = Math.floor(Math.random() * 256);
	var colorC = Math.floor(Math.random() * 256);
	var colorD = Math.floor(Math.random() * 256);
	var colorE = Math.floor(Math.random() * 256);
	var colorF = Math.floor(Math.random() * 256);
	var randomColor1 = "rgb(" + colorA +"," + colorB + "," 
					+ colorC +")";
	var randomColor2 = "rgb(" + colorD +"," + colorE + "," 
					+ colorF +")";			
	
	body.style.background = 
	"linear-gradient(to right, " 
	+ randomColor1 
	+ ", " 
	+ randomColor2
	+ ")";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomizeColor);