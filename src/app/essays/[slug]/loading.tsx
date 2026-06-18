export default function EssayLoading() {
  return (
    <main>
      <header className="article-chrome" aria-busy="true">
        <span className="back-link">
          <span aria-hidden="true">←</span> Essays
        </span>
      </header>
      <div className="article-frame" />
    </main>
  );
}
