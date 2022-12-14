import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDepositoComponent } from './cliente/cliente-deposito/cliente-deposito.component';
import { ClienteInfoComponent } from './cliente/cliente-info/cliente-info.component';
import { ClienteInvestimentosComponent } from './cliente/cliente-investimentos/cliente-investimentos.component';
import { ClientePixComponent } from './cliente/cliente-pix/cliente-pix.component';
import { ClienteSaqueComponent } from './cliente/cliente-saque/cliente-saque.component';
import { ClienteTransferComponent } from './cliente/cliente-transfer/cliente-transfer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { RegistrarComponent } from './registrar/registrar.component';
import { SegurancaService } from './services/seguranca.service';

const routes: Routes = [
  {path: 'registrar', component: RegistrarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent },
  {path: 'clienteInfo', component: ClienteInfoComponent, canActivate:[SegurancaService]  },
  {path: 'clienteDeposito', component: ClienteDepositoComponent, canActivate:[SegurancaService] },
  {path: 'clienteInvestimentos', component: ClienteInvestimentosComponent, canActivate:[SegurancaService]  },
  {path: 'clientePix', component: ClientePixComponent, canActivate:[SegurancaService]  },
  {path: 'clienteSaque', component: ClienteSaqueComponent, canActivate:[SegurancaService]  },
  {path: 'clienteTransfer', component: ClienteTransferComponent, canActivate:[SegurancaService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
