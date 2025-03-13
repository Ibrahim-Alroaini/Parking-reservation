import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
            setLoading(false);
        }, 1500);
    };

    return (
        <Layout>
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <h1 className="page-title">Reset Password</h1>
                        <p className="page-subtitle">
                            {!isSubmitted 
                                ? 'Enter your email address and we will send you instructions to reset your password.'
                                : 'Check your email for instructions to reset your password.'}
                        </p>
                    </div>

                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="auth-form">
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <button 
                                type="submit" 
                                className={`btn btn-primary btn-block ${loading ? 'loading' : ''}`}
                                disabled={loading || !email}
                            >
                                {loading ? 'Sending...' : 'Send Reset Link'}
                            </button>

                            <div className="auth-links">
                                <Link to="/login" className="link-primary">
                                    Back to Login
                                </Link>
                            </div>
                        </form>
                    ) : (
                        <div className="success-message">
                            <div className="success-icon">✓</div>
                            <h2>Email Sent!</h2>
                            <p>We have sent password reset instructions to {email}</p>
                            <div className="auth-links">
                                <Link to="/login" className="btn btn-primary">
                                    Return to Login
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default ForgotPassword;