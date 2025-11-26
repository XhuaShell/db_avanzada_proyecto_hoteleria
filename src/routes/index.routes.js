import { Router } from "express";
import { getIndex } from "../controller/index.controller.js";

const router = Router();

router.get('/', getIndex);

export default router;