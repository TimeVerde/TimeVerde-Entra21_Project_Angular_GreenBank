import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { SegurancaService } from './services/seguranca.service';
import { ClienteInfoComponent } from './cliente/cliente-info/cliente-info.component';
import { ClienteSaqueComponent } from './cliente/cliente-saque/cliente-saque.component';
import { ClienteDepositoComponent } from './cliente/cliente-deposito/cliente-deposito.component';
import { ClienteTransferComponent } from './cliente/cliente-transfer/cliente-transfer.component';
import { ClientePixComponent } from './cliente/cliente-pix/cliente-pix.component';
import { ClienteSaldoComponent } from './cliente/cliente-saldo/cliente-saldo.component';
import { ClienteInvestimentosComponent } from './cliente/cliente-investimentos/cliente-investimentos.component';
import { ClienteModule } from './cliente/cliente.module';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClienteModule,
  ],
  providers: [SegurancaService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
