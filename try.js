document.getElementById('submit').addEventListener('click', function() {
  // Get the height and weight values from the input fields
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);

  // Check if height and weight are valid numbers
  if (isNaN(height) || isNaN(weight)) {
    alert('Please enter valid numbers for height and weight.');
    return;
  }

  // Calculate BMI
  const bmi = weight / Math.pow(height / 100, 2);

  // Display the BMI result
  document.getElementById('result').textContent = bmi.toFixed(2);

  // Update weight, height and age in result section
  document.getElementById('weightResult').textContent = weight + ' kg';
  document.getElementById('heightResult').textContent = height + ' cm';
  // Age is not collected in this form, so you can remove this line or add age input field in the HTML
  document.getElementById('ageResult').textContent = '--';

  // Display comment based on BMI range
  let comment;
  if (bmi < 18.5) {
    comment = 'Underweight';
    document.getElementById('result-image').src = 'skinny.png';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    comment = 'Normal weight';
    document.getElementById('result-image').src = 'lean.png';
  } else if (bmi >= 25 && bmi <= 29.9) {
    comment = 'Overweight';
    document.getElementById('result-image').src = 'unfit.png';
  } else if (bmi >= 30) {
    comment = 'Obese';
    document.getElementById('result-image').src = 'obese.png';
  }
  document.querySelector('.comment').textContent = comment; // Update comment text content
  document.querySelector('.comment').style.display = 'block';
});
document.addEventListener('DOMContentLoaded', function() {
  const homeLink = document.querySelector('.navComponents a[href="#home"]');
  const usagesLink = document.querySelector('.navComponents a[href="#usages"]');
  const informationLink = document.querySelector('.navComponents a[href="#information"]');
  const contactLink = document.querySelector('.navComponents a[href="#contact"]');
  const footerLink = document.querySelector('.footer a');

  function scrollToElement(element) {
      element.scrollIntoView({ behavior: 'smooth' });
  }

  homeLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToElement(document.getElementById('navbar'));
  });

  usagesLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToElement(document.querySelector('.Usages'));
  });

  informationLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToElement(document.querySelector('.information'));
  });

  contactLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToElement(document.querySelector('footer'));
  });

  footerLink.addEventListener('click', function(event) {
      event.preventDefault();
      scrollToElement(document.querySelector('body'));
  });
});
