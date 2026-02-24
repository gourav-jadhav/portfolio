'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="flex items-center justify-center w-10 h-10 border border-border rounded-full text-foreground hover:bg-foreground/5 transition-all">
        <Sun className="h-4 w-4 opacity-0" />
      </button>
    )
  }

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <button
      className="flex items-center justify-center w-10 h-10 border border-border rounded-full text-foreground hover:bg-foreground/5 hover:border-foreground/30 transition-all"
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      {currentTheme === 'dark' ? (
        <Moon className="h-4 w-4 text-foreground transition-all" />
      ) : (
        <Sun className="h-4 w-4 text-foreground transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
