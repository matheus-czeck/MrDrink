import bcrypt from 'bcrypt';
import {User} from '../../models/user'


export const deleteCollaboratorService = async (id: string) => {
    
    const user = await User.findOne({where: {id}})


    if(!user){
        throw new Error("Erro na busca do usuário")

    }
    

        const deleterUser = await User.destroy({where:{id}})
        
        
        return {message: "Usuário deletado com sucesso"}


}