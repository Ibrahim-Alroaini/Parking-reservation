import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

function Booking() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        startTime: '',
        endTime: '',
        vehicleType: 'car',
        vehicleNumber: '',
        notes: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle booking submission
        navigate('/booking/confirm');
    };

    return (
        <Layout>
            <div className="page-container">
                <div className="booking-container">
                    <div className="booking-header">
                        <h1>Book Your Parking Spot</h1>
                        <p>Fill in the details below to reserve your parking space</p>
                    </div>

                    <div className="booking-form-card">
                        <form onSubmit={handleSubmit} className="booking-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <div className="input-group">
                                    <i className="fas fa-user input-icon"></i>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="date">Date</label>
                                    <div className="input-group">
                                        <i className="fas fa-calendar input-icon"></i>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="startTime">Start Time</label>
                                    <div className="input-group">
                                        <i className="fas fa-clock input-icon"></i>
                                        <input
                                            type="time"
                                            id="startTime"
                                            name="startTime"
                                            value={formData.startTime}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="endTime">End Time</label>
                                    <div className="input-group">
                                        <i className="fas fa-clock input-icon"></i>
                                        <input
                                            type="time"
                                            id="endTime"
                                            name="endTime"
                                            value={formData.endTime}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="vehicleType">Vehicle Type</label>
                                    <div className="input-group">
                                        <i className="fas fa-car input-icon"></i>
                                        <select
                                            id="vehicleType"
                                            name="vehicleType"
                                            value={formData.vehicleType}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="car">Car</option>
                                            <option value="motorcycle">Motorcycle</option>
                                            <option value="suv">SUV</option>
                                            <option value="van">Van</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="vehicleNumber">Vehicle Number</label>
                                    <div className="input-group">
                                        <i className="fas fa-hashtag input-icon"></i>
                                        <input
                                            type="text"
                                            id="vehicleNumber"
                                            name="vehicleNumber"
                                            value={formData.vehicleNumber}
                                            onChange={handleChange}
                                            placeholder="Enter vehicle number"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="notes">Additional Notes</label>
                                <div className="input-group">
                                    <i className="fas fa-sticky-note input-icon"></i>
                                    <textarea
                                        id="notes"
                                        name="notes"
                                        value={formData.notes}
                                        onChange={handleChange}
                                        placeholder="Any special requirements or notes"
                                        rows="3"
                                    ></textarea>
                                </div>
                            </div>

                            <div className="booking-summary">
                                <h3>Booking Summary</h3>
                                <div className="summary-details">
                                    <div className="summary-item">
                                        <span>Parking Rate:</span>
                                        <span>$2/hour</span>
                                    </div>
                                    <div className="summary-item">
                                        <span>Duration:</span>
                                        <span>2 hours</span>
                                    </div>
                                    <div className="summary-item total">
                                        <span>Total:</span>
                                        <span>$4.00</span>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">
                                Proceed to Payment
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Booking;