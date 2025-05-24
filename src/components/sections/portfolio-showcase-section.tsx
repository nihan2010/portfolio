import { portfolioItems } from '@/data/portfolio';
import { ProjectCard } from '@/components/common/project-card';

export function PortfolioShowcaseSection() {
  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">My Portfolio</h2>
          <p className="text-lg text-muted-foreground mt-2">A selection of my recent projects.</p>
        </div>
        {portfolioItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No projects to display at the moment. Check back soon!</p>
        )}
      </div>
    </section>
  );
}
