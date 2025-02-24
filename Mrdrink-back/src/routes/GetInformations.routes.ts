import { Router } from "express";
import { getInformations } from "../services/service/GetInformations.service";
import express from "express"

const router = express.Router()

router.get('/', getInformations);

export default router;