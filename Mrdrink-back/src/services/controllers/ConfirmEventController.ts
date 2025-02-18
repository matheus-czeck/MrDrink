import { Response, Request } from "express";
import { createConfirmedEvent } from "../../services/service/confirmEvent.service";

export async function ConfirmedEventController(req: Request, res: Response): Promise<void>{
      try {
        const event = await createConfirmedEvent(req.body);
         res.status(201).json(event);
      } catch (error) {
         res.status(500).json({ error: "Erro ao salvar o evento" });
      }
    }
  