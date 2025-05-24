import type { Skill } from '@/types';
import { BootstrapIcon, CssIcon, HtmlIcon, JQueryIcon, JavaScriptIcon } from '@/components/icons';
import { Palette, Code, Brain } from 'lucide-react'; // Brain for UI/UX

export const skills: Skill[] = [
  { name: 'UI/UX Design', icon: Brain, level: 90 },
  { name: 'HTML', icon: HtmlIcon, level: 95 },
  { name: 'CSS', icon: CssIcon, level: 90 },
  { name: 'JavaScript', icon: JavaScriptIcon, level: 80 },
  { name: 'Bootstrap', icon: BootstrapIcon, level: 85 },
  { name: 'jQuery', icon: JQueryIcon, level: 75 },
  { name: 'Frontend Development', icon: Code, level: 85 },
  { name: 'Figma', icon: Palette, level: 80 }, // Example, can be more specific UI/UX tool
];
