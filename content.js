// content.js

// Function to highlight negative amounts
function highlightNegativeAmounts() {
    const inputs = document.querySelectorAll('input.form-control.text-right');
    
    inputs.forEach(input => {
      const value = parseFloat(input.value.trim());
      if (!isNaN(value) && value < 0) {
        input.style.backgroundColor = 'yellow';
      }
    });
  }
  
  // Function to find and highlight corresponding positive amounts
  function highlightCorrespondingPositiveAmounts() {
    const inputs = document.querySelectorAll('input.form-control.text-right');
    
    // Step 1: Collect absolute values of highlighted negative amounts
    let negativeValues = [];
    inputs.forEach(input => {
      const value = parseFloat(input.value.trim());
      if (!isNaN(value) && value < 0) {
        negativeValues.push(Math.abs(value));
      }
    });
  
    // Step 2: Find and highlight corresponding positive amounts
    inputs.forEach(input => {
      const value = parseFloat(input.value.trim());
      if (!isNaN(value) && value > 0) {
        // Check if there's a negative amount with the same absolute value
        const foundNegative = negativeValues.includes(value);
        if (foundNegative) {
          input.style.backgroundColor = 'yellow';
        }
      }
    });
  }
  
  // Export the functions to be used in popup.js or for future adjustments
  window.highlightNegativeAmounts = highlightNegativeAmounts;
  window.highlightCorrespondingPositiveAmounts = highlightCorrespondingPositiveAmounts;
