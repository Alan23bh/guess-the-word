const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.getElementById("letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const numOfGuessesSpan = document.querySelector("p span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
  }
  wordInProgress.innerText = placeholderLetters.join("");
};
placeholder(word);
guessButton.addEventListener("click", function (e) {
  e.preventDefault();
  message.innerText = "";
  const guess = letterInput.value;
  console.log(guess);
  letterInput.value = "";

  const goodGuess = checkInputValue(guess);
  if (goodGuess) {
    makeGuess(guess);
  }
});
const checkInputValue = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    message.innerText = "Please enter a letter.";
  } else if (input.length > 1) {
    message.innerText = "Please enter a single letter.";
  } else if (!input.match(acceptedLetter)) {
    message.innerText = "Please enter a letter from A to Z.";
  } else {
    return input;
  }
};
const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "C'mon now you already done guessed that letter.";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
  }
};
