import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiTeste } from '../ApiTeste';
@Injectable({
  providedIn: 'root'
})
export class GraphService {
  private apiUrl = 'http://localhost:3000/browserData'
  constructor(private http: HttpClient) { }


  getAll(): Observable<ApiTeste[]> {
     return this.http.get<ApiTeste[]>(this.apiUrl)
    
  }

  
  

}
