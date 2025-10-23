/**
 * Main App Component
 * Root component that handles routing and layout structure
 */
import Nav from 'react-bootstrap/Nav';
import { Routes, Route, Link } from "react-router-dom";

// Styles
import './App.css';
import './Container/TextContainer.css';
import './Container/ImageContainer.css';

// Pages
import About from './Pages/About';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Game_Demo from './Pages/Game_Demo';
import Projects from './Pages/Projects';
import Rendering from './Pages/Rendering';
import Work_Experience from './Pages/Work_Experience';

// Container Components
import MusicPlayer from './Container/MusicPlayer';

// Assets
import Logo from './assets/E0B.png';

function App() {
  return (
    <>
      {/* Background Music Player */}
      <MusicPlayer />

      {/* Navigation Header */}
      <header className="Main-header">
        <nav className="navbar">
          {/* Logo Section */}
          <div className="logo-container">
            <img src={Logo} alt="UFOERIC Logo" className="logo" />
            <Nav className="logo-links">
              <Nav.Item>
                <Nav.Link as={Link} to="/">UFOERIC</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          {/* Navigation Menu */}
          <Nav className="nav-links">
            <Nav.Item>
              <Nav.Link as={Link} to="/Gallery">Gallery</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/Projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/Rendering">Rendering</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/Game_Demo">Game Demo</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/Work_Experience">Work Experience</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/About">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="contact">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <div className="hero">
              <h1 className="hero-title">Welcome to UFOERIC Portfolio</h1>
              <p className="hero-description">
                Explore my collection of technical art projects, game development work,
                and visual productions. Each project showcases different aspects of my
                skills in Unity, Unreal Engine, and shader development.
              </p>
            </div>
          } />

          {/* Page Routes */}
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Game_Demo" element={<Game_Demo />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Rendering" element={<Rendering />} />
          <Route path="/Work_Experience" element={<Work_Experience />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 UFOERIC. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
