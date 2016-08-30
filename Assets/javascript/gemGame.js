// Stating of Variables -----------------------------------------------------------------------------
// Variables of button inputs
$(document).ready(function() {

var red = $("#red");
var yellow = $("#yellow");
var green = $("#green");
var blue = $("#blue");

// Variables for counter displays
var wins = $("#wins");
var losses = $("#losses");

// Variables of random number and of the user score
var randomNumber = $("#randomNumber");
var userScore = 0;
var userScoreDisplay = $("#userScore");

// Value parameters of randomNumber
var minValueOfRandomNumber = 19;
var maxValueOfRandomNumber = 120;

// Value parameters of gems
var valueOfGem = [red, yellow, green, blue];

// Providing the ability to listen to music
var audioElement = document.createElement('audio');
	        audioElement.setAttribute('src', 'Assets/audio/crystalCastles.mp3');
// Functions ---------------------------------------------------------------------------------------
// Function to test if buttons work

// red.on("click", function() {
// 	alert("message");
// });
// yellow.on("click", function() {
// 	alert("message");
// });
// green.on("click", function() {
// 	alert("message");
// });
// blue.on("click", function() {
// 	alert("message");
// });

// Music Button
$("#play").on("click", function(){
	audioElement.play();
});

$("#stop").on("click", function(){
	audioElement.pause();
});

// Function to generate a value for each button variable
// a is minimum, b is maximum
function getRandomNumber(a, b) {
	randomNumber = Math.floor(Math.random()*(b - a) + a);
	$("#randomNumber").html(randomNumber);
	console.log(randomNumber);
}

// Function to generate a value for each gem
function gemValue() {
	for(i=0;i<valueOfGem.length;i++) {
		valueOfGem[i] = Math.floor(Math.random()*(12 - 1) + 1);
		console.log(valueOfGem[i]);
	}
}
// Function to display wins and loss counter
function counterDisplay() {
	$("#wins").html(wins);
	$("#losses").html(losses);
}
function checkToWin() {

}


// Main Code goes here -----------------------------------------------------------------------------
getRandomNumber(minValueOfRandomNumber, maxValueOfRandomNumber);
gemValue();
counterDisplay();
red.on("click", function() {
		userScore = userScore + valueOfGem[0];
		console.log(userScore);
}) 
yellow.on("click", function() {
		userScore = userScore + valueOfGem[1];
		console.log(userScore);
})
green.on("click", function() {
		userScore = userScore + valueOfGem[2];
		console.log(userScore);
})
blue.on("click", function() {
		userScore = userScore + valueOfGem[3];
		console.log(userScore);

})
})