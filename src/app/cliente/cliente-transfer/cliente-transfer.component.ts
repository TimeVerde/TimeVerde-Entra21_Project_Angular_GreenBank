import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { OperacoesService } from 'src/app/services/operacoes.service';
import { PessoaLogadaService } from 'src/app/services/pessoa-logada.service';
import { PessoaService } from 'src/app/services/pessoa.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-cliente-transfer',
  templateUrl: './cliente-transfer.component.html',
  styleUrls: ['./cliente-transfer.component.css'],
})
export class ClienteTransferComponent implements OnInit {
  constructor(
    private cliente: PessoaService,
    private operacoesBancarias: OperacoesService,
    private pessoaLogado: PessoaLogadaService
  ) {}

  clientes!: Array<any>;
  aparece!:boolean;
  nome!: string
  pessoa!: any;
  src: string = "../../../assets/olho aberto.png"
  validacao!: boolean;
  pessoaSelecionada!: any;
  objeto!: any;
  mensagem: string = ''
  password!: string;
  valor!: any;

  ngOnInit(): void {
    this.pessoa = this.pessoaLogado.getpessoa();
    this.aparece= true
    this.validacao = false
    this.pessoaSelecionada = {}
    this.getAll()
  }

  alterar(){
    this.aparece = !this.aparece

    if(this.aparece == false) {
      this.src = "../../../assets/olho fechado.png"
    }
    if(this.aparece == true) {

      this.src = "../../../assets/olho aberto.png"
    }
  }

  selecionado(param: any) {
    this.pessoaSelecionada = this.clientes[param]
    console.log(this.pessoaSelecionada);
  }

  getAll(): void {
    this.cliente
      .getAll()
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response) => {
        console.log(response);
        this.clientes = response;
      });
  }

  validacaoSenha() {

    console.log(this.password);
    console.log(this.pessoa.senha);

    if(this.password != this.pessoa.senha) {
      this.mensagem = "senha incorreta"
    } else {
      console.log("senha correta");
    }
  }

  limpar() {
    this.mensagem = ''
    this.pessoaSelecionada = ''
    this.password = ''
    this.valor = ''
  }

  // transferencia() {
  //   this.body = {
  //     saldo: this.saldo,
  //   };


  //   const headers = new HttpHeaders({
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   });

  //   console.log('Pessoa01: ', this.pessoa01);
  //   console.log('Pessoa02: ', this.pessoa02);
  //   console.log('Body', this.body);
  //   console.log("Header", headers);


  //   this.operacoesBancarias
  //     .transferencia(this.pessoa01.id, this.pessoa02.id, this.body, headers)
  //     .pipe(
  //       catchError((error) => {
  //         return of('não funcionou', error);
  //       })
  //     )
  //     .subscribe((response: any) => {
  //       console.log('funcionou', response);
  //     });
  // }

}
