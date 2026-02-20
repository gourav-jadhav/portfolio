import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Gourav Jadhav - Full-Stack Developer',
  description: 'Full-Stack Developer specializing in logistics systems, SaaS dashboards, and automation. Building scalable web applications.',
  keywords: ['Full-Stack Developer', 'Next.js', 'React', 'Node.js', 'Logistics', 'SaaS', 'Web Development'],
  authors: [{ name: 'Gourav Jadhav' }],
  creator: 'Gourav Jadhav',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gouravjadhav.dev',
    siteName: 'Gourav Jadhav Portfolio',
    title: 'Gourav Jadhav - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in logistics systems, SaaS dashboards, and automation.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
