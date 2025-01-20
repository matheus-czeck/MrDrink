import { User } from '../../models/user'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'default-secret';

export const loginUser = async (userName: string, password: string) => {
    const user = await User.findOne({ where: { userName }})

    if(!user){
        throw new Error("Usuário não encontrado");

    }

        const isPassowordValid = await bcrypt.compare(password, user.password);

    if(!isPassowordValid){
        throw new Error("Senha incorreta");

    }

    const token = jwt.sign({ id: user.id, userName: user.userName}, SECRET_KEY, { expiresIn: "1h"});
    console.log("Token gerado: ", token)
    return {token, user}

}