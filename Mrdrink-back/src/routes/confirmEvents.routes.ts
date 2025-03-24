import {  Router } from "express";
import { ConfirmedEventController } from "../services/controllers/ConfirmEvent.controller";
const router = Router();

router.post("/confirm-event", ConfirmedEventController);

export default router;
