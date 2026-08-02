export function Home() {
  return (
    <div className="home">
      <section className="hero">
        <p className="eyebrow">andreasmartensson.com</p>
        <h1>Where obscure projects go to die (or occasionally launch).</h1>
        <p className="lead">A tidy landing page for experiments I build after work, nothing more and nothing less.</p>
        <span className="tag">No roadmaps. Just tinkering.</span>
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
            <a href="https://iss.andreasmartensson.com" className="text-link" target="_blank" rel="noreferrer">
              Visit dashboard →
            </a>
          </article>
          <article className="project-card">
            <h3>VFRplan</h3>
            <p>VFR flight planning tool for Sweden with route editor, RADIO/NAV autofill, and fuel, STOL and weight-and-balance calculations.</p>
            <a href="https://vfrplan.se" className="text-link" target="_blank" rel="noreferrer">
              Open project →
            </a>
          </article>
          <article className="project-card">
            <h3>VP-sim</h3>
            <p>Web-based variable prop procedure simulator for PPL seaplane training, with engine controls, instruments and RPM-driven audio.</p>
            <a href="https://vp-sim.andreasmartensson.com" className="text-link" target="_blank" rel="noreferrer">
              Open simulator →
            </a>
          </article>
          <article className="project-card">
            <h3>Majkens spelhåla</h3>
            <p>A small collection of web-based games gathered in one simple portal.</p>
            <a href="https://andreasmartensson.com/bosse-hoppar/" className="text-link" target="_blank" rel="noreferrer">
              Open project →
            </a>
          </article>
          <article className="project-card">
            <h3>99 nätter på kronan</h3>
            <p>Three.js: Sigge överlever korta dygn, mörka nätter, morötter, räv, katt och skyddsföremål.</p>
            <a href="/99-natter-pa-kronan/" className="text-link">
              Spela →
            </a>
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
            <h3>Tidlapp</h3>
            <p>Proof of concept for BEAst delivery note import, resource control, approval and estimate variance follow-up.</p>
            <a
              href="https://tidlapp.andreasmartensson.com"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Open Tidlapp →
            </a>
          </article>
          <article className="project-card">
            <h3>AMC Download Manager</h3>
            <p>Android beta for reopening the latest download with one tap, plus focused sharing, rename and delete tools.</p>
            <a href="/AMCDM/" className="text-link">
              Download beta →
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
