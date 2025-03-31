chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  fetch("http://127.0.0.1:5000/process", {
    // Update with your actual API URL
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: request.text }),
  })
    .then((response) => response.json())
    .then((data) => sendResponse({ data: data.result }))
    .catch((error) => sendResponse({ data: "Error: " + error.message }));

  return true; // Keeps the messaging channel open for async response
});
