import { useEffect, useRef, useState } from 'react';
import { playBirthdayAudio } from '../utils/birthdayAudio.js';
import '../styles/BirthdayIntro.css';

const SEEN_KEY = 'synapse-birthday-intro-seen';

export default function BirthdayIntro() {
  const [initialState] = useState(() => {
    try {
      return {
        visible: window.localStorage.getItem(SEEN_KEY) !== 'true',
        storageMessage: '',
      };
    } catch {
      return {
        visible: true,
        storageMessage: 'Не вдалося перевірити збереження. Після цього відвідування привітання може з’явитися знову.',
      };
    }
  });
  const [visible, setVisible] = useState(initialState.visible);
  const [phase, setPhase] = useState('ready');
  const [audioMessage, setAudioMessage] = useState('');
  const [storageMessage, setStorageMessage] = useState(initialState.storageMessage);
  const seenThisSession = useRef(!initialState.visible);
  const primaryButtonRef = useRef(null);

  useEffect(() => {
    if (visible) primaryButtonRef.current?.focus();
  }, [visible]);

  function markAsSeen() {
    if (seenThisSession.current) return true;

    try {
      window.localStorage.setItem(SEEN_KEY, 'true');
      seenThisSession.current = true;
      setStorageMessage('');
      return true;
    } catch {
      seenThisSession.current = true;
      setStorageMessage('Не вдалося зберегти вибір. Привітання не повториться в цій вкладці, але може з’явитися знову пізніше.');
      return false;
    }
  }

  async function handlePrimaryAction() {
    if (phase === 'started' || phase === 'storage-unavailable') {
      setVisible(false);
      return;
    }

    if (phase === 'audio-unavailable') {
      if (markAsSeen()) setVisible(false);
      else setPhase('storage-unavailable');
      return;
    }

    try {
      const audioStarted = await playBirthdayAudio();
      if (!audioStarted) {
        setAudioMessage('У цьому браузері звук недоступний. Можна продовжити без нього.');
        setPhase('audio-unavailable');
        return;
      }
      markAsSeen();
      setPhase('started');
    } catch {
      setAudioMessage('Не вдалося відтворити звук. Можна продовжити без нього.');
      setPhase('audio-unavailable');
    }
  }

  function handleSkip() {
    if (markAsSeen()) setVisible(false);
    else setPhase('storage-unavailable');
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      handleSkip();
      return;
    }

    if (event.key !== 'Tab') return;

    const buttons = event.currentTarget.querySelectorAll('button:not(:disabled)');
    const firstButton = buttons[0];
    const lastButton = buttons[buttons.length - 1];

    if (event.shiftKey && document.activeElement === firstButton) {
      event.preventDefault();
      lastButton.focus();
    } else if (!event.shiftKey && document.activeElement === lastButton) {
      event.preventDefault();
      firstButton.focus();
    }
  }

  if (!visible) return null;

  const primaryActionLabel = {
    ready: 'Запустити привітання',
    started: 'Перейти до сайту',
    'audio-unavailable': 'Продовжити без звуку',
    'storage-unavailable': 'Продовжити в цій вкладці',
  }[phase];

  return (
    <div className="birthday-intro-backdrop">
      <section
        className={`birthday-intro birthday-intro--${phase}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="birthday-intro-title"
        aria-describedby="birthday-intro-description"
        onKeyDown={handleKeyDown}
      >
        <div className="birthday-intro__burst birthday-intro__burst--one" aria-hidden="true" />
        <div className="birthday-intro__burst birthday-intro__burst--two" aria-hidden="true" />
        <span className="birthday-intro__spark birthday-intro__spark--one" aria-hidden="true">✦</span>
        <span className="birthday-intro__spark birthday-intro__spark--two" aria-hidden="true">✧</span>
        <div className="birthday-intro__content">
          <span className="birthday-intro__eyebrow">Святковий сюрприз</span>
          <h1 id="birthday-intro-title">З днем народження, Тетяно Володимирівно!</h1>
          <p id="birthday-intro-description">
            {phase === 'started'
              ? 'Нехай цей день буде сповнений радості, тепла й приємних сюрпризів!'
              : 'Для вас — трохи святкового сяйва та музики.'}
          </p>
          <p className="birthday-intro__status" aria-live="polite">
            {[audioMessage, storageMessage].filter(Boolean).join(' ')}
          </p>
          <div className="birthday-intro__actions">
            <button
              ref={primaryButtonRef}
              className="birthday-intro__button"
              type="button"
              onClick={handlePrimaryAction}
            >
              {primaryActionLabel}
            </button>
            {phase === 'ready' && (
              <button
                className="birthday-intro__skip"
                type="button"
                onClick={handleSkip}
              >
                Пропустити
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
