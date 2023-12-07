import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

// Import routes
import usersRoutes from './routes/user.routes'

// Config
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.options('*', cors());

// Routes
app.use("/api/users", usersRoutes)

export default app;
