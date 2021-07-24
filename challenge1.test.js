import { dogYears, fizzBuzz } from "./index.js";

//=================
// DOG AGE
//=================
describe("dogYears", () => {
    /**
     * Calculate human age into dog years
     * @param {number}  number  Number
     * @return {number}
     */
    it("returns 21", () => {
        expect(dogYears(3)).toBe(21);
    });
});

//=================
// FIZZBUZZ
//=================
describe("fizzBuzz", () => {
    /**
     * Checks a value against two integers, if true return a string
     * @param {number}  Number  Number to divide by 3 or 5
     * @return {string} String  String "Fizz", "Buzz" or "FizzBuzz"
     */
    it('returns "Fizz" if num / 3, "Buzz" if num / 5 and "FizzBuzz" if num / 3 && 5, else return an empty string', () => {
        expect(fizzBuzz(135)).toBe("FizzBuzz");
    });
});

//=================
// NAME
//=================
describe("shortName", () => {
    it("takes a full name and returns a shortened version", () => {
        expect();
    });
});