import { dogYears, fizzBuzz, shortenName } from "./index.js";

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
describe("shortenName", () => {
    /**
     * Takes persons name and returns shortened version
     * @param {Object}  Object  The person details
     * @return {String} String  String of persons name
     */
    it("takes full name and returns shortened version", () => {
        const person = {
            givenName: "Robert",
            middleName: "Cecil",
            familyName: "Martin",
        };

        expect(shortenName(person)).toBe("Robert C. Martin");
    });
});

//=================
// AVERAGE
//=================
describe("averageNumber", () => {
    /**
     * Takes an Array of numbers and return the average of the total sum
     * @param {Array} Array Array of numbers
     * @return {Number}     The average of total sum
     */
    it("returns the average of the sum", () => {
        expect(averageNumber(num)).toBe(13);
    });
});
