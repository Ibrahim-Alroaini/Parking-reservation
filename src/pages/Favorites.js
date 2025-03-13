import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function Favorites() {
    const favorites = [
        {
            id: 1,
            name: 'Central Park Garage',
            address: '123 Main St, City',
            rating: 4.5,
            reviews: 128,
            price: '$2/hour',
            image: '/images/parking1.jpg',
            distance: '0.5 miles'
        },
        {
            id: 2,
            name: 'Downtown Parking',
            address: '456 Park Ave, City',
            rating: 4.2,
            reviews: 96,
            price: '$3/hour',
            image: '/images/parking2.jpg',
            distance: '1.2 miles'
        },
        {
            id: 3,
            name: 'Station Parking',
            address: '789 Station Rd, City',
            rating: 4.7,
            reviews: 156,
            price: '$2.5/hour',
            image: '/images/parking3.jpg',
            distance: '0.8 miles'
        }
    ];

    const handleRemoveFavorite = (id) => {
        // Handle remove from favorites
        console.log('Remove from favorites:', id);
    };

    return (
        <Layout>
            <div className="page-container">
                <div className="container">
                    <div className="page-header">
                        <h1 className="page-title">Favorite Parking Spots</h1>
                        <p className="page-subtitle">Quick access to your preferred parking locations</p>
                    </div>

                    {favorites.length > 0 ? (
                        <div className="favorites-grid">
                            {favorites.map(spot => (
                                <div key={spot.id} className="favorite-card card">
                                    <div className="favorite-actions">
                                        <button 
                                            className="btn btn-icon btn-light"
                                            onClick={() => handleRemoveFavorite(spot.id)}
                                            title="Remove from favorites"
                                        >
                                            ❤️
                                        </button>
                                    </div>
                                    
                                    <Link to={`/parking/${spot.id}`} className="card-link">
                                        <div className="card-image">
                                            <img src={spot.image} alt={spot.name} />
                                        </div>
                                        
                                        <div className="card-content">
                                            <h3 className="card-title">{spot.name}</h3>
                                            <p className="card-address">{spot.address}</p>
                                            
                                            <div className="card-info">
                                                <div className="info-item">
                                                    <span className="info-label">Rating</span>
                                                    <span className="info-value">⭐ {spot.rating} ({spot.reviews})</span>
                                                </div>
                                                <div className="info-item">
                                                    <span className="info-label">Price</span>
                                                    <span className="info-value">{spot.price}</span>
                                                </div>
                                                <div className="info-item">
                                                    <span className="info-label">Distance</span>
                                                    <span className="info-value">{spot.distance}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state">
                            <div className="empty-icon">❤️</div>
                            <h2>No favorites yet</h2>
                            <p>Start adding parking spots to your favorites for quick access</p>
                            <Link to="/search" className="btn btn-primary">
                                Find Parking Spots
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default Favorites;
