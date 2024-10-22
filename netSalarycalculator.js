//Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits.

// Function to calculate net salary


function calculateNetSalary(basicSalary, benefits) {
    // Assuming a fixed tax rate for demonstration purposes
    const taxRate = 0.2; // 20%
    
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
    
    // Calculate tax
    const tax = grossSalary * taxRate;
    
    // Calculate net salary
    const netSalary = grossSalary - tax;
    
    return netSalary;
}

// Get user input
function getUserInput() {
    const basicSalary = parseFloat(prompt("Enter your basic salary: "));
    const benefits = parseFloat(prompt("Enter your benefits: "));
    
    // Validate input
    if (isNaN(basicSalary) || isNaN(benefits)) {
        alert("Please enter valid numbers for basic salary and benefits.");
        return;
    }
    
    // Calculate and display net salary
    const netSalary = calculateNetSalary(basicSalary, benefits);
    alert(`Your net salary is: $${netSalary.toFixed(2)}`);
}

// Run the program
getUserInput();