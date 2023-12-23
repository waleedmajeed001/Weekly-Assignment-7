// Create a function that takes a positive integer as parameter and uses
// a for loop to calculate and return the factorial of that number.

function calculateFactorial(n: number): number {
    if (n < 0) {
        throw new Error("Input must be a positive integer");
    }

    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
 
    return factorial;
}

var result = calculateFactorial(7);
console.log(`Factorial: ${result}`);