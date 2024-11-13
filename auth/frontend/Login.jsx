

import React, { useState } from 'react';
import { FaGithub, FaGoogle, FaFacebook } from 'react-icons/fa';
import './Form.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        tempErrors.email = formData.email ? '' : 'Email is required.';
        tempErrors.email = /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Email is not valid.';
        tempErrors.password = formData.password ? '' : 'Password is required.';
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === '');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Handle form submission
            console.log(formData);
        }
    };

    return (
        <div className="auth-container">
            <div className="cover-image"></div>
            <div className="auth-card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div className="social-login">
                    <button className="github social"><FaGithub /> Log in with GitHub</button>
                    <button className="google social"><FaGoogle /> Log in with Google</button>
                    <button className="facebook social"><FaFacebook /> Log in with Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
