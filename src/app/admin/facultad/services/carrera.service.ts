import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  private baseUrl = environment.urlServisor
  private http=inject(HttpClient)
  
  funListar(){
    return this.http.get(`${this.baseUrl}/carrera`)

}
funGuardar (registro:any){
  return this.http.post(`${this.baseUrl}/carrera`,registro)
}
funModificar(id:number, registro:any){
  return this.http.patch(`${this.baseUrl}/carrera/${id}`,registro)
}
funEliminar(id:number){
return this.http.delete(`${this.baseUrl}/carrera/${id}`)
}
}
