# 🔍 Sentiment Analysis Chrome Extension

## 🚀 Overview
This Chrome extension allows users to **select text on any webpage** and analyze its sentiment using an **API call to a Hugging Face Space**. The extension breaks the selected text into individual lines, finds the **sentiment of each line**, and provides an **overall sentiment**, which includes :
- Happiness
- Sadness
- Angry
- Surprise
- Neutral

## 🛠 Features
✅ Select any text on a webpage
✅ Click on a floating **sentiment analysis button**
✅ Calls a **Hugging Face Space API** to analyze sentiment
✅ Provides sentiment for **each line** and an **overall sentiment**
✅ Lightweight and easy to use

## 📦 Installation
### **Manual Installation**
1. **Download** the extension files from the [GitHub repository](https://github.com/vansh-9878/SentimentAnalyser).
2. Extract the ZIP file to a folder.
3. Open **Google Chrome** and go to `chrome://extensions/`.
4. **Enable "Developer mode"** (top-right corner).
5. Click **"Load unpacked"** and select the extracted folder.
6. The extension is now installed! 🎉

## 🔧 How to Use
1. **Select text** on any webpage.
2. A **floating sentiment analysis button** (🔎) will appear.
3. Click the **button** to trigger an API call.
4. The extension will analyze each line and display the overall sentiment in an **alert**.

## 📡 API Integration
- The extension calls a **Hugging Face Space API**
- It sends the selected text and receives **sentiments** for each line.
- The final output is an **aggregated sentiment result**.

## 🛑 Known Issues
- **CORS Issues**: Some users might face CORS restrictions when fetching data from Hugging Face.
- **Text Length Limit**: Large selections may cause API timeouts.

## 💡 Future Improvements
✅ Display sentiment results in a **popup** instead of an alert.
✅ Add support for **multiple languages**.
✅ Improve **UI/UX** for better interaction.

## 🤝 Contributing
Feel free to fork this project and submit **pull requests**! If you encounter bugs or have feature requests, open an **issue** on GitHub.

## 📜 License
This project is licensed under the **GNU License**.

## 🌟 Show Your Support!
If you find this extension useful, please **star the repository** on GitHub! ⭐

