import Game from "../models/game.js";

export const getAllGames = async () => await Game.find();

export const getGameById = async (id) => await Game.findById(id);

export const createGame = async (data) => {
    const newGame = new Game(data);
    return await newGame.save();
};

export const updateGame = async (id, data) =>
    await Game.findByIdAndUpdate(id, data, { new: true });

export const deleteGame = async (id) => await Game.findByIdAndDelete(id);
