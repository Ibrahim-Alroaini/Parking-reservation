import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('token');
    const userRole = localStorage.getItem('userRole');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        navigate('/login');
    };

    const renderNavLinks = () => {
        if (!isAuthenticated) {
            return (
                <div className="nav-links">
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                        Home
                    </Link>
                    <div className="nav-auth">
                        <Link to="/login" className="primary-button">
                            Login
                        </Link>
                        <Link to="/signup" className="secondary-button">
                            Sign Up
                        </Link>
                    </div>
                </div>
            );
        }

        if (userRole === 'driver') {
            return (
                <div className="nav-links">
                    <Link to="/driver" className={`nav-link ${location.pathname === '/driver' ? 'active' : ''}`}>
                        Dashboard
                    </Link>
                    <Link to="/driver/search" className={`nav-link ${location.pathname === '/driver/search' ? 'active' : ''}`}>
                        Find Parking
                    </Link>
                    <Link to="/driver/vehicles" className={`nav-link ${location.pathname === '/driver/vehicles' ? 'active' : ''}`}>
                        My Vehicles
                    </Link>
                    <button onClick={handleLogout} className="secondary-button">
                        Logout
                    </button>
                </div>
            );
        }

        if (userRole === 'manager') {
            return (
                <div className="nav-links">
                    <Link to="/manager" className={`nav-link ${location.pathname === '/manager' ? 'active' : ''}`}>
                        Dashboard
                    </Link>
                    <Link to="/manager/parking" className={`nav-link ${location.pathname === '/manager/parking' ? 'active' : ''}`}>
                        Parking Management
                    </Link>
                    <button onClick={handleLogout} className="secondary-button">
                        Logout
                    </button>
                </div>
            );
        }
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <Link to={isAuthenticated ? `/${userRole}` : "/"} className="logo">
                    <span className="logo-text">CarPark</span>
                </Link>

                <button 
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    {renderNavLinks()}
                </nav>
            </div>
        </header>
    );
}

export default Header;