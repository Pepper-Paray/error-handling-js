// Part 1: Understanding try, catch, and finally
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        console.log("Result:", a / b);
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("Execution complete.");
    }
}

// Test the divideNumbers function
divideNumbers(10, 2); // Valid inputs
divideNumbers(10, 0); // Division by zero

// Part 2: Error Handling in Asynchronous Code
async function fetchData() {
    try {
        const response = await fetch("https://httpstat.us/500");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data fetched:", data);
    } catch (error) {
        console.error("Fetch error:", error.message);
    } finally {
        console.log("Fetch attempt finished.");
    }
}

// Test the fetchData function
fetchData();

// Part 3: Debugging JavaScript Errors
function greet(name) {
    if (name === undefined) {
        console.log("Hello, Guest!");
    } else {
        console.log("Hello, " + name);
    }
}

// Test the greet function
greet(); // No name provided
greet("Alice"); // Name provided