import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProjectService } from '../../../services/project';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-project-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, QuillModule],
  templateUrl: './project-form.html',
  styleUrl: './project-form.css',
})
export class ProjectForm implements OnInit {
  projectForm: FormGroup;
  isEditMode = false;
  projectId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.projectForm = this.fb.group({
      title_en: ['', Validators.required],
      title_ar: ['', Validators.required],
      slug: ['', [Validators.required, Validators.pattern('^[a-z0-9-]+$')]], // lowercase slug
      category: ['', Validators.required],
      shortDescription_en: ['', Validators.required],
      shortDescription_ar: ['', Validators.required],
      thumbnailUrl: ['', Validators.required],
      content_en: ['', Validators.required],
      content_ar: ['', Validators.required],
      role_en: ['', Validators.required],
      role_ar: ['', Validators.required],
      duration: ['', Validators.required],
      techStack: ['', Validators.required],
      demoLink: ['', Validators.required],
      githubLink: ['', Validators.required],
      isPublished: [false]
    });
  }

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id');
    if (this.projectId) {
      this.isEditMode = true;
      this.projectService.getProjectById(this.projectId).subscribe((project: any) => {
        this.projectForm.patchValue({
          ...project,
          techStack: project.techStack?.join(', ')
        });
      });
    }
  }

  onSubmit() {
    if (this.projectForm.invalid) {
      console.log('Errors:', this.getFormValidationErrors());
      return alert('Please fill all required fields correctly!');
    }

    const formData = {
      ...this.projectForm.value,
      techStack: this.projectForm.value.techStack.split(',').map((s: string) => s.trim())
    };

    if (this.isEditMode) {
      this.projectService.updateProject(this.projectId!, formData).subscribe(() => {
        alert('Project updated!');
        this.router.navigate(['/dashboard/projects']);
      });
    } else {
      this.projectService.createProject(formData).subscribe(() => {
        alert('Project created!');
        this.router.navigate(['/dashboard/projects']);
      });
    }
  }

  getFormValidationErrors() {
    const errors: any = {};
    Object.keys(this.projectForm.controls).forEach(key => {
      const controlErrors = this.projectForm.get(key)?.errors;
      if (controlErrors != null) errors[key] = controlErrors;
    });
    return errors;
  }
}
