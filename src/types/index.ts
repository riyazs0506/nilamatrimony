// ============================================================
// KONGU NILA MATRIMONY
// Simple Public Frontend Types
// ============================================================

export interface BlogPost {
  id: string;
  slug: string;

  title: string;
  titleTa?: string;

  category: string;

  summary: string;
  content: string;

  author: string;
  readTime: string;
  publishedDate: string;

  image: string;

  tags: string[];
}

export interface FAQItem {
  id: string;

  question: string;
  questionTa?: string;

  answer: string;
  answerTa?: string;

  category: string;
}

export interface SuccessStory {
  id: string;

  coupleNames: string;

  brideName: string;
  groomName: string;

  weddingDate: string;
  location: string;

  story: string;
  quote: string;

  image: string;

  engagementYear: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface NavigationItem {
  label: string;
  path: string;
}

export interface HowItWorksStep {
  id: string;
  title: string;
  description: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
}

export interface SiteContact {
  phone: string;
  email: string;
  address: string;
}

export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  contact: SiteContact;
}