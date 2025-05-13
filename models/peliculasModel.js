const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  releaseYear: {
    type: Number,
    required: true,
    min: 1888 // Año de la primera película que salio
  },
  director: {
    type: String,
    required: true,
    trim: true
  },
  genre: {
    type: String,
    required: true,
    trim: true
  },
  duration: {
    type: Number, // minutos
    required: true
  }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
