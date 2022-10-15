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
    return this.http.get<any>(this.apiUrl + '/' + 'saldo' + '/' + pessoa);
  }

  transferencia(pessoa01: any, pessoa02: any, body: any, headers: any): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/' + 'transferencia' + '/' + pessoa01 + '/' + pessoa02, body, headers);
    // return this.http.put<any>("localhost:8080/teste"+1, body, headers )
  }

  sacar(pessoa: any, body: any): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/' + 'sacar' + '/' + pessoa, body);
  }

  deposito(pessoa: any, body: any): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/' + 'deposito' + '/' + pessoa, body);
  }

}
