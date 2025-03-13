import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function BookingHistory() {
    const [filter, setFilter] = useState('all');
    
    const bookings = [
        {
            id: '123456',
            parkingName: 'Central Park Garage',
            status: 'active',
            date: 'Feb 27, 2024',
            startTime: '10:00 AM',
            endTime: '12:00 PM',
            duration: '2 hours',
            amount: '$15.00',
            location: '123 Main St, City',
            vehicleNumber: 'ABC 123'
        },
        {
            id: '123457',
            parkingName: 'Downtown Parking',
            status: 'completed',
            date: 'Feb 26, 2024',
            startTime: '2:00 PM',
            endTime: '5:00 PM',
            duration: '3 hours',
            amount: '$20.00',
            location: '456 Park Ave, City',
            vehicleNumber: 'XYZ 789'
        },
        {
            id: '123458',
            parkingName: 'City Center Garage',
            status: 'cancelled',
            date: 'Feb 25, 2024',
            startTime: '9:00 AM',
            endTime: '11:00 AM',
            duration: '2 hours',
            amount: '$12.00',
            location: '789 Center St, City',
            vehicleNumber: 'DEF 456'
        }
    ];

    const filteredBookings = filter === 'all' 
        ? bookings 
        : bookings.filter(booking => booking.status === filter);

    const getStatusColor = (status) => {
        switch(status) {
            case 'active':
                return 'status-active';
            case 'completed':
                return 'status-completed';
            case 'cancelled':
                return 'status-cancelled';
            default:
                return '';
        }
    };

    return (
        <Layout>
            <div className="page-container">
                <div className="booking-history-container">
                    <div className="page-header">
                        <h1>Booking History</h1>
                        <div className="booking-filters">
                            <button 
                                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                                onClick={() => setFilter('all')}
                            >
                                All
                            </button>
                            <button 
                                className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
                                onClick={() => setFilter('active')}
                            >
                                Active
                            </button>
                            <button 
                                className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
                                onClick={() => setFilter('completed')}
                            >
                                Completed
                            </button>
                            <button 
                                className={`filter-btn ${filter === 'cancelled' ? 'active' : ''}`}
                                onClick={() => setFilter('cancelled')}
                            >
                                Cancelled
                            </button>
                        </div>
                    </div>

                    <div className="bookings-list">
                        {filteredBookings.map(booking => (
                            <div key={booking.id} className="booking-card">
                                <div className="booking-header">
                                    <div className="booking-title">
                                        <h3>{booking.parkingName}</h3>
                                        <span className={`booking-status ${getStatusColor(booking.status)}`}>
                                            {booking.status}
                                        </span>
                                    </div>
                                    <div className="booking-id">
                                        Booking ID: {booking.id}
                                    </div>
                                </div>

                                <div className="booking-details">
                                    <div className="detail-group">
                                        <div className="detail-item">
                                            <i className="fas fa-calendar"></i>
                                            <span>{booking.date}</span>
                                        </div>
                                        <div className="detail-item">
                                            <i className="fas fa-clock"></i>
                                            <span>{booking.startTime} - {booking.endTime}</span>
                                        </div>
                                    </div>

                                    <div className="detail-group">
                                        <div className="detail-item">
                                            <i className="fas fa-map-marker-alt"></i>
                                            <span>{booking.location}</span>
                                        </div>
                                        <div className="detail-item">
                                            <i className="fas fa-car"></i>
                                            <span>{booking.vehicleNumber}</span>
                                        </div>
                                    </div>

                                    <div className="booking-price">
                                        <span className="price-label">Total Amount:</span>
                                        <span className="price-amount">{booking.amount}</span>
                                    </div>
                                </div>

                                <div className="booking-actions">
                                    {booking.status === 'active' && (
                                        <>
                                            <Link 
                                                to={`/booking/extend/${booking.id}`}
                                                className="btn btn-outline-primary"
                                            >
                                                Extend Booking
                                            </Link>
                                            <button className="btn btn-danger">
                                                Cancel Booking
                                            </button>
                                        </>
                                    )}
                                    <Link 
                                        to={`/booking/${booking.id}`}
                                        className="btn btn-secondary"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default BookingHistory;
