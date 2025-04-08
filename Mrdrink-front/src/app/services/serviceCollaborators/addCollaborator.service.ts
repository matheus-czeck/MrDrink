import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {catchError, Observable, of} from 'rxjs'



@Injectable ({
    providedIn: "root",
})

export class AddCollaborator {
    private apiUrl = 'http://localhost:3000/addCollaborator';
;

    constructor(private http: HttpClient){}

    createCollaborator(userName: string, password: string): Observable<any>{
        return this.http.post(
            `${this.apiUrl}`, {userName, password}
        )
}}