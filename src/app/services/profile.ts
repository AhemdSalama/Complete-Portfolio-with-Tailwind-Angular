import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = 'http://localhost:5000/api/profile';
  constructor(private http:HttpClient){}

  getProfile() {
    return this.http.get<any>(this.apiUrl);
  }
  updateProfile(data: any) {
    return this.http.put<any>(this.apiUrl, data);
  }

}

