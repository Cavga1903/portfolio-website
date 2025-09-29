import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Ticaret Platformu",
    description: "Next.js, Stripe ve Tailwind CSS kullanılarak geliştirilen modern bir e-ticaret sitesi.",
    longDescription: "Bu proje, modern e-ticaret ihtiyaçlarını karşılamak için geliştirilmiş kapsamlı bir platformdur. Kullanıcı kayıt/giriş sistemi, ürün kataloğu, sepet yönetimi, ödeme entegrasyonu ve admin paneli içermektedir.",
    tags: ["React", "Next.js", "TypeScript", "Stripe", "Tailwind CSS", "MongoDB"],
    imageUrl: "/images/project1.jpg",
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/tolgacavga/ecommerce-platform",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Takım çalışması için geliştirilmiş kanban tarzı görev yönetim uygulaması.",
    longDescription: "Agile metodolojileri destekleyen, gerçek zamanlı güncellemeler sunan ve kullanıcı dostu arayüze sahip bir proje yönetim aracı.",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL", "Material-UI"],
    imageUrl: "/images/project2.jpg",
    liveUrl: "https://taskmanager-demo.vercel.app",
    githubUrl: "https://github.com/tolgacavga/task-management-app",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Gerçek zamanlı hava durumu verilerini gösteren interaktif dashboard.",
    longDescription: "Çeşitli hava durumu API'lerini entegre eden, harita üzerinde konum seçimi yapılabilen ve detaylı meteorolojik veriler sunan bir uygulama.",
    tags: ["Vue.js", "Chart.js", "OpenWeather API", "Leaflet", "SCSS"],
    imageUrl: "/images/project3.jpg",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/tolgacavga/weather-dashboard",
    featured: false
  },
  {
    id: 4,
    title: "Blog CMS",
    description: "Headless CMS yaklaşımı ile geliştirilmiş modern blog platformu.",
    longDescription: "İçerik yöneticileri için kolay kullanım sağlayan, SEO optimizasyonlu ve performanslı bir blog yönetim sistemi.",
    tags: ["Next.js", "Sanity", "TypeScript", "Tailwind CSS", "Vercel"],
    imageUrl: "/images/project4.jpg",
    liveUrl: "https://blog-cms-demo.vercel.app",
    githubUrl: "https://github.com/tolgacavga/blog-cms",
    featured: false
  }
];
