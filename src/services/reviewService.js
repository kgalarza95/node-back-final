import Review from "../models/review.js";

export const getAllReviews = async () =>
    await Review.find().populate("juegoId", "titulo genero plataforma");

export const getReviewsByGame = async (juegoId) =>
    await Review.find({ juegoId }).populate("juegoId", "titulo");

export const createReview = async (data) => {
    const newReview = new Review(data);
    return await newReview.save();
};

export const updateReview = async (id, data) => {
    data.fechaActualizacion = new Date();
    return await Review.findByIdAndUpdate(id, data, { new: true });
};

export const deleteReview = async (id) => await Review.findByIdAndDelete(id);
