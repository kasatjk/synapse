import { useState } from 'react';
import WorkShell from '../components/WorkShell.jsx';
import Summary from '../components/Summary.jsx';
import amsterdam from '../assets/Netherlands/amsterdam.webp';
import tulips from '../assets/Netherlands/tulips.webp';
import rotterdamPort from '../assets/Netherlands/rotterdam-port.webp';
import kinderdijk from '../assets/Netherlands/kinderdijk.webp';
import '../styles/Netherlands.css';

const photos = [
  {
    src: amsterdam,
    alt: 'Кольорові історичні будинки вздовж каналу на вулиці Дамрак в Амстердамі',
    caption: 'Амстердам — столиця каналів та культури',
  },
  {
    src: kinderdijk,
    alt: 'Історичні вітряки Кіндердейка на тлі польдерного ландшафту',
    caption: 'Вітряки Кіндердейка (ЮНЕСКО)',
  },
  {
    src: tulips,
    alt: 'Квітучі поля нідерландських тюльпанів навесні',
    caption: 'Тюльпанові плантації',
  },
  {
    src: rotterdamPort,
    alt: 'Гігантський логістичний порт Роттердама з контейнеровозами',
    caption: 'Порт Роттердама — морські ворота Європи',
  },
];

const metrics = [
  {
    label: 'Офіційна назва',
    value: 'Nederland',
    detail: 'Королівство Нідерланди (Koninkrijk der Nederlanden)',
  },
  {
    label: 'Столиця',
    value: 'Амстердам',
    detail: 'Уряд, парламент та монарша резиденція — у місті Гаага.',
  },
  {
    label: 'Офіційна мова',
    value: 'Нідерландська',
    detail: 'Також офіційний статус має західнофризька мова (Фрисландія).',
  },
  {
    label: 'Валюта',
    value: 'Євро',
    unit: 'EUR',
    detail: 'Запроваджено в 2002 році, замінивши нідерландський гульден.',
  },
  {
    label: 'Населення',
    value: '18,5',
    unit: 'млн',
    detail: 'Середня густота: понад 424 осіб/км² (найвища в ЄС).',
  },
  {
    label: 'Площа території',
    value: '41,543',
    unit: 'км²',
    detail: 'Близько 17% суші відвойовано у Північного моря (польдери).',
  },
  {
    label: 'Форма правління',
    value: 'Конституційна монархія',
    detail: 'Парламентська демократія з розвиненою коаліційною системою.',
  },
  {
    label: 'Тип економіки',
    value: 'Постіндустріальна',
    detail: 'Високотехнологічний агросектор, фінансовий та логістичний хаб світового рівня.',
  },
];

export default function Netherlands() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [previousPhotoIndex, setPreviousPhotoIndex] = useState(null);
  const [loadedPhotoSrc, setLoadedPhotoSrc] = useState(null);
  const activePhoto = photos[activePhotoIndex];

  function selectPhoto(index) {
    if (index === activePhotoIndex) {
      return;
    }

    setPreviousPhotoIndex(activePhotoIndex);
    setLoadedPhotoSrc(null);
    setActivePhotoIndex(index);
  }

  function showPhoto(offset) {
    selectPhoto((activePhotoIndex + offset + photos.length) % photos.length);
  }

  return (
    <WorkShell
      title="Нідерланди"
      subtitle="Країни Європи (Je Maintiendrai)"
      className="netherlands-page"
    >
      <section className="netherlands-gallery" aria-label="Фотографії Нідерландів">
        {previousPhotoIndex !== null && (
          <img
            className="netherlands-gallery-image"
            src={photos[previousPhotoIndex].src}
            alt=""
            aria-hidden="true"
          />
        )}
        <img
          key={activePhoto.src}
          className={`netherlands-gallery-image${loadedPhotoSrc === activePhoto.src ? ' netherlands-gallery-image--loaded' : ''}`}
          src={activePhoto.src}
          alt={activePhoto.alt}
          fetchPriority="high"
          onLoad={() => {
            setLoadedPhotoSrc(activePhoto.src);
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
              setPreviousPhotoIndex(null);
            }
          }}
          onTransitionEnd={(event) => {
            if (event.propertyName === 'opacity') {
              setPreviousPhotoIndex(null);
            }
          }}
        />
        <div className="netherlands-gallery-shade" />
        <div className="netherlands-gallery-caption">
          <p>{activePhoto.caption}</p>
        </div>
        <div className="netherlands-gallery-controls">
          <button
            className="netherlands-gallery-arrow"
            type="button"
            aria-label="Попереднє фото"
            onClick={() => showPhoto(-1)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="netherlands-gallery-dots" aria-label="Вибрати фото">
            {photos.map((photo, index) => (
              <button
                key={photo.src}
                className="netherlands-gallery-dot"
                type="button"
                aria-label={`Фото ${index + 1}: ${photo.caption}`}
                aria-current={activePhotoIndex === index ? 'true' : undefined}
                onClick={() => selectPhoto(index)}
              />
            ))}
          </div>
          <button
            className="netherlands-gallery-arrow"
            type="button"
            aria-label="Наступне фото"
            onClick={() => showPhoto(1)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <p className="netherlands-gallery-count" aria-live="polite">
          {activePhotoIndex + 1} / {photos.length}
        </p>
      </section>

      <section className="netherlands-facts" aria-labelledby="netherlands-facts-title">
        <div className="netherlands-section-heading">
          <p className="netherlands-eyebrow">Короткі відомості</p>
          <h2 id="netherlands-facts-title" className="report-section-title">Візитна картка держави</h2>
        </div>

        <div className="netherlands-metrics">
          {metrics.map((metric, index) => (
            <article
              key={metric.label}
              className={`netherlands-metric ${metric.className ?? ''}`}
            >
              <span className="netherlands-metric-index">0{index + 1}</span>
              <p className="netherlands-metric-label">{metric.label}</p>
              <p className="netherlands-metric-value">
                {metric.value}
                {metric.unit && <span>{` ${metric.unit}`}</span>}
              </p>
              <p className="netherlands-metric-detail">{metric.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <Summary title="Підсумок дослідження">
        <p>
          Нідерланди — одна з найбільш густонаселених та високотехнологічних держав Європи.
          Завдяки унікальній системі дамб та каналів країна відвоювала значні площі в моря.
          Нідерландська економіка входить у десятку світових експортерів завдяки надпотужному
          портовому хабу Роттердама, інноваційному тепличному агрокомплексу (друге місце у світі
          після США за експортом агропродукції) та розвиненому сектору цифрових і фінансових послуг.
        </p>
      </Summary>
    </WorkShell>
  );
}
