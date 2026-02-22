import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Gourav Jadhav - Full-Stack Developer',
  description: 'Full-Stack Developer, SaaS dashboards, and automation. Building scalable web applications.',
  keywords: ['Full-Stack Developer', 'Next.js', 'React', 'Node.js', 'SaaS', 'Web Development'],
  authors: [{ name: 'Gourav Jadhav' }],
  creator: 'Gourav Jadhav',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gouravjadhav.dev',
    siteName: 'Gourav Jadhav Portfolio',
    title: 'Gourav Jadhav - Full-Stack Developer',
    description: 'Full-Stack Developer, SaaS dashboards, and automation.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
