//=================
// DOG AGE
//=================
export const dogYears = (age) => {
    return age * 7;
};

//=================
// FIZZBUZZ
//=================
export const fizzBuzz = (num) => {
    if (num % 3 == 0 && num % 5 == 0) {
        return "FizzBuzz";
    } else if (num % 3 == 0) {
        return "Fizz";
    } else if (num % 5 == 0) {
        return "Buzz";
    } else {
        return "";
    }
};

//=================
// NAME
//=================
export const shortenName = () => {};
