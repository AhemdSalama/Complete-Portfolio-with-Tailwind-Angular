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
  project: any = null;
  errorMessage: string = '';
  
  // Variables for Image Gallery Modal
  isModalOpen = false;
  selectedImageUrl = '';
  isZoomed = false;

  constructor(
    private route: ActivatedRoute,
    public translationService: Translation,
    private projectService: ProjectService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);

    this.route.paramMap.subscribe((params) => {
      // بنقرا الـ Slug من اللينك (حتى لو اسمه id في الـ routes)
      const projectSlug = params.get('id'); 
      
      if (projectSlug) {
        this.projectService.getProjectBySlug(projectSlug).subscribe({
          next: (data) => {
            this.project = data;
            this.errorMessage = '';
            this.cdr.markForCheck();
          },
          error: (error) => {
            console.error('Error fetching project details:', error);
            this.errorMessage = 'Project not found or invalid link!';
            this.project = null;
            this.cdr.markForCheck();
          },
        });
      }
    });
  }

  // Modal Methods
  openModal(url: string) {
    this.selectedImageUrl = url;
    this.isModalOpen = true;
    this.isZoomed = false;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    setTimeout(() => {
      this.selectedImageUrl = '';
    }, 300);
    document.body.style.overflow = 'auto';
  }

  toggleZoom(event: Event) {
    event.stopPropagation();
    this.isZoomed = !this.isZoomed;
  }
}