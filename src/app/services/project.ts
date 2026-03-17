import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl = 'https://complete-portfolio-backendwith-express.onrender.com/api/projects';

  constructor(private http: HttpClient) {}

  getAllProjects() {
    return this.http.get(this.apiUrl);
  }
  getProjectById(id: String): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
