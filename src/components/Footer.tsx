import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">◈</span>
              <span className="logo-text">
                Loo<span className="logo-accent">Peyi</span>
              </span>
            </div>
            <p>The first closed-loop digital payment ecosystem for boarding school students in Rwanda.</p>
            <div className="footer-location">📍 Kigali, Rwanda</div>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Product</h4>
              <Link to="/problem">The Problem</Link>
              <Link to="/solution">The Solution</Link>
              <Link to="/how-it-works">How It Works</Link>
              <Link to="/market">Market</Link>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/contact#investors">For Investors</Link>
              <Link to="/contact#schools">For Schools</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 LooPeyi Rwanda. All rights reserved.</span>
          <span>hello@LooPeyi.rw</span>
        </div>
      </div>
    </footer>
  );
}
