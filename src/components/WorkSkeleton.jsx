export default function WorkSkeleton() {
  return (
    <div className="work-skeleton-card" aria-busy="true" aria-label="Завантаження матеріалу...">
      <div className="work-skeleton-breadcrumbs" />
      <div className="work-skeleton-hero">
        <div className="work-skeleton-line work-skeleton-title" />
        <div className="work-skeleton-line work-skeleton-subtitle" />
      </div>
      <div className="work-skeleton-body">
        <div className="work-skeleton-line work-skeleton-p1" />
        <div className="work-skeleton-line work-skeleton-p2" />
        <div className="work-skeleton-line work-skeleton-p3" />
        <div className="work-skeleton-block" />
      </div>
    </div>
  );
}
