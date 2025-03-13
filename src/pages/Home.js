import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="page-container">
            <Header />
            <main>
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content text-center">
                            <span className="badge-primary mb-3">Smart Parking Solution</span>
                            <h1 className="hero-title mb-4">
                                Find Perfect Parking Space
                                <span className="gradient-text"> Near You</span>
                            </h1>
                            <p className="hero-subtitle mb-4">
                                Book parking spots in advance, save time and money.
                                Guaranteed spaces, easy booking, and secure payment.
                            </p>
                            <div className="search-input-group mb-4">
                                <input 
                                    type="text" 
                                    className="search-input" 
                                    placeholder="Enter location or landmark..."
                                />
                                <Link to="/search" className="btn btn-primary">
                                    Find Parking
                                </Link>
                            </div>
                            <div className="stats-container">
                                <div className="stat-item">
                                    <h3>2000+</h3>
                                    <p>Parking Spots</p>
                                </div>
                                <div className="stat-item">
                                    <h3>150+</h3>
                                    <p>Locations</p>
                                </div>
                                <div className="stat-item">
                                    <h3>50K+</h3>
                                    <p>Happy Users</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features-section">
                    <div className="container">
                        <div className="section-header text-center mb-4">
                            <span className="badge-secondary mb-2">Why Choose Us</span>
                            <h2>Smart Features for Smart Parking</h2>
                        </div>
                        <div className="modern-grid">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <h3>Easy Location</h3>
                                <p>Find parking spots near you with real-time availability updates</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <h3>Save Time</h3>
                                <p>Book your spot in advance and avoid driving around searching</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <h3>Secure Parking</h3>
                                <p>All parking locations are verified and monitored 24/7</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-wallet"></i>
                                </div>
                                <h3>Best Prices</h3>
                                <p>Get competitive rates and special discounts on long-term parking</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="how-it-works">
                    <div className="container">
                        <div className="section-header text-center mb-4">
                            <span className="badge-primary mb-2">Simple Process</span>
                            <h2>How It Works</h2>
                        </div>
                        <div className="steps-container">
                            <div className="step-item">
                                <div className="step-number">1</div>
                                <h3>Search Location</h3>
                                <p>Enter your destination to find nearby parking spots</p>
                            </div>
                            <div className="step-item">
                                <div className="step-number">2</div>
                                <h3>Compare & Book</h3>
                                <p>Compare prices and book your preferred spot</p>
                            </div>
                            <div className="step-item">
                                <div className="step-number">3</div>
                                <h3>Park with Ease</h3>
                                <p>Follow directions and park hassle-free</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="container">
                        <div className="cta-card">
                            <div className="cta-content">
                                <h2>Ready to Start Parking Smarter?</h2>
                                <p>Join thousands of happy users who save time and money with our parking solution.</p>
                                <div className="cta-buttons">
                                    <Link to="/search" className="btn btn-primary">Find Parking Now</Link>
                                    <Link to="/signup" className="btn btn-outline">Create Account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Home;