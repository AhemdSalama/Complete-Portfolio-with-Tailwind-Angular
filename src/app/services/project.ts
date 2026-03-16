import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl = "http://localhost:5000/api/projects";

  constructor(private http: HttpClient) {}

  getAllProjects() {
    return this.http.get(this.apiUrl);
  }
}
