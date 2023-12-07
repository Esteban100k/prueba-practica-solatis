import { Router } from "express";
import {
    createUser,
    deleteUser,
    login,
    updateUser
} from "../controllers/user.controller";
import { verifyToken } from "../middleware/auth";

const router = Router();

// Routes
router.post("/", verifyToken, createUser);
router.put("/", verifyToken, updateUser);
router.post("/login", login);
router.delete("/", verifyToken, deleteUser);

export default router;
