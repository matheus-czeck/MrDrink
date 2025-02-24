const { confimedEvent } = require("../../models/confirmedEvent")
import { Request, Response } from "express";


export const getInformations  = async (req: Request, res: Response) => {
    try {
        const eventos = await confimedEvent.findAll({
            attributes: ["id", "dateEvent", "nameCouple", "amountGuests", "place", "value", "menu", "selectedTeams"],
            order: [["dateEvent", "ASC"]]

        });
        res.json(eventos)

    } catch(error){
        res.status(500).json({message: "Erro ao buscar Informações", error})


    }


}