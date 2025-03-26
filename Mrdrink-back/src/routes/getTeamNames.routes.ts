
import express from "express"
import { getTeamNames } from "../services/service/getTeamsNames.service"

const router = express.Router()

router.get('/', getTeamNames );

export default router;