import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-details.html'
})
export class ProjectDetails implements OnInit {
  project: any;

  // الداتا دي مؤقتة لحد ما نربط بالباك إند (Node.js)
  allProjects = [
    {
      id: 1,
      title: 'AI-Powered Support Chatbot',
      category: 'AI',
      shortDesc: 'Intelligent chatbot using GPT-4 for automated customer service.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
      tags: ['Python', 'OpenAI', 'React', 'FastAPI'],
      githubLink: '#',
      demoLink: '#',
      // ده بقى المقال التفصيلي
      overview: 'This project was built to solve the high volume of support tickets. It uses OpenAI\'s GPT-4 API to understand customer queries and provide instant, accurate responses based on the company\'s knowledge base.',
      features: [
        'Natural Language Understanding with 95% accuracy.',
        'Integration with Zendesk and Slack.',
        'Real-time analytics dashboard for support managers.',
        'Fallback mechanism to human agents when needed.'
      ],
      challenges: 'The main challenge was reducing the API latency to ensure real-time chat experience, which was solved by implementing Redis caching.'
    }
    // تقدر تزود باقي المشاريع هنا بنفس الشكل
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // هنا بنجيب الـ ID من اللينك
    this.route.paramMap.subscribe(params => {
      const projectId = Number(params.get('id'));
      // بندور على المشروع اللي الـ ID بتاعه بيطابق
      this.project = this.allProjects.find(p => p.id === projectId);
      
      // لو المشروع مش موجود في الداتا (عشان لسه مكملناش الباقي)، هنعرض أول واحد كمثال
      if (!this.project) {
        this.project = this.allProjects[0];
      }
    });
  }
}