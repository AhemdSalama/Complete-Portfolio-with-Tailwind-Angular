import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.html',
})
export class Projects {
  filters = ['All', 'Web', 'AI', 'Automation'];
  activeFilter = 'All';

  projects = [
    // --- WEB PROJECTS ---
    {
      id: 1,
      title: 'Modern E-Commerce Platform',
      category: 'Web',
      description:
        'Full-stack e-commerce solution with real-time inventory and Stripe payment integration.',
      tags: ['Next.js', 'Stripe', 'Tailwind'],
      githubLink: '#',
      demoLink: '#',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=600',
    },
    {
      id: 2,
      title: 'Real Estate Dashboard',
      category: 'Web',
      description:
        'Property management system with interactive maps and dynamic filtering for agents.',
      tags: ['Angular', 'Firebase', 'Maps API'],
      githubLink: '#',
      demoLink: '#',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600',
    },
    {
      id: 3,
      title: 'Fitness Tracking App',
      category: 'Web',
      description:
        'Social platform for athletes to track workouts and share progress with a community.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      githubLink: '#',
      demoLink: '#',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=600',
    },

    // --- AI PROJECTS ---
    {
      id: 4,
      title: 'AI-Powered Support Chatbot',
      category: 'AI',
      description:
        'Intelligent customer service bot using GPT-4 to handle complex queries with high accuracy.',
      tags: ['Python', 'OpenAI', 'FastAPI'],
      githubLink: '#',
      demoLink: '#',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600',
    },
    {
      id: 5,
      title: 'CV Analyzer & Scorer',
      category: 'AI',
      description:
        'NLP tool that scans resumes and matches them to job descriptions using semantic search.',
      tags: ['Python', 'NLP', 'TensorFlow'],
      githubLink: '#',
      demoLink: '#',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600',
    },
    {
      id: 6,
      title: 'Smart Image Generator',
      category: 'AI',
      description:
        'AI tool that generates high-quality marketing images based on text descriptions.',
      tags: ['Diffusers', 'Python', 'React'],
      githubLink: '#',
      demoLink: '#',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600',
    },

    // --- AUTOMATION PROJECTS ---
    {
      id: 7,
      title: 'Workflow Automation Hub',
      category: 'Automation',
      description:
        'Integrated hub that connects CRM, Email, and Slack to automate sales pipelines.',
      tags: ['Zapier', 'Make.com', 'APIs'],
      githubLink: '#',
      demoLink: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600',
    },
    {
      id: 8,
      title: 'Social Media Auto-Poster',
      category: 'Automation',
      description: 'System that generates and schedules content across 5 platforms automatically.',
      tags: ['Python', 'GPT-4', 'Puppeteer'],
      githubLink: '#',
      demoLink: '#',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600',
    },
    {
      id: 9,
      title: 'Email Marketing Suite',
      category: 'Automation',
      description: 'Personalized cold email campaigns with automated follow-ups and lead scoring.',
      tags: ['Node.js', 'Redis', 'SMTP'],
      githubLink: '#',
      demoLink: '#',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600',
    },
  ];

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  get filteredProjects() {
  const filtered = this.activeFilter === 'All' 
    ? this.projects 
    : this.projects.filter(p => p.category === this.activeFilter);
    
  return filtered.slice(0, 6); // ده اللي هيخلي الصفحة الرئيسية شيك ومش زحمة
}
}
