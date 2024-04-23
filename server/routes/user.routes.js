import { Router } from "express";
import { createUser, deleteUser, getUser, login, updateUser, verifyToken } from "../controllers/user.controller.js";

const router = Router();

router.get("/getUser", getUser)

router.post("/createUser", createUser);

router.put("/updateUser", updateUser);

router.delete("/deleteUser", deleteUser);

router.post('/login', login)

router.post('/verify', verifyToken)

export default router

