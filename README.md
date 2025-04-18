# 📖 Dictionary App

> A modern dictionary application where users can easily access word definitions, pronunciations, synonyms, and example sentences.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5)

## 🔍 Project Overview

**Dictionary App** is a modern, user-friendly React application where users can view a word's definitions, pronunciation, synonyms, and usage examples.

![image](https://github.com/user-attachments/assets/38d1db34-590c-4c77-b382-21f781c98bc5)

This app is designed to make the vocabulary learning process more **interactive**, **customizable**, and **practical**.

## 🚀 Key Features

### 📡 API Integration
- Word data is fetched dynamically in real time using the [Free Dictionary API](https://dictionaryapi.dev/).

### 🌙 Light/Dark Theme Support
- Users can switch between light and dark modes.
- Theme preference is stored in `localStorage` for persistence.

![image](https://github.com/user-attachments/assets/c8ded391-13b9-41d8-be51-670b2b5841d2)

### 🔤 Font Selection
- Users can choose from three fonts: Sans Serif, Serif, and Monospace.

![image](https://github.com/user-attachments/assets/79934fad-3f28-4b27-99e8-e50baa130c8c)

### 🧠 Click on Synonym to View Its Meaning
- Clicking on any listed synonym fetches the data for that word from the API and displays its information.

![image](https://github.com/user-attachments/assets/83387a20-1bd1-4d59-926f-7d3ad303e3f4)

### 🏠 Return to Homepage
- Clicking the dictionary icon takes the user back to the homepage without refreshing the page.

### ❌ Error Handling
- If the searched word is not found, an informative error screen is shown.
- If a user submits an empty search, a warning is displayed.

![image](https://github.com/user-attachments/assets/728b86ce-3ca0-4f68-b0f9-d443cf3b9c70)

### ☹️ Custom "Word Not Found" Screen

- When the searched word is not returned by the API, instead of displaying a blank page, the app shows a custom **"No Definitions Found"** screen.
- This screen provides both visual and textual feedback and encourages the user to try another search.

![image](https://github.com/user-attachments/assets/7733650d-2481-41e0-9295-adcbb78d1ea0)

> **Message content:**  
> *Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.*

### 🔊 Pronunciation Playback
- If available, users can click the audio icon to listen to the word's correct pronunciation.

## 💡 Why React?

I previously built a similar application using Vanilla JavaScript. However, with React:

- The code structure became more **modular**.
- State management became easier with `useState` and `useEffect`.
- Component-based architecture improved **reusability and readability**.
- Thanks to Virtual DOM, the app performed **faster**.

## 🌐 Live Demo

🔗 [https://dictionary-app.vercel.app](https://dictionary-app.vercel.app)

## 🗂️ Project Structure

```bash
📦 public
 ┗ 📂 img                         # Application images

📦 src
 ┣ 📂 assets
 ┃ ┗ 📂 css
 ┃   ┣ 📄 darkMode.css           # Dark mode styles
 ┃   ┣ 📄 main.css               # Main styles
 ┃   ┗ 📄 reset.css              # CSS reset rules
 ┣ 📂 components
 ┃ ┣ 📄 Header.jsx              # Header and search bar component
 ┃ ┣ 📄 NotFound.jsx            # Component shown when a word is not found
 ┃ ┗ 📄 Word.jsx                # Component displaying word details
 ┣ 📄 App.jsx                   # Core application logic
 ┣ 📄 main.jsx                  # React DOM entry point
┗ 📄 index.html                 # Main HTML template
