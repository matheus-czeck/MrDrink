import { Router } from "express";


const router = Router();

router.post('/events', scheduleEventController);

export default router;