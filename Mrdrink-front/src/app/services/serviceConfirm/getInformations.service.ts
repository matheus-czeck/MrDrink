import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'



@Injectable ({
    providedIn: "root",

})

export class GetInformations {
    private apiUrl = 'http://localhost:3000/eventos';

    constructor(private http: HttpClient){}

    getEvents(): Observable<any>{
        return this.http.get<any>(this.apiUrl);

    }

}