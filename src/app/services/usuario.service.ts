import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  apiUrl: string = 'http://localhost:8080/pessoas/login';
  constructor(private http: HttpClient) {}

  login(email: string, senha: string) {
    let body = {
      email: email,
      senha: senha
    }
    return this.http.post<any>(this.apiUrl, body);
  }
}
