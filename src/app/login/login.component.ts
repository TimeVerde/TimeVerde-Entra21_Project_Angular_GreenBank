import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { PessoaLogadaService } from '../services/pessoa-logada.service';
import { SegurancaService } from '../services/seguranca.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  mensagem: string='';
  pessoa!: any;

  constructor(
    private seguranca: SegurancaService,
    private usuarioService: UsuarioService,
    private router: Router,
    private pessoaLogada: PessoaLogadaService
  ) {}

  ngOnInit(): void {


    console.groupCollapsed('%c Seja bem-vindo ao GreenBank', 'color:green; font-weight:bold; text-shadow: 0 0 1em white;font-size: 24px')
    console.group("Nossos Integrantes:")
    console.table([

    {Nome:'Arthur Estevan', Linkedin:'https://www.linkedin.com/in/arthurestevanvargas/'},
    {Nome:'Rafael Macedo', Linkedin:'https://www.linkedin.com/in/rmcedo/'},
    {Nome:'Thabata Santos', Linkedin:"https://www.linkedin.com/in/thabatasantos/"}
    ]);
  }

  login(): void {
    this.usuarioService
      .login(this.email, this.password)
      .pipe(
        catchError((error) => {
          console.log(
            'Falha simulada pois não há backend ainda, então pode entrar'
          );
          return of(false);
        })
      )
      .subscribe((response: any) => {
        console.log('logou?');
        console.log('response', response);

        if (response) {
          this.pessoaLogada.setpessoa(response);
          this.seguranca.logged = response;
          this.seguranca.email = this.email;

          this.router.navigateByUrl('clienteInfo');
        } else {
          this.mensagem="Usuário/Senha não encontrado"
        }
      });
  }

  forgotPassword(): void {

    console.group('Entre em nosso sistema');
    console.log('%c Olá, Sr. Cliente. Obrigado por adquirir o serviço do GreenBank. E como forma de agradecimento, oferecemos um acesso livre ao projeto. Para aproveitar isso, copie e cole o código abaixo: vVh8NuE-2Q0xYKS86439zREZ-_OxQAFX_XFCyaZCs7BbKN3CHv0bp9bRPBvUQXWl. Depois vá até https://www.invertexto.com/texto-criptografado, insira o código em "decodificar". Você recebera um acesso ao serviço, aproveite que é por tempo limitado. Grande abraço.','font-size:24px;color: grey;')
    console.groupEnd();

  }

  register(): void {
    this.router.navigateByUrl('registrar');
  }
}
