import {Request, Response} from 'express';
import { deleteCollaboratorService } from '../service/deleteCollaborator.service';


export const deleteCollaboratorController = async (req: Request, res: Response): Promise<void> =>{
    const {id} = req.params;

    try{
        const  deleteUser = await deleteCollaboratorService(id);

        res.status(200).json({message: "Usuário excluido com sucesso", deleteUser});

    } catch (error: any){
       res.status(500).json({
        message: "Erro ao deletar usuário", error: error.message
       });
    }


}