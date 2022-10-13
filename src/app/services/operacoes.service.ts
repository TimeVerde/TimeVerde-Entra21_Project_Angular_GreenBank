import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperacoesService {

  apiUrl: string = "localhost:8080/sistema"

  constructor(private http: HttpClient) {}

  getSaldo(pessoa: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/' + 'saldo' + '/' + pessoa.id);
  }

  transferencia(pessoa01: any, pessoa02: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/' + 'transferencia' + '/' + pessoa01.id + '/' + pessoa02.id);
  }

  sacar(pessoa: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/' + 'sacar' + '/' + pessoa.id);
  }

  deposito(pessoa: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/' + 'deposito' + '/' + pessoa.id);
  }

}
