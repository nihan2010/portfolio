import type { Skill } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  const IconComponent = skill.icon as React.ElementType;

  return (
    <Card className="flex flex-col items-center p-4 text-center transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105">
      <CardHeader className="p-2">
        <div className="mb-3 rounded-full bg-primary/10 p-3 text-primary">
          <IconComponent className="h-8 w-8" />
        </div>
        <CardTitle className="text-lg font-semibold">{skill.name}</CardTitle>
      </CardHeader>
      {skill.level && (
        <CardContent className="p-2 w-full">
          <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-2" />
          <p className="text-xs text-muted-foreground mt-1">{skill.level}% Proficient</p>
        </CardContent>
      )}
    </Card>
  );
}
