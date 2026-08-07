// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        -------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// TASK: Fibonacci Sequence Generator
// =============================================================================

const readlineSync = require('readline-sync');

// Step 1 (Part A): Generate and print the first N Fibonacci terms.
function printFibonacciTerms(n) {
    const sequence = [];
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        sequence.push(a);
        // Move to the next pair: b becomes the new "a", a+b becomes the new "b"
        const next = a + b;
        a = b;
        b = next;
    }

    console.log("Fibonacci sequence: " + sequence.join(' '));
}

// Step 2 (Part B): Check whether a given number appears in the sequence.
function isFibonacciNumber(num) {
    // Special case: 0 is always the first Fibonacci number.
    if (num < 0) {
        return false;
    }

    let a = 0;
    let b = 1;

    // Generate Fibonacci numbers using a loop until we reach or pass num.
    while (a < num) {
        const next = a + b;
        a = b;
        b = next;
    }

    // If we landed exactly on num, it's a Fibonacci number.
    return a === num;
}

// Step 3: main() ties both parts together.
function main() {
    console.log("=== PART A: Print the First N Terms ===");
    const n = readlineSync.questionInt("How many terms? ");

    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
    } else {
        printFibonacciTerms(n);
    }

    console.log("\n=== PART B: Check if a Number Belongs to the Sequence ===");
    const num = readlineSync.questionInt("Enter a number to check: ");

    if (isFibonacciNumber(num)) {
        console.log(`${num} is a Fibonacci number.`);
    } else {
        console.log(`${num} is NOT a Fibonacci number.`);
    }
}

main();