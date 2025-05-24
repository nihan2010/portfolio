import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mail, Phone, MapPin, Briefcase, User } from 'lucide-react';
import { EducationIcon } from '@/components/icons'; // Custom icon

export function PersonalInfoSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container max-w-screen-lg mx-auto px-4">
        <Card className="overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/3 bg-primary/5 p-8 flex flex-col items-center justify-center">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary mb-4 shadow-lg">
                <AvatarImage src="https://placehold.co/200x200.png" alt="Nihan Najeeb P" data-ai-hint="person portrait" />
                <AvatarFallback>NN</AvatarFallback>
              </Avatar>
              <h1 className="text-3xl font-bold text-center text-primary">Nihan Najeeb P</h1>
              <p className="text-center text-muted-foreground mt-1">UI/UX Designer & Frontend Developer</p>
            </div>
            <div className="md:w-2/3 p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-semibold text-primary mb-2">About Me</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  I&apos;m a passionate and self-motivated 15-year-old UI/UX Designer and Frontend Developer based in Kerala, India. With a strong foundation in modern web technologies, I am dedicated to creating intuitive, engaging, and visually appealing digital experiences. Currently working as a freelancer, I&apos;m always eager to learn and take on new challenges.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-6">
                  <InfoItem icon={<User className="h-5 w-5 text-primary" />} label="Age" value="15 years old" />
                  <InfoItem icon={<MapPin className="h-5 w-5 text-primary" />} label="Location" value="Moorkkanad, Malappuram, Kerala, India" />
                  <InfoItem icon={<EducationIcon className="h-5 w-5 text-primary" />} label="Education" value="10th Standard at PTMYHSS Edappalam" />
                  <InfoItem icon={<Briefcase className="h-5 w-5 text-primary" />} label="Status" value="Freelancer" />
                  <InfoItem icon={<Mail className="h-5 w-5 text-primary" />} label="Email" value="nihannajeebpmkd@gmail.com" href="mailto:nihannajeebpmkd@gmail.com" />
                  <InfoItem icon={<Phone className="h-5 w-5 text-primary" />} label="Phone" value="+91 8547137703" href="tel:+918547137703" />
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

function InfoItem({ icon, label, value, href }: InfoItemProps) {
  return (
    <div className="flex items-start space-x-3">
      <span className="mt-1 text-primary">{icon}</span>
      <div>
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        {href ? (
          <a href={href} className="text-sm text-foreground hover:text-primary transition-colors break-all">
            {value}
          </a>
        ) : (
          <p className="text-sm text-foreground break-all">{value}</p>
        )}
      </div>
    </div>
  );
}
