import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable ({
    providedIn: 'root',

})
export class AuthService {
    private apiUrl = 'http://localhost:3000/auth';

    constructor(private http: HttpClient )
    {}

    login(userName: string, password: string): Observable<any> {
        return this.http.post(
            `${this.apiUrl}/login`, {userName, password})
        }
        register(user: {username: string;
            password: string
        }) {
         return this.http.post(`${this.apiUrl}/register`, user)

        }
 
       
    }

    
