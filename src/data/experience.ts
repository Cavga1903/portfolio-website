import { Experience } from '@/types';

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    startDate: "2022-01",
    endDate: "2024-12",
    current: false,
    description: "E-ticaret platformları ve kurumsal web uygulamaları geliştirme. React, Node.js ve cloud teknolojileri kullanarak ölçeklenebilir çözümler üretme.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"],
    location: "İstanbul, Türkiye"
  },
  {
    id: 2,
    company: "StartupXYZ",
    position: "Frontend Developer",
    startDate: "2020-06",
    endDate: "2021-12",
    current: false,
    description: "Mobil-first yaklaşımla responsive web uygulamaları geliştirme. Kullanıcı deneyimi odaklı tasarım ve performans optimizasyonu.",
    technologies: ["React", "Vue.js", "JavaScript", "SASS", "Webpack", "Jest"],
    location: "İstanbul, Türkiye"
  },
  {
    id: 3,
    company: "Freelance",
    position: "Web Developer",
    startDate: "2019-01",
    endDate: "2020-05",
    current: false,
    description: "Küçük ve orta ölçekli işletmeler için web siteleri ve web uygulamaları geliştirme. Müşteri ihtiyaçlarına özel çözümler üretme.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress"],
    location: "Remote"
  },
  {
    id: 4,
    company: "Digital Agency ABC",
    position: "Junior Web Developer",
    startDate: "2018-03",
    endDate: "2018-12",
    current: false,
    description: "Web tasarım ve geliştirme projelerinde yer alma. HTML, CSS ve JavaScript kullanarak statik ve dinamik web siteleri oluşturma.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Photoshop"],
    location: "Ankara, Türkiye"
  }
];
