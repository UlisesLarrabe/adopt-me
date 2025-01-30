import { Router } from "express";
import petsController from "../controllers/pets.controller.js";

const router = Router();

router.get("/pets", petsController.getAllPets)
router.get("/mockingpets", petsController.createMockPets)


export default router;