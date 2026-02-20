const skills = {
  frontend: ['React.js', 'Next.js', 'TypeScript', 'JavaScript'],
  backend: ['Node.js', 'PHP'],
  database: ['MySQL (MariaDB)'],
  tools: ['Git', 'GitHub', 'GitLab', 'Linux', 'Vercel', 'Codex', 'Gemini CLI', 'Antigravity', 'Canva', 'Taiga', 'Jira'],
}

const technologySections = [
  { title: 'Frontend', items: skills.frontend },
  { title: 'Backend', items: skills.backend },
  { title: 'Database', items: skills.database },
]

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
                I am currently working at Sowermate Technologies as a Senior Frontend Developer. My main focus is building clean, responsive, and production-ready web applications.
              </p>
              <p>
                I primarily work with React.js, Next.js, TypeScript, and JavaScript. For backend integration, I have worked with Node.js and PHP, and I use MySQL with MariaDB.
              </p>
              <p>
                I have worked on projects like FlexiPunch, Workflow systems, eCommerce websites, and logistics platforms. I also use AI assistant-based coding workflows in day-to-day development.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-foreground">Technologies</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {technologySections.map((section) => (
                <div key={section.title} className="rounded-xl border border-border/60 bg-card/30 p-6">
                  <h4 className="text-sm font-semibold text-foreground mb-5 uppercase tracking-wider">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.items.map((skill) => (
                      <li key={skill} className="text-muted-foreground flex items-center leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mr-3 shrink-0"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border/60 bg-card/30 p-6 space-y-4">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Tools & Platforms
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-sm text-muted-foreground border border-border/70 rounded-md px-3 py-1.5 bg-background/40"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
