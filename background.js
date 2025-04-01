// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   fetch("http://vansh9878-senti.hf.space/predict/" + request.text, {
//     // Update with your actual API URL
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     // body: JSON.stringify({ text: request.text }),
//   })
//     .then((response) => response.json())
//     .then((data) => sendResponse({ data: data.result }))
//     .catch((error) => sendResponse({ data: "Error: " + error.message }));

//   return true; // Keeps the messaging channel open for async response
// });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Received request:", request.text);

  // Encode the text to avoid spaces and special characters breaking the URL
  let encodedText = encodeURIComponent(request.text);
  let apiUrl = `http://vansh9878-senti.hf.space/predict/${encodedText}`;

  fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("API Response:", data);
      sendResponse({ data: data.result }); // Modify based on actual API response
    })
    .catch((error) => {
      console.error("Fetch error:", error);
      sendResponse({ data: "Error: " + error.message });
    });

  return true; // Keeps sendResponse valid for async response
});
