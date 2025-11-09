import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://jacobogarcesoquendo:aFJzVMGN3o7fA38A@cluster0.mqwbn.mongodb.net/kevingalarza";

export const connectDB = async () => {
    try {
        //await mongoose.connect(process.env.MONGO_URI);
        await mongoose.connect(MONGO_URI);
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error.message);
        process.exit(1);
    }
};
