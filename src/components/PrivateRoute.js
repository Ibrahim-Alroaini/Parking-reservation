import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ children, allowedRoles }) => {
    const { isAuthenticated, userRole, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (allowedRoles && !allowedRoles.includes(userRole)) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default PrivateRoute;
