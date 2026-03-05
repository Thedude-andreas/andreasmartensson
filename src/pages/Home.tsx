import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="home">
      <section className="hero">
        <p className="eyebrow">andreasmartensson.com</p>
        <h1>Where obscure projects go to die (or occasionally launch).</h1>
        <p className="lead">A tidy landing page for experiments I build after work, nothing more and nothing less.</p>
        <div className="hero-actions">
          <Link to="/iss" className="button">
            Open the ISS dashboard
          </Link>
          <a href="/AMCDM/" className="button">
            Open AMC Download Manager
          </a>
          <a href="/SlopeTrace/" className="button">
            Open SlopeTrace
          </a>
          <span className="tag">No roadmaps. Just tinkering.</span>
        </div>
      </section>

      <section className="projects">
        <div className="section-header">
          <p className="eyebrow">Current stash</p>
          <h2>Projects that still breathe</h2>
        </div>
        <div className="card-grid">
          <article className="project-card">
            <h3>ISS Live Dashboard</h3>
            <p>Real-time telemetry from NASA ISSLive! + Lightstreamer, complete with map and life-support vitals.</p>
            <Link to="/iss" className="text-link">
              Visit dashboard →
            </Link>
          </article>
          <article className="project-card">
            <h3>TempSense</h3>
            <p>Production dashboard for temperature, humidity and pressure sensors with secure ingest API.</p>
            <a
              href="https://tempsense.andreasmartensson.com"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Open TempSense →
            </a>
          </article>
          <article className="project-card">
            <h3>AMC Download Manager</h3>
            <p>Android app for fast access to recent files in Downloads, built for one-tap document reopening.</p>
            <a href="/AMCDM/" className="text-link">
              Open project page →
            </a>
          </article>
          <article className="project-card">
            <h3>SlopeTrace</h3>
            <p>Android app for alpine skiing sessions with 3D track lines, lift/downhill detection, and event-based stats.</p>
            <a href="/SlopeTrace/" className="text-link">
              Open project page →
            </a>
          </article>
          <article className="project-card disabled">
            <h3>Resting ideas</h3>
            <p>Shelves reserved for future prototypes whenever inspiration and espresso align.</p>
          </article>
        </div>
      </section>

      <section className="meta">
        <h3>Contact</h3>
        <p>I work in construction by day and tinker with hobby projects by night. Got data that deserves a weird UI? Ping me.</p>
        <p>
          <a className="text-link" href="mailto:andreas@andreasmartensson.com">
            andreas@andreasmartensson.com
          </a>
        </p>
      </section>
    </div>
  )
}
