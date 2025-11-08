import * as gameService from "../services/gameService.js";

export const getGames = async (req, res, next) => {
    try {
        const games = await gameService.getAllGames();
        res.json(games);
    } catch (error) {
        next(error);
    }
};

export const getGame = async (req, res, next) => {
    try {
        const game = await gameService.getGameById(req.params.id);
        if (!game) return res.status(404).json({ message: "Juego no encontrado" });
        res.json(game);
    } catch (error) {
        next(error);
    }
};

export const createGame = async (req, res, next) => {
    try {
        const newGame = await gameService.createGame(req.body);
        res.status(201).json(newGame);
    } catch (error) {
        next(error);
    }
};

export const updateGame = async (req, res, next) => {
    try {
        const updated = await gameService.updateGame(req.params.id, req.body);
        res.json(updated);
    } catch (error) {
        next(error);
    }
};

export const deleteGame = async (req, res, next) => {
    try {
        await gameService.deleteGame(req.params.id);
        res.json({ message: "Juego eliminado correctamente" });
    } catch (error) {
        next(error);
    }
};
