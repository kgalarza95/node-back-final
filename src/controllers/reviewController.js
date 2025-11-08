import * as reviewService from "../services/reviewService.js";

export const getReviews = async (req, res, next) => {
    try {
        const reviews = await reviewService.getAllReviews();
        res.json(reviews);
    } catch (error) {
        next(error);
    }
};

export const getReviewsByGame = async (req, res, next) => {
    try {
        const reviews = await reviewService.getReviewsByGame(req.params.juegoId);
        res.json(reviews);
    } catch (error) {
        next(error);
    }
};

export const createReview = async (req, res, next) => {
    try {
        const newReview = await reviewService.createReview(req.body);
        res.status(201).json(newReview);
    } catch (error) {
        next(error);
    }
};

export const updateReview = async (req, res, next) => {
    try {
        const updated = await reviewService.updateReview(req.params.id, req.body);
        res.json(updated);
    } catch (error) {
        next(error);
    }
};

export const deleteReview = async (req, res, next) => {
    try {
        await reviewService.deleteReview(req.params.id);
        res.json({ message: "Reseña eliminada correctamente" });
    } catch (error) {
        next(error);
    }
};
