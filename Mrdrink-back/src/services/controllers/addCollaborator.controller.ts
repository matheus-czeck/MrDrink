import {Request, Response} from 'express';
import {addCollaboratorService} from '../service/addCollaborator.service'

export const addCollaboratorController = async (req: Request, res: Response): Promise<void> =>{
    const {userName, password} = req.body;

    try{
        const  user = await addCollaboratorService(userName, password);

        res.status(200).json({message: "Usuário criado com sucesso", user});

    } catch (error: any){
       res.status(500).json({
        message: "Erro ao criar usuário", error: error.message
       });
    }


}