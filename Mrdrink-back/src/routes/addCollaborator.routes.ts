import { Router } from 'express';
import {addCollaboratorController} from '../services/controllers/addCollaborator.controller'

const router = Router();

router.post('/', addCollaboratorController);

export default router; 