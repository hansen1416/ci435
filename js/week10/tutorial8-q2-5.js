window.addEventListener('load', function() {
    // This function will execute once the entire page is fully loaded.
    console.log('The DOM is fully loaded and ready.');
  
    // --- Task 3: Event listener for btn3 ---
    const button3 = document.getElementById('btn3');
    if (button3) {
      button3.addEventListener('click', function() {
        console.log('Clicked');
      });
    } else {
      console.error('Button with id "btn3" not found.');
    }
  
    // --- Task 4: Event listener for btn4 ---
    const button4 = document.getElementById('btn4');
    if (button4) {
      button4.addEventListener('click', function() {
        const paragraph4 = document.getElementById('p4');
        if (paragraph4) {
          console.log('Current text of p4:', paragraph4.textContent);
          paragraph4.textContent = 'Success';
          console.log('p4 text updated to "Success"');
        } else {
          console.error('Paragraph with id "p4" not found.');
        }
      });
    } else {
      console.error('Button with id "btn4" not found.');
    }
  
    // --- Task 5: Event listener for btn5 ---
    const button5 = document.getElementById('btn5');
    if (button5) {
      button5.addEventListener('click', function() {
        const allParagraphs = document.querySelectorAll('p'); // Gets all <p> elements
        if (allParagraphs.length > 0) {
          console.log('Text content of all paragraph elements:');
          allParagraphs.forEach(function(paragraph, index) {
            console.log(`Paragraph ${index + 1}:`, paragraph.textContent);
          });
        } else {
          console.log('No paragraph elements found on the page.');
        }
      });
    } else {
      console.error('Button with id "btn5" not found.');
    }
  
    // You can add more event listeners or setup code here
  });