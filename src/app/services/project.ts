import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  // private apiUrl = 'https://complete-portfolio-backendwith-express.onrender.com/api/projects';
  private apiUrl = 'http://localhost:5000/api/projects';

  constructor(private http: HttpClient) {}

  getAllProjects() {
    return this.http.get(this.apiUrl);
  }
  getProjectById(id: String): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getProjectBySlug(slug: String): Observable<any> {
    return this.http.get(`${this.apiUrl}/slug/${slug}`);
  }
  createProject(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  updateProject(id: String, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  deleteProject(id: String): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
