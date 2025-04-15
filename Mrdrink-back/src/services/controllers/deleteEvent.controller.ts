import { Response, Request } from "express";
import { DeleteEventService } from "../service/deleteEvent.service";

export async function deleteEvent(req: Request, res: Response): Promise<void>{

      const {nameCouple} = req.params

      try {
        const event = await DeleteEventService(nameCouple);
         res.status(201).json(event);
      } catch (error) {
         res.status(500).json({ error: "Erro ao deletar o evento" });
      }
    }
  