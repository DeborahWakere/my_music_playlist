import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-main">
      <div className="footer-container">
        <div className="footer-brand-section">
          <div className="footer-logo-row">
            <span className="footer-musical-note">🎵</span>
            <h3 className="footer-brand-title">Prayer Playlist</h3>
          </div>
          <p className="footer-tagline">Nourishing souls through deep prophetic worship and intimate melodies.</p>
        </div>

        <div className="footer-links-section">
          <h4 className="footer-section-title">Quick Links</h4>
          <ul className="footer-links-list">
            <li><a href="#hero" className="footer-item-link">Home</a></li>
            <li><a href="#Playlist" className="footer-item-link">Playlist</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright-row">
        <p>&copy; {currentYear} Private Property. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
