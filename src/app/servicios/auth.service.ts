import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  private isAuthenticated = false;
  
  private userRoles: string[] = [];
}
