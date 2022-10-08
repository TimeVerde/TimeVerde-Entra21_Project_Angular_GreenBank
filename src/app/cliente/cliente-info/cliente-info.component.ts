import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cliente-info',
  templateUrl: './cliente-info.component.html',
  styleUrls: ['./cliente-info.component.css']
})
export class ClienteInfoComponent implements OnInit {

  aparece!:boolean
  nome: string = ""

  constructor(private usuarioService: UsuarioService) {

    }

  ngOnInit(): void {

    this.aparece=false
  }

  alterar(){

    this.aparece = !this.aparece

  }

}
