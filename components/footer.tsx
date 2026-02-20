import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/gouravjadhav',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/gouravjadhav',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:hello@gouravjadhav.dev',
    },
  ]

  return (
    <footer className="border-t border-border py-16 md:py-20">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="space-y-12">
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* About */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Gourav Jadhav</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Full-stack developer crafting scalable web applications and business systems. Let's build something great together.
              </p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-8">
              {/* Quick Links */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Navigation</h4>
                <ul className="space-y-2 text-sm">
                  {['Work', 'About', 'Experience', 'Contact'].map((link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Connect</h4>
                <div className="flex flex-col gap-2 text-sm">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="divider-subtle" />

          {/* Copyright */}
          <div className="text-center text-xs text-muted-foreground">
            <p>&copy; {currentYear} Gourav Jadhav. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
