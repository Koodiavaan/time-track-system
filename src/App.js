import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TeamList from './components/TeamList';
import DrawnTeams from './components/DrawnTeams';
import Clock from './components/Clock';
import DateDisplay from './components/DateDisplay';
import MainMenu from './components/MainMenu';
import './App.css';
import Report from './components/Report'; 
import Login from './components/Login';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <div className="app-container">
                <DateDisplay />
                <Clock />
                <MainMenu isAuthenticated={isAuthenticated} onLogout={handleLogout} />
                <Routes>
                    <Route 
                        path="/" 
                        element={isAuthenticated ? <Navigate to="/teams" /> : <Navigate to="/login" />} 
                    />
                    <Route 
                        path="/teams" 
                        element={isAuthenticated ? <TeamList /> : <Navigate to="/login" />} 
                    />
                    <Route 
                        path="/draw" 
                        element={isAuthenticated ? <DrawnTeams /> : <Navigate to="/login" />} 
                    />
                    <Route 
                        path="/report" 
                        element={isAuthenticated ? <Report /> : <Navigate to="/login" />} 
                    />
                    <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
