import React, { useEffect, useState } from 'react';

const Report = () => {
    const [teams, setTeams] = useState([]); // Varmista, että teams alustetaan tyhjällä listalla

    useEffect(() => {
        // Hae joukkueet esimerkiksi API:sta tai jostain muusta lähteestä
        const fetchTeams = async () => {
            // Simuloidaan API-kutsua
            const response = await fetch('http://localhost:5001/api/teams');
            const data = await response.json();
            setTeams(data);
        };

        fetchTeams();
    }, []);

    // Varmista, että teams ei ole undefined ennen kuin yrität käyttää sitä
    if (!teams) {
        return <div>Ladataan joukkueita...</div>;
    }

    return (
        <div>
            <h1>Raportti</h1>
            {teams.length === 0 ? (
                <p>Ei joukkueita löytynyt.</p>
            ) : (
                <ul>
                    {teams.map((team) => (
                        <li key={team.id}>{team.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Report;
