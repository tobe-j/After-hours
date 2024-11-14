function lastTwoDigitsOfFactorial(n) {
    if (n < 0) {
        return "Invalid input: Factorial is not defined for negative numbers.";
    }
    
    let factorial = 1;

    // Calculate factorial
    for (let i = 2; i <= n; i++) {
        factorial *= i;

        // To prevent large numbers, we can keep only the last two digits
        factorial %= 100;
    }

    return factorial;
}

// Example usage:
let matricNumber = 10; // Replace with your matric number
console.log(The last two digits of ${matricNumber}! are: ${lastTwoDigitsOfFactorial(matricNumber)});
