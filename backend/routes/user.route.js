import express from "express";
import { getUserCountByRole, getMitraUsers, login, getUserById, getUserProfile, updateProfile, updateAccount } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/count-by-role", getUserCountByRole);
router.get("/mitra", getMitraUsers);
router.post("/login", login);
router.get("/:id", getUserById);
router.get("/profile/:id", getUserProfile);
router.put("/profile/:id", updateProfile);
router.put("/account/:id", updateAccount);

export default router;
