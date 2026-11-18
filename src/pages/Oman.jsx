import { useState } from "react";
import WorkShell from "../components/WorkShell.jsx";
import Summary from "../components/Summary.jsx";
import "../styles/Oman.css";
import mosque from "../assets/Oman/mosque.webp";
import salalah from "../assets/Oman/salalah.jpg";
import opera from "../assets/Oman/opera.webp";
import beach from "../assets/Oman/beach.jpg";
import flag from "../assets/Oman/flag.png";

const photos = [
  {
    src: mosque,
    alt: "mosque",
    caption: "Мечеть Султана Кабуса",
  },
  {
    src: salalah,
    alt: "salalah",
    caption: "Околиці міста Салала",
  },
  {
    src: opera,
    alt: "opera",
    caption: "Королівський оперний театр Маскат",
  },
  {
    src: beach,
    alt: "beach",
    caption: "Дуже ґарно :O",
  },
];

const metrics = [
  {
    label: "Офіційна назва",
    value: "Султанат Оман",
  },
  {
    label: "Столиця",
    value: "Маскат",
  },
  {
    label: "Офіційна мова",
    value: "Арабська",
  },
  {
    label: "Валюта",
    value: "Оманський ріал",
    unit: "OMR",
    detail: "1OMR = 2.60USD",
  },
  {
    label: "Населення",
    value: "5.4",
    unit: "млн",
    detail: "Стабільно зростає.",
  },
  {
    label: "Площа території",
    value: "309 500",
    unit: "км²",
    detail: "70-те місце.",
  },
  {
    label: "Форма правління",
    value: "Абсолютна монархія, унітарна",
    detail: "Монарх - султан. Законодавчий орган - Рада Оману.",
  },
  {
    label: "Тип економіки",
    value: "Країна, що розв.",
    detail:
      "Фактично постіндустріальна, високорозвинена держава з високим рівнем життя.",
  },
];

export default function Oman() {
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
      title="Оман"
      subtitle="Країни Азії"
      backgroundImage={flag}
      className="oman-page"
    >
      <section className="oman-gallery" aria-label="Фотографії Оману">
        {previousPhotoIndex !== null && (
          <img
            className="oman-gallery-image"
            src={photos[previousPhotoIndex].src}
            alt=""
            aria-hidden="true"
          />
        )}
        <img
          key={activePhoto.src}
          className={`oman-gallery-image${loadedPhotoSrc === activePhoto.src ? " oman-gallery-image--loaded" : ""}`}
          src={activePhoto.src}
          alt={activePhoto.alt}
          fetchPriority="high"
          onLoad={() => {
            setLoadedPhotoSrc(activePhoto.src);
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
              setPreviousPhotoIndex(null);
            }
          }}
          onTransitionEnd={(event) => {
            if (event.propertyName === "opacity") {
              setPreviousPhotoIndex(null);
            }
          }}
        />
        <div className="oman-gallery-shade" />
        <div className="oman-gallery-caption">
          <p>{activePhoto.caption}</p>
        </div>
        <div className="oman-gallery-controls">
          <button
            className="oman-gallery-arrow"
            type="button"
            aria-label="Попереднє фото"
            onClick={() => showPhoto(-1)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path
                d="m15 18-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="oman-gallery-dots" aria-label="Вибрати фото">
            {photos.map((photo, index) => (
              <button
                key={photo.src + index}
                className="oman-gallery-dot"
                type="button"
                aria-label={`Фото ${index + 1}: ${photo.caption}`}
                aria-current={activePhotoIndex === index ? "true" : undefined}
                onClick={() => selectPhoto(index)}
              />
            ))}
          </div>
          <button
            className="oman-gallery-arrow"
            type="button"
            aria-label="Наступне фото"
            onClick={() => showPhoto(1)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
              <path
                d="m9 18 6-6-6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <p className="oman-gallery-count" aria-live="polite">
          {activePhotoIndex + 1} / {photos.length}
        </p>
      </section>

      <section className="oman-facts" aria-labelledby="oman-facts-title">
        <div className="oman-section-heading">
          <p className="oman-eyebrow">Короткі відомості</p>
          <h2 id="oman-facts-title" className="report-section-title">
            Візитна картка держави
          </h2>
        </div>

        <div className="oman-metrics">
          {metrics.map((metric, index) => (
            <article
              key={metric.label}
              className={`oman-metric ${metric.className ?? ""}`}
            >
              <span className="oman-metric-index">0{index + 1}</span>
              <p className="oman-metric-label">{metric.label}</p>
              <p className="oman-metric-value">
                {metric.value}
                {metric.unit && <span>{` ${metric.unit}`}</span>}
              </p>
              <p className="oman-metric-detail">{metric.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </WorkShell>
  );
}
