// Function that will calculate BMI
function calculateBMI() {
    // Get user input values
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var output = document.getElementById('output');

    // checking that the number or input is less than 0 and 
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        output.textContent = 'Please enter positive numbers for weight and height.';
        return;
    }

    // Calculating BMI
    var bmi = weight / (height * height);
    // Round the value to 2 decimal places
    var roundedBMI = bmi.toFixed(2); 
    let categoryMessage = '';

    // Determine BMI category
    if (bmi < 18.5) {
        categoryMessage = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        categoryMessage = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        categoryMessage = 'Overweight';
    } else {
        categoryMessage = 'Obesity';
    }

    // Display result
    resultDiv.textContent = `Your BMI is ${roundedBMI}. Category: ${categoryMessage}`;
}

// Attach event listener to the button
document.getElementById('calculate-btn').addEventListener('click', calculateBMI);
