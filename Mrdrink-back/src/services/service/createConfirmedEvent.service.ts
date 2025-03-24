import { confirmedEvent} from "../../models/confirmedEvent";

export async function createConfirmedEvent(eventData: any) {
  try {
    const event = await confirmedEvent.create(eventData);
    return event;
  } catch (error) {
    console.error("Erro ao salvar o evento:", error);
    throw new Error("Erro ao salvar o evento");
  }
}