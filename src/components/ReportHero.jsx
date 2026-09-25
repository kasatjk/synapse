export default function ReportHero({
  title,
  subtitle,
  meta,
  backgroundImage,
  align = 'left',
}) {
  const variant = backgroundImage ? 'photo' : 'solid';
  const style = backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.45), rgba(15, 23, 42, 0.82)), url(${backgroundImage})`,
      }
    : undefined;

  return (
    <header
      className={`report-hero report-hero--${variant}${align === 'center' ? ' report-hero--center' : ''}`}
      style={style}
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
}
