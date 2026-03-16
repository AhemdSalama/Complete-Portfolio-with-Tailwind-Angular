import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Translation } from '../../services/translation';
import { ProjectService } from '../../services/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.html',
})
export class Projects implements OnInit {
  filters = ['All', 'Web', 'AI', 'Automation'];
  activeFilter = 'All';

  // حقن خدمة الترجمة
  constructor(public translationService: Translation, private projectService: ProjectService) {}

  projects: any[] = [];

  ngOnInit():void{
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getAllProjects().subscribe({
      next: (data: any) => {
        console.log("The data received from the backend is:", data);
        this.projects = data;
      },
      error: (error) => {
        console.error("Error fetching projects:", error);
      }

    })
  }


  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  get filteredProjects() {
    const filtered = this.activeFilter === 'All' 
      ? this.projects 
      : this.projects.filter(p => p.category === this.activeFilter);
      
    return filtered.slice(0, 6);
  }

  // دالة صغيرة عشان تترجم أزرار الفلترة في الـ HTML
  getTranslatedFilter(filter: string): string {
    if (filter === 'All') return this.translationService.translate('projects', 'filterAll');
    if (filter === 'Web') return this.translationService.translate('projects', 'filterWeb');
    if (filter === 'AI') return this.translationService.translate('projects', 'filterAI');
    if (filter === 'Automation') return this.translationService.translate('projects', 'filterAuto');
    return filter;
  }
}