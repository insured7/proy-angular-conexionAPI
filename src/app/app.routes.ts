import { Routes } from '@angular/router';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { LandingPageComponent } from './componentes/landing-page/landing-page.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';
import { FormPresupuestoComponent } from './componentes/form-presupuesto/form-presupuesto.component';
import { LoginComponent } from './componentes/login/login.component';
import { UsuarioDashboardComponent } from './Usuarios/usuario-dashboard/usuario-dashboard.component';
import { EmpleadoDashboardComponent } from './Empleados/empleado-dashboard/empleado-dashboard.component';
import { AdminDashboardComponent } from './Admins/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'presupuesto', component: FormPresupuestoComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'usuario',
    component: UsuarioDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: ['USUARIO'] },
  },
  {
    path: 'empleado',
    component: EmpleadoDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: ['EMPLEADO'] },
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN'] },
  },
];
