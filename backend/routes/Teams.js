const express = require('express');
const router = express.Router();
const Team = require('../models/Team'); // Varmista, että tämä polku on oikea

// Joukkueen lisääminen
router.post('/', async (req, res) => {
    console.log(req.body); // Tarkista, mitä dataa saadaan
    const newTeam = new Team(req.body);
    try {
        await newTeam.save();
        res.status(201).json(newTeam);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Joukkueiden hakeminen
router.get('/', async (req, res) => {
    try {
        const teams = await Team.find();
        res.json(teams);
    } catch (error) {
        console.error('Error fetching teams:', error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
