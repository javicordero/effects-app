import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string = 'https://reqres.in/api'
  constructor(private http: HttpClient) { }

  listaUsuarios() {
    return this.http.get(`${this.baseUrl}/users`)
      .pipe(
        map( (resp: any) => {
          return resp['data'];
        })
      );
  }

  getUserById(id: string) {
    return this.http.get(`${this.baseUrl}/users/${id}`)
      .pipe(
        map( (resp: any) => {
          return resp['data'];
        })
      );
  }
}
