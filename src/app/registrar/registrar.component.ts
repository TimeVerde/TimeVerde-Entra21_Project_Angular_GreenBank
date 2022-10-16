import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PessoaService } from '../services/pessoa.service';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  pessoas!: Array<any>;
  pessoa!: any;
  cadastrando!: boolean;
  mensagem: string = '';

  constructor(private pessoaService: PessoaService, private router: Router) {}

  ngOnInit(): void {
    this.openForm();
  }

  openForm(): void {
    this.pessoa = {};
  }

  create(): void {

    if (!this.validForm()) {
      return;
    }

    this.pessoaService
      .create(this.pessoa)
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.pessoas.push(response);
        }
      });
    this.router.navigateByUrl('login');
  }

  login() {
    this.router.navigateByUrl('login');
  }

  validForm(): boolean {
    let valid: boolean = true;
    this.mensagem = ""

    if (
      !this.pessoa.nome
    ) {
      this.mensagem += 'nome'
      valid = false;
    }
    if (
      !this.pessoa.idade
    ) {
      this.mensagem += 'idade'
      valid = false;
    }
    if (
      !this.pessoa.cpf
    ) {
      this.mensagem += 'cpf'
      valid = false;
    }
    if (
      !this.pessoa.rg
    ) {
      this.mensagem += 'rg'
      valid = false;
    }
    if (
      !this.pessoa.dataNascimento
    ) {
      this.mensagem += 'data de nascimento'
      valid = false;
    }
    if (
      !this.pessoa.genero
    ) {
      this.mensagem += 'gênero'
      valid = false;
    }
    if (
      !this.pessoa.mae
    ) {
      this.mensagem += 'mãe'
      valid = false;
    }
    if (
      !this.pessoa.pai
    ) {
      this.mensagem += 'pai'
      valid = false;
    }
    if (
      !this.pessoa.cep
    ) {
      this.mensagem += 'cep'
      valid = false;
    }
    if (
      !this.pessoa.endereco
    ) {
      this.mensagem += 'endereço'
      valid = false;
    }
    if (
      !this.pessoa.numero
    ) {
      this.mensagem += 'número'
      valid = false;
    }
    if (
      !this.pessoa.bairro
    ) {
      this.mensagem += 'bairro'
      valid = false;
    }
    if (
      !this.pessoa.cidade
    ) {
      this.mensagem += 'cidade'
      valid = false;
    }
    if (
      !this.pessoa.estado
    ) {
      this.mensagem += 'estado'
      valid = false;
    }
    if (
      !this.pessoa.celular
    ) {
      this.mensagem += 'celular'
      valid = false;
    }
    if (
      !this.pessoa.email
    ) {
      this.mensagem += 'e-mail'
      valid = false;
    }
    if (
      !this.pessoa.senha
    ) {
      this.mensagem += 'senha'
      valid = false;
    }
    return valid;
  }
}
