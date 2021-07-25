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

export const shortenName = (fullname) => {
    return `${fullname.givenName} ${fullname.middleName[0]}. ${fullname.familyName}`;
};

//=================
// AVERAGE
//=================
export const averageNumber = (num) => {
    let total = num.reduce((sum, current) => sum + current, 0);
    return total / num.length;
};

//=================
// WORDS
//=================
export const wordsLength = (word) => {
    const newWord = word.split(/[\s,]/g).filter((ch) => ch !== "");
    return newWord.length;
};
