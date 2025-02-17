import { Router } from "express";
import { ConfirmedEventController } from "../services/controllers/ConfirmEventController";


const router = Router();

router.post("/events/confirm-event", ConfirmedEventController)

export default router;