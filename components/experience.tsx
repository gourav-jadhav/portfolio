import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    company: 'Tech Logistics Inc.',
    period: '2022 - Present',
    description:
      'Leading development of enterprise logistics platform serving 500+ clients. Architected microservices infrastructure and mentored junior developers.',
    highlights: [
      'Reduced load times by 60% through optimization',
      'Led team of 5 developers',
      'Implemented real-time tracking system',
      'Managed PostgreSQL database with 10M+ records',
    ],
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    id: 2,
    title: 'Full-Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    description:
      'Developed multiple SaaS products from concept to production. Collaborated with product and design teams to deliver user-centric solutions.',
    highlights: [
      'Built 3 production SaaS applications',
      'Implemented payment processing with Stripe',
      'Designed database schemas for 2M+ users',
      'Conducted code reviews and mentoring',
    ],
    tech: ['React', 'Express', 'MongoDB', 'GraphQL', 'TypeScript'],
  },
  {
    id: 3,
    title: 'Junior Developer',
    company: 'Web Agency Pro',
    period: '2019 - 2020',
    description:
      'Built responsive web applications and maintained client projects. Worked with cross-functional teams to deliver quality solutions.',
    highlights: [
      'Delivered 10+ client projects',
      'Improved code performance by 40%',
      'Implemented mobile-responsive design',
      'Collaborated with designers on UI implementation',
    ],
    tech: ['React', 'JavaScript', 'CSS', 'Node.js', 'Firebase'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              5+ years of professional experience building scalable applications and leading technical initiatives.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="flex gap-6">
                {/* Timeline dot and line */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-foreground mt-2" />
                  {idx !== experiences.length - 1 && (
                    <div className="w-0.5 h-24 bg-border my-4" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="border border-border rounded-lg p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {exp.company} • {exp.period}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-4">
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground text-sm flex items-start"
                          >
                            <span className="text-foreground mr-3">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-muted text-muted-foreground text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
