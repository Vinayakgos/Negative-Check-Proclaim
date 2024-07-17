// content.js

// Function to highlight negative amounts in red
function highlightNegativeAmounts() {
    const inputs = document.querySelectorAll('input.form-control.text-right');
    
    inputs.forEach(input => {
      const value = parseFloat(input.value.trim());
      if (!isNaN(value) && value < 0) {
        input.style.backgroundColor = 'red';
      }
    });
  }
  
  // Function to find and highlight corresponding positive amounts with unique colors for each pair
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
          const color = getRandomColorExcludingRed();
          negative.input.style.backgroundColor = color;
          input.style.backgroundColor = color;
          colorPairs.push({ negative: negative.input, positive: input, color: color });
        }
      });
    });
  }
  
  // Function to generate a random color excluding red
  function getRandomColorExcludingRed() {
    const letters = '0123456789ABCDEF';
    let color;
    do {
      color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
    } while (color === '#FF0000');
    return color;
  }
  
  // Export the functions to be used in popup.js or for future adjustments
  window.highlightNegativeAmounts = highlightNegativeAmounts;
  window.highlightCorrespondingPositiveAmounts = highlightCorrespondingPositiveAmounts;
  
