function highlightNegativeAmounts() {
    const inputs = document.querySelectorAll('input.form-control.text-right');
  
    inputs.forEach(input => {
      const value = parseFloat(input.value);
      if (!isNaN(value) && value < 0) {
        input.style.backgroundColor = 'yellow';
      }
    });
  }
  
  // Export the function to be used in popup.js
  window.highlightNegativeAmounts = highlightNegativeAmounts;
  