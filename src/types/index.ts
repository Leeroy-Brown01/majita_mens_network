// Type definitions for the Majita Men's Network website

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: 'Personal Stories' | 'Expert Advice' | 'Awareness Campaigns' | 'Workshops & Events';
  coverImage: string;
  readTime?: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'pdf' | 'external';
  url?: string;
  content?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  quote: string;
  image?: string;
}

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  category: 'Need Support' | 'Want to Collaborate' | 'General Inquiry';
  message: string;
}

export interface SupportCenter {
  id: string;
  name: string;
  address: string;
  phone: string;
  email?: string;
  lat: number;
  lng: number;
}

export interface SocialLink {
  platform: 'Facebook' | 'Instagram' | 'YouTube' | 'TikTok' | 'X';
  url: string;
  icon: any;
}
