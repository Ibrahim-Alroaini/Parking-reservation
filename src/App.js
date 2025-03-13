import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';

// Auth Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';

// Driver Pages
import DriverDashboard from './pages/driver/Dashboard';
import VehicleManagement from './pages/driver/VehicleManagement';
import ParkingSearch from './pages/driver/ParkingSearch';
import BookingHistory from './pages/BookingHistory';
import Favorites from './pages/Favorites';

// Manager Pages
import ManagerDashboard from './pages/manager/Dashboard';
import ParkingManagement from './pages/manager/ParkingManagement';

// Public Pages
import Home from './pages/Home';

const PrivateRoute = ({ children, allowedRoles }) => {
  const isAuthenticated = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Protected Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/* Driver Routes */}
        <Route path="driver" element={
          <PrivateRoute allowedRoles={['driver']}>
            <DriverDashboard />
          </PrivateRoute>
        } />
        <Route path="driver/vehicles" element={
          <PrivateRoute allowedRoles={['driver']}>
            <VehicleManagement />
          </PrivateRoute>
        } />
        <Route path="driver/search" element={
          <PrivateRoute allowedRoles={['driver']}>
            <ParkingSearch />
          </PrivateRoute>
        } />
        <Route path="driver/bookings" element={
          <PrivateRoute allowedRoles={['driver']}>
            <BookingHistory />
          </PrivateRoute>
        } />
        <Route path="driver/favorites" element={
          <PrivateRoute allowedRoles={['driver']}>
            <Favorites />
          </PrivateRoute>
        } />

        {/* Manager Routes */}
        <Route path="manager" element={
          <PrivateRoute allowedRoles={['manager']}>
            <ManagerDashboard />
          </PrivateRoute>
        } />
        <Route path="manager/parking" element={
          <PrivateRoute allowedRoles={['manager']}>
            <ParkingManagement />
          </PrivateRoute>
        } />

        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;