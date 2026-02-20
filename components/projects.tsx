'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Logistics Management System',
    description: 'A comprehensive platform for managing shipments, routes, and fleet operations with real-time tracking.',
    longDescription:
      'Built a full-featured logistics management system that handles complex shipment tracking, route optimization, and fleet management. The system processes thousands of shipments daily with real-time GPS tracking integration and automated notifications.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'MySQL (MariaDB)', 'Google Maps API'],
    github: 'https://github.com',
    demo: 'https://example.com',
    features: [
      'Real-time shipment tracking',
      'Route optimization algorithm',
      'Fleet analytics dashboard',
      'Automated dispatch system',
    ],
  },
  {
    id: 2,
    title: 'Glass Optimization Application',
    description: 'AI-powered software for optimizing glass cutting patterns and minimizing material waste.',
    longDescription:
      'Developed an intelligent optimization system that uses algorithms to calculate optimal cutting patterns for glass sheets. This reduces material waste by up to 40% and significantly improves production efficiency.',
    tech: ['React', 'Node.js', 'Next js', 'Tailwind css'],
    github: 'https://github.com',
    demo: 'https://example.com',
    features: [
      'Pattern optimization engine',
      'Visual layout editor',
      'Waste reduction analytics',
      'Batch processing',
    ],
  },
  {
    id: 3,
    title: 'FlexiPunch Application',
    description: 'A workforce attendance and time-tracking platform with punch records, shift visibility, and reporting.',
    longDescription:
      'Built a responsive web platform to manage employee punch-in and punch-out workflows, monitor attendance trends, and streamline daily workforce operations. Focused on intuitive UX, accurate records, and performance for regular operational use.',
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MySQL (MariaDB)'],
    github: 'https://github.com',
    demo: 'https://example.com',
    features: [
      'Punch in/out tracking',
      'Attendance dashboard',
      'Shift and records management',
      'Exportable reports',
    ],
  },
  {
    id: 4,
    title: 'eCommerce Application',
    description: 'A modern online store with product catalog, cart, checkout flow, and order management.',
    longDescription:
      'Developed an end-to-end eCommerce web application with a user-friendly storefront, product filtering, cart and checkout experience, and admin-side order tracking. Focused on responsive UI and smooth purchase flow.',
    tech: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MySQL (MariaDB)'],
    github: 'https://github.com',
    demo: 'https://example.com',
    features: [
      'Product listing and filters',
      'Cart and checkout flow',
      'Order management',
      'Responsive storefront UI',
    ],
  },
  {
    id: 5,
    title: 'Civil Application',
    description: 'A web application for civil operations and project workflows, designed with MUI components.',
    longDescription:
      'Developed a civil-focused web application to manage operational workflows, project records, and day-to-day tracking. The interface was built using MUI to ensure a clean, consistent, and scalable design system across modules.',
    tech: ['React', 'TypeScript', 'MUI', 'Node.js', 'MySQL (MariaDB)'],
    github: 'https://github.com',
    demo: 'https://example.com',
    features: [
      'Project and task workflow tracking',
      'Role-based module access',
      'Dashboard views for daily operations',
      'MUI-based responsive interface',
    ],
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="space-y-16">
          {/* Header */}
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Selected Work
            </h2>
            <div className="divider-subtle mb-6"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A selection of projects showcasing full-stack development across logistics, SaaS platforms, and optimization systems.
            </p>
          </div>

          {/* Featured Project */}
          <div
            className="card-elevated cursor-pointer hover-lift"
            onClick={() => setSelectedProject(projects[0])}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="badge-featured mb-4">Featured Project</div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {projects[0].title}
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {projects[0].description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {projects[0].tech.map((tech) => (
                  <span key={tech} className="pill-tech">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(1).map((project) => (
              <div
                key={project.id}
                className="card-base cursor-pointer hover-lift"
                onClick={() => setSelectedProject(project)}
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="pill-tech text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="pill-tech text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-base">{selectedProject.description}</DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm flex items-start">
                        <span className="text-foreground mr-3">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-muted text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <Button
                    className="flex-1 bg-foreground text-background hover:bg-foreground/90"
                    asChild
                  >
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
