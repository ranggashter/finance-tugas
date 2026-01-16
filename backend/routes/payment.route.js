import express from "express";
import {
  getPendapatan,
  getPendapatanChart,
} from "../controllers/payment.controller.js";

const router = express.Router();

router.get("/pendapatan", getPendapatan);
router.get("/pendapatan/chart", getPendapatanChart);

export default router;
