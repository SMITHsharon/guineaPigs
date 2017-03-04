
var outputToDOM = document.getElementById("output-target");
var userTextInput = document.getElementById("keypress-input");
var pageTitleH1Tag = document.getElementById("page-title");
var guineaPigDiv = document.getElementById("guinea-pig");
var chgToBlue = document.getElementById("add-color");
var chgToHulk = document.getElementById("make-large");
var chgToBorder = document.getElementById("add-border");
var chgToRounded = document.getElementById("add-rounding");


document.addEventListener("click", function(e) {
	// console.log(e);
	outputToDOM.innerHTML = "You clicked on the " + e.target.innerText + " section";
})

pageTitleH1Tag.addEventListener("mouseover", function(e) {
	outputToDOM.innerHTML = "You moved your mouse over the header";
})

pageTitleH1Tag.addEventListener("mouseout", function(e) {
	outputToDOM.innerHTML = "You left me!!";
})

userTextInput.addEventListener("keyup", function(e) {
	outputToDOM.innerHTML = e.target.value;
})

chgToBlue.addEventListener("click", function(e) {
	guineaPigDiv.classList.add("chgToBlue");
})

chgToHulk.addEventListener("click", function(e) {
	guineaPigDiv.classList.add("chgToHulk");
})

chgToBorder.addEventListener("click", function(e) {
	guineaPigDiv.classList.add("chgToBorder");
})

chgToRounded.addEventListener("click", function(e) {
	guineaPigDiv.classList.add("chgToRounded");
})





