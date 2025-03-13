import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function Confirmation() {
    const bookingDetails = {
        id: '123456',
        parkingName: 'Central Park Garage',
        spotNumber: 'A-123',
        date: 'Feb 27, 2024',
        startTime: '10:00 AM',
        endTime: '12:00 PM',
        duration: '2 hours',
        amount: '$15.00',
        location: '123 Main St, City'
    };

    return (
        <Layout>
            <div className="confirmation-container">
                <div className="confirmation-icon">✓</div>
                <h1 className="page-title">Booking Confirmed!</h1>
                <p className="page-subtitle">Your parking spot has been successfully reserved</p>

                <div className="confirmation-details">
                    <div className="detail-row">
                        <span className="detail-label">Booking ID</span>
                        <span className="detail-value">#{bookingDetails.id}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Parking Location</span>
                        <span className="detail-value">{bookingDetails.parkingName}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Spot Number</span>
                        <span className="detail-value">{bookingDetails.spotNumber}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Date</span>
                        <span className="detail-value">{bookingDetails.date}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Time</span>
                        <span className="detail-value">{bookingDetails.startTime} - {bookingDetails.endTime}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Duration</span>
                        <span className="detail-value">{bookingDetails.duration}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Amount Paid</span>
                        <span className="detail-value">{bookingDetails.amount}</span>
                    </div>
                </div>

                <div className="confirmation-actions">
                    <Link to="/booking-history" className="btn btn-primary">
                        View Booking History
                    </Link>
                    <Link to="/" className="btn btn-outline">
                        Back to Home
                    </Link>
                </div>

                <div className="confirmation-help">
                    <p>Need help? Contact our support team</p>
                    <a href="tel:+1234567890" className="link-primary">+1 234 567 890</a>
                </div>
            </div>
        </Layout>
    );
}

export default Confirmation;