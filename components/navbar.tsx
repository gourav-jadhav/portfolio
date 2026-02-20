'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'border-b border-border bg-background/80 backdrop-blur-md' 
        : 'bg-transparent'
    }`}>
      <div className="container px-4 md:px-6 max-w-5xl mx-auto h-20 flex items-center justify-between">
        {/* Logo - Circular initials */}
        <a href="#" className="flex items-center justify-center w-10 h-10 border border-foreground rounded-full font-bold text-sm text-foreground hover:bg-foreground/5 transition-all">
          GJ
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="nav-underline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          className="button-primary text-sm px-6 py-2 hidden md:inline-flex"
          asChild
        >
          <a href="#contact">Let's Talk</a>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container px-4 md:px-6 max-w-5xl mx-auto py-4 space-y-3">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <Button
              className="button-primary w-full mt-4"
              asChild
            >
              <a href="#contact">Let's Talk</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
