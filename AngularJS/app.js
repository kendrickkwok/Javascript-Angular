var app = angular.module("Hangman", []);
app.controller("gc", ['$scope', function($scope){
    

var words = ["stupid", "jeffrey", "marisa", "cesar"];
$scope.inccorectLetters = [];
$scope.correctLetters = [];
$scope.lives = 5;
$scope.displayWord = '';
$scope.input = { letter : ''}

var selectRandomWord = function(){
	//Pick random number 
	var index = Math.round(Math.random()*words.length);
	//return the new  
	return words[index];
}

var swapImages = function()
{
	console.log(image[$scope.lives]);
	document.getElementById("images").src = "hangman/" + $scope.lives + ".png";
}

var newGame = function(){
	$scope.incorrectLetters = [];
	$scope.correctLetters = [];
	$scope.lives = 5;
	$scope.displayWord = '';
	selectedWord = selectRandomWord();
	console.log(selectedWord);

	var tempDisplay = '';
	for(var i = 0; i<selectedWord.length; i++)
	{
		tempDisplay += '*';
	}
	$scope.displayWord = tempDisplay;

}

$scope.letterChose = function(){

	for(var i = 0; i < $scope.correctLetters.length; i++)
	{
		if($scope.correctLetters[i].toLowerCase() == $scope.input.letter.toLowerCase())
		{
			$scope.input.letter = '';
			return;
		}		
	}

	for(var i = 0; i < $scope.incorrectLetters.length; i++)
	{
		if($scope.incorrectLetters[i].toLowerCase() == $scope.input.letter.toLowerCase())
		{
			$scope.input.letter = '';
			return;
		}		
	}

	//a flag that will let the user know if the answer is correct
	var flag = false;
	for (var i = selectedWord.length - 1; i >= 0; i--) {
		if(selectedWord[i].toLowerCase() == $scope.input.letter.toLowerCase())
		{
			console.log("executed");
			console.log($scope.displayWord.slice(0,i) + $scope.input.letter.toLowerCase() + $scope.displayWord.slice(i+1));
			$scope.displayWord = $scope.displayWord.slice(0,i) + $scope.input.letter.toLowerCase() + $scope.displayWord.slice(i+1);
			flag = true;
		}
	}

	if(flag)
	{
		$scope.correctLetters.push($scope.input.letter.toLowerCase());
	}
	else
	{
		$scope.incorrectLetters.push($scope.input.letter.toLowerCase());
		$scope.lives--;
		swapImages();
	}

	flag = false;
	$scope.input.letter = '';

	/*Check if the user has won or not*/
	if($scope.lives == 0)
	{
		alert("You lost!");
	}
	if($scope.displayWord.indexOf("*")==-1)
	{
		alert("Wow. You won!");
	}

	/*
	for (var i = 0; i < 6; i++) {
		console.log($scope.displayWords[i]);
	}
	*/

}

newGame();

}])