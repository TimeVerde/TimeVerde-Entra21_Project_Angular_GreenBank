import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {

  apiUrl: string = 'http://localhost:8080/pessoas';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getById(pessoa: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/' + pessoa.id);
  }

  create(pessoa: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, pessoa);
  }

  update(pessoa: any): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/' + pessoa.id, pessoa);
  }

  delete(pessoa: any): Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/' + pessoa.id);
  }

}

