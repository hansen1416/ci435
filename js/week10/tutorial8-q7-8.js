window.addEventListener('load', function() {
  // ... (your previous code for btn3, btn4, btn5, and div6 can remain here) ...
  console.log('DOM fully loaded. Setting up listeners for a7 and td elements.');

  // --- Task 7: Click listener for anchor a7 ---
  const anchor7 = document.getElementById('a7');
  if (anchor7) {
    anchor7.addEventListener('click', function(event) {
      // Log the link target (href attribute)
      const linkTarget = anchor7.href; // or event.currentTarget.href
      console.log('Anchor a7 clicked. Link target (href):', linkTarget);

      // Prevent the default action of the anchor
      event.preventDefault();
      console.log('Default navigation for a7 prevented.');
    });
  } else {
    console.error('Anchor element with id "a7" not found.');
  }

  // --- Task 8: Click event listener for all table cell <td> elements ---
  const allTableCells = document.querySelectorAll('td');
  if (allTableCells.length > 0) {
    allTableCells.forEach(function(cell) {
      cell.addEventListener('click', function(event) {
        // 'event.currentTarget' refers to the cell the listener is attached to
        // In this case, it's the same as 'cell' from the forEach loop
        const clickedCell = event.currentTarget;
        console.log('TD element clicked. Original text:', clickedCell.textContent);
        clickedCell.textContent = 'Success';
        console.log('TD element text updated to "Success"');
      });
    });
    console.log(`Attached click listeners to ${allTableCells.length} <td> elements.`);
  } else {
    console.log('No <td> elements found on the page to attach listeners to.');
  }

  // ... (rest of your load event listener code if any) ...
});