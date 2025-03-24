import {scheduleEvent} from "../../models/scheduleEvent"

export async function scheduleEventCreate(eventData: any){
    try {
        const event = await scheduleEvent.create(eventData);
        return event;

    } catch(error){
        console.error("Erro ao salvar o evento:", error);
        throw new Error("Erro ao agendar evento");

    }

}