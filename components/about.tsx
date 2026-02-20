import { Separator } from '@/components/ui/separator'

const skills = {
  frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  backend: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Microservices'],
  database: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase'],
  tools: ['Git', 'GitHub', 'Docker', 'Vercel', 'AWS', 'Linux'],
}

export function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="space-y-20">
          {/* Bio Section */}
          <div className="space-y-8 max-w-3xl">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
                About
              </h2>
              <div className="divider-subtle"></div>
            </div>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a full-stack developer with 5+ years of experience building logistics systems, SaaS dashboards, and automation tools. I specialize in creating scalable backend systems and intuitive frontends that solve real business problems.
              </p>
              <p>
                My approach focuses on clean architecture, performance optimization, and creating applications that actually help businesses grow. I've worked with startups and enterprises alike, and I thrive in building systems that can handle complex workflows and high user loads.
              </p>
              <p>
                When I'm not coding, I contribute to open-source projects and share knowledge with the engineering community.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-foreground">Technologies</h3>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Frontend */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Frontend</h4>
                <ul className="space-y-3">
                  {skills.frontend.map((skill) => (
                    <li key={skill} className="text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Backend */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Backend</h4>
                <ul className="space-y-3">
                  {skills.backend.map((skill) => (
                    <li key={skill} className="text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Database */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Database</h4>
                <ul className="space-y-2">
                  {skills.database.map((skill) => (
                    <li key={skill} className="text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Tools & Platforms</h4>
                <ul className="space-y-2">
                  {skills.tools.map((skill) => (
                    <li key={skill} className="text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
