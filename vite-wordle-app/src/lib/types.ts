export type LetterState = "white" | "grey" | "yellow" | "green";
export type Letter = {
  letter: string;
  state?: LetterState;
};

export type Guess = {
  letters: Letter[];
};

export type GameState = {
  maxGuesses: number;
  guesses: Guess[];
};
