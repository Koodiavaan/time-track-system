import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = ({ isAuthenticated, onLogout }) => {
    return (
        <div className="main-menu">
            <div className="menu-items">
                {isAuthenticated ? (
                    <>
                        <div className="menu-item">
                            <Link to="/teams">Joukkueet</Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/draw">Arvonta</Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/report">Raportit</Link>
                        </div>
                        <div className="menu-item">
                            <button onClick={onLogout}>Kirjaudu ulos</button>
                        </div>
                    </>
                ) : (
                    <div className="menu-item">
                        <Link to="/login">Kirjaudu sisään</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainMenu;
