import {Request, Response} from 'express';
import { loginUser } from '../service/auth.service';

export const loginCrontroller = async (req: Request, res: Response): Promise<void> =>{
    const {userName, password} = req.body;

    try{
        const {token, user} = await loginUser(userName, password);

        res.status(200).json({token, user});

    } catch (error){
       res.status(401).json({
        message: error instanceof Error ? error.message : "Erro ao autenticar usuário.",
       });
    }


}