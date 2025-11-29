import { Router } from "express";
import { getIndex } from "../controller/index.controller.js";
import { getLogin, postLogin } from "../controller/login.controller.js";

const router = Router();

router.get("/", getIndex);

// Login Routes
router.get("/login", getLogin);
router.post("/login", postLogin);

// Registro Routes

export default router;
