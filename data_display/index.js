import express from "express";
import cron from "node-cron";
import { connectToDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import { displayingRoute } from "./routes/displayingRoute.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());
connectToDB();
cron.schedule("*/5 * * * *", () => {
    console.log("Running database seed...");
    app.use("/images", displayingRoute);
});
app.use("/images", displayingRoute);
app.listen(PORT,() => {
      console.log(`API is running on port localhost:${PORT}/images`);
    }
  )