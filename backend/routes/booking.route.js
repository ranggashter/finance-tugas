import express from "express";
import {
  getPesananChart,
  getAllBookingTransactions,
} from "../controllers/booking.controller.js";

const router = express.Router();

router.get("/chart", getPesananChart);
router.get("/transactions", getAllBookingTransactions);

export default router;
