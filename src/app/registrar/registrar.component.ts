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

    return valid;
  }
}
