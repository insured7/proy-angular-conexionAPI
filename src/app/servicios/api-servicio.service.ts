import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiServicioService {

  private baseurl = 'http://localhost:8080/api/usuarios'; //url de mi api

  constructor(private http : HttpClient) { }

  obtenerListaUsuarios(): Observable<Usuario[]> { // Nombre diferente
    return this.http.get<Usuario[]>(this.baseurl);
  }

  agregarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseurl, usuario);
  }

  obtenerUsuarioPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseurl}/${id}`);
  }


}
