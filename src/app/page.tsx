import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { PersonalInfoSection } from '@/components/sections/personal-info-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { PortfolioShowcaseSection } from '@/components/sections/portfolio-showcase-section';
import { ContactFormSection } from '@/components/sections/contact-form-section';
import { AIChatAssistantSection } from '@/components/sections/ai-chat-assistant-section';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center pt-16 pb-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
              <span className="block">Hi, I&apos;m <span className="text-primary">Nihan Najeeb P</span></span>
              <span className="block text-2xl sm:text-3xl md:text-4xl text-muted-foreground mt-2">UI/UX Designer & Frontend Developer</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-foreground/80 mb-8">
              Crafting beautiful and functional digital experiences. I turn ideas into reality with code and design.
            </p>
            <div className="space-x-4">
              <a href="#portfolio" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors">
                View My Work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-border text-base font-medium rounded-md text-primary bg-background hover:bg-accent/10 transition-colors">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        
        <PersonalInfoSection />
        <Separator className="my-0" />
        <SkillsSection />
        <Separator className="my-0" />
        <PortfolioShowcaseSection />
        <Separator className="my-0" />
        <AIChatAssistantSection />
        <Separator className="my-0" />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
