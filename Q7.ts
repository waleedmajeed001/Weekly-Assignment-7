// Create a function that takes an array of numbers as parameter. Use a for loop to calculate
// and return the sum of all the numbers in the array.

function calculateSum(numbers: number[]): number {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

var numbersArray = [1, 2, 3, 4, 5];
var totalSum = calculateSum(numbersArray);
console.log("Sum of numbers:", totalSum);
