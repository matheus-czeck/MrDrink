import {  Router } from "express";
const router = Router();
import { deleteEvent } from "../services/controllers/deleteEvent.controller";

router.delete("/delete-event/:nameCouple", deleteEvent );

export default router;
