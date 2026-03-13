import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard{
  heroForm: FormGroup;
  isSaving = false;

  constructor(private fb: FormBuilder) {
    // تجهيز الفورم بالبيانات المبدئية
    this.heroForm = this.fb.group({
      headline: ['Web Developer & AI Automation Engineer', Validators.required],
      description: ['Crafting innovative digital experiences and intelligent automation solutions that transform ideas into reality.', Validators.required],
      isAvailable: [true] // الـ Toggle بتاع متاح للعمل
    });
  }

  // الدالة اللي هتشتغل لما تدوس Save (بعدين هنربطها بـ Node.js)
  onSubmit() {
    if (this.heroForm.valid) {
      this.isSaving = true;
      console.log('Data to send to API:', this.heroForm.value);
      
      // محاكاة للباك إند (كأنه بيبعت داتا وهيرد بعد ثانيتين)
      setTimeout(() => {
        this.isSaving = false;
        alert('Hero Section Updated Successfully!');
      }, 1000);
    }
  }
}