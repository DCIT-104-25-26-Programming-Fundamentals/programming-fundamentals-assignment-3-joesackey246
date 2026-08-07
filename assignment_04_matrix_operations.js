// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readlineSync = require('readline-sync');

// Step 1: Read a matrix from the user (dimensions + row values).
function readMatrix(label) {
    const rows = readlineSync.questionInt(`Enter number of rows for ${label}: `);
    const cols = readlineSync.questionInt(`Enter number of columns for ${label}: `);

    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const line = readlineSync.question(`Enter row ${i + 1}: `);
        const row = line.trim().split(' ').map(Number);
        matrix.push(row);
    }

    return matrix;
}

// Step 2: Print a matrix in a neat, aligned grid format.
function printMatrix(matrix, title) {
    console.log(`\n${title}:`);
    for (let i = 0; i < matrix.length; i++) {
        let rowStr = '';
        for (let j = 0; j < matrix[i].length; j++) {
            // Pad each number to a fixed width of 4 characters for alignment
            rowStr += matrix[i][j].toString().padStart(4) + '  ';
        }
        console.log(rowStr);
    }
}

// Step 3 (Part A): Transpose a matrix — rows become columns.
function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Create an empty cols x rows matrix filled with zeros
    const result = [];
    for (let i = 0; i < cols; i++) {
        result.push(new Array(rows).fill(0));
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[j][i] = matrix[i][j];
        }
    }

    return result;
}

// Step 4 (Part B): Add two matrices of the same size, element by element.
function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const cols = matrixA[0].length;

    const result = [];
    for (let i = 0; i < rows; i++) {
        result.push(new Array(cols).fill(0));
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }

    return result;
}

// Step 5 (Part C): Multiply matrix A (M x N) by matrix B (N x P).
function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;

    const result = [];
    for (let i = 0; i < rowsA; i++) {
        result.push(new Array(colsB).fill(0));
    }

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            let total = 0;
            for (let k = 0; k < colsA; k++) {
                total += matrixA[i][k] * matrixB[k][j];
            }
            result[i][j] = total;
        }
    }

    return result;
}

// Step 6: main() ties everything together.
function main() {
    console.log("=== PART A: Transpose a Matrix ===");
    const matrix = readMatrix("the matrix");
    printMatrix(matrix, "Original Matrix");
    printMatrix(transpose(matrix), "Transposed Matrix");

    console.log("\n=== PART B: Add Two Matrices ===");
    const matrixA = readMatrix("Matrix A");
    const matrixB = readMatrix("Matrix B (must match Matrix A's size)");

    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        console.log("Error: Matrices must be the same size to add.");
    } else {
        printMatrix(matrixA, "Matrix A");
        printMatrix(matrixB, "Matrix B");
        printMatrix(addMatrices(matrixA, matrixB), "Sum (A + B)");
    }

    console.log("\n=== PART C: Multiply Two Matrices ===");
    const matrixC = readMatrix("Matrix A (size M x N)");
    const matrixD = readMatrix("Matrix B (size N x P)");

    if (matrixC[0].length !== matrixD.length) {
        console.log("Error: Number of columns in A must equal number of rows in B.");
    } else {
        printMatrix(matrixC, "Matrix A");
        printMatrix(matrixD, "Matrix B");
        printMatrix(multiplyMatrices(matrixC, matrixD), "Product (A x B)");
    }
}

main();