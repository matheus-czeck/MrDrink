import { Response, Request } from "express";
import { createConfirmedEvent } from "../../services/service/confirmEvent.service";

export const ConfirmedEventController = async (req: Request, res: Response) {
      try {
        const event = await createConfirmedEvent(req.body);
         res.status(201).json(event);
      } catch (error) {
        return res.status(500).json({ error: "Erro ao salvar o evento" });
      }
    }
  