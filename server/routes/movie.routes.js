import { Router } from "express";
import Movie from "../models/movie.model.js";

const router = Router();

router.get("/getAllMovies", async (req,res) => {
    try{
        const movies = await Movie.find().populate("author");
        return res.status(200).json(movies)
    }catch(error){
        console.log(error);
    }
})

router.post("/getMoviesByUser", async (req,res) => {
    try{
        const { user } = req.body;
        const movieFound = await Movie.find({author: user});

        return res.status(200).json(movieFound)
    }catch(error){
        console.log(error);
    }
})

router.post("/createMovie", async (req, res) => {
    try {
        const { name, description, image, members, author, date } = req.body;

        const newMovie = new Movie({
            name,
            description,
            image,
            members,
            author,
            date
        });
        await newMovie.save();
        return res.status(200).json(newMovie);
    } catch (error) {
        console.log(error);
    }
});

router.put("/updateMovie", async (req, res) => {
    try{
        const { id, name, description, image, members, author, date } = req.body;
        
        const movieFound = await Movie.findByIdAndUpdate(id, {
            name,
            description,
            image,
            members,
            author,
            date
        });
        return res.status(200).json(movieFound);
    }catch (error){
        console.log(error);
    }
});

router.delete("/deleteMovie", async (req, res) => {
    try {
        const { id } = req.body;
        console.log(id)
        const movieFound = await Movie.findByIdAndDelete(id);
        return res.status(200).json(movieFound);
    } catch (error) {
        console.log(error);
    }
});

export default router

