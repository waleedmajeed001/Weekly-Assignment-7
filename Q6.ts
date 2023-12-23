// Write a program having an array of numbers if the number is negative
// it should remove the negative number from the array.

function removeNegativeNumbers(array: number[]): number[] {
    return array.filter((number) => number >= 0);
}

var numbers = [1, -2, 2, -4, 9, -6, 34];
var result1 = removeNegativeNumbers(numbers);
console.log("Array with negative numbers removed:", result1);
