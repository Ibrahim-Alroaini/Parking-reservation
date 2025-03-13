import React, { useState } from 'react';
import Layout from '../components/Layout';

function PaymentMethods() {
    const [showAddCard, setShowAddCard] = useState(false);
    const [cards, setCards] = useState([
        {
            id: 1,
            type: 'Visa',
            number: '****-****-****-4242',
            expiry: '12/24',
            isDefault: true
        },
        {
            id: 2,
            type: 'Mastercard',
            number: '****-****-****-5555',
            expiry: '08/25',
            isDefault: false
        }
    ]);

    const handleAddCard = (e) => {
        e.preventDefault();
        // Add card logic here
        setShowAddCard(false);
    };

    const handleSetDefault = (cardId) => {
        setCards(cards.map(card => ({
            ...card,
            isDefault: card.id === cardId
        })));
    };

    const handleDeleteCard = (cardId) => {
        setCards(cards.filter(card => card.id !== cardId));
    };

    return (
        <Layout>
            <div className="payment-methods-container">
                <div className="page-header">
                    <h1 className="page-title">Payment Methods</h1>
                    <p className="page-subtitle">Manage your payment cards</p>
                </div>

                <div className="saved-cards">
                    {cards.map(card => (
                        <div key={card.id} className="payment-method-card">
                            <div className="card-header">
                                <div className="card-type">
                                    <span className="card-logo">{card.type}</span>
                                    {card.isDefault && <span className="badge-primary">Default</span>}
                                </div>
                                <div className="card-actions">
                                    {!card.isDefault && (
                                        <button 
                                            className="btn btn-outline btn-sm"
                                            onClick={() => handleSetDefault(card.id)}
                                        >
                                            Set as Default
                                        </button>
                                    )}
                                    <button 
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDeleteCard(card.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                            <div className="card-details">
                                <div className="detail-row">
                                    <span className="detail-label">Card Number</span>
                                    <span className="detail-value">{card.number}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Expiry</span>
                                    <span className="detail-value">{card.expiry}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button 
                    className="btn btn-primary"
                    onClick={() => setShowAddCard(true)}
                >
                    Add New Card
                </button>

                {showAddCard && (
                    <div className="modal">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2>Add New Card</h2>
                                <button 
                                    className="btn-close"
                                    onClick={() => setShowAddCard(false)}
                                >
                                    ×
                                </button>
                            </div>
                            <form onSubmit={handleAddCard} className="card-form">
                                <div className="form-group">
                                    <label>Card Number</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="1234 5678 9012 3456"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Name on Card</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Expiry Date</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="MM/YY"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>CVV</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="123"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    Add Card
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default PaymentMethods;
