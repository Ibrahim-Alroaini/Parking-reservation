import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function Profile() {
    const [activeTab, setActiveTab] = useState('personal');
    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1234567890',
        avatar: 'https://via.placeholder.com/150',
        vehicles: [
            { id: 1, number: 'ABC 123', type: 'Car', model: 'Toyota Camry' },
            { id: 2, number: 'XYZ 789', type: 'SUV', model: 'Honda CR-V' }
        ],
        paymentMethods: [
            { id: 1, type: 'credit', last4: '4242', expiry: '12/24' },
            { id: 2, type: 'debit', last4: '1234', expiry: '09/25' }
        ]
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editedProfile, setEditedProfile] = useState(profile);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProfile(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        setProfile(editedProfile);
        setIsEditing(false);
    };

    const stats = [
        { label: 'Total Bookings', value: 12 },
        { label: 'Active Bookings', value: 2 },
        { label: 'Completed', value: 8 },
        { label: 'Cancelled', value: 2 }
    ];

    return (
        <Layout>
            <div className="page-container">
                <div className="profile-container">
                    <div className="profile-header">
                        <div className="profile-avatar-section">
                            <img src={profile.avatar} alt={profile.name} className="profile-avatar" />
                            <button className="btn btn-outline-primary btn-sm">
                                <i className="fas fa-camera"></i> Change Photo
                            </button>
                        </div>
                        <div className="profile-info">
                            <h1>{profile.name}</h1>
                            <p className="profile-email">{profile.email}</p>
                        </div>
                    </div>

                    <div className="profile-stats">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <h3>{stat.value}</h3>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="profile-content">
                        <div className="profile-tabs">
                            <button 
                                className={`tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
                                onClick={() => setActiveTab('personal')}
                            >
                                Personal Info
                            </button>
                            <button 
                                className={`tab-btn ${activeTab === 'vehicles' ? 'active' : ''}`}
                                onClick={() => setActiveTab('vehicles')}
                            >
                                Vehicles
                            </button>
                            <button 
                                className={`tab-btn ${activeTab === 'payment' ? 'active' : ''}`}
                                onClick={() => setActiveTab('payment')}
                            >
                                Payment Methods
                            </button>
                            <button 
                                className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
                                onClick={() => setActiveTab('security')}
                            >
                                Security
                            </button>
                        </div>

                        <div className="tab-content">
                            {activeTab === 'personal' && (
                                <div className="personal-info">
                                    <div className="section-header">
                                        <h2>Personal Information</h2>
                                        <button 
                                            className="btn btn-outline-primary"
                                            onClick={() => setIsEditing(!isEditing)}
                                        >
                                            {isEditing ? 'Cancel' : 'Edit'}
                                        </button>
                                    </div>

                                    {isEditing ? (
                                        <div className="edit-form">
                                            <div className="form-group">
                                                <label>Full Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={editedProfile.name}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={editedProfile.email}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={editedProfile.phone}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <button 
                                                className="btn btn-primary"
                                                onClick={handleSave}
                                            >
                                                Save Changes
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="info-display">
                                            <div className="info-item">
                                                <span className="label">Full Name:</span>
                                                <span className="value">{profile.name}</span>
                                            </div>
                                            <div className="info-item">
                                                <span className="label">Email:</span>
                                                <span className="value">{profile.email}</span>
                                            </div>
                                            <div className="info-item">
                                                <span className="label">Phone:</span>
                                                <span className="value">{profile.phone}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {activeTab === 'vehicles' && (
                                <div className="vehicles-info">
                                    <div className="section-header">
                                        <h2>My Vehicles</h2>
                                        <button className="btn btn-primary">
                                            <i className="fas fa-plus"></i> Add Vehicle
                                        </button>
                                    </div>

                                    <div className="vehicles-list">
                                        {profile.vehicles.map(vehicle => (
                                            <div key={vehicle.id} className="vehicle-card">
                                                <div className="vehicle-icon">
                                                    <i className="fas fa-car"></i>
                                                </div>
                                                <div className="vehicle-details">
                                                    <h3>{vehicle.model}</h3>
                                                    <p>{vehicle.number}</p>
                                                    <span className="vehicle-type">{vehicle.type}</span>
                                                </div>
                                                <div className="vehicle-actions">
                                                    <button className="btn btn-outline-primary btn-sm">
                                                        Edit
                                                    </button>
                                                    <button className="btn btn-outline-danger btn-sm">
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'payment' && (
                                <div className="payment-info">
                                    <div className="section-header">
                                        <h2>Payment Methods</h2>
                                        <button className="btn btn-primary">
                                            <i className="fas fa-plus"></i> Add Payment Method
                                        </button>
                                    </div>

                                    <div className="payment-methods-list">
                                        {profile.paymentMethods.map(method => (
                                            <div key={method.id} className="payment-card">
                                                <div className="card-icon">
                                                    <i className={`fab fa-cc-${method.type}`}></i>
                                                </div>
                                                <div className="card-details">
                                                    <h3>{method.type.toUpperCase()} Card</h3>
                                                    <p>**** **** **** {method.last4}</p>
                                                    <span className="expiry">Expires: {method.expiry}</span>
                                                </div>
                                                <div className="card-actions">
                                                    <button className="btn btn-outline-danger btn-sm">
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'security' && (
                                <div className="security-info">
                                    <div className="section-header">
                                        <h2>Security Settings</h2>
                                    </div>

                                    <div className="security-options">
                                        <div className="security-item">
                                            <div className="security-item-header">
                                                <h3>Change Password</h3>
                                                <button className="btn btn-outline-primary">
                                                    Update
                                                </button>
                                            </div>
                                            <p>Last changed 3 months ago</p>
                                        </div>

                                        <div className="security-item">
                                            <div className="security-item-header">
                                                <h3>Two-Factor Authentication</h3>
                                                <button className="btn btn-outline-primary">
                                                    Enable
                                                </button>
                                            </div>
                                            <p>Add an extra layer of security to your account</p>
                                        </div>

                                        <div className="security-item">
                                            <div className="security-item-header">
                                                <h3>Login History</h3>
                                                <button className="btn btn-outline-secondary">
                                                    View
                                                </button>
                                            </div>
                                            <p>View your recent login activity</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Profile;
