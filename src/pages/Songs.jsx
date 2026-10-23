import { useEffect, useMemo, useState } from 'react';
import Summary from '../components/Summary.jsx';
import WorkShell from '../components/WorkShell.jsx';
import { songs } from '../data/songs.js';
import { analyzeSongTexts } from '../utils/songAnalysis.js';
import '../styles/Songs.css';

const percentageFormat = new Intl.NumberFormat('uk-UA', {
  maximumFractionDigits: 1,
});

function formatPercentage(value) {
  return `${percentageFormat.format(value)}%`;
}

export default function Songs() {
  const [expandedSongs, setExpandedSongs] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches
      ? songs.map((song) => song.id)
      : []
  ));

  const analysis = useMemo(
    () => analyzeSongTexts(songs.map((song) => song.text)),
    []
  );

  const mostUsedVowels = useMemo(
    () =>
      analysis.mostUsedVowels
        .map((vowel) => `«${vowel.letter}» (${formatPercentage(vowel.percentage)})`)
        .join(', '),
    [analysis.mostUsedVowels]
  );

  const mostUsedConsonants = useMemo(
    () =>
      analysis.mostUsedConsonants
        .map((consonant) => `«${consonant.letter}» (${formatPercentage(consonant.percentage)})`)
        .join(', '),
    [analysis.mostUsedConsonants]
  );

  const allSongsExpanded = songs.every((song) => expandedSongs.includes(song.id));

  useEffect(() => {
    const wideViewport = window.matchMedia('(min-width: 768px)');
    const syncExpandedSongs = (event) => {
      setExpandedSongs(event.matches ? songs.map((song) => song.id) : []);
    };

    wideViewport.addEventListener('change', syncExpandedSongs);
    return () => wideViewport.removeEventListener('change', syncExpandedSongs);
  }, []);

  function toggleSong(songId) {
    setExpandedSongs((expanded) =>
      expanded.includes(songId)
        ? expanded.filter((id) => id !== songId)
        : [...expanded, songId]
    );
  }

  function toggleAllSongs() {
    setExpandedSongs(allSongsExpanded ? [] : songs.map((song) => song.id));
  }

  return (
    <WorkShell
      title="Аналіз звукового складу пісень"
      subtitle="Українська мова"
      className="songs-report"
    >
      <section aria-labelledby="song-texts-heading">
        <div className="song-text-section-heading">
          <h2 className="report-section-title" id="song-texts-heading">Тексти пісень</h2>
          <button
            className="song-text-toggle song-text-toggle--all"
            type="button"
            aria-expanded={allSongsExpanded}
            aria-controls="song-text-grid"
            onClick={toggleAllSongs}
          >
            <span>{allSongsExpanded ? 'Приховати тексти' : 'Показати тексти'}</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="song-text-grid" id="song-text-grid">
          {songs.map((song) => (
            <section className="song-text-card" key={song.id} aria-labelledby={`${song.id}-title`}>
              <div className="song-text-heading">
                <h3 id={`${song.id}-title`}>{song.title}</h3>
                <button
                  className="song-text-toggle"
                  type="button"
                  aria-expanded={expandedSongs.includes(song.id)}
                  aria-controls={`${song.id}-text`}
                  aria-label={`${expandedSongs.includes(song.id) ? 'Приховати' : 'Показати'} текст: ${song.title}`}
                  onClick={() => toggleSong(song.id)}
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div
                className="song-text-panel"
                id={`${song.id}-text`}
                aria-hidden={!expandedSongs.includes(song.id)}
              >
                <div className="song-text-panel-content">
                  <p>{song.text || 'Текст поки не додано до проєкту.'}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="songs-results" aria-labelledby="songs-results-heading">
        <h2 className="report-section-title" id="songs-results-heading">Результати аналізу</h2>
        <dl className="songs-metrics">
          <div className="songs-metric">
            <dt>Голосні</dt>
            <dd>{formatPercentage(analysis.vowelPercentage)}</dd>
            <span>{analysis.vowelCount} літер</span>
          </div>
          <div className="songs-metric">
            <dt>Приголосні</dt>
            <dd>{formatPercentage(analysis.consonantPercentage)}</dd>
            <span>{analysis.consonantCount} літер</span>
          </div>
          <div className="songs-metric">
            <dt>Усього літер</dt>
            <dd>{analysis.totalLetters}</dd>
            <span>у досліджуваних текстах</span>
          </div>
        </dl>

        <section className="vowel-frequency" aria-labelledby="vowel-frequency-heading">
          <h3 id="vowel-frequency-heading">Частотність голосних</h3>
          {analysis.vowelCount === 0 ? (
            <p className="songs-empty-state">Додайте тексти пісень у файлі даних, щоб побачити частотність.</p>
          ) : (
            <ul className="letter-frequency-list">
              {analysis.vowels.slice(0, 6).map((vowel) => (
                <li key={vowel.letter}>
                  <span className="frequency-letter">{vowel.letter}</span>
                  <progress
                    max="100"
                    value={vowel.percentage}
                    aria-label={`Голосна ${vowel.letter}: ${formatPercentage(vowel.percentage)}`}
                  />
                  <span className="frequency-share">{formatPercentage(vowel.percentage)}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="consonant-frequency" aria-labelledby="consonant-frequency-heading">
          <h3 id="consonant-frequency-heading">Частотність приголосних</h3>
          {analysis.consonantCount === 0 ? (
            <p className="songs-empty-state">Додайте тексти пісень у файлі даних, щоб побачити частотність.</p>
          ) : (
            <ul className="letter-frequency-list">
              {analysis.consonants.slice(0, 6).map((consonant) => (
                <li key={consonant.letter}>
                  <span className="frequency-letter">{consonant.letter}</span>
                  <progress
                    max="100"
                    value={consonant.percentage}
                    aria-label={`Приголосна ${consonant.letter}: ${formatPercentage(consonant.percentage)}`}
                  />
                  <span className="frequency-share">{formatPercentage(consonant.percentage)}</span>
                </li>
              ))}
            </ul>
          )}
          <p className="songs-method-note">
            Враховано лише українські голосні й приголосні літери; пробіли, пунктуація та ь не враховуються.
            Частка голосної обчислюється від усіх голосних, а приголосної — від усіх приголосних.
          </p>
        </section>
      </section>

      <Summary title="Висновок">
        <p>
          {analysis.totalLetters === 0
            ? 'Після додавання текстів тут автоматично з’явиться висновок про співвідношення голосних і приголосних.'
            : `У текстах пісень голосні становлять ${formatPercentage(analysis.vowelPercentage)}, а приголосні — ${formatPercentage(analysis.consonantPercentage)}. Отримане співвідношення підтверджує закон милозвучності української мови. Найчастіше вжито голосні: ${mostUsedVowels}. Найчастіше вживані приголосні: ${mostUsedConsonants}.`}
        </p>
      </Summary>
    </WorkShell>
  );
}
