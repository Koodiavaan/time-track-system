// src/components/Clock.js
import React, { useEffect, useState } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
            {time}
        </div>
    );
};

export default Clock;
