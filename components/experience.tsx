import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Sowermate Technologies',
    period: '2025 - Present',
    description:
      'Leading web development initiatives with focus on scalable frontend architecture, performance, and maintainable UI systems.',
    highlights: [
      'Own frontend delivery for key business modules',
      'Improve performance and maintainability of web applications',
      'Mentor junior developers and support code reviews',
      'Collaborate with product and design for release planning',
    ],
    tech: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Vercel'],
  },
  {
    id: 2,
    title: 'Junior React Developer',
    company: 'Sowermate Technologies',
    period: '2024 - 2025',
    description:
      'Transitioned to web development with React and delivered responsive feature modules for production applications.',
    highlights: [
      'Built reusable components and page modules using React',
      'Implemented responsive layouts across desktop and mobile',
      'Integrated frontend with backend APIs',
      'Contributed to production bug fixes and feature releases',
    ],
    tech: ['React.js', 'JavaScript', 'TypeScript', 'Next.js', 'Git'],
  },
  {
    id: 3,
    title: 'Flutter Developer',
    company: 'Sowermate Technologies',
    period: '2023 - 2024',
    description:
      'Started as a mobile developer using Flutter and also supported backend development using PHP and SQL stored procedures.',
    highlights: [
      'Built and maintained mobile app features in Flutter',
      'Implemented backend modules using PHP',
      'Worked with MySQL (MariaDB) stored procedures',
      'Collaborated across mobile, backend, and QA tasks',
    ],
    tech: ['Flutter', 'Dart', 'PHP', 'MySQL (MariaDB)', 'Stored Procedures'],
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
              3 years at the same company, growing from Flutter and backend work to React development and now senior frontend ownership.
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
