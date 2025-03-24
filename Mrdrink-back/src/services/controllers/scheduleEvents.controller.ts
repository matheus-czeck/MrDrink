import { Request, Response } from "express";
import { scheduleEventCreate } from "../service/scheduleEventCreate.service";

export async function scheduleEvent(req:Request, res: Response): Promise<void>{
    try {
        const event = await scheduleEventCreate(req.body);
        res.status(201).json(event)

    } catch (error) {
        res.status(500).json({error : "Erro ao agendar evento"})

    }
}