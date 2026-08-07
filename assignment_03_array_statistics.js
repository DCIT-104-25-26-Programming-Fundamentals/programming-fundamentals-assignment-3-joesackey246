// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// TASK: Array Statistics Calculator
// =============================================================================

const readlineSync = require('readline-sync');

// Step 1: Read N numbers from the user and return them as an array.
function readNumbers(n) {
    const numbers = [];
    for (let i = 0; i < n; i++) {
        const value = readlineSync.questionInt(`Enter number ${i + 1}: `);
        numbers.push(value);
    }
    return numbers;
}

// Step 2: Calculate the sum of all numbers using a loop (no reduce()).
function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Step 3: Calculate the average using calculateSum().
function calculateAverage(numbers) {
    const sum = calculateSum(numbers);
    return sum / numbers.length;
}

// Step 4: Find the maximum value using a loop (no Math.max()).
function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// Step 5: Find the minimum value using a loop (no Math.min()).
function findMin(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

// Step 6: main() ties everything together.
function main() {
    const n = readlineSync.questionInt("How many numbers? ");

    // Validate that n is a positive integer.
    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
        return;
    }

    const numbers = readNumbers(n);

    const sum = calculateSum(numbers);
    const average = calculateAverage(numbers);
    const max = findMax(numbers);
    const min = findMin(numbers);

    console.log("\nResults:");
    console.log(`Sum:     ${sum}`);
    console.log(`Average: ${average}`);
    console.log(`Maximum: ${max}`);
    console.log(`Minimum: ${min}`);
}

main();
