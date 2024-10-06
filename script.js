// Function that will calculate BMI
function calculateBMI() {
    // takes inputs from users
    var weight = (document.getElementById('weight').value);
    var height = (document.getElementById('height').value);
    var output = document.getElementById('output');

    // checking that the number or input is less than 0 and 
    if (weight <= 0 || height <= 0) {
        output.textContent = 'Please enter positive numbers for weight and height.';
        return;
    }

    // Calculating BMI
    var bmi = weight / (height * height);
    // Round the value to 2 decimal places
    var roundedBMI = bmi.toFixed(2); 
    var category = '';

    // BMI category based on the calculated BMI:
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // shows output
    output.textContent = `Your BMI is ${roundedBMI}and your Category is : ${category}`;
}
