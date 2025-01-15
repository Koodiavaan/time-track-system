import React, { useState, useEffect } from 'react';
import { drawTeamsIntoRounds } from '../utils/drawTeams'; // Oikea polku utils-kansioon


const teams = [
    { id: 1, name: 'Joukkue 1' },
    { id: 2, name: 'Joukkue 2' },
    { id: 3, name: 'Joukkue 3' },
    { id: 4, name: 'Joukkue 4' },
    { id: 5, name: 'Joukkue 5' },
    { id: 6, name: 'Joukkue 6' },
    { id: 7, name: 'Joukkue 7' },
    { id: 8, name: 'Joukkue 8' },
    { id: 9, name: 'Joukkue 9' },
    { id: 10, name: 'Joukkue 10' },
    { id: 11, name: 'Joukkue 11' },
    { id: 12, name: 'Joukkue 12' },
    { id: 13, name: 'Joukkue 13' },
    { id: 14, name: 'Joukkue 14' },
    { id: 15, name: 'Joukkue 15' },
    { id: 16, name: 'Joukkue 16' },
    { id: 17, name: 'Joukkue 17' },
    { id: 18, name: 'Joukkue 18' },
    { id: 19, name: 'Joukkue 19' },
    { id: 20, name: 'Joukkue 20' },
    { id: 21, name: 'Joukkue 21' },
    { id: 22, name: 'Joukkue 22' },
    { id: 23, name: 'Joukkue 23' },
    { id: 24, name: 'Joukkue 24' },
    { id: 25, name: 'Joukkue 25' },
    { id: 26, name: 'Joukkue 26' },
    { id: 27, name: 'Joukkue 27' },
    { id: 28, name: 'Joukkue 28' },
    { id: 29, name: 'Joukkue 29' },
    { id: 30, name: 'Joukkue 30' },
    { id: 31, name: 'Joukkue 31' },
    { id: 32, name: 'Joukkue 32' },
    { id: 33, name: 'Joukkue 33' },
    { id: 34, name: 'Joukkue 34' },
    { id: 35, name: 'Joukkue 35' },
    { id: 36, name: 'Joukkue 36' },
];


const DrawnTeams = () => {
    const [rounds, setRounds] = useState([]);

    useEffect(() => {
        const savedRounds = JSON.parse(localStorage.getItem('drawnRounds'));
        if (savedRounds) {
            setRounds(savedRounds);
        }
    }, []);

    const handleDrawTeams = () => {
        const newRounds = drawTeamsIntoRounds(teams);
        setRounds(newRounds);
        localStorage.setItem('drawnRounds', JSON.stringify(newRounds));
    };

    return (
        <div>
            <h1>Joukkueiden Arvonta</h1>
            <button onClick={handleDrawTeams}>Arvotaan joukkueet</button>
            <h2>Arvotut Erät</h2>
            {rounds.map((round, index) => (
                <div key={index}>
                    <h3>Erä {index + 1}</h3>
                    <ul>
                        {round.map((team) => (
                            <li key={team.id}>{team.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default DrawnTeams;

