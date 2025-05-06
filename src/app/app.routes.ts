import { Routes } from '@angular/router';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { UsuarioCardComponent } from './componentes/usuario-card/usuario-card.component';

export const routes: Routes = [
    {path: '', redirectTo: '/usuarios', pathMatch: 'full'},
    {path: 'usuarios', component: UsuariosComponent},
    {path: 'usuarios/:id', component: UsuarioCardComponent}
];
