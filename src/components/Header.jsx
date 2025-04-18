import React from 'react';
import { useEffect } from "react";

export default function Header({ error, fontType, setFontType, theme, handleChangeTheme, input, handleSubmit, setInput }) {

  useEffect(() => {
    document.body.style.fontFamily = fontType;
  }, [fontType]);

  return (
    <>
      <div className="header">
        <div className="dictionaryIcon" onClick={() => window.location.href = "/"} style={{ cursor: "pointer" }}>
          <img src="/img/dictionary-book-icon.svg" alt="Dictionary Book Icon" />
        </div>
        <div className="headerLeftSide">
          <div className="fontChoice">
            <div className="fontStyle">
              <div className="dropdown">
                <button className="dropdown-btn">
                  {fontType === "Inter" ? "Sans Serif" :
                    fontType === "Lora" ? "Serif" :
                      fontType === "Inconsolata" ? "Mono" : "Sans Serif"
                  }
                  <img src="/img/menu-arrow-icon.svg" alt="Arrow Icon" />
                </button>
                <div className="dropdown-menu">
                  <div className="dropdown-item" onClick={() => setFontType('Inter')}>Sans Serif</div>
                  <div className="dropdown-item" onClick={() => setFontType('Lora')}>Serif</div>
                  <div className="dropdown-item" onClick={() => setFontType('Inconsolata')}>Mono</div>
                </div>
              </div>
            </div>
          </div>
          <div className="themeOptions">
            <label className="lightDark">
              <input onChange={handleChangeTheme} className="switch" type="checkbox" defaultChecked={theme === "dark-mode"} />
              <span><img src={theme === "light" ? "/img/icon-half-moon.svg" : "/img/icon-half-moon-dark.svg"} alt="Dark Mode Icon" /></span>
            </label>
          </div>
        </div>
      </div>
      <div className="searchArea">
        <form onSubmit={handleSubmit} autoComplete="off">
          <input type="text" name='searchInput' className={error ? "searchInput searchInputError" : "searchInput"} placeholder="Search for any word..." value={input} onChange={(e) => setInput(e.target.value)} />
          {error && <p className='error-text'>Whoops, can’t be empty…</p>}
        </form>
      </div>
    </>
  )
}