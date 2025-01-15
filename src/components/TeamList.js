import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Box, Grid, Paper } from '@mui/material';

const TeamList = () => {
  const [teams, setTeams] = useState([]);
  const [teamName, setTeamName] = useState('');

  // Hae joukkueet backendistä
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/teams');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams();
  }, []);

  // Lisää uusi joukkue
  const handleAddTeam = async (e) => {
    e.preventDefault();
    if (teamName === '') return;

    const newTeam = { name: teamName };

    try {
      const response = await fetch('http://localhost:5001/api/teams', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTeam)
      });
      const result = await response.json();
      setTeams([...teams, result]);
      setTeamName('');
    } catch (error) {
      console.error('Error adding team:', error);
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>Team List</Typography>
      
      {/* Ruudukko joukkueiden esittämiseen */}
      <Grid container spacing={2}>
        {teams.map(team => (
          <Grid item xs={6} sm={4} md={3} key={team._id}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6">{team.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <form onSubmit={handleAddTeam} style={{ marginTop: '20px' }}>
        <TextField
          label="New Team Name"
          variant="outlined"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          sx={{ marginBottom: 2, width: '100%' }}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Add Team
        </Button>
      </form>
    </Box>
  );
};

export default TeamList;

