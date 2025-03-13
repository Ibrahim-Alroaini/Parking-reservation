import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="grid grid-4">
                    <div className="footer-section">
                        <h3 className="footer-title">CarPark</h3>
                        <p className="footer-description">Find and book parking spots with ease.</p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Facebook">FB</a>
                            <a href="#" className="social-link" aria-label="Twitter">TW</a>
                            <a href="#" className="social-link" aria-label="Instagram">IG</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/search">Find Parking</Link></li>
                            <li><Link to="/booking-history">My Bookings</Link></li>
                            <li><Link to="/favorites">Favorites</Link></li>
                            <li><Link to="/profile">My Account</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Help & Support</h4>
                        <ul className="footer-links">
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/terms">Terms of Service</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4 className="footer-subtitle">Newsletter</h4>
                        <p className="footer-description">Subscribe for updates and offers.</p>
                        <form className="newsletter-form">
                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="form-control"
                                />
                            </div>
                            <button type="submit" className="primary-button">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} CarPark. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;