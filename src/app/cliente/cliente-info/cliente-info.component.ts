import { Component, OnInit } from '@angular/core';
import { OperacoesService } from 'src/app/services/operacoes.service';
import { PessoaLogadaService } from 'src/app/services/pessoa-logada.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cliente-info',
  templateUrl: './cliente-info.component.html',
  styleUrls: ['./cliente-info.component.css']
})
export class ClienteInfoComponent implements OnInit {
  aparece!:boolean;
  nome!: string
  pessoa!: any;
  src: string = "../../../assets/olho aberto.png"

  constructor(
    private usuarioService: UsuarioService,
    private operacoesBancaria: OperacoesService,
    private pessoaLogada: PessoaLogadaService
    ) {}

  ngOnInit(): void {
    this.pessoa = this.pessoaLogada.getpessoa();
    this.aparece=true
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
}
