import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-details.html'
})
export class ProjectDetails implements OnInit {
  project: any;

  // الداتا بعد إضافة الترجمة العربي
  allProjects = [
    {
      id: 1,
      title: 'AI-Powered Support Chatbot',
      titleAr: 'بوت دعم فني بالذكاء الاصطناعي',
      category: 'AI',
      categoryAr: 'الذكاء الاصطناعي',
      shortDesc: 'Intelligent chatbot using GPT-4 for automated customer service.',
      shortDescAr: 'بوت دردشة ذكي يستخدم GPT-4 لخدمة العملاء الآلية.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
      tags: ['Python', 'OpenAI', 'React', 'FastAPI'],
      githubLink: '#',
      demoLink: '#',
      overview: "This project was built to solve the high volume of support tickets. It uses OpenAI's GPT-4 API to understand customer queries and provide instant, accurate responses based on the company's knowledge base.",
      overviewAr: 'تم بناء هذا المشروع لحل مشكلة الحجم الكبير لتذاكر الدعم الفني. يستخدم واجهة برمجة تطبيقات GPT-4 من OpenAI لفهم استفسارات العملاء وتقديم استجابات فورية ودقيقة بناءً على قاعدة المعرفة الخاصة بالشركة.',
      features: [
        'Natural Language Understanding with 95% accuracy.',
        'Integration with Zendesk and Slack.',
        'Real-time analytics dashboard for support managers.',
        'Fallback mechanism to human agents when needed.'
      ],
      featuresAr: [
        'فهم اللغة الطبيعية بدقة تصل إلى 95٪.',
        'الربط المباشر مع منصات Zendesk و Slack.',
        'لوحة تحكم وتحليلات لحظية لمديري الدعم الفني.',
        'آلية تحويل المحادثة تلقائياً لموظف بشري عند الحاجة.'
      ],
      challenges: 'The main challenge was reducing the API latency to ensure real-time chat experience, which was solved by implementing Redis caching.',
      challengesAr: 'كان التحدي الرئيسي هو تقليل وقت استجابة الـ API لضمان تجربة دردشة فورية، وتم حل هذه المشكلة عن طريق استخدام Redis Caching.'
    }
  ];

  // حقن الـ TranslationService مع الـ ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    public translationService: Translation
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const projectId = Number(params.get('id'));
      this.project = this.allProjects.find(p => p.id === projectId);
      
      if (!this.project) {
        this.project = this.allProjects[0];
      }
    });

    // عشان الصفحة تفتح من فوق خالص
    window.scrollTo(0, 0);
  }
}