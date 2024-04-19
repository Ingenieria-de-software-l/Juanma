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
        const { username, email, password } = req.body;

        const newUser = new User({
            username,
            email,
            password,
            favMovies: []
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

router.post('login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });
        const token = await createAccessToken({ id: user._id });
        return res.status(200).json({...user, token});
    } catch (error) {
        console.log(error);
    }
})

export const verifyToken = async (req, res) => {
    try {
        const { token } = req.body

        if (!token) return res.status(401).json({ message: 'No autorizado' })

        jwt.verify(token, JWT_SECRET, async (err, decoded) => {
            if (err) return res.status(401).json({ message: 'No autorizado' })
            
            const user = await User.findById(decoded.id)
            if (!user) return res.status(404).json({ message: 'Usuario no encontrado' })
            return res.status(200).json({
                id: user._id,
                username: user.username,
                email: user.email
            })
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export default router

