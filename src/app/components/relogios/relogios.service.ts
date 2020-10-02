import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Relogio } from './relogio.model';


@Injectable({
  providedIn: 'root'
})
export class RelogiosService 
{
  URL = "http://localhost:8080/api/relogios";

  constructor(private httpClient: HttpClient) { }

  getRelogios(): Observable<Relogio[]>
  {
    return this.httpClient.get<Relogio[]>(this.URL);
  }

  salvarRelogio(relogio: Relogio): Observable<Relogio>
  {
    return this.httpClient.post<Relogio>(this.URL, relogio);
  }

  getById(id: string): Observable<Relogio>
  {
    const url = `${this.URL}/${id}`;
    return this.httpClient.get<Relogio>(url);
  }

  atualizar(relogio: Relogio): Observable<Relogio>
  {
    const url = `${this.URL}/${relogio.id}`;
    return this.httpClient.put<Relogio>(url, relogio);
  }

  delete(id: number): Observable<Relogio>
  {
    const url = `${this.URL}/${id}`;
    return this.httpClient.delete<Relogio>(url);
  }

}
