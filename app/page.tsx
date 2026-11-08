export default function Home() {
  return (
    <main className="shell">
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="SCAMSAATHI AI home">
          <span className="brand-mark">S</span>
          <span>SCAMSAATHI <span className="brand-ai">AI</span></span>
        </a>
        <span className="phase">FOUNDATION / PHASE 01</span>
      </nav>

      <section className="hero">
        <p className="eyebrow"><span className="status-dot" /> DIGITAL SAFETY, MADE SMARTER</p>
        <h1>Pause. Check.<br /><span>Stay safe.</span></h1>
        <p className="intro">
          A smarter way to spot suspicious messages, phishing links, and digital scams.
          Built with India in mind.
        </p>
        <div className="notice">
          <strong>Platform foundation is underway.</strong>
          <p>Scam analysis tools are planned for upcoming development phases. No live scan is available yet.</p>
        </div>
      </section>

      <section className="modules" aria-labelledby="modules-heading">
        <div className="section-heading">
          <p className="eyebrow">PLANNED PROTECTION</p>
          <h2 id="modules-heading">One platform. More confidence.</h2>
        </div>
        <div className="module-grid">
          {[
            ["01", "Message checker", "Review suspicious SMS and chat messages."],
            ["02", "Link scanner", "Check URLs for phishing and other warning signs."],
            ["03", "Screenshot analysis", "Inspect scam-like content in screenshots."],
            ["04", "Hinglish AI assistant", "Understand digital safety in simple language."]
          ].map(([number, title, description]) => (
            <article className="module-card" key={number}>
              <span className="module-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="planned">PLANNED</span>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>SCAMSAATHI AI</span>
        <span>Safer digital habits start with a check.</span>
      </footer>
    </main>
  );
}
