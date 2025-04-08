import { confirmedEvent } from "../../models/confirmedEvent"

import { scheduleEvent } from "../../models/scheduleEvent";

import bcrypt from 'bcrypt';
import {User} from '../../models/user'


export const addCollaboratorService = async (userName: string, password: string) => {
    
    const user = await User.findOne({where: {userName}})


    if(user){
        throw new Error("Já existe um usuário com este nome")

    }
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds)
    

        const createUser = await User.create({userName, password: hashedPassword})
        
        
        return createUser


}