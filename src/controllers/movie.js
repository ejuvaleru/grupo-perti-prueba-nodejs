const { response, request } = require('express');

let Movie = require('../services/movie');

const create = async function (req = request, res = response, next) {
    try {

        const savedMovie = await Movie.create(req.body);
        return res.status(200).json({ status: 200, data: savedMovie, message: "Succesfully added" });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

const getAll = async function (req = request, res = response, next) {
    try {
        const movies = await Movie.getAll();
        return res.status(200).json({ status: 200, data: movies, message: "Success" });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

const getOneById = async function (req = request, res = response, next) {
    try {
        const { id } = req.params;
        const movie = await Movie.getOneById(id);
        if (movie) return res.status(200).json({ status: 200, data: movie, message: "Success" });
        return res.status(404).json({ status: 404, data: null, message: "Register not found" })
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

const updateMovie = async function (req = request, res = response, next) {
    try {
        const { id } = req.params;
        const updatedMovie = await Movie.updateMovie(id, req.body);
        if(updatedMovie) return res.status(200).json({ status: 201, data: updatedMovie, message: "Successfully updated" });
        else res.status(404).json({ status: 404, data: updatedMovie, message: "Register not updated because it does not exist" });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

const deleteMovie = async function (req = request, res = response, next) {
    try {
        const { id } = req.params;
        const deletedMovie = await Movie.deleteMovie(id);
        if(deletedMovie) return res.status(200).json({ status: 200, message: "Successfully deleted" });
        else return res.status(404).json({ status: 404, message: "Register not deleted because it does not exist" });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}

module.exports = {
    create,
    getAll,
    getOneById,
    updateMovie,
    deleteMovie
}