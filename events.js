
var outputToDOM = document.getElementById("output-target");
var userTextInput = document.getElementById("keypress-input");
var pageTitleH1Tag = document.getElementById("page-title");
// var guineaPigDiv = document.getElementById("guinea-pig");

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

// guineaPigDiv.addEventListener("click", function(e) {

// })
