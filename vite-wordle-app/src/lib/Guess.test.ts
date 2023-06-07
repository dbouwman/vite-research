import { describe, it, test, expect } from "vitest";

import { Game } from "./Game";

describe("Game:", () => {
  it("new game has new word", () => {
    const game = new Game();
    expect(game.word).toBeDefined();
  });
  it("new game has 0 guesses", () => {
    const game = new Game();
    expect(game.guesses).toHaveLength(0);
  });
  it("new game has 6 total guesses", () => {
    const game = new Game();
    expect(game.totalGuesses).toEqual(6);
  });
  it("can pass word into game", () => {
    const game = new Game("hello");
    expect(game.word).toEqual("hello");
  });
  it("making guess increments guesses and returns full guess object ", () => {
    const game = new Game("hello");
    const guess = game.guess("helot");
    expect(game.guesses).toHaveLength(1);
    expect(guess).toEqual({
      letters: [
        { letter: "h", state: "green" },
        { letter: "e", state: "green" },
        { letter: "l", state: "green" },
        { letter: "o", state: "yellow" },
        { letter: "t", state: "grey" },
      ],
    });
    const guess2 = game.guess("hello");
    expect(game.guesses).toHaveLength(2);
    expect(guess2).toEqual({
      letters: [
        { letter: "h", state: "green" },
        { letter: "e", state: "green" },
        { letter: "l", state: "green" },
        { letter: "l", state: "green" },
        { letter: "o", state: "green" },
      ],
    });
    expect(game.guessesLeft).toEqual(4);
  });
});
