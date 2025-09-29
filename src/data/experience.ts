import { Experience } from '@/types';

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Turkcell Global Bilgi",
    position: "Customer Service Representative",
    startDate: "2025-08",
    endDate: null,
    current: true,
    description: "Müşteri sorunlarını çözme, net iletişim kurma ve teknik destek sağlama üzerine odaklanarak kişilerarası ve analitik becerilerimi geliştiriyorum.",
    technologies: ["Customer Service", "Problem Solving", "Communication", "Technical Support"],
    location: "Bornova, İzmir"
  },
  {
    id: 2,
    company: "Upwork",
    position: "React Native Developer | Freelance",
    startDate: "2025-07",
    endDate: null,
    current: true,
    description: "React Native ile platformlar arası mobil uygulamalar geliştirdim. Veri yönetimi için RESTful API'ler ve Supabase entegrasyonu yaptım. Tailwind CSS ile kullanıcı etkileşimini %30 artıran dinamik arayüzler tasarladım.",
    technologies: ["React Native", "RESTful APIs", "Supabase", "Tailwind CSS", "JavaScript", "TypeScript"],
    location: "İzmir, Türkiye"
  },
  {
    id: 3,
    company: "Siliconmade Academy",
    position: "Mobile and Frontend Development Trainee",
    startDate: "2025-02",
    endDate: "2025-07",
    current: false,
    description: "6 ay / 184 saatlik Mobil ve Frontend Geliştirme stajını tamamladım. Gerçek dünya projeleri geliştirerek (ürün listeleme uygulamaları, admin panelleri) UI/UX ve performansı iyileştirdim. React, React Native, REST API, Supabase, Tailwind CSS ve Firebase konularında pratik deneyim kazandım.",
    technologies: ["React", "React Native", "REST API", "Supabase", "Tailwind CSS", "Firebase", "UI/UX"],
    location: "İzmir, Türkiye"
  },
  {
    id: 4,
    company: "Concentrix",
    position: "Customer Service Representative",
    startDate: "2024-08",
    endDate: "2025-01",
    current: false,
    description: "Müşteri hizmetleri alanında çalışarak iletişim becerilerimi geliştirdim ve problem çözme yeteneklerimi artırdım.",
    technologies: ["Customer Service", "Communication", "Problem Solving"],
    location: "İzmir, Türkiye"
  },
  {
    id: 5,
    company: "İzmir Büyükşehir Belediyesi",
    position: "Intern",
    startDate: "2024-06",
    endDate: "2024-08",
    current: false,
    description: "Belediye bünyesinde staj yaparak kurumsal çalışma ortamını deneyimledim ve temel iş becerilerini geliştirdim.",
    technologies: ["Office Work", "Team Collaboration", "Administrative Skills"],
    location: "İzmir, Türkiye"
  }
];
