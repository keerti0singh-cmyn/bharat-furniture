# Bharat Furniture - Quick Start Guide

## 🪑 Project Summary

A professional, client-ready static website for **Bharat Furniture** furniture store.

**Business:** भारत फ़र्नीचर (Bharat Furniture)
**Location:** Mau Aima, Uttar Pradesh
**Phone:** 099352 86138

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd bharat-furniture-website
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open http://localhost:3000

### 3. Build for Production
```bash
npm run build
```

---

## 📦 Deployment to Vercel (Easiest)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

**That's it!** Your site will be live in seconds.

---

## 🎨 What's Included

### Pages
- ✅ **Home** - Hero, Services, Featured Categories
- ✅ **About Us** - Business story & values
- ✅ **Products** - Furniture categories
- ✅ **Why Choose Us** - USPs
- ✅ **Contact** - Contact form, Map, Phone

### Features
- ✅ Fully Responsive (Mobile-First)
- ✅ SEO Optimized
- ✅ Static Site Generation (Fast)
- ✅ WhatsApp Integration
- ✅ Click-to-Call
- ✅ Google Maps
- ✅ Hindi + English
- ✅ Professional Design

---

## 🖼️ Adding Your Images

1. Put images in `public/images/`
2. Use `<Image />` component from Next.js
3. Recommended sizes:
   - Hero: 1920x1080px
   - Products: 800x600px

---

## 📝 Quick Customization

### Change Phone Number
Find & replace: `09935286138`

### Change Address
Find & replace: `Birsinghpur Urf Allipur, Mau Aima`

### Update Colors
Edit `app/globals.css`:
```css
--color-primary: #your-color;
--color-secondary: #your-color;
```

---

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout, metadata |
| `app/page.tsx` | Home page |
| `components/` | Navbar, Footer, Buttons |
| `next.config.ts` | Next.js config (SSG) |
| `app/sitemap.ts` | SEO sitemap |
| `app/robots.ts` | Search engine rules |

---

## 📱 Preview on Mobile

The site is fully responsive. Test on:
- Desktop: 1920x1080
- Tablet: 768x1024
- Mobile: 375x667

---

## 🎯 Client Presentation Ready

**Before showing client:**
- [ ] Add real product photos
- [ ] Verify phone number
- [ ] Check address on Google Maps
- [ ] Test all links
- [ ] Review Hindi & English text
- [ ] Deploy to staging URL

---

## 📞 Business Contact Information

**Store:** Bharat Furniture (भारत फ़र्नीचर)
**Phone:** 099352 86138
**Address:** Birsinghpur Urf Allipur, Mau Aima, Uttar Pradesh – 212507
**Hours:** Open till 8:00 PM

---

## 🐛 Issues?

**Build fails?**
```bash
rm -rf node_modules .next
npm install
```

**Styles not showing?**
- Check `app/globals.css` is imported in `layout.tsx`

**Images not loading?**
- Static export is enabled, images are unoptimized (fine for this use case)

---

## 📚 Full Documentation

See `DEPLOYMENT.md` for detailed guide.

---

**Status:** ✅ Client Ready | **Version:** 1.0.0
