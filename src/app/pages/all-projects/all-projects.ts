import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Translation } from '../../services/translation';

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
  constructor(public translationService: Translation) {}

  // 3. المصفوفة بعد إضافة الترجمة العربي
  allProjects = [
    { id: 1, title: 'Modern E-Commerce', titleAr: 'منصة تجارة إلكترونية', category: 'Web', description: 'Full-stack solution with Stripe.', descriptionAr: 'حل متكامل مع بوابات دفع Stripe.', tags: ['Next.js', 'Stripe'], image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=600' },
    { id: 2, title: 'Real Estate Dashboard', titleAr: 'لوحة تحكم للعقارات', category: 'Web', description: 'Management system with maps.', descriptionAr: 'نظام إدارة مع خرائط تفاعلية.', tags: ['Angular', 'Firebase'], image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600' },
    { id: 3, title: 'Fitness Tracking App', titleAr: 'تطبيق تتبع اللياقة', category: 'Web', description: 'Social platform for athletes.', descriptionAr: 'منصة اجتماعية للرياضيين.', tags: ['React', 'Node.js'], image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600' },
    { id: 4, title: 'AI Support Chatbot', titleAr: 'بوت دعم فني ذكي', category: 'AI', description: 'GPT-4 powered customer bot.', descriptionAr: 'بوت خدمة عملاء يعمل بـ GPT-4.', tags: ['Python', 'OpenAI'], image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600' },
    { id: 5, title: 'CV Analyzer', titleAr: 'محلل السير الذاتية', category: 'AI', description: 'NLP tool for resume matching.', descriptionAr: 'أداة ذكية لمطابقة السير الذاتية.', tags: ['Python', 'TensorFlow'], image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600' },
    { id: 6, title: 'Smart Image Generator', titleAr: 'مولد الصور الذكي', category: 'AI', description: 'AI marketing image generator.', descriptionAr: 'مولد صور تسويقية بالذكاء الاصطناعي.', tags: ['Python', 'React'], image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600' },
    { id: 7, title: 'Workflow Automation', titleAr: 'أتمتة مسارات العمل', category: 'Automation', description: 'CRM and Slack integration.', descriptionAr: 'ربط أنظمة إدارة العملاء و Slack.', tags: ['Zapier', 'APIs'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600' },
    { id: 8, title: 'Social Media Auto-Poster', titleAr: 'نشر تلقائي للسوشيال ميديا', category: 'Automation', description: 'AI content scheduler.', descriptionAr: 'جدولة محتوى تلقائية بالذكاء الاصطناعي.', tags: ['Python', 'GPT-4'], image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600' },
    { id: 9, title: 'Email Marketing Suite', titleAr: 'منصة التسويق عبر البريد', category: 'Automation', description: 'Automated follow-up system.', descriptionAr: 'نظام متابعة بريد آلي.', tags: ['Node.js', 'SMTP'], image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600' }
  ];

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
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