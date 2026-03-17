import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = "https://complete-portfolio-backendwith-express.onrender.com/api/auth";

  constructor(
    private http: HttpClient,
    private router:Router
  ){}

  login(credentials:any){
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((res:any)=>{
        if(res&& res.token){
          localStorage.setItem('admin_token',res.token);
        }
      })
    )
  }
  logout(){
    localStorage.removeItem('admin_token');
    this.router.navigate(['/login']);
  }
  isLoggedIn():boolean{
    return !!localStorage.getItem('admin_token');
  }
}
