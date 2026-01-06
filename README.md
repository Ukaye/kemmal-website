# Kemmal Onuoha Company Website

A modern, professional business consulting website built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The website will be available at `http://localhost:3000` (or the next available port).

## 📁 Project Structure

```
kemmal-website/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Home page
│   ├── who-we-are/          # About page
│   ├── what-we-do/          # Services page
│   ├── programs-events/      # Events page
│   ├── book-consultation/   # Consultation form
│   ├── register/[eventId]/   # Event registration
│   └── confirmation/         # Success page
├── components/
│   ├── layout/              # Header, Footer
│   ├── sections/            # Page sections (Hero, CTA, etc.)
│   ├── ui/                  # Reusable UI components
│   └── forms/               # Form components
├── lib/
│   └── emailjs.ts           # EmailJS integration
└── public/
    └── images/              # Static images
```

## 🎨 Design System

### Colors
- **Primary Dark**: `#1A2332` (Navy)
- **Primary Gold**: `#D4A43C` (Golden Yellow)
- **Background Light**: `#FFFFFF`
- **Background Section**: `#F9FAFB`
- **Text Dark**: `#1A2332`
- **Text Light**: `#6B7280`

### Typography
- **Font**: DM Sans (Google Fonts)
- **Headings**: Bold, responsive sizing
- **Body**: Regular weight, optimized for readability

## 📧 EmailJS Setup

To enable form submissions:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create email templates for:
   - Consultation form
   - Event registration
3. Add your credentials to `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_CONSULTATION_TEMPLATE_ID=consultation_template
NEXT_PUBLIC_EMAILJS_EVENT_TEMPLATE_ID=event_template
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

The site is optimized for Vercel deployment with:
- Automatic HTTPS
- Edge network optimization
- Serverless functions support

## ✨ Features

- ✅ Responsive design (mobile-first)
- ✅ Smooth animations (Framer Motion)
- ✅ Form validation
- ✅ EmailJS integration
- ✅ SEO optimized
- ✅ Accessible components
- ✅ Dark/Gold color scheme
- ✅ Modern UI/UX

## 📄 Pages

1. **Home** (`/`) - Hero, services preview, testimonials, events
2. **Who We Are** (`/who-we-are`) - Company story, founder profile
3. **What We Do** (`/what-we-do`) - Detailed service offerings
4. **Programs & Events** (`/programs-events`) - Event listings
5. **Book Consultation** (`/book-consultation`) - Contact form
6. **Event Registration** (`/register/[eventId]`) - Dynamic registration
7. **Confirmation** (`/confirmation`) - Success page

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: EmailJS
- **TypeScript**: Full type safety

## 📝 Notes

- Replace placeholder images in `public/images/` with actual assets
- Update contact information in Footer component
- Customize event data in `app/programs-events/page.tsx`
- Add real client logos to ClientLogos component

## 📞 Support

For questions or issues, please contact the development team.

---

Built with ❤️ for The Kemmal Onuoha Company
