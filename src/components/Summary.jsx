export default function Summary({ title, children }) {
  return (
    <section className="summary-block">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
