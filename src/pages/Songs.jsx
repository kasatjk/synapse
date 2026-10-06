import { useEffect, useState } from 'react';
import '../styles/Songs.css';
import Summary from '../components/Summary.jsx';
import WorkShell from '../components/WorkShell.jsx';
import { songs } from '../data/songs.js';
import { analyzeSongTexts } from '../utils/songAnalysis.js';

const percentageFormat = new Intl.NumberFormat('uk-UA', {
  maximumFractionDigits: 1,
});

function formatPercentage(value) {
  return `${percentageFormat.format(value)}%`;
}

export default function Songs() {
  const [expandedSongs, setExpandedSongs] = useState(() => (
    window.matchMedia('(min-width: 768px)').matches
      ? songs.map((song) => song.id)
      : []
  ));
  const analysis = analyzeSongTexts(songs.map((song) => song.text));
  const mostUsedVowels = analysis.mostUsedVowels
    .map((vowel) => `«${vowel.letter}» (${formatPercentage(vowel.percentage)})`)
    .join(', ');
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
    setExpandedSongs((expanded) => (
      expanded.includes(songId)
        ? expanded.filter((id) => id !== songId)
        : [...expanded, songId]
    ));
  }

  function toggleAllSongs() {
    setExpandedSongs(allSongsExpanded ? [] : songs.map((song) => song.id));
  }

  return (
    <article className="report-card songs-report">
      <WorkShell
        title="Аналіз звукового складу пісень"
        subtitle="Українська мова"
      />

      <div className="report-body">
        <section aria-labelledby="song-texts-heading">
          <div className="song-text-section-heading">
            <h2 className="songs-section-title" id="song-texts-heading">Тексти пісень</h2>
            <button
              className="song-text-toggle song-text-toggle--all"
              type="button"
              aria-expanded={allSongsExpanded}
              aria-controls="song-text-grid"
              onClick={toggleAllSongs}
            >
              <span>{allSongsExpanded ? 'Приховати тексти' : 'Показати тексти'}</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <path d="m6 9 6 6 6-6" />
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
                      <path d="m6 9 6 6 6-6" />
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
          <h2 className="songs-section-title" id="songs-results-heading">Результати аналізу</h2>
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
              <span>у двох текстах</span>
            </div>
          </dl>

          <section className="vowel-frequency" aria-labelledby="vowel-frequency-heading">
            <h3 id="vowel-frequency-heading">Частотність голосних</h3>
            {analysis.vowelCount === 0 ? (
              <p className="songs-empty-state">Додайте тексти пісень у файлі даних, щоб побачити частотність.</p>
            ) : (
              <ul className="vowel-frequency-list">
                {analysis.vowels.map((vowel) => (
                  <li key={vowel.letter}>
                    <span className="vowel-letter">{vowel.letter}</span>
                    <progress
                      max="100"
                      value={vowel.percentage}
                      aria-label={`Голосна ${vowel.letter}: ${formatPercentage(vowel.percentage)}`}
                    />
                    <span className="vowel-share">{formatPercentage(vowel.percentage)}</span>
                  </li>
                ))}
              </ul>
            )}
            <p className="songs-method-note">
              Враховано лише українські голосні й приголосні літери; пробіли, пунктуація та ь не враховуються.
              Частка кожної голосної обчислюється від усіх голосних.
            </p>
          </section>
        </section>

        <Summary title="Висновок">
          <p>
            {analysis.totalLetters === 0
              ? 'Після додавання текстів тут автоматично з’явиться висновок про співвідношення голосних і приголосних.'
              : `У текстах пісень голосні становлять ${formatPercentage(analysis.vowelPercentage)}, а приголосні — ${formatPercentage(analysis.consonantPercentage)}. Найчастіше вжито голосні: ${mostUsedVowels}.`}
          </p>
        </Summary>
      </div>
    </article>
  );
}
