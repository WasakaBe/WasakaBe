import { useState } from 'react';
import { logo } from '../../Assets';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="title">WASAKABEGEIN</span>
      </div>
      <div className={`navbar-right ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home" className="nav-link">HOME</a>
        <a href="#about" className="nav-link">ABOUT</a>
        <a href="#projects" className="nav-link">PROJECTS</a>
        <a href="#skills" className="nav-link">SKILLS</a>
      </div>
      <button className="hamburger-menu" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'rotate' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'fade' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'rotate-reverse' : ''}`}></div>
      </button>
    </nav>
  );
}
