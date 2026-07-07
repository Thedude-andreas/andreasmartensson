import './App.css'
import { Home } from './pages/Home'

const appVersion = __APP_VERSION__

function App() {
  return (
    <div className="site-shell">
      <header className="site-nav">
        <a href="/" className="logo">
          andreasmartensson.com
        </a>
        <nav>
          <a href="/">Home</a>
          <a href="https://iss.andreasmartensson.com" target="_blank" rel="noreferrer">
            ISS Dashboard
          </a>
          <a href="https://tempsense.andreasmartensson.com" target="_blank" rel="noreferrer">
            Tempsense
          </a>
        </nav>
      </header>
      <main>
        <Home />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Andreas Martensson · This is where obscure projects go to die.</p>
        <p>Build {appVersion}</p>
      </footer>
    </div>
  )
}

export default App
