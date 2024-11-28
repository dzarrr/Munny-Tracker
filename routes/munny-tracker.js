import express from "express";
import { getCell } from "../controllers/munnyTrackerController.js";

const router = express.Router();

// Get cash flow
router.get("/:year/:month/:date", getCell);

// Append cash flow

// Create new sheets

export default router;
