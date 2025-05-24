import { skills } from '@/data/skills';
import { SkillCard } from '@/components/common/skill-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 lg:py-24 bg-muted/30">
      <div className="container max-w-screen-lg mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">My Skills</h2>
          <p className="text-lg text-muted-foreground mt-2">Technologies and tools I work with.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
