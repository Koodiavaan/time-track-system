const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Lisää tämä rivi CORS-tuen varmistamiseksi
const teamsRouter = require('./routes/Teams'); // Muista käyttää samaa nimeä, kuin tiedostossa
const Team = require('./models/Team');

const app = express();

// Käytetään CORS:ia kaikille pyynnöille

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json()); // Lisää tämä rivi JSON-pyyntöjen käsittelyyn

// Käytetään teamsRouteria
app.use('/api/teams', teamsRouter); // Reitit

// Palvelimen kuuntelu
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// MongoDB-yhteys
mongoose.connect('mongodb://mongo:27017/DB_NAME', {

})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

  // Tarkistaa, onko joukkueita jo tietokannassa, ja lisää tarvittaessa 36 joukkueen pohjat
  (async () => {
    try {
      const count = await Team.countDocuments({});
      if (count === 0) {
        const teams = Array.from({ length: 36 }, (_, i) => ({
          name: `Team ${i + 1}`,
          tasks: [],
        }));
        await Team.insertMany(teams);
        console.log('36 teams added to the database.');
      }
    } catch (error) {
      console.error('Error initializing teams:', error);
    }
  })();

// Palvelimen kuuntelu
