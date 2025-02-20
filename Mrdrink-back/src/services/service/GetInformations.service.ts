const { confimedEvent } = require("../../models/confirmedEvent")
import { Request, Response } from "express";


exports.getAllEvents = async(req: Request, res: Response) => {
    try {
        const eventos = await confimedEvent.findAll({
            attributes: ["id", "dateEvent", "nameCouple", "amountGuests", "place", "value", "menu", "selectedTeams"],
            order: [["dateEvent", "ASC"]]

        });
        res.send(eventos)

    } catch(error){
        res.send(500).json({message: "Erro ao buscar Informações", error})


    }


}