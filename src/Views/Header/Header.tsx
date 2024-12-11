import { useState, useEffect } from 'react';
import './Header.css';
import { foto } from '../../Assets';
import { csv } from '../../Pdf';
export default function Header() {
  const [dynamicText, setDynamicText] = useState('My name is Alan de Jesús');
  const messages = [
    'My name is Alan de Jesús',
    'I am a software developer'
  ];
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      setDynamicText(messages[index]);
    }, 3000); // Changes every 3 seconds
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const redirectToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/alandejesusmtz/', '_blank');
  };

  const showPDF = () => {
    window.open(csv, '_blank'); 
  };

  return (
    <header className="header-container">
      <div className="imagen">
        <img src={foto} alt="profile picture" />
      </div>
      <div className="subheader-container">
        <div className="text-container">
          <h1>
            <span className="highlight">Hello</span>, {dynamicText}
          </h1>
          <p className="description">
            I am a passionate developer with experience in <strong>front-end</strong> and <strong>back-end</strong>, creating complete and optimized solutions. I work on developing <strong>web</strong>, <strong>mobile</strong>, and <strong>desktop</strong> applications, combining attractive design with robust functionality.{' '}
            <span className="quote">Make your ideas come true with cutting-edge technology!</span>
          </p>
          <div className="button-group">
            <button className="btn linkedin-btn" onClick={redirectToLinkedIn}>
              LinkedIn
            </button>
            <button className="btn csv-btn" onClick={showPDF}>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}