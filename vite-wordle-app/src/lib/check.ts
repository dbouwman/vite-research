import { Guess, LetterState } from "./types";
import { validGuesses } from "./valid-guesses";
import { words } from "./words";

export function processGuess(guess: string, word: string): Guess {
  const letters = guess.split("").map((letter, idx) => {
    // default to grey - not in word
    let state: LetterState = "grey";
    // if letter is in word, change state to yellow
    if (word.includes(letter)) {
      state = "yellow";
      // if letter is in correct position, change state to green
      if (word[idx] === letter) {
        state = "green";
      }
    }
    return { letter, state: state };
  });
  return { letters };
}

export function isValidGuess(guess: string): boolean {
  const allWords = [...validGuesses, ...words];
  return allWords.includes(guess.toLowerCase());
}

export function checkLetter(letter: string, guesses: Guess[]): LetterState {
  let state: LetterState = "white";
  guesses.forEach((guess) => {
    guess.letters.forEach((l) => {
      if (l.letter === letter) {
        state = bumpState(state, l.state || "grey");
      }
    });
  });
  return state;
}

function bumpState(state: LetterState, newState: LetterState): LetterState {
  let result: LetterState = state;
  // logic for bumping state:
  // if new state is green, return green
  // if new state is yellow, return yellow if state is not green
  // if new state is grey, return grey if state is not green or yellow
  if (newState === "green") {
    result = "green";
  } else if (newState === "yellow" && state !== "green") {
    result = "yellow";
  } else if (newState === "grey" && state !== "green" && state !== "yellow") {
    result = "grey";
  }

  return result;
}
