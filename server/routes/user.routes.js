import { Router } from "express";
import User from "../models/user.model.js";

const router = Router();

router.get("/getUser", async (req,res) => {
    try{
        const { id } = req.body;
        const UserFound = await User.findById(id);

        return res.status(200).json(UserFound)
    }catch(error){
        console.log(error);
    }
})

router.post("/createUser", async (req, res) => {
    try {
        const { username, email, password, favMovies } = req.body;

        const newUser = new User({
            username,
            email,
            password,
            favMovies
        });
        await newUser.save();
        return res.status(200).json(newUser);
    } catch (error) {
        console.log(error);
    }
});

router.put("/updateUser", async (req, res) => {
    try{
        const { id, username, email, password, favMovies } = req.body;
        
        const UserFound = await User.findByIdAndUpdate(id, {
            username,
            email,
            password,
            favMovies
        });
        return res.status(200).json(UserFound);
    }catch (error){
        console.log(error);
    }
});

router.delete("/deleteUser", async (req, res) => {
    try {
        const { id } = req.body;
        const UserFound = await User.findByIdAndDelete(id);
        return res.status(200).json(UserFound);
    } catch (error) {
        console.log(error);
    }
});

export default router

