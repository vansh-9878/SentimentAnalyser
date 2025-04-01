let button = null; // Store reference to button

document.addEventListener("mouseup", (event) => {
  let selectedText = window.getSelection().toString().trim();

  // Remove existing button if text is unselected
  if (!selectedText.length) {
    if (button) {
      button.remove();
      button = null;
    }
    return; // Stop execution if no text is selected
  }

  // Remove any previous button before creating a new one
  if (button) {
    button.remove();
  }

  // Create a new button
  button = document.createElement("button");
  button.innerText = "🔍";
  button.style.position = "absolute";
  button.style.left = `${event.pageX + 10}px`;
  button.style.top = `${event.pageY + 10}px`;
  button.style.zIndex = "9999";
  button.style.padding = "5px";
  button.style.cursor = "pointer";
  button.style.background = "#007bff";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "50%";
  button.style.boxShadow = "0px 2px 5px rgba(0,0,0,0.2)";
  document.body.appendChild(button);

  // Prevent button from triggering mouseup again
  button.addEventListener("mouseup", (e) => {
    e.stopPropagation(); // Stops mouseup from re-triggering
  });

  // Handle button click
  button.addEventListener("click", () => {
    chrome.runtime.sendMessage({ text: selectedText }, (response) => {
      alert("API Response: " + response.data);
    });

    // Remove button after clicking
    button.remove();
    button = null;
  });
});

// Remove button when clicking anywhere else
document.addEventListener("mousedown", (event) => {
  if (button && !button.contains(event.target)) {
    button.remove();
    button = null;
  }
});
