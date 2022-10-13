import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaLogadaService {

  pessoa!: any;

  constructor() { }

  setpessoa(pessoa: any){
    this.pessoa = pessoa;
  }

  getpessoa(){
    return this.pessoa;
  }
}
