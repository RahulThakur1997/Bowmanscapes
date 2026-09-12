export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tag?: string;
  startingPrice?: string;
}

export interface QualificationFormData {
  selectedServices: string[];
  frequency?: string;
  timeline?: string;
  name: string;
  phone: string;
  email: string;
  zipCode?: string;
  location?: string;
  propertySize?: string;
  projectScale?: string;
  notes: string;
}

export interface ComparisonRow {
  feature: string;
  soloGuy: string;
  bowmanscapes: string;
  nationalChains: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  category: string;
  description?: string;
  beforeImage: string;
  afterImage: string;
  isFeatured?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  quote: string;
  serviceUsed: string;
  date: string;
  projectImage?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
