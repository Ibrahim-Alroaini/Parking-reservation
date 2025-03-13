import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
    const location = useLocation();
    const isAuthPage = ['/login', '/signup', '/forgot-password'].includes(location.pathname);

    return (
        <div className="app-layout">
            {!isAuthPage && <Header />}
            <div className={`page-container ${isAuthPage ? 'auth-container' : ''}`}>
                <Outlet />
            </div>
            {!isAuthPage && <Footer />}
        </div>
    );
}

export default Layout;
