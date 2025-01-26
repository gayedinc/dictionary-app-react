import React from 'react';

export default function Word({ word }) {
  return (
    <>
      {word?.length > 0 &&
        <div className="word-description-section">
          <div className="word-pronunciation">
            <div className="word-pronun-text">
              <h3>{word[0]?.word}</h3>
              <p>{word[0]?.phonetics[1]?.text}</p>
            </div>
            <button className='playBtn'>
              <img onClick={() => {
                const audioUrl = word[0]?.phonetics?.find(phonetic => phonetic.audio)?.audio;
                const fullAudioUrl = audioUrl?.startsWith("//") ? `https:${audioUrl}` : audioUrl;
                if (fullAudioUrl) {
                  const audio = new Audio(fullAudioUrl);
                  audio.play();
                }
              }} src="/img/audio-play-btn.svg" alt="Play Icon" />
            </button>
          </div>
          <div className="word-type-first">
            {word[0]?.meanings[0] && (
              <>
                <div className="word-type">
                  <h3>{word[0]?.meanings[0]?.partOfSpeech}</h3>
                  <span></span>
                </div>
                <h5>Meaning</h5>
                <ul>
                  {word[0]?.meanings[0]?.definitions.map((x, i) => (
                    <li key={i}>
                      {x.definition}
                    </li>
                  ))}
                </ul>
                {word[0]?.meanings[0]?.synonyms?.length > 0 && (
                  <div className="synonyms">
                    <h5>Synonyms</h5>
                    <p>{word[0]?.meanings[0]?.synonyms.join(", ")}</p>
                  </div>
                )}
              </>
            )}
          </div>
          <div className="word-type-second">
            {word[0]?.meanings[1] && (
              <>
                <div className="word-type">
                  <h3>{word[0]?.meanings[1]?.partOfSpeech}</h3>
                  <span></span>
                </div>
                <h5>Meaning</h5>
                <ul>
                  {word[0]?.meanings[1]?.definitions.map((x, i) => (
                    <li key={i}>
                      <p>{x.definition}</p>
                      {x.example && <p className='example-text'>"{x.example}"</p>}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className="word-type-third">
            {word[0]?.meanings[2] && (
              <>
                <div className="word-type">
                  <h3>{word[0]?.meanings[2]?.partOfSpeech}</h3>
                  <span></span>
                </div>
                <h5>Meaning</h5>
                <ul>
                  {word[0]?.meanings[2]?.definitions.map((x, i) => (
                    <li key={i}>
                      <p>{x.definition}</p>
                      {x.example && <p className='example-text'>"{x.example}"</p>}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div className="sourceUrl">
            <h5>Source</h5>
            <a href={word[0]?.sourceUrls} target='_blank'>{word[0]?.sourceUrls}
              <img src="/img/source-link-icon.svg" alt="Source Link Icon" />
            </a>
          </div>

        </div>
      }
    </>
  );
}