// content.js

// Function to highlight negative amounts in yellow
function highlightNegativeAmounts() {
  const inputs = document.querySelectorAll('input.form-control.text-right');
  
  inputs.forEach(input => {
    const value = parseFloat(input.value.trim());
    if (!isNaN(value) && value < 0) {
      input.style.backgroundColor = 'yellow';
    }
  });
}

// Function to find and highlight corresponding positive amounts with unique lighter colors for each pair
function highlightCorrespondingPositiveAmounts() {
  const inputs = document.querySelectorAll('input.form-control.text-right');
  
  // Step 1: Collect absolute values of highlighted negative amounts
  let negativeValues = [];
  let colorPairs = [];
  
  inputs.forEach(input => {
    const value = parseFloat(input.value.trim());
    if (!isNaN(value) && value < 0) {
      negativeValues.push({
        value: Math.abs(value),
        input: input
      });
    }
  });

  // Step 2: Find and highlight corresponding positive amounts
  negativeValues.forEach(negative => {
    inputs.forEach(input => {
      const value = parseFloat(input.value.trim());
      if (!isNaN(value) && value === negative.value) {
        const color = getRandomLighterColorExcludingYellowShades();
        negative.input.style.backgroundColor = color;
        input.style.backgroundColor = color;
        colorPairs.push({ negative: negative.input, positive: input, color: color });
      }
    });
  });
}

// Function to generate a random lighter color excluding yellow and its shades
function getRandomLighterColorExcludingYellowShades() {
  const letters = '89ABCDEF';
  let color;
  do {
    color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 8)];
    }
  } while (isYellowShade(color)); // Exclude yellow and its shades
  return color;
}

// Function to check if a color is a shade of yellow
function isYellowShade(color) {
  // Convert hex to RGB
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  // Check if the color is close to yellow
  return (r > 200 && g > 200 && b < 150);
}

// Export the functions to be used in popup.js or for future adjustments
window.highlightNegativeAmounts = highlightNegativeAmounts;
window.highlightCorrespondingPositiveAmounts = highlightCorrespondingPositiveAmounts;
