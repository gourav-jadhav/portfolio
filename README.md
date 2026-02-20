# Gourav Jadhav - Developer Portfolio

A modern, responsive developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Features smooth animations, glassmorphism UI, and a professional SaaS-inspired design.

## Features

- **Modern Design**: Clean, premium SaaS aesthetic with dark theme and glassmorphism effects
- **Smooth Animations**: Framer Motion animations for engaging transitions and interactions
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Comprehensive metadata, Open Graph tags, and semantic HTML
- **Performance**: Fast loading with optimized images and lazy-loaded components
- **Multiple Sections**:
  - Hero section with animated background
  - About me with skills showcase
  - Featured projects with interactive modals
  - Experience timeline
  - Contact form and social links
  - Footer with quick links

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (or npm/yarn)

### Installation

1. **Clone or download the project**
   ```bash
   # If you downloaded the ZIP, extract it first
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see your portfolio

## Customization

### Personal Information

Edit the following files to customize content for your portfolio:

- **`components/hero.tsx`**: Update heading, subtitle, and description
- **`components/about.tsx`**: Modify bio text and skills
- **`components/projects.tsx`**: Add your projects with details
- **`components/experience.tsx`**: Update work experience and timeline
- **`components/contact.tsx`**: Change email and social links
- **`app/layout.tsx`**: Update metadata (title, description, etc.)

### Design Customization

#### Colors
Edit `app/globals.css` to change the color scheme:
- Primary color: `#818cf8` (Indigo)
- Secondary color: `#4f46e5` (Purple)
- Background: `#0f1419` (Dark Navy)

#### Fonts
The portfolio uses `Geist` and `Geist Mono` from Google Fonts. To change fonts:
1. Edit `app/layout.tsx` and import different Google Fonts
2. Update `tailwind.config.ts` with new font family

#### Theme
The portfolio uses CSS custom properties (design tokens) in `app/globals.css`. Modify these values to create a completely different look while maintaining consistency.

## Build for Production

```bash
pnpm build
pnpm start
```

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and configure build settings
5. Click Deploy

### Deploy to Other Platforms

**Using Docker:**
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

**Using traditional hosting:**
```bash
pnpm build
# Deploy the `.next` folder along with `public` folder
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── globals.css         # Global styles and design tokens
│   ├── page.tsx            # Main portfolio page
│   └── favicon.ico
├── components/
│   ├── hero.tsx            # Hero section with animations
│   ├── about.tsx           # About and skills section
│   ├── projects.tsx        # Projects grid with modal
│   ├── experience.tsx      # Experience timeline
│   ├── contact.tsx         # Contact form
│   ├── footer.tsx          # Footer
│   └── ui/                 # shadcn/ui components
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## Performance Optimization

- **Image Optimization**: Uses Next.js Image component for automatic optimization
- **Code Splitting**: Automatic code splitting for faster page loads
- **Lazy Loading**: Components load only when needed
- **CSS Optimization**: Tailwind CSS purges unused styles in production

## SEO Best Practices

- Semantic HTML structure
- Comprehensive metadata
- Open Graph tags for social sharing
- Mobile-friendly viewport
- Fast Core Web Vitals
- XML sitemap support

## Customization Tips

### Add a New Section
1. Create a new component in `components/`
2. Add animations using Framer Motion
3. Import and add to `app/page.tsx`

### Update Colors
1. Modify color variables in `app/globals.css`
2. Update Tailwind class references in components
3. Test on multiple browsers

### Add More Projects
Edit `components/projects.tsx` and add to the `projects` array with:
- Title, description, and long description
- Technology stack
- GitHub and demo links
- Key features

## Troubleshooting

**Port 3000 already in use:**
```bash
pnpm dev -p 3001
# Or use: npm run dev -- -p 3001
```

**Module not found errors:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**Build fails:**
```bash
# Clear Next.js cache
rm -rf .next
pnpm build
```

## License

This portfolio template is free to use and modify for your own projects.

## Support

For issues or questions:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Visit [Tailwind CSS docs](https://tailwindcss.com)
- See [Framer Motion guide](https://www.framer.com/motion/)

## Author

Built by Gourav Jadhav - Full-Stack Developer

---

**Happy coding! 🚀**
