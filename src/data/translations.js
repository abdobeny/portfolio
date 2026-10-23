export const content = {
  fr: {
    nav: {
      projects: "Projets",
      skills: "Compétences",
      journey: "Parcours",
      contact: "Contact",
      availableBadge: "Disponible pour stage / opportunités",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
    },
    hero: {
      role: "Développeur Web Full-Stack",
      badge: "React.js · Laravel · Filament · MySQL",
      greeting: "Bonjour, je suis",
      name: "Abdellilah Benyousse",
      pitch: "Développeur web basé à Marrakech, spécialisé dans l'écosystème PHP (Laravel, Filament) et React.js. Je conçois des applications dynamiques et structurées : du modèle de données MySQL jusqu'à l'interface, avec un code propre et maintenable.",
      location: "Marrakech, Maroc",
      contactBtn: "Me contacter",
      downloadCv: "Télécharger CV",
      copyEmail: "Copier l'email",
      emailCopied: "Email copié !",
    },
    projects: {
      title: "Projets Réalisés",
      subtitle: "Applications web modernes et architectures API REST.",
      viewCode: "Code Source",
      liveDemo: "Aperçu",
      list: [
        {
          id: "refuge-animalier",
          title: "Plateforme de Refuge Animalier",
          type: "Projet de Groupe",
          tech: ["Laravel", "React.js", "Filament", "MySQL", "API REST"],
          image: "/images/projects/refuge.png",
          description: "Application web SPA pour la gestion de l'adoption d'animaux, reliant un frontend React à une API Laravel robuste.",
          bullets: [
            "Développement d'une interface SPA réactive avec React.js.",
            "Conception d'une API REST sécurisée avec Laravel pour le backend.",
            "Intégration de Filament PHP pour un panneau d'administration sur mesure."
          ]
        },
        {
          id: "agence-voyage",
          title: "Agence de Voyage Automatisée",
          type: "Projet Personnel",
          tech: ["Laravel", "React.js", "WhatsApp API", "Filament"],
          image: "/images/projects/voyage.png",
          description: "Plateforme centralisant les requêtes touristiques avec automatisation des confirmations via WhatsApp.",
          bullets: [
            "Système d'envoi automatisé des détails de voyage sur WhatsApp.",
            "Gestion du catalogue et des flux clients via Filament PHP.",
            "Architecture Full-Stack optimisée pour l'expérience utilisateur."
          ]
        },
        {
          id: "blog-mvc",
          title: "Blog Dynamique (Architecture MVC)",
          type: "Projet Académique",
          tech: ["PHP Natif", "MySQL", "Architecture MVC", "CRUD"],
          image: "/images/projects/blog.png",
          description: "Conception complète d'un moteur de blog modulaire sans framework externe pour maîtriser la séparation des responsabilités.",
          bullets: [
            "Implémentation manuelle du modèle Modèle-Vue-Contrôleur (MVC).",
            "Gestion sécurisée de la base de données MySQL et requêtes préparées.",
            "Système CRUD complet pour les articles et la modération des commentaires."
          ]
        }
      ]
    },
    skills: {
      title: "Compétences & Outils",
      subtitle: "Un ensemble technique axé sur la qualité du code et les fondamentaux du web.",
      categories: {
        frontend: "Frontend",
        backend: "Backend & Données",
        general: "Programmation & Algorithmique",
        tools: "Outils, Qualité & DevOps"
      }
    },
    journey: {
      title: "Parcours & Formation",
      subtitle: "Une solide fondation scientifique combinée à la pratique du développement.",
      educationTitle: "Formation",
      experienceTitle: "Expérience Professionnelle",
      education: [
        {
          period: "2024 – 2026 (En cours)",
          title: "Développement Digital",
          institution: "OFPPT ISGI, Marrakech",
          desc: "Spécialisation dans le développement web full stack, architectures MVC, bases de données relationnelles et frameworks modernes (Laravel, React)."
        },
        {
          period: "2019 – 2021",
          title: "CPGE – Filière TSI",
          institution: "Lycée Moulay Abdellah, Safi",
          desc: "Classes Préparatoires aux Grandes Écoles : acquisition d'une forte rigueur d'analyse, mathématiques appliquées et sciences de l'ingénieur."
        },
        {
          period: "2018 – 2019",
          title: "Baccalauréat STM",
          institution: "Lycée Mohammed VI, Marrakech",
          desc: "Sciences et Technologies Mécaniques. Solide initiation technique et logique de conception."
        }
      ],
      experience: [
        {
          period: "2023",
          role: "Télé-opérateur",
          company: "Telerecord, Marrakech",
          desc: "Gestion de la relation client par téléphone, respect strict des protocoles de qualité et travail d'équipe en environnement exigeant."
        }
      ],
      softSkillsTitle: "Langues & Intérêts",
      spokenLanguages: [
        "Arabe : maternelle",
        "Français : courant",
        "Anglais : courant"
      ],
      interests: ["#Linux", "#Gaming", "#Sport"]
    },
    footer: {
      ready: "Intéressé par mon profil ?",
      desc: "N'hésitez pas à me contacter par email ou par téléphone pour toute proposition de stage ou collaboration technique.",
      rights: "Tous droits réservés.",
      builtWith: "Construit avec React & Tailwind CSS • Marrakech, Maroc",
    }
  },

  en: {
    nav: {
      projects: "Projects",
      skills: "Skills",
      journey: "Journey",
      contact: "Contact",
      availableBadge: "Available for internships / Junior roles",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      role: "Full-Stack Web Developer",
      badge: "React.js · Laravel · Filament · MySQL",
      greeting: "Hello, I am",
      name: "Abdellilah Benyousse",
      pitch: "Web developer based in Marrakech, specialized in the PHP ecosystem (Laravel, Filament) and React.js. I build dynamic, well-structured applications — from MySQL data modeling to the user interface — with clean, maintainable code.",
      location: "Marrakech, Morocco",
      contactBtn: "Get in touch",
      downloadCv: "Download CV",
      copyEmail: "Copy email",
      emailCopied: "Email copied!",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Modern web applications and REST API architectures.",
      viewCode: "Source Code",
      liveDemo: "Live Preview",
      list: [
        {
          id: "refuge-animalier",
          title: "Animal Shelter Platform",
          type: "Group Project",
          tech: ["Laravel", "React.js", "Filament", "MySQL", "REST API"],
          image: "/images/projects/refuge.png",
          description: "SPA web application for managing animal adoptions, connecting a React frontend to a robust Laravel API.",
          bullets: [
            "Built a responsive SPA interface using React.js.",
            "Designed a secure REST API with Laravel for the backend.",
            "Integrated Filament PHP for a custom, secure admin panel."
          ]
        },
        {
          id: "agence-voyage",
          title: "Automated Travel Agency",
          type: "Personal Project",
          tech: ["Laravel", "React.js", "WhatsApp API", "Filament"],
          image: "/images/projects/voyage.png",
          description: "Platform centralizing tourist inquiries with automated WhatsApp confirmations and catalog management.",
          bullets: [
            "Implemented automated travel detail delivery via WhatsApp API.",
            "Managed catalog and client flows using Filament PHP.",
            "Full-Stack architecture optimized for user experience."
          ]
        },
        {
          id: "blog-mvc",
          title: "Dynamic Blog (MVC Architecture)",
          type: "Academic Project",
          tech: ["Native PHP", "MySQL", "MVC Pattern", "CRUD"],
          image: "/images/projects/blog.png",
          description: "Full native PHP blog engine built from scratch without external frameworks to master separation of concerns.",
          bullets: [
            "Handcrafted Model-View-Controller (MVC) architectural design.",
            "Prepared statements and secure relational database queries via MySQL.",
            "Complete CRUD flow for articles, author dashboard, and comment handling."
          ]
        }
      ]
    },
    skills: {
      title: "Skills & Technical Stack",
      subtitle: "Practical engineering toolset focused on clean code and core standards.",
      categories: {
        frontend: "Frontend",
        backend: "Backend & Databases",
        general: "Programming & Logic",
        tools: "Tooling, QA & DevOps"
      }
    },
    journey: {
      title: "Journey & Education",
      subtitle: "A strong scientific baseline paired with hands-on web engineering.",
      educationTitle: "Education",
      experienceTitle: "Work Experience",
      education: [
        {
          period: "2024 – 2026 (In Progress)",
          title: "Digital Development",
          institution: "OFPPT ISGI, Marrakech",
          desc: "Full-stack web curriculum covering modern JavaScript frameworks, MVC PHP, database modeling, and software engineering workflows."
        },
        {
          period: "2019 – 2021",
          title: "CPGE – TSI Stream",
          institution: "Lycée Moulay Abdellah, Safi",
          desc: "Intensive preparatory classes for French engineering schools. High-level focus on mathematics, physics, and problem solving."
        },
        {
          period: "2018 – 2019",
          title: "STM Baccalaureate",
          institution: "Lycée Mohammed VI, Marrakech",
          desc: "Mechanical Sciences & Technologies. Solid technical and analytical foundation."
        }
      ],
      experience: [
        {
          period: "2023",
          role: "Customer Service Agent",
          company: "Telerecord, Marrakech",
          desc: "Customer communication, adherence to strict performance KPIs, and structured collaborative teamwork."
        }
      ],
      softSkillsTitle: "Languages & Interests",
      spokenLanguages: [
        "Arabic: Native",
        "French: Fluent",
        "English: Fluent"
      ],
      interests: ["#Linux", "#Gaming", "#Sport"]
    },
    footer: {
      ready: "Let's collaborate",
      desc: "Feel free to reach out via email or phone for internship opportunities or technical discussions.",
      rights: "All rights reserved.",
      builtWith: "Built with React & Tailwind CSS • Marrakech, Morocco",
    }
  },

  ar: {
    nav: {
      projects: "المشاريع",
      skills: "المهارات",
      journey: "المسار",
      contact: "اتصل بي",
      availableBadge: "متاح لفرص التدريب والعمل",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
    },
    hero: {
      role: "مطور ويب Full-Stack",
      badge: "React.js · Laravel · Filament · MySQL",
      greeting: "مرحباً، أنا",
      name: "عبد الإله بنيوس",
      pitch: "مطور ويب مقيم في مراكش، متخصص في بيئة PHP (Laravel و Filament) و React.js. أبني تطبيقات ويب ديناميكية ومنظمة: من نمذجة قاعدة البيانات MySQL إلى الواجهة، مع كود نظيف وقابل للصيانة.",
      location: "مراكش، المغرب",
      contactBtn: "تواصل معي",
      downloadCv: "تحميل السيرة الذاتية",
      copyEmail: "نسخ البريد الإلكتروني",
      emailCopied: "تم النسخ!",
    },
    projects: {
      title: "أبرز المشاريع",
      subtitle: "تطبيقات ويب حديثة ومعماريات API REST.",
      viewCode: "الكود المصدري",
      liveDemo: "معاينة",
      list: [
        {
          id: "refuge-animalier",
          title: "منصة ملجأ للحيوانات",
          type: "مشروع جماعي",
          tech: ["Laravel", "React.js", "Filament", "MySQL", "API REST"],
          image: "/images/projects/refuge.png",
          description: "تطبيق ويب (SPA) لإدارة تبني الحيوانات، يربط واجهة React بواجهة برمجة تطبيقات Laravel قوية.",
          bullets: [
            "تطوير واجهة مستخدم تفاعلية باستخدام React.js.",
            "تصميم API REST آمن باستخدام Laravel للخلفية الخلفية.",
            "دمج Filament PHP للوحة تحكم إدارية مخصصة وآمنة."
          ]
        },
        {
          id: "agence-voyage",
          title: "وكالة سفر رقمية",
          type: "مشروع شخصي",
          tech: ["Laravel", "React.js", "WhatsApp API", "Filament"],
          image: "/images/projects/voyage.png",
          description: "منصة لمركزية طلبات السفر مع أتمتة التأكيدات عبر WhatsApp وإدارة الكتالوج.",
          bullets: [
            "تنفيذ نظام إرسال آلي لتفاصيل الرحلة عبر واجهة WhatsApp API.",
            "إدارة الكتالوج وتدفقات العملاء باستخدام Filament PHP.",
            "معمارية Full-Stack محسنة لتجربة المستخدم."
          ]
        },
        {
          id: "blog-mvc",
          title: "مدونة ديناميكية (معمارية MVC)",
          type: "مشروع أكاديمي",
          tech: ["PHP أصيل", "MySQL", "معمارية MVC", "CRUD"],
          image: "/images/projects/blog.png",
          description: "برمجة نظام مدونة كامل بلغة PHP بدون أطر عمل خارجية للتحكم الدقيق في هيكلة البرمجيات.",
          bullets: [
            "تطبيق يدوي دقيق لنمط التصميم (Model-View-Controller).",
            "إدارة آمنة لقاعدة بيانات MySQL واستخدام استعلامات محمية.",
            "عمليات CRUD متكاملة للمقالات وإدارة التعليقات."
          ]
        }
      ]
    },
    skills: {
      title: "المهارات والأدوات",
      subtitle: "أدوات تقنية تركز على جودة الكود والمعايير البرمجية الأساسية.",
      categories: {
        frontend: "تطوير الواجهات (Frontend)",
        backend: "الواجهات الخلفية وقواعد البيانات",
        general: "البرمجة العامة والمنطق",
        tools: "الأدوات وضمان الجودة وDevOps"
      }
    },
    journey: {
      title: "المسار التعليمي والمهني",
      subtitle: "قاعدة علمية صلبة مقترنة بالتطبيق العملي في تطوير الويب.",
      educationTitle: "التكوين والدراسة",
      experienceTitle: "الخبرة المهنية",
      education: [
        {
          period: "2024 – 2026 (قيد التكوين)",
          title: "التطوير الرقمي (Développement Digital)",
          institution: "OFPPT ISGI، مراكش",
          desc: "تخصص في تطوير تطبيقات الويب، معمارية MVC، وقواعد البيانات وأحدث المكتبات."
        },
        {
          period: "2019 – 2021",
          title: "الأقسام التحضيرية للمهندسين (CPGE – TSI)",
          institution: "ثانوية مولاي عبد الله، آسفي",
          desc: "تكوين مكثف ومتقدم في الرياضيات التطبيقية، الفيزياء وعلوم المهندس واكتساب الانضباط التحليلي."
        },
        {
          period: "2018 – 2019",
          title: "بكالوريا علوم وتكنولوجيات ميكانيكية (STM)",
          institution: "ثانوية محمد السادس، مراكش",
          desc: "مقدمة تقنية وتطبيقية في المنطق الميكانيكي والهندسي."
        }
      ],
      experience: [
        {
          period: "2023",
          role: "مستشار هاتفي (Télé-opérateur)",
          company: "Telerecord، مراكش",
          desc: "إدارة علاقات العملاء هاتفياً، احترام معايير الجودة والعمل الجماعي في بيئة منظمة."
        }
      ],
      softSkillsTitle: "اللغات والاهتمامات",
      spokenLanguages: [
        "العربية: اللغة الأم",
        "الفرنسية: إتقان تام",
        "الإنجليزية: إتقان تام"
      ],
      interests: ["#لينكس", "#الألعاب", "#الرياضة"]
    },
    footer: {
      ready: "هل تود التواصل معي؟",
      desc: "يمكنك التواصل معي مباشرة عبر البريد الإلكتروني أو الهاتف لمناقشة فرص التدريب والعمل.",
      rights: "جميع الحقوق محفوظة.",
      builtWith: "بُني بـ React و Tailwind CSS • مراكش، المغرب",
    }
  }
};

