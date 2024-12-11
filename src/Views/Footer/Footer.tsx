import './Footer.css';
export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} WasakaBegein. All rights reserved.</p>
      </div>
    </footer>
  );
}
