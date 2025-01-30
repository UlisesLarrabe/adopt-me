import { Router } from "express";
import mocksController from "../controllers/mocks.controller.js";

const router = Router();

router.get("/mockingpets", mocksController.createMockPets)
router.get("/mockingusers", mocksController.createMockUsers)
router.post("/generateData",mocksController.generateData)


export default router;