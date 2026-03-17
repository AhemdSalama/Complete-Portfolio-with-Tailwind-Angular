import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email= '';
  password = '';
  errorMessage = '';
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  onSubmit(){
    if(!this.email || !this.password){
      this.errorMessage = 'Please enter both email and password.';
      return;
    }
    this.isLoading = true;
    this.errorMessage = '';
    this.authService.login({email: this.email, password: this.password}).subscribe({
      next: (res)=>{
        this.router.navigate(['/dashboard']);
      },
      error: (err)=>{
        this.isLoading = false;
        this.errorMessage = 'Invalid email or password.';
        console.error('Login error:', err);
      }
    });

  }

}
