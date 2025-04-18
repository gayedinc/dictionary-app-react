import { useEffect, useState } from 'react'
import Header from "./components/Header.jsx"
import Word from "./components/Word.jsx"
import NotFound from "./components/NotFound.jsx"
import "./assets/css/darkMode.css";

function App() {
  const [word, setWord] = useState([]); // aranan kelimenin tüm verilerini tutan state
  const [input, setInput] = useState(""); // inputa yazılan kelimeyi tutan state
  const [searchInput, setSearchInput] = useState("keyboard"); // kullanıcı formu gönderdiğindeki form içindeki kelimeyi tutan state
  const [notFound, setNotFound] = useState(false); // kelime bulunmazsa gelecek ekranı tutan state
  const [fontType, setFontType] = useState("") // font family değişikliğini tutan state
  const [error, setError] = useState(false); // boş input submitlenme durumunda error gösteren state

  useEffect(() => {
    async function getWord() {
      if (searchInput) {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`);
        if (response.ok) {
          const data = await response.json();
          setWord(data);
          setNotFound(false);
        } else {
          setWord(null);
          setNotFound(true);
        }
      }
    }
    getWord();
  }, [searchInput]);

  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.searchInput.value === "") {
      setError(true);
      return;
    }
    setSearchInput(input);
    setError(false);
  }

  function getSystemThemePref() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-mode' : 'light';
  }

  const [theme, setTheme] = useState(localStorage.theme || getSystemThemePref()); // dark mode için olan state

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  function handleChangeTheme(e) {
    const changedTheme = e.target.checked ? 'dark-mode' : 'light';
    setTheme(changedTheme);
    localStorage.theme = changedTheme;
  }

  return (
    <>
      <div className="container">
        <Header input={input}
          word={word}
          handleSubmit={handleSubmit}
          setInput={setInput}
          theme={theme}
          handleChangeTheme={handleChangeTheme}
          fontType={fontType}
          setFontType={setFontType}
          error={error} />
        {notFound ?
          <NotFound /> : <Word word={word} setSearchInput={setSearchInput} />}
      </div>
    </>
  )
}

export default App;