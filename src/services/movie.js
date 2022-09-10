const Movie = require('../models/movie');

const create = async function (movie) {
    try {
        const newMovie = new Movie({
            title: movie.title,
            banner: movie.banner,
            duration: movie.duration,
            description: movie.description,
            releaseDate: movie.releaseDate
        });

        const savedMovie = await newMovie.save();
        return savedMovie;
    } catch (error) {
        throw error;
    }
}

const getAll = async function () {
    try {
        const movies = await Movie.find();
        if (movies.length > 0) {
            return movies;
        } else {
            return [];
        }
    } catch (error) {
        throw error;
    }
}

const getOneById = async function (id) {
    try {
        const movie = await Movie.findById(id);
        if (movie) {
            return movie;
        } else {
            return null;
        }
    } catch (error) {
        throw error;
    }
}

const updateMovie = async function (id, movie) {
    try {
        const movieDB = await Movie.findById(id);
        if (!movieDB) return null;

        movieDB.title = movie.title;
        movieDB.banner = movie.banner;
        movieDB.duration = movie.duration;
        movieDB.description = movie.description;
        movieDB.releaseDate = movie.releaseDate;

        const savedMovie = await movieDB.save();
        return savedMovie;
    } catch (error) {
        throw error;
    }
}

const deleteMovie = async function (id) {
    try {
        const movie = await Movie.findById(id);
        if (!movie) return null;
        return movie.delete();
    } catch (error) {
        throw error;
    }
}

module.exports = {
    create,
    getAll,
    getOneById,
    updateMovie,
    deleteMovie
}