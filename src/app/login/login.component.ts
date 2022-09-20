import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SegurancaService } from '../services/seguranca.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private seguranca: SegurancaService, private router: Router) { }

  ngOnInit(): void {
  }

  iRegistrar(): void {
    this.seguranca.entrou = true;
    this.router.navigateByUrl("registrar")
  }
}
