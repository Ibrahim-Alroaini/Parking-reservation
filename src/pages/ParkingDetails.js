import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';

function ParkingDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    // This would typically come from an API
    const parkingDetails = {
        id,
        name: 'Central Park Garage',
        rating: 4.5,
        reviews: 128,
        address: '123 Main St, City',
        price: '$2/hour',
        images: [
            '/images/parking1.jpg',
            '/images/parking2.jpg',
            '/images/parking3.jpg'
        ],
        amenities: [
            { icon: 'fas fa-umbrella', name: 'Covered Parking' },
            { icon: 'fas fa-shield-alt', name: 'Security' },
            { icon: 'fas fa-video', name: 'CCTV' },
            { icon: 'fas fa-car-wash', name: 'Car Wash' },
            { icon: 'fas fa-charging-station', name: 'EV Charging' },
            { icon: 'fas fa-restroom', name: 'Restroom' }
        ],
        description: 'Modern parking facility in the heart of the city with 24/7 security and convenient access to major attractions.',
        availableSpots: 45,
        totalSpots: 100,
        openingHours: '24/7',
        features: [
            'Well-lit facility',
            'Wheelchair accessible',
            'Mobile payment accepted',
            'Monthly passes available'
        ]
    };

    const handleBooking = () => {
        navigate('/booking', { 
            state: { 
                parkingId: id,
                parkingName: parkingDetails.name,
                date: selectedDate,
                time: selectedTime
            }
        });
    };

    return (
        <Layout>
            <div className="page-container">
                <div className="parking-details">
                    <div className="parking-gallery">
                        <div className="main-image">
                            <img src={parkingDetails.images[0]} alt={parkingDetails.name} />
                        </div>
                        <div className="thumbnail-images">
                            {parkingDetails.images.slice(1).map((image, index) => (
                                <img key={index} src={image} alt={`${parkingDetails.name} view ${index + 2}`} />
                            ))}
                        </div>
                    </div>

                    <div className="parking-info-container">
                        <div className="parking-info">
                            <div className="parking-header">
                                <h1>{parkingDetails.name}</h1>
                                <div className="rating">
                                    <i className="fas fa-star"></i>
                                    <span>{parkingDetails.rating}</span>
                                    <span className="reviews">({parkingDetails.reviews} reviews)</span>
                                </div>
                            </div>

                            <div className="location-info">
                                <i className="fas fa-map-marker-alt"></i>
                                <p>{parkingDetails.address}</p>
                            </div>

                            <div className="availability-info">
                                <div className="availability-status">
                                    <span className="spots-available">
                                        {parkingDetails.availableSpots} spots available
                                    </span>
                                    <div className="progress-bar">
                                        <div 
                                            className="progress" 
                                            style={{ 
                                                width: `${(parkingDetails.availableSpots / parkingDetails.totalSpots) * 100}%`
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="operating-hours">
                                    <i className="fas fa-clock"></i>
                                    <span>{parkingDetails.openingHours}</span>
                                </div>
                            </div>

                            <div className="description">
                                <h2>About this parking</h2>
                                <p>{parkingDetails.description}</p>
                            </div>

                            <div className="amenities">
                                <h2>Amenities</h2>
                                <div className="amenities-grid">
                                    {parkingDetails.amenities.map((amenity, index) => (
                                        <div key={index} className="amenity-item">
                                            <i className={amenity.icon}></i>
                                            <span>{amenity.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="features">
                                <h2>Features</h2>
                                <ul className="features-list">
                                    {parkingDetails.features.map((feature, index) => (
                                        <li key={index}>
                                            <i className="fas fa-check"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="booking-card">
                            <div className="price">
                                <span className="amount">{parkingDetails.price}</span>
                                <span className="period">per hour</span>
                            </div>

                            <div className="booking-form">
                                <div className="form-group">
                                    <label>Select Date</label>
                                    <div className="input-group">
                                        <i className="fas fa-calendar input-icon"></i>
                                        <input
                                            type="date"
                                            value={selectedDate}
                                            onChange={(e) => setSelectedDate(e.target.value)}
                                            min={new Date().toISOString().split('T')[0]}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Select Time</label>
                                    <div className="input-group">
                                        <i className="fas fa-clock input-icon"></i>
                                        <input
                                            type="time"
                                            value={selectedTime}
                                            onChange={(e) => setSelectedTime(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <button 
                                    className="btn btn-primary btn-block"
                                    onClick={handleBooking}
                                    disabled={!selectedDate || !selectedTime}
                                >
                                    Book Now
                                </button>
                            </div>

                            <div className="booking-info">
                                <p>
                                    <i className="fas fa-info-circle"></i>
                                    Free cancellation up to 24 hours before arrival
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ParkingDetails;
