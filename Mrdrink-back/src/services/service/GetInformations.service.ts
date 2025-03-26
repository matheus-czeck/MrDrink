import { confirmedEvent } from "../../models/confirmedEvent"
import { Request, Response } from "express";
import { scheduleEvent } from "../../models/scheduleEvent";


export const getInformations  = async (req: Request, res: Response) => {
    try {
        const findConfirmedEvents = await confirmedEvent.findAll({
            attributes: ["id", "dateEvent", "nameCouple", "amountGuests", "place", "value", "menu", "selectedTeams"],
            order: [["dateEvent", "ASC"]]

        });

        const findScheduleEvents = await scheduleEvent.findAll ({
            attributes: ["id", "dateEvent", "nameCouple", "amountGuests", "place", "value", "menu", "selectedTeams"],
            order: [["dateEvent", "ASC"]]
        })

        
        
        res.json({
            confirmedEvent: findConfirmedEvents,
            scheduleEvent: findScheduleEvents
        })

    } catch(error){
        res.status(500).json({message: "Erro ao buscar Informações", error})


    }


}