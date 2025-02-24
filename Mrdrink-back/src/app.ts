import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import sequelize from './config/dbMrdrink';
import dotenv from 'dotenv';
import scheduleEvent from "./routes/confirmEvents"
import getInformations from "./routes/GetInformations.routes"


dotenv.config();


const app = express();
app.use(cors());


app.use(bodyParser.json())
app.use(express.json());

app.use((req, res, next)=>{
res.setHeader("Content-Type", "application/json; charset=utf-8")
next();
})

app.use('/auth', authRoutes);
app.use("/events", scheduleEvent)
app.use("/eventos", getInformations );

sequelize
 .sync({alter: true})
 .then(()=> console.log('Banco de dados sincronizado com sucesso'))
 .catch((err: any) => console.error("Erro ao sincronizar banco de dados:", err))

 const PORT = process.env. PORT || 3000;

 app.listen(PORT, ()=> {
    console.log(`Servidor rodando na porta ${PORT}`)

 })