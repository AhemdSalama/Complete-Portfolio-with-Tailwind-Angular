import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Translation } from '../../services/translation';
import { ProjectService } from '../../services/project';

@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './all-projects.html'
})
export class AllProjects implements OnInit {
  filters = ['All', 'Web', 'AI', 'Automation'];
  activeFilter = 'All';

  // 2. حقن السيرفيس
  constructor(
    public translationService: Translation,
    private projectService: ProjectService,
    private cdr: ChangeDetectorRef
  ) {}

  // 3. المصفوفة بعد إضافة الترجمة العربي
  allProjects: any[] = [];
  displayedProjects: any[] = [];

  ngOnInit() {
    window.scrollTo(0, 0);
    this.loadProjects();
  }

  loadProjects(){
    this.projectService.getAllProjects().subscribe({
      next: (data: any) => {
        console.log('The data received from the backend is:', data);
        this.allProjects = data;
        this.applyFilter();
        this.cdr.markForCheck(); // تأكد من تحديث العرض بعد تحميل البيانات
      },
      error: (error) => {
        console.error('Error fetching projects:', error);
      },
    });
  }
  applyFilter() {
    if (this.activeFilter === 'All') {
      this.displayedProjects = this.allProjects.slice(0, 6);
    } else {
      this.displayedProjects = this.allProjects
        .filter((p) => p.category === this.activeFilter)
        .slice(0, 6);
    }
  }
  setFilter(filter: string) {
    this.activeFilter = filter;
    this.displayedProjects = this.filteredProjects;
    this.cdr.detectChanges();
  }

  get filteredProjects() {
    if (this.activeFilter === 'All') return this.allProjects;
    return this.allProjects.filter(p => p.category === this.activeFilter);
  }

  // 4. دالة ترجمة الفلاتر
  getTranslatedFilter(filter: string): string {
    if (filter === 'All') return this.translationService.translate('projects', 'filterAll');
    if (filter === 'Web') return this.translationService.translate('projects', 'filterWeb');
    if (filter === 'AI') return this.translationService.translate('projects', 'filterAI');
    if (filter === 'Automation') return this.translationService.translate('projects', 'filterAuto');
    return filter;
  }
}