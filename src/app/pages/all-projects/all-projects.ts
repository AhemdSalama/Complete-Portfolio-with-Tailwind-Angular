import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 1. تأكد من وجود هذا السطر

@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule // 2. ضيف RouterModule هنا في مصفوفة الـ imports
  ], 
  templateUrl: './all-projects.html'
})
export class AllProjects implements OnInit {
  filters = ['All', 'Web', 'AI', 'Automation'];
  activeFilter = 'All';

  // نفس المصفوفة الكبيرة (الـ 9 مشاريع)
  allProjects = [
    { id: 1, title: 'Modern E-Commerce', category: 'Web', description: 'Full-stack solution with Stripe.', tags: ['Next.js', 'Stripe'], image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=600' },
    { id: 2, title: 'Real Estate Dashboard', category: 'Web', description: 'Management system with maps.', tags: ['Angular', 'Firebase'], image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600' },
    { id: 3, title: 'Fitness Tracking App', category: 'Web', description: 'Social platform for athletes.', tags: ['React', 'Node.js'], image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600' },
    { id: 4, title: 'AI Support Chatbot', category: 'AI', description: 'GPT-4 powered customer bot.', tags: ['Python', 'OpenAI'], image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600' },
    { id: 5, title: 'CV Analyzer', category: 'AI', description: 'NLP tool for resume matching.', tags: ['Python', 'TensorFlow'], image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600' },
    { id: 6, title: 'Smart Image Generator', category: 'AI', description: 'AI marketing image generator.', tags: ['Python', 'React'], image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600' },
    { id: 7, title: 'Workflow Automation', category: 'Automation', description: 'CRM and Slack integration.', tags: ['Zapier', 'APIs'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600' },
    { id: 8, title: 'Social Media Auto-Poster', category: 'Automation', description: 'AI content scheduler.', tags: ['Python', 'GPT-4'], image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600' },
    { id: 9, title: 'Email Marketing Suite', category: 'Automation', description: 'Automated follow-up system.', tags: ['Node.js', 'SMTP'], image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600' }
  ];

  ngOnInit() {
    // عشان لما الصفحة تفتح تطلع لفوق خالص
    window.scrollTo(0, 0);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  get filteredProjects() {
    if (this.activeFilter === 'All') return this.allProjects;
    return this.allProjects.filter(p => p.category === this.activeFilter);
  }
}