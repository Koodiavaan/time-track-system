// src/components/TeamDetails.js

import React from 'react';
import './TeamList.css'; // Tuodaan CSS-tiedosto

const TeamDetails = ({ team }) => {
    if (!team) {
        return <div>Loading...</div>;
    }

    return (
        <div className="team-details">
            <h3>Joukkueen Nimi: {team.name}</h3>
            <p>Joukkueen ID: {team.id}</p>
            {/* Voit lisätä lisää tietoja joukkueesta, jos niitä on saatavilla */}
        </div>
    );
};

export default TeamDetails;
