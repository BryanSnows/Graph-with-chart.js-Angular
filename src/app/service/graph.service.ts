import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiTeste } from '../ApiTeste';
import { Hero } from '../Test';
@Injectable({
  providedIn: 'root'
})
export class GraphService {
  private apiUrl = 'http://localhost:3000/heroesArray'
  constructor(private http: HttpClient) { }


 

  get(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl)

 }

  
  

}
