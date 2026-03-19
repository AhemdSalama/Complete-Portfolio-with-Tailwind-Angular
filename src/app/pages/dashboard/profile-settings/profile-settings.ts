import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from '../../../services/profile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-settings',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile-settings.html',
  styleUrl: './profile-settings.css',
})
export class ProfileSettings implements OnInit {

  profileForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private profileService: ProfileService
  ){
    this.profileForm = this.fb.group({
      ownerName: ['', Validators.required],
      heroSection: this.fb.group({
        mainTitle: ['', Validators.required],
        subTitle: ['', Validators.required],
        cvLink: ['', Validators.required],
      }),
      aboutSection: this.fb.group({
        bio: ['', Validators.required],
        avatarUrl: ['', Validators.required],
      }),
      skills: this.fb.array([]), // Array ديناميكي
      socialLinks: this.fb.array([]) // Array ديناميكي
    });
  }
  get skills(){
    return this.profileForm.get('skills') as FormArray;
  }
  get socialLinks(){
    return this.profileForm.get('socialLinks') as FormArray;
  }
  ngOnInit(): void {
    this.loadProfile();
  }
  loadProfile(){
    this.profileService.getProfile().subscribe(data=>{
      if(data){
        this.skills.clear();
        this.socialLinks.clear();

        data.skills?.forEach((s:any)=>{
          this.addSkill(s);
        })
        data.socialLinks?.foreach((l:any)=> this.addSocialLink(l))


      }
    })
  }
  addSkill(skill = { name: '', iconUrl: '', category: 'Frontend' }) {
    this.skills.push(this.fb.group({
      name: [skill.name, Validators.required],
      iconUrl: [skill.iconUrl, Validators.required],
      category: [skill.category, Validators.required]
    }));
  }

  removeSkill(index: number) { this.skills.removeAt(index); }

  // وظائف الـ Social Links
  addSocialLink(link = { platform: '', url: '' }) {
    this.socialLinks.push(this.fb.group({
      platform: [link.platform, Validators.required],
      url: [link.url, Validators.required]
    }));
    
  }
  removeSocialLink(index: number) { this.socialLinks.removeAt(index); }

  onSubmit() {
    if (this.profileForm.valid) {
      this.profileService.updateProfile(this.profileForm.value).subscribe(() => {
        alert('Profile updated successfully! ✨');
      });
    }
  }
}
