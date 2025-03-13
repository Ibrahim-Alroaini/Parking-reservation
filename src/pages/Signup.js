import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function Signup() {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle signup logic here
            console.log('Form submitted:', formData);
        }
    };

    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setPasswordVisible(!passwordVisible);
        } else {
            setConfirmPasswordVisible(!confirmPasswordVisible);
        }
    };

    const getPasswordStrength = () => {
        const { password } = formData;
        if (password.length === 0) return { text: 'Password strength', color: 'var(--text-light)' };
        if (password.length < 6) return { text: 'Weak', color: 'var(--error)' };
        if (password.length < 8) return { text: 'Medium', color: 'var(--warning)' };
        return { text: 'Strong', color: 'var(--success)' };
    };

    return (
        <Layout>
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <h2>Create Your Account</h2>
                        <p>Join us to start booking parking spots</p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <div className="input-group">
                                <i className="fas fa-envelope input-icon"></i>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            {errors.email && <div className="error-message"><i className="fas fa-exclamation-circle"></i>{errors.email}</div>}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <div className="input-group">
                                    <i className="fas fa-user input-icon"></i>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Enter first name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <div className="input-group">
                                    <i className="fas fa-user input-icon"></i>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Enter last name"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <div className="input-group">
                                <i className="fas fa-phone input-icon"></i>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="Enter phone number"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Create Password</label>
                            <div className="input-group">
                                <i className="fas fa-lock input-icon"></i>
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter password"
                                    required
                                />
                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() => togglePasswordVisibility('password')}
                                >
                                    <i className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                </button>
                            </div>
                            {errors.password && <div className="error-message"><i className="fas fa-exclamation-circle"></i>{errors.password}</div>}
                            <div className="password-strength">
                                <div className="strength-bar">
                                    <div 
                                        className="strength-progress"
                                        style={{ 
                                            width: `${(formData.password.length / 12) * 100}%`,
                                            backgroundColor: getPasswordStrength().color
                                        }}
                                    ></div>
                                </div>
                                <span className="strength-text" style={{ color: getPasswordStrength().color }}>
                                    {getPasswordStrength().text}
                                </span>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <div className="input-group">
                                <i className="fas fa-lock input-icon"></i>
                                <input
                                    type={confirmPasswordVisible ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm password"
                                    required
                                />
                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() => togglePasswordVisibility('confirm')}
                                >
                                    <i className={`fas ${confirmPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                </button>
                            </div>
                            {errors.confirmPassword && <div className="error-message"><i className="fas fa-exclamation-circle"></i>{errors.confirmPassword}</div>}
                        </div>

                        <div className="form-group checkbox-group">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="checkbox-text">
                                    I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
                                </span>
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">
                            Create Account
                        </button>

                        <div className="auth-footer">
                            <p>Already have an account? <Link to="/login">Sign In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default Signup;