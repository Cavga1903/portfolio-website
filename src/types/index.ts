export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl: string;
  featured?: boolean;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  technologies: string[];
  location: string;
}

export interface Skill {
  id: number;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tool' | 'language';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  email: string;
  phone?: string;
  cvUrl?: string;
  profileImage?: string;
  socialLinks: SocialLink[];
}
