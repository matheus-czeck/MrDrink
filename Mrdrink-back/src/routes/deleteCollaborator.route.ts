import {  Router } from "express";
const router = Router();
import { deleteCollaboratorController } from "../services/controllers/deleteCollaborator.controller";

router.delete("/:id", deleteCollaboratorController );

export default router;
