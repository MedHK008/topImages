import express from "express";
import {displayImages} from '../controllers/displayingController.js';

export const displayingRoute = express.Router();

displayingRoute.get("/", displayImages);
export default displayingRoute;