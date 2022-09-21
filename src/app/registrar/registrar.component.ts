import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { PessoaService } from '../services/pessoa.service';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';
import { SegurancaService } from '../services/seguranca.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  pessoas!: Array<any>;
  pessoa!: any;
  cadastrando!: boolean;

  constructor(private pessoaService: PessoaService, private seguranca: SegurancaService, private router: Router) {}

  ngOnInit(): void {
    this.getAll();
  }

  login(): void {
    this.seguranca.entrou = true;
    this.router.navigateByUrl("")
  }

  getAll(): void {
    this.pessoaService
      .getAll()
      .pipe(
        catchError((error) => {
          let pessoas: Array<any> = new Array();
          pessoas.push({
            id: 1,
            nome: 'Emily Tatiane da Cunha',
            cpf: '145.257.163-55',
            rg: '18.995.441-3',
            data_nasc: '04/01/1966',
            mae: 'Vera Isabela Priscila',
            pai: 'Bento Mateus Isaac da Cunha',
            cep: '59132-696',
            endereco: 'Rua Flor de Liz',
            celular: '(84) 99496-6223',
            senha: '27NNAP63na',
            email: 'emily.tatiane.dacunha@carreiradasilva.com',
          });
          return of(pessoas);
        })
      )
      .subscribe((response) => {
        console.log(response);
        this.pessoas = response;
      });
  }

  openForm(): void {
    this.pessoa = {};
    this.cadastrando = true;
  }

  closeForm(): void {
    this.pessoa = {};
    this.cadastrando = false;
  }

  updateForm(pessoa: any): void {
    this.pessoa = pessoa;
    this.cadastrando = true;
  }

  create(): void {
    if (!this.validForm()) {
      alert('Preencha os campos obrigatorios');
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
          this.closeForm();
        }
      });
  }

  validForm(): boolean {
    let valid: boolean = true;

    if (!this.pessoa.nome) {
      valid = false;
    }
    return valid;
  }

  update(): void {
    if (!this.validForm()) {
      alert('Preencha os campos obrigatorios');

      return;
    }
    this.pessoaService

      .update(this.pessoa)
      .pipe(
        catchError((error) => {
          return of(error);
        })
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.pessoas[this.pessoas.indexOf(this.pessoa)] = response;
          this.closeForm();
        }
      });
  }

  delete(pessoa: any): void {
    this.pessoaService

      .delete(pessoa)
      .pipe(
        catchError((error) => {
          return of(false);
        })
      )
      .subscribe((response: any) => {
        console.log(response);

        if (response) {
          this.pessoas.splice(this.pessoas.indexOf(pessoa), 1);
        }
      });
  }
}

