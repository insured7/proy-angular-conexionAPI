import { Component, Input } from '@angular/core';
import { Usuario } from '../../modelos/usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario-card',
  standalone: true,
  imports: [CommonModule]
})
export class UsuarioCardComponent {

  @Input({ required: true }) usuario!: Usuario; // Input obligatorio
}