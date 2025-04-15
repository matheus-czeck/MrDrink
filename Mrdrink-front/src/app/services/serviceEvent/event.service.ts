import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable ({
    providedIn: "root"

})

export class EventService {
    private apiUrl = "http://localhost:3000/events/confirm-event"
    private scheduleApiUrl = "http://localhost:3000/events/schedule-event"
    private deleteEventApiUrl = "http://localhost:3000/events/delete-event"

    constructor(private http: HttpClient){
    }

    createEvent(eventData: any): Observable<any>{
        return this.http.post<any>(this.apiUrl, eventData)
    }

   scheduleEvent(eventData: any): Observable<any>{
        return this.http.post<any>(this.scheduleApiUrl, eventData)

    }


    deleteEvent(nameCouple: any){
        return this.http.delete(
            `${this.deleteEventApiUrl}/${nameCouple}`
        )

    }
}