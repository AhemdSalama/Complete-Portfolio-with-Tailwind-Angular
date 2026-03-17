import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Translation } from '../../services/translation';
import { ProjectService } from '../../services/project';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-details.html',
})
export class ProjectDetails implements OnInit {
  project: any;

  isModalOpen = false;
  selectedImageUrl = '';
  isZoomed = false;

  openModal(url: string) {
    this.selectedImageUrl = url;
    this.isModalOpen = true;
    this.isZoomed = false;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    setTimeout(() => {
      ((this.selectedImageUrl = ''), 300);
    });
    document.body.style.overflow = 'auto';
  }

  toggleZoom(event: Event) {
    event.stopPropagation();
    this.isZoomed = !this.isZoomed;
  }

  // حقن الـ TranslationService مع الـ ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    public translationService: Translation,
    private projectService: ProjectService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);

    this.route.paramMap.subscribe((params) => {
      const projectId = params.get('id');
      console.log('Project ID from route:', projectId);
      if (projectId) {
        this.projectService.getProjectById(projectId).subscribe({
          next: (data) => {
            console.log('Project details received from backend:', data);
            this.project = data;
            this.cdr.markForCheck(); // تأكد من تحديث العرض بعد تحميل البيانات
          },
          error: (error) => {
            console.error('Error fetching project details:', error);
          },
        });
      }
    });
  }
}
