import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        setLoginError('');

        // Simulate API call for login
        try {
            const response = await mockLoginApi(formData.email, formData.password);
            if (response.success) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('userRole', response.role);
                navigate('/');
            } else {
                setLoginError(response.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            setLoginError('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const mockLoginApi = (email, password) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (email === 'driver@example.com' && password === 'password123') {
                    resolve({ success: true, token: 'fake-token', role: 'driver' });
                } else if (email === 'manager@example.com' && password === 'password123') {
                    resolve({ success: true, token: 'fake-token', role: 'manager' });
                } else {
                    resolve({ success: false, message: 'Invalid email or password' });
                }
            }, 1000); // Simulate network delay
        });
    };

    return (   <div className="auth-container">
        <div className="container">
            <div className="auth-card">
                <div className="auth-header">
                    <span className="badge-primary">Welcome Back</span>
                    <h1 className="auth-title">Login to Your Account</h1>
                    <p className="auth-subtitle">Enter your credentials to access your account</p>
                </div>

                {loginError && <div className="alert alert-error">{loginError}</div>}

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>

                    <div className="form-footer">
                        <div className="form-check">
                            <input type="checkbox" id="remember" className="form-check-input" />
                            <label htmlFor="remember" className="form-check-label">Remember me</label>
                        </div>
                        <Link to="/forgot-password" className="link-primary">Forgot Password?</Link>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
                        {isLoading ? <div className="spinner"></div> : 'Login'}
                    </button>

                    <div className="auth-footer">
                        <p>Don't have an account? <Link to="/signup" className="link-primary">Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
);
}

export default Login;