import { Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background/95 py-8 text-center text-sm text-muted-foreground">
      <div className="container max-w-screen-2xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
                <Link href="mailto:nihannajeebpmkd@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email Nihan" className="hover:text-primary transition-colors">
                    <Mail size={20} />
                </Link>
                <Link href="tel:+918547137703" target="_blank" rel="noopener noreferrer" aria-label="Call Nihan" className="hover:text-primary transition-colors">
                    <Phone size={20} />
                </Link>
                <Link href="https://www.linkedin.com/in/nihan-najeeb-b287b22b9/" target="_blank" rel="noopener noreferrer" aria-label="Nihan on LinkedIn" className="hover:text-primary transition-colors">
                    <Linkedin size={20} />
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Nihan on GitHub" className="hover:text-primary transition-colors">
                    <Github size={20} />
                </Link>
                <Link href="https://www.instagram.com/nhnneei" target="_blank" rel="noopener noreferrer" aria-label="Nihan on Instagram" className="hover:text-primary transition-colors">
                    <Instagram size={20} />
                </Link>
            </div>
            <div>
                <p>&copy; {currentYear} Nihan Najeeb P. All rights reserved.</p>
            </div>
        </div>
      </div>
    </footer>
  );
}
