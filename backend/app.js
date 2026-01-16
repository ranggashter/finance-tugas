import express from "express";
import cors from "cors";
import paymentRoute from "./routes/payment.route.js";
import userRoutes from "./routes/user.route.js";
import bookingRoutes from "./routes/booking.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/payments", paymentRoute);
app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);


export default app;
