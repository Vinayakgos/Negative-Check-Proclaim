document.getElementById('highlight-btn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: highlightNegativeAmounts
      });
    });
  });
  
  function highlightNegativeAmounts() {
    const inputs = document.querySelectorAll('input.form-control.text-right');
  
    inputs.forEach(input => {
      const value = parseFloat(input.value);
      if (!isNaN(value) && value < 0) {
        input.style.backgroundColor = 'yellow';
      }
    });
  }
  