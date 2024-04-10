import { Router } from "express";
import Movie from "../models/movie.model";

const router = Router();

router.get("/getmovie",(req,res) => {
    const { id } = req.body;
    const movieFound = Movie.findById(id);

    return res.status(200).json(movieFound)
})

router.post("/createMovie", (req, res) => {
    const { name, description, members, date } = req.body;

});

router.put("/updateMovie", (req, res) => {
    const { id } = req.body;
});

router.delete("/deleteMovie", (req, res) => {
    const { id } = req.body;
});

export default router

