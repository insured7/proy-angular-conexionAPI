import { Component } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { CommonModule, NgFor } from '@angular/common';
import { ApiServicioService } from '../../servicios/api-servicio.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, NgFor],
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