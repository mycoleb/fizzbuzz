// This program prints numbers from 1 to 100 and determines if they are divisible by 3, 5, or both.
// I wrote a method to handle the logic for determining what to print.

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        console.log(i); // I log the current number first.
        let output = getFizzBuzzOutput(i); // I use my method to determine the additional output.
        if (output) {
            console.log(output); // I log "fizz", "buzz", or "fizzbuzz" based on the number.
        }
    }
}

function getFizzBuzzOutput(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "fizzbuzz";
    } else if (number % 3 === 0) {
        return "fizz";
    } else if (number % 5 === 0) {
        return "buzz";
    } else {
        return ""; // I return an empty string if no conditions are met.
    }
}

fizzBuzz();
