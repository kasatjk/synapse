import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getSubject, getWorkByPath } from '../data/works.js';

export default function WorkShell({
  title,
  subtitle,
  meta,
  backgroundImage,
  align = 'left',
  subjectId,
  className = '',
  bodyClassName = '',
  children,
}) {
  const location = useLocation();
  const [copied, setCopied] = useState(false);

  const currentWork = getWorkByPath(location.pathname);
  const activeSubjectId = subjectId || currentWork?.subject;
  const subjectObj = activeSubjectId ? getSubject(activeSubjectId) : null;

  const variant = backgroundImage ? 'photo' : 'solid';
  const heroStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.45), rgba(15, 23, 42, 0.82)), url(${backgroundImage})`,
      }
    : undefined;

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback if clipboard API is blocked
      setCopied(false);
    }
  }

  const breadcrumbContent = (
    <nav className="work-breadcrumbs work-breadcrumbs--report" aria-label="Навігація роботою">
      <Link
        className="work-back-link"
        to={subjectObj?.path || '/'}
        aria-label={`Повернутися до ${subjectObj?.title || 'предмету'}`}
        title={`До ${subjectObj?.title || 'предмету'}`}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <path
            d="m15 18-6-6 6-6M9 12h12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <div className="work-breadcrumbs-links">
        <Link to="/" className="work-breadcrumb-link">Головна</Link>
        <span className="work-breadcrumb-separator" aria-hidden="true">/</span>
        {subjectObj ? (
          <>
            <Link to={subjectObj.path} className="work-breadcrumb-link">
              {subjectObj.title}
            </Link>
            <span className="work-breadcrumb-separator" aria-hidden="true">/</span>
          </>
        ) : null}
        <span className="work-breadcrumb-current" aria-current="page">
          {currentWork?.shortTitle || title}
        </span>
      </div>

      <button
        type="button"
        className="work-share-btn"
        onClick={handleCopyLink}
        aria-label={copied ? 'Посилання скопійовано' : 'Скопіювати пряме посилання на роботу'}
        title={copied ? 'Посилання скопійовано' : 'Скопіювати посилання'}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
          {copied ? (
            <path
              d="M20 6L9 17l-5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <path
              d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
        <span>{copied ? 'Скопійовано!' : 'Поділитися'}</span>
      </button>
    </nav>
  );

  const heroHeader = (
    <header
      className={`report-hero report-hero--${variant}${align === 'center' ? ' report-hero--center' : ''}`}
      style={heroStyle}
    >
      <div className="report-hero-content">
        <h1 className="report-hero-title">{title}</h1>
        {subtitle ? <p className="report-hero-subtitle">{subtitle}</p> : null}
        {meta?.length ? (
          <div className="report-meta">
            {meta.map((item) => (
              <p key={item.label}>
                <strong className="report-meta-label">{item.label}:</strong> {item.text}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );

  return (
    <article
      className={`report-card ${className}`.trim()}
      data-subject={activeSubjectId || undefined}
    >
      {breadcrumbContent}
      {heroHeader}
      {children ? (
        <div className={`report-body ${bodyClassName}`.trim()}>
          {children}
        </div>
      ) : null}
    </article>
  );
}
