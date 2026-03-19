import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './projects-list.html',
  styleUrl: './projects-list.css',
})
export class ProjectsList implements OnInit {
  projects: any[] = [];

  constructor(
    private projectService: ProjectService,
    private cdr: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this.loadProjects();
  }
  loadProjects() {
    this.projectService.getAllProjects().subscribe({
      next: (data: any) => {
        this.projects = data;
        this.cdr.detectChanges();
        console.log('Projects loaded:', this.projects);
      },
      error: (error) => {
        console.error('Error fetching projects:', error);
      },
    });
  }

  deleteProject(id: string) {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(id).subscribe({
        next: () => {
          this.projects = this.projects.filter((p) => p._id !== id);
          this.cdr.detectChanges();
          alert('Project deleted successfully!');
        },
      });
    }
  }
}
