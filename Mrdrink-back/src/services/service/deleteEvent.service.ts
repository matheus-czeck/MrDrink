import { where } from "sequelize";
import { confirmedEvent} from "../../models/confirmedEvent";
import { scheduleEvent } from "../../models/scheduleEvent";

export async function DeleteEventService(nameCouple:any) {
        try {
            const confirmed = await confirmedEvent.findOne({
              where:{nameCouple}
            
            });
            const schedule = await scheduleEvent.findOne({
              where:{nameCouple}
            })
            

            if(confirmed ){
              const deleted = await confirmedEvent.destroy({
                where: {nameCouple}
              })
              return {message: "Evento excluido com sucesso!", deleted}

            } if(schedule ){
              const deleted = await scheduleEvent.destroy({
                where: {nameCouple}
              })
              return {message: "Evento excluido com sucesso!", deleted}

            } else {
              return {message: "Evento não localizado!"}

            }
            
          } catch (error) {
            console.error("Erro ao deletar o evento:", error);
            throw new Error("Erro ao deletar o evento");
          }
     } 
