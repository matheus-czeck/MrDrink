import { response, Router } from "express";
import { Request, Response } from "express";
import router from "./auth.routes";
const eventsController = require( '../services/service/GetInformations.service')

router.get('/eventos', eventsController.get);

export default router;