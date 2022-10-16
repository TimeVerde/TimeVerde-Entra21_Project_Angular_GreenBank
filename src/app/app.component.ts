import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SegurancaService } from './services/seguranca.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'GreenBank';
  links!: Array<any>;
  nome: string = ""
  aparece!:boolean

  constructor(public seguranca: SegurancaService, private router: Router) {}

  ngOnInit(): void {
      this.aparece=true
        this.links = new Array();

        this.links.push(
      {
        rota: "clienteInfo",
        textContent: "Informações",
        class_a: "menu__item",
        class_i:"fa fa-thin fa-user"

      }
    )

    this.links.push(
      {
        rota: "clienteDeposito",
        textContent: "Depósito",
        class_a: "menu__item",
        class_i:"fa fa-solid fa-sack-dollar"

      }
    )

    this.links.push(
      {
        rota: "clienteSaque",
        textContent: "Saques",
        class_a: "menu__item",
        class_i:"fa fa-solid fa-money-bill "

      }
    )

    this.links.push(
      {
        rota: "clienteTransfer",
        textContent: "Transferência Green",
        class_a: "menu__item",
        class_i:"fa fa-solid fa-money-bill-transfer"

      }
    )

    this.links.push(
      {
        rota: "clientePix",
        textContent: "PIX",
        class_a: "menu__item",
        class_i:"fa fa-solid fa-hand-holding-dollar"


      }
    )

    this.links.push(
      {
        rota: "clienteInvestimentos",
        textContent: "Investimentos",
        class_a: "menu__item",
        class_i:"fa fa-solid fa-money-bill-trend-up"

      }
    )

    this.links.push(
      {
        rota: "",
        textContent: "Sair",
        class_a: "menu__item",
        class_i:"fa fa-light fa-arrow-right-from-bracket"

      }
    )
  }

  sair() : void {
    this.seguranca.logged = false
    this.router.navigateByUrl("login")
  }



alterar(){
  this.aparece = !this.aparece
}
}
