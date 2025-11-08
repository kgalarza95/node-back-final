import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        //await mongoose.connect(process.env.MONGO_URI);
        await mongoose.connect("mongodb+srv://jacobogarcesoquendo:aFJzVMGN3o7fA38A@cluster0.mqwbn.mongodb.net/kevingalarza");
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error.message);
        process.exit(1);
    }
};
