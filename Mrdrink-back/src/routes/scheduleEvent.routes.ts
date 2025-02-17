import { create } from "domain"
import { request } from "http"


export class scheduleEvent {
    static async create (req: Request, res: Response) {
        try{
            const event = await ConfirmedEvent.create(req.body)
            return res.status(201).json(event)
        } catch (error){
            return res.status(500).json({error: "Erro ao confirmar o evento"})
        }
            
        
    }

    static async list(req: Request, res: Response){
        try{
            const events = await ConfirmedEvent.findAll();
            return res.json(events)
        }  catch(error){
            return res.status(500).json({error: "Erro ao buscar eventos confirmados"})

        }

    }
    

}
