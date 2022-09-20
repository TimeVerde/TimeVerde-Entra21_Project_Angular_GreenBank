import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { SegurancaService } from './services/seguranca.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [SegurancaService]},
  { path: 'registrar', component: RegistrarComponent, canActivate: [SegurancaService]},
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
