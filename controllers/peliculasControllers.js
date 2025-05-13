const Movie = require('../models/peliculasModel');

module.exports = {
  // Obtener todos los registros
  getAllMovies: async (req, res) => {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las películas', error });
    }
  },

  // Crear un nuevo registro
  createMovie: async (req, res) => {
    try {
      const { title, releaseYear, director, genre, duration } = req.body;
      const newMovie = new Movie({ title, releaseYear, director, genre, duration });
      await newMovie.save();
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la película', error });
    }
  },

    // Modificar un registro
    updateMovie: async (req, res) => {
      try {
        const { id } = req.params;
        const { title, releaseYear, director, genre, duration } = req.body;
        const updatedMovie = await Movie.findByIdAndUpdate(id, { title, releaseYear, director, genre, duration }, { new: true });
        if (!updatedMovie) {
          return res.status(404).json({ message: 'Película no encontrada' });
        }
        res.status(200).json({message: "Se actualizó la película correctamente", data : updatedMovie});
      } catch (error) {
        res.status(500).json({ message: 'Error al modificar la película', error });
      }
    },

    // Eliminar un registro
    deleteMovie: async (req, res) => {
      try {
        const { id } = req.params;
        const deletedMovie = await Movie.findByIdAndDelete(id);
        if (!deletedMovie) {
          return res.status(404).json({ message: 'Película no encontrada' });
        }
        res.status(200).json({ message: 'Película eliminada', data: deletedMovie });
      } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la película', error });
      }
    }
}