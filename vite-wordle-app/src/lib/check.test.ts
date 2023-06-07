import { describe, it, expect } from "vitest";
import { checkLetter, processGuess } from "./check";
import { Guess } from "./types";

describe("check functions:", () => {
  it("processGuess:", () => {
    const chk = processGuess("helot", "hello");
    // first letter should be green
    expect(chk.letters[0].state).toEqual("green");
    expect(chk.letters[1].state).toEqual("green");
    expect(chk.letters[2].state).toEqual("green");
    expect(chk.letters[3].state).toEqual("yellow");
    expect(chk.letters[4].state).toEqual("grey");
  });

  describe("getLetterState:", () => {
    it("returns values from guesses", () => {
      const guesses: Guess[] = [
        {
          letters: [
            { letter: "a", state: "green" },
            { letter: "b", state: "yellow" },
            { letter: "c", state: "grey" },
          ],
        },
        {
          letters: [
            { letter: "b", state: "yellow" },
            { letter: "a", state: "yellow" },
            { letter: "c", state: "grey" },
          ],
        },
        {
          letters: [
            { letter: "b", state: "yellow" },
            { letter: "a", state: "yellow" },
            { letter: "x", state: "green" },
          ],
        },
      ];

      expect(checkLetter("a", guesses)).toEqual("green");
      expect(checkLetter("b", guesses)).toEqual("yellow");
      expect(checkLetter("c", guesses)).toEqual("grey");
      expect(checkLetter("d", guesses)).toEqual("white");
      expect(checkLetter("x", guesses)).toEqual("green");
    });
  });
});
