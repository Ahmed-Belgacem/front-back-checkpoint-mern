import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-divi" />

      <div className="footer-inside">

        <div className="footer-log">
          <div className="footer-logo">
            <div className="footer-text">
              <span className="footer-brand">LIRO<span className="footer-brand-mix">LIRO</span></span>
              <span className="footer-sub">Play Anything. Anywhere. Anytime.</span>
            </div>
          </div>
          <p className="desc">
            Your ultimate destination for every game across every platform. Discover, track, and explore the best games ever made.
          </p>
          <div className="footer-socials">
            <div className="social-btn">f</div>
            <div className="social-btn">𝕏</div>
            <div className="social-btn">◎</div>
            <div className="social-btn">▶</div>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-links-title">EXPLORE</h4>
          <a href="/" className="footer-link">Home</a>
          <a href="/" className="footer-link">Action Games</a>
          <a href="/" className="footer-link">RPG Worlds</a>
          <a href="/" className="footer-link">Shooters</a>
          <a href="/" className="footer-link">Indie Gems</a>
          <a href="/" className="footer-link">New & Hot</a>
        </div>

        <div className="footer-links">
          <h4 className="footer-links-title">PLATFORMS</h4>
          <a href="/" className="footer-link">🖥️ PC Games</a>
          <a href="/" className="footer-link">🎮 PlayStation 5</a>
          <a href="/" className="footer-link">🟢 Xbox Series X</a>
          <a href="/" className="footer-link">🔴 Nintendo Switch</a>
          <a href="/" className="footer-link">📱 Mobile</a>
        </div>

        <div className="footer-links">
          <h4 className="footer-links-title">SUPPORT</h4>
          <div className="footer-contact-item">
            <span className="contact-icon">💬</span>
            <span>Live Chat Support</span>
          </div>
          <div className="footer-contact-item">
            <span className="contact-icon">📧</span>
            <span>support@nexvault.com</span>
          </div>
          <div className="footer-contact-item">
            <span className="contact-icon">📱</span>
            <span>Available on iOS & Android</span>
          </div>
          <div className="footer-contact-item">
            <span className="contact-icon">🌐</span>
            <span>Available in 190+ countries</span>
          </div>
        </div>

      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <span className="footer-copy">© 2026 LIROLIRO. All rights reserved.</span>
        <div className="footer-legal">
          <a href="/" className="footer-legal-link">Privacy Policy</a>
          <a href="/" className="footer-legal-link">Terms of Service</a>
          <a href="/" className="footer-legal-link">Cookie Policy</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;