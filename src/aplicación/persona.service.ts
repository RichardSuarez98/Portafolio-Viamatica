import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private myAppUrl='https://localhost:44384/'; 
  private myApiUrl='api/Persona';
  private myApiSectorUrl='api/Sector';
  private myApiZonaUrl='api/Zona';

  constructor(private http: HttpClient) {}

  getListPersona(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deletePersona(id: number) : Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl + id)
  }
 savePersona(persona: any): Observable <any> {
   return this.http.post(this.myAppUrl + this.myApiUrl, persona);
 }


 /*PARA SECTOR*/
 getListSector() : Observable<any>{
   return this.http.get(this.myAppUrl + this.myApiSectorUrl);
 } 
 /*PARA ZONA*/
 getListZona() : Observable<any>{
  return this.http.get(this.myAppUrl + this.myApiZonaUrl);
}



}
