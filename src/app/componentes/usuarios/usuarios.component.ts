import { Component } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { CommonModule, NgFor } from '@angular/common';
import { ApiServicioService } from '../../servicios/api-servicio.service';
import { UsuarioCardComponent } from '../usuario-card/usuario-card.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, UsuarioCardComponent, NgFor, RouterOutlet],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  usuarios: Usuario[] = [];
  
  constructor(private apiServicio: ApiServicioService) {}

  ngOnInit(): void {
    this.apiServicio.obtenerListaUsuarios().subscribe((data: Usuario[]) => {
      this.usuarios = data;
    });
  }
}