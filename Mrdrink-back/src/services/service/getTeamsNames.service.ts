import {Op} from "sequelize"
import { User } from "../../models/user"
import { Request,Response } from "express"

export const getTeamNames = async (req: Request, res:Response) =>{
    try{
        const findNameTeams = await User.findAll({
            attributes: ["id", "userName", "isAvaliable"],
            where: {
                userName: {
                    [Op.like]: "%barman%"
                }
            }
            
        })
        res.json({ findNameTeams })
       
        
    } catch(error){
        res.status(500).json({message: "Erro ao buscar nomes", error})
    }


}