let button = null; // Store reference to the button

document.addEventListener("mouseup", (event) => {
  let selectedText = window.getSelection().toString().trim();

  // Remove existing button if it exists
  if (button) {
    button.remove();
    button = null;
  }

  if (selectedText.length > 0) {
    button = document.createElement("button");
    button.innerText = "🔍";
    button.style.position = "absolute";
    button.style.left = `${event.pageX}px`;
    button.style.top = `${event.pageY}px`;
    button.style.zIndex = "9999";
    button.style.padding = "5px";
    button.style.cursor = "pointer";
    button.style.background = "#007bff";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "50%";
    document.body.appendChild(button);

    button.addEventListener("click", () => {
      chrome.runtime.sendMessage({ text: selectedText }, (response) => {
        alert("API Response: " + response.data);
      });
      button.remove();
      button = null;
    });
  }
});

// Remove button if user clicks anywhere without selecting text
document.addEventListener("mousedown", () => {
  if (button) {
    button.remove();
    button = null;
  }
});
