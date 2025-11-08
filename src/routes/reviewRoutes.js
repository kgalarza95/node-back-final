import express from "express";
import * as reviewController from "../controllers/reviewController.js";

const router = express.Router();

router.get("/", reviewController.getReviews);
router.get("/game/:juegoId", reviewController.getReviewsByGame);
router.post("/", reviewController.createReview);
router.put("/:id", reviewController.updateReview);
router.delete("/:id", reviewController.deleteReview);

export default router;
