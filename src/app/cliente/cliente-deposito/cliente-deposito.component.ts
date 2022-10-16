import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { OperacoesService } from 'src/app/services/operacoes.service';
import { PessoaLogadaService } from 'src/app/services/pessoa-logada.service';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-cliente-deposito',
  templateUrl: './cliente-deposito.component.html',
  styleUrls: ['./cliente-deposito.component.css']
})
export class ClienteDepositoComponent implements OnInit {

  constructor(
    private cliente: PessoaService,
    private operacoesBancarias: OperacoesService,
    private pessoaLogado: PessoaLogadaService
  ) { }

  clientes!: Array<any>;
  aparece!:boolean;
  nome!: string
  pessoa!: any;
  src: string = "../../../assets/olho aberto.png";
  validacao!: boolean;
  valores!: Array<number>;
  valorSelecionado!: any;
  password!: string;
  mensagem: string = ''

  ngOnInit(): void {
    this.pessoa = this.pessoaLogado.getpessoa();
    this.aparece= true
    this.validacao = false
    this.valores = [30, 50, 100, 200, 500]
    this.valorSelecionado = {}
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

  selecionando(param: any) {
    this.valorSelecionado = this.valores[param]
    console.log(this.valorSelecionado);
  }

  validacaoSenha(): boolean {
    let valid: boolean = true;

    console.log(this.password);
    console.log(this.pessoa.senha);

    if(this.password != this.pessoa.senha) {
      this.mensagem = "senha incorreta"
      valid = false;
    } else {
      console.log("senha correta");
    }
    return valid;
  }

  limpar() {
    this.mensagem = ''
    this.valorSelecionado = ''
    this.password = ''
  }

  depositar() {

    if (!this.validacaoSenha()) {
      return;
    }

    this.pessoa.saldo = this.pessoa.saldo + this.valorSelecionado

    this.operacoesBancarias
    .deposito(this.pessoa)
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
