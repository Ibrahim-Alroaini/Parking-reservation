import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SearchParking() {
    const [searchQuery, setSearchQuery] = useState('');
    const [parkingSpots] = useState([
        {
            id: 1,
            name: "Central Plaza Parking",
            address: "123 Main St, Downtown",
            price: "5.00",
            available: 15,
            rating: 4.5,
            distance: "0.3",
            image: "https://images.unsplash.com/photo-1470224114660-3f6686c562eb?w=500"
        },
        {
            id: 2,
            name: "City Mall Parking",
            address: "456 Market St, Westside",
            price: "4.50",
            available: 8,
            rating: 4.2,
            distance: "0.5",
            image: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=500"
        },
        {
            id: 3,
            name: "Station Square Parking",
            address: "789 Station Rd, Eastside",
            price: "6.00",
            available: 25,
            rating: 4.8,
            distance: "0.7",
            image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=500"
        }
    ]);

    return (
        <div className="page-container fade-in">
            <Header />
            <main className="container py-4">
                <section className="search-container">
                    <div className="search-form">
                        <div className="form-group">
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Search for parking locations..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-primary">
                            <i className="fas fa-search"></i> Search
                        </button>
                    </div>
                    <div className="filter-group mt-3">
                        <button className="btn btn-outline">Price</button>
                        <button className="btn btn-outline">Distance</button>
                        <button className="btn btn-outline">Availability</button>
                        <button className="btn btn-outline">Rating</button>
                    </div>
                </section>

                <section className="mt-4">
                    <h2 className="section-title mb-3">Available Parking Spots</h2>
                    <div className="parking-grid">
                        {parkingSpots.map(spot => (
                            <Link to={`/parking-details/${spot.id}`} key={spot.id} className="parking-card">
                                <img src={spot.image} alt={spot.name} className="parking-image" />
                                <div className="parking-content">
                                    <div className="flex justify-between items-start">
                                        <h3 className="parking-title">{spot.name}</h3>
                                        <span className="parking-price">${spot.price}/hr</span>
                                    </div>
                                    <p className="parking-location">
                                        <i className="fas fa-map-marker-alt"></i> {spot.address}
                                    </p>
                                    <div className="flex justify-between items-center mt-2">
                                        <div className="rating">
                                            <i className="fas fa-star text-warning"></i>
                                            <span className="ml-1">{spot.rating}</span>
                                        </div>
                                        <div className="text-sm text-light">
                                            {spot.distance} km away
                                        </div>
                                    </div>
                                    <div className="mt-2 text-success">
                                        <i className="fas fa-parking"></i>
                                        <span className="ml-1">{spot.available} spots available</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="mt-4">
                    <div className="chart-container">
                        <div className="map-placeholder" style={{ height: '400px', background: 'var(--surface-alt)' }}>
                            <div className="flex items-center justify-center h-full text-light">
                                <i className="fas fa-map-marked-alt mr-2"></i>
                                Map integration coming soon
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default SearchParking;
