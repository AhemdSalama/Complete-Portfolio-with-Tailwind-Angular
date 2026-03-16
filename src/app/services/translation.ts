import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Translation {
  // بنعمل متغير تفاعلي بيراقب اللغة
  private lang = new BehaviorSubject<string>('ar');
  currentLang$ = this.lang.asObservable();

  // القاموس بتاعنا (هنكبره مع كل سكشن)
  // القاموس بتاعنا بعد التعديل الجديد
  public dictionary: any = {
    en: {
      nav: { home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact' },
      hero: { 
        badge: 'Available for new projects', 
        title1: 'Web Developer &', 
        title2: 'AI Automation Engineer', 
        desc: 'Crafting innovative digital experiences and intelligent automation solutions that transform ideas into reality.', 
        btnWork: 'View My Work', 
        btnCV: 'Download CV' 
      },
      // ================= ضفنا سكشن الـ About هنا =================
      // جوه الـ en:
      about: {
        title: 'About Me',
        subtitle: 'Passionate about creating innovative solutions that combine modern web technologies with artificial intelligence and automation.',
        heading: 'Transforming Ideas Into Reality',
        desc1: 'With over 5 years of experience in web development and a deep passion for AI and automation, I specialize in building scalable applications that leverage cutting-edge technology to solve real-world problems.',
        desc2: 'My expertise spans from crafting beautiful, responsive user interfaces to developing intelligent automation systems that streamline business processes and boost productivity.',
        badge1: 'Full-Stack Development',
        badge2: 'AI Solutions',
        badge3: 'Process Automation',
        card1Title: 'Web Development',
        card2Title: 'AI & Machine Learning',
        card2Bullet1: 'OpenAI GPT Integration',
        card2Bullet3: 'NLP & Computer Vision',
        card2Bullet4: 'Model Deployment',
        card3Title: 'Automation',
        card3Bullet1: 'Workflow Automation',
        card3Bullet2: 'API Integration',
        card3Bullet4: 'Python Scripting'
      },
      projects: {
        tag: 'My Portfolio',
        title: 'Featured Projects',
        subtitle: 'A selection of my recent work across web development, AI, and automation.',
        filterAll: 'All',
        filterWeb: 'Web',
        filterAI: 'AI',
        filterAuto: 'Automation',
        btnGithub: 'GitHub',
        btnDemo: 'Demo',
        btnDetails: 'Details',
        btnSeeAll: 'See All Projects'
      },
      contact: {
        coreTech: 'Core Technologies',
        title: "Let's Build Something Great",
        subtitle: "Have a project in mind? Let's work together to bring your ideas to life.",
        email: 'Email',
        phone: 'Phone / WhatsApp',
        location: 'Location',
        locationText: 'Cairo, Egypt (Remote Worldwide)',
        connect: 'Connect with me',
        nameLabel: 'Your Name',
        namePlaceholder: 'John Doe',
        emailLabel: 'Email Address',
        emailPlaceholder: 'john@example.com',
        messageLabel: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        btnSend: 'Send Message'
      },
      footer: {
        copyright: '© 2026 Ahmed Salama. All rights reserved.'
      },
      details: {
        back: 'Back to Portfolio',
        overview: 'Project Overview',
        techStack: 'Tech Stack',
        btnGithub: 'Source Code',
        btnDemo: 'Live Preview'
      },
      allProjects: {
        title: 'Full Portfolio',
        subtitle: 'Explore my complete collection of projects across Web Development, Artificial Intelligence, and Smart Automation.'
      }
    },
    ar: {
      nav: { home: 'الرئيسية', about: 'من أنا', projects: 'أعمالي', contact: 'تواصل معي' },
      hero: { 
        badge: 'متاح لمشاريع جديدة', 
        title1: 'مطور ويب و', 
        title2: 'مهندس أتمتة بالذكاء الاصطناعي', 
        desc: 'أصنع تجارب رقمية مبتكرة وحلول أتمتة ذكية تحول الأفكار إلى واقع ملموس.', 
        btnWork: 'تصفح أعمالي', 
        btnCV: 'تحميل السيرة الذاتية' 
      },
      // ================= والترجمة بتاعته هنا =================
      about: {
        title: 'من أنا',
        subtitle: 'شغوف بابتكار حلول تجمع بين تقنيات الويب الحديثة والذكاء الاصطناعي والأتمتة.',
        heading: 'تحويل الأفكار إلى واقع ملموس',
        desc1: 'مع أكثر من 5 سنوات من الخبرة في تطوير الويب وشغف عميق بالذكاء الاصطناعي والأتمتة، أتخصص في بناء تطبيقات قابلة للتطوير تستفيد من أحدث التقنيات لحل مشاكل العالم الحقيقي.',
        desc2: 'تمتد خبرتي من تصميم واجهات مستخدم جذابة ومتجاوبة، إلى تطوير أنظمة أتمتة ذكية تبسط العمليات التجارية وتعزز الإنتاجية.',
        badge1: 'تطوير الويب المتكامل',
        badge2: 'حلول الذكاء الاصطناعي',
        badge3: 'أتمتة العمليات',
        card1Title: 'تطوير الويب',
        card2Title: 'الذكاء الاصطناعي وتعلم الآلة',
        card2Bullet1: 'ربط خدمات OpenAI GPT',
        card2Bullet3: 'معالجة اللغات والرؤية الحاسوبية',
        card2Bullet4: 'نشر نماذج الذكاء الاصطناعي (Deployment)',
        card3Title: 'الأتمتة',
        card3Bullet1: 'أتمتة مسارات العمل',
        card3Bullet2: 'ربط واجهات برمجة التطبيقات (API)',
        card3Bullet4: 'برمجة سكريبتات بايثون'
      },
      projects: {
        tag: 'معرض أعمالي',
        title: 'أبرز المشاريع',
        subtitle: 'مجموعة مختارة من أعمالي الأخيرة في تطوير الويب، الذكاء الاصطناعي، والأتمتة.',
        filterAll: 'الكل',
        filterWeb: 'تطوير الويب',
        filterAI: 'الذكاء الاصطناعي',
        filterAuto: 'الأتمتة',
        btnGithub: 'كود المشروع',
        btnDemo: 'معاينة حية',
        btnDetails: 'التفاصيل',
        btnSeeAll: 'عرض كل المشاريع'
      },
      contact: {
        coreTech: 'التقنيات الأساسية',
        title: 'لنصنع شيئاً عظيماً معاً',
        subtitle: 'هل لديك مشروع في ذهنك؟ دعنا نعمل معاً لتحويل أفكارك إلى واقع.',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف / واتساب',
        location: 'الموقع',
        locationText: 'القاهرة، مصر (عمل عن بعد عالمياً)',
        connect: 'تواصل معي عبر',
        nameLabel: 'الاسم',
        namePlaceholder: 'أحمد سلامة',
        emailLabel: 'البريد الإلكتروني',
        emailPlaceholder: 'ahmed@example.com',
        messageLabel: 'الرسالة',
        messagePlaceholder: 'أخبرني عن مشروعك...',
        btnSend: 'إرسال الرسالة'
      },
      footer: {
        copyright: '© 2026 أحمد سلامة. جميع الحقوق محفوظة.'
      },
      details: {
        back: 'العودة للمشاريع',
        overview: 'نظرة عامة على المشروع',
        techStack: 'التقنيات المستخدمة',
        btnGithub: 'كود المشروع',
        btnDemo: 'معاينة حية'
      },
      allProjects: {
        title: 'المعرض الكامل',
        subtitle: 'استكشف مجموعتي الكاملة من المشاريع في تطوير الويب، الذكاء الاصطناعي، والأتمتة الذكية.'
      }
    }
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.applyLanguageSettings('ar');
  }

  // دالة مساعدة بتطبق الإعدادات (عشان نستخدمها في الـ constructor وفي زرار التبديل)
  private applyLanguageSettings(newLang: string) {
    const htmlTag = this.document.getElementsByTagName('html')[0];
    htmlTag.dir = newLang === 'en' ? 'ltr' : 'rtl';
    htmlTag.lang = newLang;
    
    if (newLang === 'ar') {
      htmlTag.classList.add('font-arabic');
    } else {
      htmlTag.classList.remove('font-arabic');
    }
  }
  get currentLang() {
    return this.lang.value;
  }

  // toggleLanguage() {
  //   const newLang = this.lang.value === 'en' ? 'ar' : 'en';
  //   this.lang.next(newLang); // بنبلغ كل الموقع إن اللغة اتغيرت

  //   // قلب الشاشة (زي ما عملنا المرة اللي فاتت)
  //   const htmlTag = this.document.getElementsByTagName('html')[0];
  //   htmlTag.dir = newLang === 'en' ? 'ltr' : 'rtl';
  //   htmlTag.lang = newLang;

  //   if (newLang === 'ar') {
  //     htmlTag.classList.add('font-arabic');
  //   } else {
  //     htmlTag.classList.remove('font-arabic');
  //   }
  // }

  toggleLanguage() {
    const newLang = this.lang.value === 'en' ? 'ar' : 'en';
    this.lang.next(newLang);
    this.applyLanguageSettings(newLang); // استخدمنا الدالة هنا
  }
  // دالة بتجيب الكلمة المطلوبة
  translate(section: string, key: string) {
    return this.dictionary[this.lang.value][section][key];
  }
}
