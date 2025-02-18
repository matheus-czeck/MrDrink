import { response, Router } from "express";
import { Request, Response } from "express";
import { ConfirmedEventController } from "../services/controllers/ConfirmEventController";
const router = Router();

router.post("/events/confirm-event", ConfirmedEventController);

export default router;
