import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import sequelize from './config/dbMrdrink';
import dotenv from 'dotenv';
import confirmEvent from "./routes/confirmEvents.routes"
import getInformations from "./routes/GetInformations.routes"
import scheduleEvents from "./routes/scheduleEvents.routes"
import  getTeamsNames  from './routes/getTeamNames.routes';
import addCollaborator from './routes/addCollaborator.routes'
import deleteCollaborator from './routes/deleteCollaborator.route'
dotenv.config();


const app = express();
app.use(cors());

app.use(express.json());

app.use((req, res, next)=>{
res.setHeader("Content-Type", "application/json; charset=utf-8")
next();
})

app.use('/auth', authRoutes);
app.use("/events", confirmEvent)
app.use("/events", scheduleEvents)
app.use("/eventos", getInformations );
app.use("/teams", getTeamsNames );
app.use("/addCollaborator", addCollaborator );
app.use("/deleteCollaborator", deleteCollaborator  );

sequelize
 .sync({alter: true})
 .then(()=> console.log('Banco de dados sincronizado com sucesso'))
 .catch((err: any) => console.error("Erro ao sincronizar banco de dados:", err))

 const PORT = process.env.PORT || 3000;

 app.listen(PORT, ()=> {
    console.log(`Servidor rodando na porta ${PORT}`)

 })