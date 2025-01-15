
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'testuser' && password === 'password123') {
            localStorage.setItem('user', username);
            setIsAuthenticated(true);
            navigate('/');
        } else {
            setError('Virheellinen käyttäjä tai salasana');
        }
    };

    return (
        <div className="login-container">
            <h2>Kirjaudu sisään</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Käyttäjätunnus:</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div className="input-group">
                    <label>Salasana:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type="submit" className="login-button">Kirjaudu sisään</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default Login;
