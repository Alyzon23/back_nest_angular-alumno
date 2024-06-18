import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private baseUrl = 'http://127.0.0.1:3000'
  private http = inject(HttpClient);

  
  funListar() {
    return this.http.get(`${this.baseUrl}/curso/back`);
  }
}
