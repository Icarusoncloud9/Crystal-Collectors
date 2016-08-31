// Stating of Variables -----------------------------------------------------------------------------
// Variables of button inputs
$(document).ready(function() {

var red = $("#red");
var yellow = $("#yellow");
var green = $("#green");
var blue = $("#blue");

// Variables for counter displays
var winDisplay = $("#wins");
var lossDisplay = $("#losses");
var userScoreDisplay = $("#userScore");
var randomNumber = $("#randomNumber");

// Variables of random number and of the user score
var wins = 0;
var losses = 0;
var userScore = 0;

// Value parameters of randomNumber
var minValueOfRandomNumber = 19;
var maxValueOfRandomNumber = 120;

// Value parameters of gems
var valueOfGem = [red, yellow, green, blue];

// Providing the ability to listen to music
var audioElement = document.createElement('audio');
	audioElement.setAttribute('src', 'Assets/audio/crystalCastles.mp3');

var ping = document.createElement('audio');
	ping.setAttribute('src', 'Assets/audio/ping.mp3');

var lose = document.createElement('audio');
	lose.setAttribute('src', 'Assets/audio/lose.wav');

var win = document.createElement('audio');
	win.setAttribute('src', 'Assets/audio/win.mp3');

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
	// console.log("Line 59", randomNumber);
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
	winDisplay.html(wins);
	lossDisplay.html(losses);
	userScoreDisplay.html(userScore);
}

function winOrLose() {
	console.log(userScore, "Line 114");
	console.log(randomNumber, "Line 115");
	if (userScore === randomNumber) {
		// alert("You won"); // Check
		win.play();
		wins++;
		getRandomNumber(minValueOfRandomNumber, maxValueOfRandomNumber);
		gemValue();
		counterDisplay();
		userScore = 0;
		userScoreDisplay.html(userScore);
	} 
	if (userScore > randomNumber) {
		// alert("You lose"); // Check
		lose.play();
		losses++;
		getRandomNumber(minValueOfRandomNumber, maxValueOfRandomNumber);
		gemValue();
		counterDisplay();
		userScore = 0;
		userScoreDisplay.html(userScore);
	} 
}
function check() {
	red.on("click", function() {
			ping.play();
			userScore = userScore + valueOfGem[0]; // This is Red
			userScoreDisplay.html(userScore);
			winOrLose();
			console.log(userScore); // Check	
	}) 
	yellow.on("click", function() {
			ping.play();
			userScore = userScore + valueOfGem[1];
			userScoreDisplay.html(userScore);
			winOrLose();
			console.log(userScore); // Check	
	})
	green.on("click", function() {
			ping.play();
			userScore = userScore + valueOfGem[2];
			userScoreDisplay.html(userScore);
			winOrLose();
			console.log(userScore); // Check	
	})
	blue.on("click", function() {
			ping.play();
			userScore = userScore + valueOfGem[3];
			userScoreDisplay.html(userScore);
			winOrLose();
			console.log(userScore); // Check	
	})
}

// Main Code goes here -----------------------------------------------------------------------------
getRandomNumber(minValueOfRandomNumber, maxValueOfRandomNumber);
gemValue();
counterDisplay();
check();
})