import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteDepositoComponent } from './cliente-deposito/cliente-deposito.component';
import { ClienteInfoComponent } from './cliente-info/cliente-info.component';
import { ClienteInvestimentosComponent } from './cliente-investimentos/cliente-investimentos.component';
import { ClientePixComponent } from './cliente-pix/cliente-pix.component';
import { ClienteSaqueComponent } from './cliente-saque/cliente-saque.component';
import { ClienteTransferComponent } from './cliente-transfer/cliente-transfer.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ClienteDepositoComponent,
    ClienteInfoComponent,
    ClienteInvestimentosComponent,
    ClientePixComponent,
    ClienteSaqueComponent,
    ClienteTransferComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ClienteModule { }
