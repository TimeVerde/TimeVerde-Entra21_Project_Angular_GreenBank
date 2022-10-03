import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-info',
  templateUrl: './cliente-info.component.html',
  styleUrls: ['./cliente-info.component.css']
})
export class ClienteInfoComponent implements OnInit {

  aparece!:boolean

  constructor() { }

  ngOnInit(): void {

    this.aparece=false
  }

  alterar(){

    this.aparece = !this.aparece

  }

}
