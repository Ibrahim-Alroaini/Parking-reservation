import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

function ExtendParking() {
    const navigate = useNavigate();
    const [selectedTime, setSelectedTime] = useState(null);
    const [loading, setLoading] = useState(false);

    const timeOptions = [
        { value: 30, label: '30 mins', price: '$5' },
        { value: 60, label: '1 hour', price: '$10' },
        { value: 120, label: '2 hours', price: '$18' },
        { value: 180, label: '3 hours', price: '$25' },
    ];

    const handleExtend = async () => {
        if (!selectedTime) return;
        
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            navigate('/confirmation');
        }, 1500);
    };

    return (
        <Layout>
            <div className="extend-parking-container">
                <div className="page-header">
                    <h1 className="page-title">Extend Parking</h1>
                    <p className="page-subtitle">Choose additional time for your parking</p>
                </div>

                <div className="card">
                    <div className="current-booking">
                        <h3>Current Booking</h3>
                        <div className="detail-row">
                            <span className="detail-label">Location</span>
                            <span className="detail-value">Central Park Garage</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Spot</span>
                            <span className="detail-value">A-123</span>
                        </div>
                        <div className="detail-row">
                            <span className="detail-label">Current End Time</span>
                            <span className="detail-value">2:00 PM</span>
                        </div>
                    </div>

                    <div className="time-selection">
                        <h3>Select Additional Time</h3>
                        <div className="time-selector">
                            {timeOptions.map((option) => (
                                <div
                                    key={option.value}
                                    className={`time-option ${selectedTime === option.value ? 'active' : ''}`}
                                    onClick={() => setSelectedTime(option.value)}
                                >
                                    <div className="time-label">{option.label}</div>
                                    <div className="time-price">{option.price}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {selectedTime && (
                        <div className="extension-summary">
                            <div className="detail-row">
                                <span className="detail-label">New End Time</span>
                                <span className="detail-value">4:00 PM</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Additional Cost</span>
                                <span className="detail-value">
                                    {timeOptions.find(opt => opt.value === selectedTime)?.price}
                                </span>
                            </div>
                        </div>
                    )}

                    <button 
                        className={`btn btn-primary btn-block ${!selectedTime ? 'disabled' : ''}`}
                        onClick={handleExtend}
                        disabled={!selectedTime || loading}
                    >
                        {loading ? 'Processing...' : 'Extend Parking'}
                    </button>
                </div>
            </div>
        </Layout>
    );
}

export default ExtendParking;
