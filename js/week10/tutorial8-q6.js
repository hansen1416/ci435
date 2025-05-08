window.addEventListener('load', function() {
    // ... (your previous code for btn3, btn4, btn5 can remain here) ...
    console.log('DOM fully loaded. Setting up mouse event listeners for div6.');
  
    // --- Task: Investigate mouse events on div6 ---
    const div6 = document.getElementById('div6');
  
    if (div6) {
      // A reusable function to log event details
      function logMouseEventDetails(event) {
        console.group(`Event: ${event.type}`); // Group logs for readability
        console.log(`Target Element ID: ${event.target.id}`);
        console.log('Mouse Position:');
        console.log(`  - clientX/Y: ${event.clientX}, ${event.clientY} (relative to viewport)`);
        console.log(`  - pageX/Y: ${event.pageX}, ${event.pageY} (relative to document)`);
        console.log(`  - offsetX/Y: ${event.offsetX}, ${event.offsetY} (relative to element's padding edge)`);
        console.log(`  - screenX/Y: ${event.screenX}, ${event.screenY} (relative to screen)`);
        // Other interesting properties
        if (typeof event.button !== 'undefined') { // e.g., for mousedown, mouseup, click
          console.log(`  - button: ${event.button} (0:main, 1:aux, 2:secondary)`);
        }
        if (typeof event.buttons !== 'undefined') { // e.g., for mousemove
           console.log(`  - buttons: ${event.buttons} (bitmask of pressed buttons)`);
        }
        console.groupEnd();
      }
  
      // Array of mouse event types to listen for
      const mouseEventTypes = [
        'mousedown',  // Mouse button pressed down
        'mouseup',    // Mouse button released
        'click',      // Mouse button clicked (after mousedown and mouseup)
        'dblclick',   // Double click
        'mousemove',  // Mouse moved over the element
        'mouseenter', // Mouse pointer enters the element (does not bubble)
        'mouseleave', // Mouse pointer leaves the element (does not bubble)
        'mouseover',  // Mouse pointer moves onto the element or one of its children (bubbles)
        'mouseout',   // Mouse pointer moves off the element or one of its children (bubbles)
        'contextmenu' // Right-click (or equivalent) to open context menu
      ];
  
      // Attach the listener for each event type
      mouseEventTypes.forEach(function(eventType) {
        div6.addEventListener(eventType, logMouseEventDetails);
      });
  
      // Optional: Prevent context menu on right-click to better observe the event log
      // div6.addEventListener('contextmenu', function(event) {
      //   event.preventDefault(); // Stops the browser's context menu from appearing
      // });
  
      console.log('Mouse event listeners attached to div6.');
  
    } else {
      console.error('Element with id "div6" not found.');
    }
  
    // ... (rest of your load event listener code if any) ...
  });