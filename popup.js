// popup.js

document.getElementById('highlight-btn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: () => {
          // Highlight negative amounts first
          window.highlightNegativeAmounts();
          
          // Then find and highlight corresponding positive amounts with unique colors
          window.highlightCorrespondingPositiveAmounts();
        }
      });
    });
  });
  
