// Common types
export type MultilingualField = {
  en: string;
  ar: string;
};

export type Media = {
  id: string;
  url: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width?: number;
  height?: number;
  alt?: string;
};

// News Types
export type NewsAuthor = {
  profileImage: Media;
  name: string;
  jobTitle: MultilingualField;
};

export type NewsItem = {
  id: string;
  date: string;
  type: MultilingualField;
  title: MultilingualField;
  content: MultilingualField;
  author: NewsAuthor;
  createdAt: string;
  updatedAt: string;
};

// Service Type
export type Service = {
  id: string;
  slug: string;
  serviceTitle: string;
  name: MultilingualField;
  shortDescription: MultilingualField;
  longDescription: MultilingualField;
  image: Media;
  createdAt: string;
  updatedAt: string;
};

// Home Page Types
export type HomeHeroSection = {
  heroText: MultilingualField;
  subText: MultilingualField;
  heroImage: Media;
};

export type StatItem = {
  number: number;
  description: MultilingualField;
};

export type StatsSection = {
  title: MultilingualField;
  statistics: StatItem[];
};

export type PartnersSection = {
  title: MultilingualField;
  description: MultilingualField;
  images: Array<{
    image: Media;
  }>;
};

export type HomeFields = {
  hero: HomeHeroSection;
  stats: StatsSection;
  partners: PartnersSection;
};

// About Page Types
export type AboutWelcomeSection = {
  title: MultilingualField;
  subtitle: MultilingualField;
};

export type MissionSection = {
  title: MultilingualField;
  subtitle: MultilingualField;
  description: MultilingualField;
  image: Media;
};

export type JourneyItem = {
  title: MultilingualField;
  content: MultilingualField;
};

export type JourneySection = {
  title: MultilingualField;
  subtitle: MultilingualField;
  items: JourneyItem[];
};

export type AboutFields = {
  welcomeSection: AboutWelcomeSection;
  mission: MissionSection;
  journey: JourneySection;
};

// Contact Page Types
export type ContactWelcomeSection = {
  title: MultilingualField;
  subtitle: MultilingualField;
};

export type ContactInfo = {
  email: string;
  phone: string;
  address: MultilingualField;
};

export type JobOffering = {
  offering: MultilingualField;
};

export type Job = {
  title: MultilingualField;
  location: MultilingualField;
  offerings: JobOffering[];
  description: MultilingualField;
};

export type ContactFields = {
  welcomeSection: ContactWelcomeSection;
  contactInfo: ContactInfo;
  jobs: Job[];
};

// Base Page Type
export type Page = {
  id: string;
  title: string;
  template: "home" | "about" | "contact";
  slug: string;
  homeFields?: HomeFields;
  aboutFields?: AboutFields;
  contactFields?: ContactFields;
  createdAt: string;
  updatedAt: string;
};

export interface Project {
  id: string;
  service: string | Service;
  name: string;
  description: {
    en: string;
    ar: string;
  };
  images: {
    image: Media;
  }[];
  createdAt: string;
  updatedAt: string;
}
