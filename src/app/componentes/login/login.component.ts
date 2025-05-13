import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
    userType: 'user'
  };

  constructor(private router: Router) {}

  onLogin() {
    // Aquí realizarías la validación en la API o el backend
    // Simulando un login exitoso según el tipo de usuario
    if (this.loginData.userType === 'user') {
      // Redirige a la vista del usuario
      this.router.navigate(['/user-dashboard']);
    } else if (this.loginData.userType === 'employee') {
      // Redirige a la vista del empleado
      this.router.navigate(['/employee-dashboard']);
    }
  }
}
