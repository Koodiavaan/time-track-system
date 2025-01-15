const mongoose = require('mongoose');

// Mongoose-malli joukkueelle
const TeamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tasks: [
    {
      name: { type: String, required: true },
      time: { type: Number, required: true }
    }
  ]
});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;
