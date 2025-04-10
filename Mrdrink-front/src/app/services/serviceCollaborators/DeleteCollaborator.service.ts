import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'



@Injectable ({
    providedIn: "root",
})

export class deleteCollaborator {
    private apiUrl = 'http://localhost:3000/deleteCollaborator';
;

    constructor(private http: HttpClient){}

    removeCollaborator(id: string): Observable<any>{
        return this.http.delete(
            `${this.apiUrl}/${id}`
        )
}}