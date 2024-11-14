function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

function combination(X, Y) {
    // Ensure X is greater than or equal to Y
    if (Y > X) {
        [X, Y] = [Y, X]; // Swap X and Y
    }
    
    // Calculate C(X, Y)
    const numerator = factorial(X);
    const denominator = factorial(Y) * factorial(X - Y);
    
    return numerator / denominator;
}

// Example usage:
const X = 5; // Replace with your value for X
const Y = 3; // Replace with your value for Y
const result = combination(X, Y);
console.log(C(${X}, ${Y}) = ${result});
