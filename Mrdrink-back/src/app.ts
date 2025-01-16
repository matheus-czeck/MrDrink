import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import sequelize from './config/dbMrdrink';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use(express.json())

sequelize
 .sync({alter: true})
 .then(()=> console.log('Banco de dados sincronizado com sucesso'))
 .catch((err: any) => console.error("Erro ao sincronizar banco de dados:", err))

 const PORT = process.env. PORT || 3000;

 app.listen(PORT, ()=> {
    console.log(`Servidor rodando na porta ${PORT}`)

 })