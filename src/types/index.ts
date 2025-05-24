import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  dataAiHint?: string;
  technologies: string[];
  liveLink?: string;
  sourceLink?: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode | LucideIcon; // Allow custom SVGs or Lucide icons
  level?: number; // Optional skill level (e.g., 1-100 for progress bar)
}
