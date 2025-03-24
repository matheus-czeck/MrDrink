import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {catchError, Observable, of} from 'rxjs'



@Injectable ({
    providedIn: "root",

})

export class GetInformations {
    private apiUrl = 'http://localhost:3000/eventos';

    constructor(private http: HttpClient){}

    getEvents(): Observable<any>{
        return this.http.get<any>(this.apiUrl).pipe(
            catchError((error)=>{
                console.log("Erro ao buscar eventos", error)
                return of([])

            })
        )

    }

}