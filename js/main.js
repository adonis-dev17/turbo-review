// *Variables*
//1. Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink = ' Coke ' ;
favDrink = favDrink.trim();
console.log(favDrink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let fruits = "Eve gave bananaapplepapaya to Adam."
if (fruits.search('apple') !== -1) {
  console.log('Yes, there is "apple" in there.');
} else {
  console.log('No "apple" in there.');
}


// *Functions*
//2. Create a function that returns rock, paper, or scissors as randomly as possible
// let tool = ['rock', 'paper', 'scissors'];

// function selectRandomTool() {
//   const min = 0;
//   const max = tool.length;
//   const randomIndex = Math.floor(Math.random() * (max - min)) + min;
//   console.log (tool[randomIndex]);
// }

// selectRandomTool();

// Another way to solve it:
let tool = ['rock', 'paper', 'scissors'];

function selectRandomTool() {
  let randomIndex = Math.random();
  if (randomIndex < 0.33) {
    return 'Rock';
  }else if (randomIndex < 0.66) {
    return 'Scissors';
  }else {
    return'Paper';
  }
}

// *Conditionals*
//3. Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function meVersusBot(playersChoice) {
  let botChoice = selectRandomTool();

  if ((playersChoice === 'Rock' && botChoice === 'Scissors' || playersChoice === 'Scissors' && botChoice === 'Paper' || playersChoice === 'Paper' && botChoice === 'Rock')) {
    console.log('You win!');
  } else if (playersChoice === botChoice) {
    console.log('You tied!');
  } else {
    console.log('You lose!');
  }
}


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function xGames (arr) {
  arr.forEach(choice => meVersusBot(choice))
}

xGames(['Rock', 'Paper', 'Scissors']);