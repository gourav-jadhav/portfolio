'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-32 overflow-hidden">
      {/* Subtle animated background grain effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
      </div>

      <div className="relative z-10 container px-4 md:px-6 max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-tight tracking-tight text-balance">
            I build scalable web applications and business systems.
          </h1>

          {/* Description - elegant subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Specialized in logistics, eCommerce, workflows platforms, SaaS dashboards, and automation tools. I create production-ready solutions that solve real business problems.
          </p>

          {/* Tech stack row */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {['React.js', 'Next.js', 'TypeScript', 'Node.js', 'MySQL (MariaDB)'].map((tech) => (
              <span key={tech} className="pill-tech">
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="button-primary px-8 py-6 text-base"
              asChild
            >
              <a href="#projects" className="flex items-center gap-2">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              className="button-secondary px-8 py-6 text-base"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
