// src/utils/drawTeams.js

const drawTeamsIntoRounds = (teams) => {
    // Täällä on logiikka joukkueiden arvontaan
    const shuffledTeams = [...teams].sort(() => Math.random() - 0.5);
    const rounds = [];
    const teamsPerRound = 6;

    for (let i = 0; i < shuffledTeams.length; i += teamsPerRound) {
        rounds.push(shuffledTeams.slice(i, i + teamsPerRound));
    }

    return rounds;
};

// Viedään drawTeamsIntoRounds nimivientinä
export { drawTeamsIntoRounds };
