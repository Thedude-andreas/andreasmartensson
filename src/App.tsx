import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { IssDashboard } from './pages/IssDashboard'

function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <header className="site-nav">
          <NavLink to="/" className="logo">
            andreasmartensson.com
          </NavLink>
          <nav>
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/iss">ISS Dashboard</NavLink>
            <a href="https://tempsense.andreasmartensson.com" target="_blank" rel="noreferrer">
              TempSense
            </a>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/iss" element={<IssDashboard />} />
          </Routes>
        </main>
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Andreas Martensson · This is where obscure projects go to die.</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
