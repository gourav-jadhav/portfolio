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
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Google Maps API'],
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
    tech: ['React', 'Node.js', 'Canvas API', 'WebGL', 'MongoDB'],
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
    title: 'Shipper & Broker Platform',
    description: 'A SaaS marketplace connecting shippers with brokers for freight logistics.',
    longDescription:
      'Created a two-sided marketplace platform that connects shippers with freight brokers. Includes real-time quote generation, bid management, and payment processing with integrated communication tools.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://example.com',
    features: [
      'Real-time quote system',
      'Bid management',
      'Payment processing',
      'In-app messaging',
    ],
  },
  {
    id: 4,
    title: 'AI Quote Generator',
    description: 'Intelligent system that generates accurate shipping quotes using machine learning.',
    longDescription:
      'Built an AI-powered quote generation system that learns from historical data and market conditions to provide accurate shipping estimates. Uses machine learning to continuously improve prediction accuracy.',
    tech: ['Python', 'TensorFlow', 'Node.js', 'PostgreSQL', 'FastAPI'],
    github: 'https://github.com',
    demo: 'https://example.com',
    features: ['ML model training', 'Quote predictions', 'Rate analysis', 'Custom algorithms'],
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
