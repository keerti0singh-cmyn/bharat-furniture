# Bharat Furniture Website

## 🪑 Professional Client-Ready Furniture Store Website

A modern, responsive static website for **Bharat Furniture (भारत फ़र्नीचर)** - a local furniture store in Mau Aima, Uttar Pradesh.

---

## 📋 Project Overview

**Business Details:**
- **Name:** Bharat Furniture (भारत फ़र्नीचर)
- **Location:** Birsinghpur Urf Allipur, Mau Aima, Uttar Pradesh – 212507
- **Phone:** 099352 86138
- **Business Hours:** Open till 8:00 PM

**Tech Stack:**
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Static Site Generation (SSG)

---

## 🎨 Design Features

**Color Palette:**
- Primary: #8B5A2B (Natural Wood Brown)
- Secondary: #D2B48C (Light Wood Beige)
- Dark Accent: #4A2C1A (Walnut Brown)
- Background: #F5F1EB (Cream/Off-white)
- CTA: #B22222 (Deep Maroon)

**Pages Included:**
1. **Home** (/) - Hero, Services, Categories, Trust Badges
2. **About Us** (/about) - Business Story, Commitment
3. **Products** (/products) - Furniture Categories & Collections
4. **Why Choose Us** (/why-us) - Unique Selling Points
5. **Contact** (/contact) - Contact Form, Map, Contact Info

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to project directory:**
   ```bash
   cd bharat-furniture-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   ```
   http://localhost:3000
   ```

---

## 📦 Deployment Guide

### Option 1: Vercel (Recommended)

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **That's it!** Vercel handles everything automatically.

### Option 2: Netlify

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `out` folder:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder

### Option 3: Traditional Hosting

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Upload the `out` folder** to your hosting provider's public directory.

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📁 Project Structure

```
bharat-furniture-website/
├── app/
│   ├── about/
│   │   └── page.tsx          # About Us page
│   ├── contact/
│   │   └── page.tsx          # Contact Us page
│   ├── products/
│   │   └── page.tsx          # Products page
│   ├── why-us/
│   │   └── page.tsx          # Why Choose Us page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles & Tailwind config
│   ├── sitemap.ts          # SEO Sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer
│   └── FloatingButtons.tsx # Call & WhatsApp buttons
├── public/
│   └── images/            # Add product images here
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies
└── tailwind.config.*      # Tailwind CSS config
```

---

## 🖼️ Adding Product Images

1. **Place images in `public/images/` directory**
2. **Use descriptive filenames** (e.g., `bed-king-size.jpg`)
3. **Update page components** to use `<Image />` from `next/image`
4. **Example:**
   ```tsx
   import Image from 'next/image';
   
   <Image
     src="/images/bed-king-size.jpg"
     alt="King Size Bed"
     width={800}
     height={600}
   />
   ```

**Recommended Image Sizes:**
- Hero banners: 1920x1080px
- Product images: 800x600px
- Thumbnails: 400x300px

---

## 🔧 Customization

### Update Business Details

Edit these files with your details:

1. **Phone Number:**
   - Search for: `09935286138`
   - Files: All page.tsx files, Footer.tsx, FloatingButtons.tsx

2. **Address:**
   - Search for: `Birsinghpur Urf Allipur, Mau Aima`
   - Files: Footer.tsx, Contact page, metadata

3. **Business Name:**
   - Search for: `भारत फ़र्नीचर` or `Bharat Furniture`
   - Files: Navbar.tsx, Footer.tsx, all pages

### Change Color Scheme

Edit `app/globals.css`:
```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
  --color-dark: #your-color;
  --color-background: #your-color;
  --color-cta: #your-color;
}
```

### Update SEO Metadata

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your Description',
  // ... other metadata
};
```

---

## 📱 Features

- ✅ Fully responsive (mobile-first design)
- ✅ Static Site Generation (fast loading)
- ✅ SEO optimized (sitemap, robots.txt, meta tags)
- ✅ WhatsApp integration
- ✅ Click-to-call functionality
- ✅ Google Maps embed
- ✅ Hindi + English bilingual content
- ✅ Professional wood-themed design
- ✅ Floating action buttons
- ✅ Accessible navigation

---

## 🔍 SEO Configuration

**Local SEO Keywords:**
- Furniture Shop in Mau Aima
- Furniture Store in Prayagraj Region
- Bharat Furniture Uttar Pradesh
- Wooden Furniture Mau Aima

**Meta Tags:** Configured in `app/layout.tsx`

**Sitemap:** Automatically generated at `/sitemap.xml`

**Robots.txt:** Configured at `/robots.txt`

---

## 📝 Client Presentation Checklist

Before presenting to client:

- [ ] Update phone number if changed
- [ ] Update address if changed
- [ ] Add real product images to `public/images/`
- [ ] Update Google Maps embed with actual location
- [ ] Test all pages on mobile and desktop
- [ ] Verify all links work correctly
- [ ] Test click-to-call functionality
- [ ] Test WhatsApp chat button
- [ ] Verify contact form (or remove if not needed)
- [ ] Check spelling and grammar

---

## 🐛 Troubleshooting

### Build Fails with WASM Error

**Issue:** Next.js 16+ may have WASM compatibility issues on Windows.

**Solution:** The project is configured with Next.js 15 for stability. If you encounter issues:

1. Delete `node_modules` and `.next`:
   ```bash
   rm -rf node_modules .next
   npm install
   ```

2. Use stable Next.js version (15.x):
   ```bash
   npm install next@15
   ```

### Images Not Loading

**Solution:** Since `output: 'export'` is enabled in `next.config.ts`:
- Use `unoptimized: true` for images
- Or serve images from a CDN

### Tailwind Styles Not Working

**Solution:**
- Ensure `globals.css` is imported in `layout.tsx`
- Check Tailwind CSS v4 syntax with `@theme inline`

---

## 📞 Support

For questions or issues:
1. Check this README
2. Review Next.js documentation: [nextjs.org](https://nextjs.org/docs)
3. Check Tailwind CSS docs: [tailwindcss.com](https://tailwindcss.com)

---

## 📄 License

This project is built for Bharat Furniture client presentation.

---

## 🎯 Deployment Status

**Ready for Production:** ✅

The website is fully functional and ready for deployment on Vercel, Netlify, or any static hosting provider.

**Pre-deployment Steps:**
1. Review all content
2. Add real product images
3. Test on multiple devices
4. Update contact details if needed
5. Deploy to staging environment for client review

---

**Created with ❤️ for Bharat Furniture**
