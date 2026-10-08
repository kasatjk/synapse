import { useState } from 'react';
import amsterdam from '../assets/Netherlands/amsterdam.jpg';
import tulips from '../assets/Netherlands/tulips.jpg';
import rotterdamPort from '../assets/Netherlands/rotterdam-port.jpg';

const photos = [
  {
    src: amsterdam,
    alt: 'Кольорові будинки вздовж каналу на вулиці Дамрак в Амстердамі',
    caption: 'Амстердам',
  },
  {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/KinderdijkMolens02.jpg/1280px-KinderdijkMolens02.jpg',
    alt: 'Вітряки Кіндердейка на тлі відкритого ландшафту',
    caption: 'Вітряки Кіндердейка',
  },
  {
    src: tulips,
    alt: 'Квітучі тюльпани',
    caption: 'Тюльпанчики',
  },
  {
    src: rotterdamPort,
    alt: 'Порт Роттердаму',
    caption: 'Порт Роттердаму',
  }
];

const metrics = [
  {
    label: 'Офіційна назва',
    value: 'Koninkrijk der Nederlanden',
    detail: 'Королівство Нідерланди',
    className: 'netherlands-metric--name',
  },
  {
    label: 'Площа',
    value: '41,543',
    unit: 'км²',
    detail: '17% території відвойовано у моря',
  },
  {
    label: 'Населення',
    value: '18,5',
    unit: 'млн',
    detail: 'Щільність: близько 424 осіб/км²',
  },
  {
    label: 'Форма правління',
    value: 'Конституційна монархія',
    detail: 'Король - глава держави. Прем’єр-міністр - глава уряду.',
    className: 'netherlands-metric--government',
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
    <article className="netherlands-page">
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
              <path d="m15 18-6-6 6-6" />
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
        <p className="netherlands-gallery-count" aria-live="polite">
          {activePhotoIndex + 1} / {photos.length}
        </p>
      </section>

      <header className="netherlands-hero">
        <h1>Нідерланди</h1>
        <p className="netherlands-intro">
          Je Maintiendrai
        </p>
      </header>

      <section className="netherlands-facts" aria-labelledby="netherlands-facts-title">
        <div className="netherlands-section-heading">
          <p className="netherlands-eyebrow">Короткі відомості</p>
          <h2 id="netherlands-facts-title">Візитна картка</h2>
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
    </article>
  );
}
