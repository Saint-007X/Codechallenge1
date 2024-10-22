//Write a program that prompts the user to input student marks. The input should be between 0 and 100. 
//Then output the correct grade:

// Function to get the grade based on marks


const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get the grade based on marks
function getGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60) {
        return 'B';
    } else if (marks >= 49) {
        return 'C';
    } else if (marks >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

// Prompt the user for input
rl.question('Please enter student marks (0-100): ', (userInput) => {
    // Convert the input to a number
    let marks = Number(userInput);

    // Validate the input
    if (marks >= 0 && marks <= 100) {
        // Get the grade
        let grade = getGrade(marks);
        // Output the result
        console.log(`The grade for ${marks} marks is: ${grade}`);
    } else {
        console.log("Invalid input. Please enter a number between 0 and 100.");
    }

    // Close the readline interface
    rl.close();
});