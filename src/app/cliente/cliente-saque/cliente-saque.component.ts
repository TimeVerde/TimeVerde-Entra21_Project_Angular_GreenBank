import { Component, OnInit } from '@angular/core';
import { OperacoesService } from 'src/app/services/operacoes.service';
import { PessoaLogadaService } from 'src/app/services/pessoa-logada.service';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-cliente-saque',
  templateUrl: './cliente-saque.component.html',
  styleUrls: ['./cliente-saque.component.css']
})
export class ClienteSaqueComponent implements OnInit {

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
    this.valorSelecionado = ''
    this.password = ''
  }
}
