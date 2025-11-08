import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        juegoId: { type: mongoose.Schema.Types.ObjectId, ref: "Game", required: true },
        puntuacion: { type: Number, min: 1, max: 5, required: true },
        textoReseña: { type: String, required: true },
        horasJugadas: { type: Number },
        dificultad: { type: String, enum: ["Fácil", "Normal", "Difícil"], default: "Normal" },
        recomendaria: { type: Boolean, default: true },
        fechaCreacion: { type: Date, default: Date.now },
        fechaActualizacion: { type: Date, default: Date.now },
    },
    { versionKey: false }
);

export default mongoose.model("Review", reviewSchema);
