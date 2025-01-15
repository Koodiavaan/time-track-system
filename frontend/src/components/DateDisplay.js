// src/components/DateDisplay.js
import React from 'react';

const DateDisplay = () => {
    const today = new Date();
    const dateString = today.toLocaleDateString(); // Muodosta päivämäärä

    return (
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
            Tänään: {dateString}
        </div>
    );
};

export default DateDisplay;
