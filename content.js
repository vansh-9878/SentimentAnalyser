let button = null; // Store reference to button

document.addEventListener("mouseup", (event) => {
  let selectedText = window.getSelection().toString().trim();

  if (!selectedText.length) {
    if (button) {
      button.remove();
      button = null;
    }
    return;
  }

  if (button) {
    button.remove();
  }

  button = document.createElement("button");
  button.innerHTML = "🔍";
  button.style.position = "absolute";
  button.style.left = `${event.pageX + 10}px`;
  button.style.top = `${event.pageY + 10}px`;
  button.style.zIndex = "9999";
  button.style.padding = "10px 12px";
  button.style.fontSize = "18px";
  button.style.cursor = "pointer";
  button.style.background = "#ff5e00";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "50%";
  button.style.boxShadow = "0px 4px 8px rgba(0,0,0,0.3)";
  button.style.transition = "transform 0.2s, background 0.2s";

  // Hover effect
  button.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.1)";
    button.style.background = "#e14d00"; // Darker shade on hover
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
    button.style.background = "#ff5e00";
  });

  document.body.appendChild(button);

  button.addEventListener("mouseup", (e) => {
    e.stopPropagation();
  });

  button.addEventListener("click", () => {
    chrome.runtime.sendMessage({ text: selectedText }, (response) => {
      alert("Sentiment: " + response.data);
    });

    button.remove();
    button = null;
  });
});

document.addEventListener("mousedown", (event) => {
  if (button && !button.contains(event.target)) {
    button.remove();
    button = null;
  }
});
