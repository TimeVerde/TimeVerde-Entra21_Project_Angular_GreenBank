import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { OperacoesService } from 'src/app/services/operacoes.service';
import { PessoaLogadaService } from 'src/app/services/pessoa-logada.service';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-cliente-pix',
  templateUrl: './cliente-pix.component.html',
  styleUrls: ['./cliente-pix.component.css']
})
export class ClientePixComponent implements OnInit {

  constructor(
    private cliente: PessoaService,
    private operacoesBancarias: OperacoesService,
    private pessoaLogado: PessoaLogadaService
  ) { }

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
  chavePix!: string;

  ngOnInit(): void {
    this.pessoa = this.pessoaLogado.getpessoa();
    this.aparece= true
    this.validacao = false
    this.chavePix = ''
    this.valor = {}
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

  validacaoSenha(): boolean {
    let valid: boolean = true

    if(this.password != this.pessoa.senha) {
      this.mensagem = "senha incorreta"
    } else {
      console.log("senha correta");
    }
    return valid
  }

  limpar() {
    this.mensagem = ''
    this.pessoaSelecionada = ''
    this.password = ''
    this.valor = ''
    this.chavePix = ''
  }

  pix() {

    if(!this.validacaoSenha()) {
      return
    }

    this.pessoa.saldo = this.pessoa.saldo - this.valor;
    this.pessoaSelecionada.saldo = this.pessoaSelecionada.saldo + this.valor

    this.operacoesBancarias.transferencia(this.pessoa, this.pessoaSelecionada)
    .pipe(
      catchError((error) => {
        return of("Testando", error)
      })
    )
    .subscribe((response) => {
      console.log("Funcionando", response);
    })
  }
}
