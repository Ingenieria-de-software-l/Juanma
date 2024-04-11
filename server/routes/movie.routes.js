import { Router } from "express";
import Movie from "../models/movie.model";

const router = Router();

router.get("/getmovie", async (req,res) => {
    try{
        const { id } = req.body;
        const movieFound = await Movie.findById(id);

        return res.status(200).json(movieFound)
    }catch(error){
        console.log(error);
    }
})

router.post("/createMovie", async (req, res) => {
    try {
        const { name, description, members, date } = req.body;

        const newMovie = new Movie({
            name,
            description,
            members,
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
        const { id, name, description, members, date } = req.body;
        
        const movieFound = await Movie.findByIdAndUpdate(id, {
            name,
            description,
            members,
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
        const movieFound = await Movie.findByIdAndDelete(id);
        return res.status(200).json(movieFound);
    } catch (error) {
        console.log(error);
    }
});

export default router

