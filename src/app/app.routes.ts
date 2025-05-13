import { Routes } from '@angular/router';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { LandingPageComponent } from './componentes/landing-page/landing-page.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';
import { FormPresupuestoComponent } from './componentes/form-presupuesto/form-presupuesto.component';
import { LoginComponent } from './componentes/login/login.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'presupuesto', component: FormPresupuestoComponent },
  { path: 'login', component: LoginComponent },
];
