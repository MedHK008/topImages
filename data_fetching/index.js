import cron from "node-cron";
import { connectToDB } from "./config/db.js";
import { seedingRoute } from "./routes/seedingRoute.js";

connectToDB();
cron.schedule("*/5 * * * *", () => {
    console.log("Running database seed...");
    seedingRoute();
});
seedingRoute();