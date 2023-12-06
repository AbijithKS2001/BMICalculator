function calculateBMI() {
  const age = parseInt(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);

  if (isNaN(age) || isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById('result').innerHTML = 'Please enter valid values';
    return;
  }

  const bmi = weight / ((height / 100) * (height / 100));
  let category = '';

  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obesity';
  }

  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `Your BMI is: ${bmi.toFixed(2)}<br>`;
  resultElement.innerHTML += `Category: ${category}<br>`;
  resultElement.innerHTML += `Age: ${age}<br>`;
  resultElement.innerHTML += `Gender: ${gender}`;
}
