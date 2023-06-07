import { checkLetter, processGuess } from "./check";
import { Guess, Letter, LetterState } from "./types";
import { words } from "./words";
import { validGuesses } from "./valid-guesses";

export type GameState = {
  letters: Letter[];
};

export class Game {
  word: string;
  allWords: string[] = [...validGuesses, ...words];
  guesses: Guess[] = [];
  totalGuesses: number = 12;
  constructor(word?: string) {
    // extract a random word from the words array
    if (word) {
      this.word = word.toUpperCase();
    } else {
      this.word = words[Math.floor(Math.random() * words.length)].toUpperCase();
    }
  }

  get guessesLeft(): number {
    return this.totalGuesses - this.guesses.length;
  }

  isValidGuess(guess: string): boolean {
    return this.allWords.includes(guess.toLowerCase());
  }

  guess(word: string): Guess {
    if (this.guessesLeft === 0) {
      throw new Error("No guesses left");
    }
    const result = processGuess(word.toUpperCase(), this.word);
    this.guesses.push(result);
    return result;
  }

  get state(): Letter[] {
    return "abcdefghijklmnopqrstuvwxyz"
      .toUpperCase()
      .split("")
      .map((letter) => {
        return {
          letter: letter,
          state: this.getLetterState(letter),
        } as Letter;
      });
  }

  getLetterState(letter: string): LetterState {
    return checkLetter(letter, this.guesses);
  }
}