export const skillsList = {
  frontend: ["React.js", "Tailwind CSS", "JavaScript (ES6)", "HTML5", "CSS3", "Bootstrap"],
  backend: ["PHP (Laravel, MVC)", "Filament (Admin)", "MySQL", "MongoDB", "REST API"],
  general: ["Python (Bases, POO)", "Tkinter", "Algorithms & Logic"],
  tools: ["Git", "GitHub", "VS Code", "Composer", "Jira", "Figma", "SonarQube"],
};

/**
 * ⚠️  TODO — project URLs live here so there is a single place to edit them
 *     (they are shared by the FR / EN / AR translations).
 *
 *     Set `repo` to the GitHub URL of the project and `demo` to its live URL.
 *     Leave either as `null` and the matching button is simply not rendered.
 *
 *     A `null` repo falls back to the GitHub profile link.
 */
export const projectLinks = {
  "refuge-animalier": {
    repo: null, // e.g. 'https://github.com/abdobeny/refuge-animalier'
    demo: null, // e.g. 'https://refuge-animalier.pages.dev'
  },
  "agence-voyage": {
    repo: null, // e.g. 'https://github.com/abdobeny/agence-voyage'
    demo: null, // e.g. 'https://agence-voyage.pages.dev'
  },
  "blog-mvc": {
    repo: null, // e.g. 'https://github.com/abdobeny/blog-mvc'
    demo: null,
  },
};

export const profileConfig = {
  name: "Benyousse Abdellilah",
  avatarUrl: "/images/profile.jpg",
  email: "benyousseabdellilah@gmail.com",
  phone: "+212641131240",
  phoneDisplay: "+212 6 41 13 12 40",
  github: "https://github.com/abdobeny",
  githubHandle: "@abdobeny",
  linkedin: "https://www.linkedin.com/in/abdelilah-benyousse",
  resumePath: "/cv-benyousse-abdellilah.pdf",
};