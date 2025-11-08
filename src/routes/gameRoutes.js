import express from "express";
import * as gameController from "../controllers/gameController.js";

const router = express.Router();

router.get("/", gameController.getGames);
router.get("/:id", gameController.getGame);
router.post("/", gameController.createGame);
router.put("/:id", gameController.updateGame);
router.delete("/:id", gameController.deleteGame);

export default router;
