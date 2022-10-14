import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { OperacoesService } from 'src/app/services/operacoes.service';
import { PessoaLogadaService } from 'src/app/services/pessoa-logada.service';

@Component({
  selector: 'app-cliente-transfer',
  templateUrl: './cliente-transfer.component.html',
  styleUrls: ['./cliente-transfer.component.css']
})
export class ClienteTransferComponent implements OnInit {

  constructor(private operacoesBancarias: OperacoesService, private pessoaLogado: PessoaLogadaService) { }

  pessoa01!: any;
  pessoa02: any = {};
  body!: any;
  saldo!: any

  ngOnInit(): void {
    this.pessoa01 = this.pessoaLogado.getpessoa();
    console.log("Hello",this.pessoa01);

  }

  transferencia() {
    this.body = {
      saldo: this.saldo
    }
    console.log("Body", this.body);

    console.log("Pessoa01: ", this.pessoa01);
    console.log("Pessoa02: ", this.pessoa02);

    this.operacoesBancarias.transferencia(this.pessoa01.id, this.pessoa02.id, this.body)
    .pipe(
      catchError((error) => {
        return of("não funcionou", error);
      })
    )
    .subscribe((response: any) => {
      console.log("funcionou", response);
    });
  }
}
