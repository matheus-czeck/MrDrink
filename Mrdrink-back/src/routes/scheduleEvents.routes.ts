
import { Router } from "express";
import {scheduleEvent} from "../services/controllers/scheduleEvents.controller"
const router = Router();

router.post("/schedule-event", scheduleEvent)

export default router;