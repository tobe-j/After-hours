function averageOfNumbers(start, end) {
    // Calculate the sum of numbers from start to end
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    
    // Calculate the average
    const average = sum / (end - start + 1);
    return average;
}

// Example usage:
const start = 1;
const end = 10;
const average = averageOfNumbers(start, end);
console.log(The average of numbers from ${start} to ${end} is ${average});
