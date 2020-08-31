import express from "express";
import userController from "../api/controller/user.controller";

export const router = express.Router();

router.get("/users", userController.findAll);
router.get("/users/:id", userController.findOne);
router.post("/users", userController.create);
router.delete("/users/:id", userController.delete);
router.put("/users/:id", userController.update);
