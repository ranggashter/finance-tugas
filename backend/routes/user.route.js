import express from "express";
import { getUserCountByRole, getMitraUsers, login, getUserById } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/count-by-role", getUserCountByRole);
router.get("/mitra", getMitraUsers);
router.post("/login", login);
router.get("/:id", getUserById);

export default router;
