import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.html',
})
export class Projects {
  filters = ['All', 'Web', 'AI', 'Automation'];
  activeFilter = 'All';

  // حقن خدمة الترجمة
  constructor(public translationService: Translation) {}

  projects = [
    {
      id: 1,
      category: 'Web',
      title: 'Modern E-Commerce Platform',
      titleAr: 'منصة تجارة إلكترونية حديثة',
      description: 'Full-stack e-commerce solution with real-time inventory and Stripe payment integration.',
      descriptionAr: 'حل متكامل للتجارة الإلكترونية مع إدارة مخزون حية وربط بوابات دفع Stripe.',
      tags: ['Next.js', 'Stripe', 'Tailwind'],
      githubLink: '#', demoLink: '#',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=600'
    },
    {
      id: 2,
      category: 'Web',
      title: 'Real Estate Dashboard',
      titleAr: 'لوحة تحكم للعقارات',
      description: 'Property management system with interactive maps and dynamic filtering for agents.',
      descriptionAr: 'نظام إدارة عقارات مع خرائط تفاعلية وفلترة ديناميكية للوكلاء.',
      tags: ['Angular', 'Firebase', 'Maps API'],
      githubLink: '#', demoLink: '#',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600'
    },
    {
      id: 3,
      category: 'Web',
      title: 'Fitness Tracking App',
      titleAr: 'تطبيق تتبع اللياقة البدنية',
      description: 'Social platform for athletes to track workouts and share progress with a community.',
      descriptionAr: 'منصة اجتماعية للرياضيين لتتبع التمارين ومشاركة التقدم مع المجتمع.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      githubLink: '#', demoLink: '#',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600'
    },
    {
      id: 4,
      category: 'AI',
      title: 'AI-Powered Support Chatbot',
      titleAr: 'بوت دعم فني بالذكاء الاصطناعي',
      description: 'Intelligent customer service bot using GPT-4 to handle complex queries with high accuracy.',
      descriptionAr: 'بوت خدمة عملاء ذكي يستخدم GPT-4 للرد على الاستفسارات المعقدة بدقة عالية.',
      tags: ['Python', 'OpenAI', 'FastAPI'],
      githubLink: '#', demoLink: '#',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600'
    },
    {
      id: 5,
      category: 'AI',
      title: 'CV Analyzer & Scorer',
      titleAr: 'محلل ومقيم السير الذاتية',
      description: 'NLP tool that scans resumes and matches them to job descriptions using semantic search.',
      descriptionAr: 'أداة معالجة لغات (NLP) تفحص السير الذاتية وتطابقها مع الوظائف باستخدام البحث الدلالي.',
      tags: ['Python', 'NLP', 'TensorFlow'],
      githubLink: '#', demoLink: '#',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600'
    },
    {
      id: 6,
      category: 'Automation',
      title: 'Workflow Automation Hub',
      titleAr: 'منصة أتمتة مسارات العمل',
      description: 'Integrated hub that connects CRM, Email, and Slack to automate sales pipelines.',
      descriptionAr: 'منصة متكاملة تربط أنظمة إدارة العملاء والبريد وSlack لأتمتة عمليات المبيعات.',
      tags: ['Zapier', 'Make.com', 'APIs'],
      githubLink: '#', demoLink: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600'
    }
  ];

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