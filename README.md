# Sherin Cake Shop - Premium Cake Shop Website

A modern, elegant, and visually stunning cake shop website built with Next.js, TypeScript, and Tailwind CSS. This project delivers a premium e-commerce experience with smooth animations, responsive design, and comprehensive functionality.

## 🎂 Features

### ✨ Visual Design
- **Modern Minimalist Aesthetic**: Clean layouts with elegant touches
- **Premium Color Palette**: Warm neutrals (cream, beige, soft browns) with rose gold accents
- **Typography**: Mix of elegant serif (Playfair Display) and clean sans-serif (Inter)
- **Smooth Animations**: Framer Motion powered micro-interactions and scroll effects
- **Responsive Design**: Mobile-first approach with perfect tablet and desktop optimization

### 🛍️ E-commerce Features
- **Shopping Cart**: Slide-out cart with quantity management
- **Product Categories**: Layer Cakes, Cupcakes, Cookies, Custom Cakes
- **Featured Products**: Carousel showcasing bestsellers
- **Product Search**: Real-time search with instant results
- **Favorites System**: Save products for later
- **Product Variants**: Size, flavor, and customization options

### 🎨 Interactive Components
- **Hero Section**: Full-viewport hero with parallax effects and call-to-action
- **Product Gallery**: Masonry-style layout with category filters
- **Customer Testimonials**: Rotating reviews with star ratings
- **Contact Form**: Multi-step form with validation
- **Mobile Menu**: Slide-in navigation for mobile devices
- **Loading Animations**: Elegant loading states throughout

### 🏗️ Technical Excellence
- **Next.js 14**: App Router with server-side rendering
- **TypeScript**: Full type safety and developer experience
- **Tailwind CSS**: Utility-first styling with custom design system
- **Framer Motion**: Professional animations and transitions
- **Lucide React**: Beautiful, consistent icons
- **Context API**: Global state management for cart and UI
- **Local Storage**: Persistent cart across sessions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sherin-cake-shop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
sherin-cake-shop/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── globals.css        # Global styles and Tailwind imports
│   │   ├── layout.tsx         # Root layout with fonts and metadata
│   │   └── page.tsx           # Home page with all sections
│   ├── components/            # Reusable UI components
│   │   ├── Header.tsx         # Navigation header with cart
│   │   ├── Hero.tsx           # Landing hero section
│   │   ├── ProductCategories.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── AboutSection.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── CartDrawer.tsx     # Shopping cart sidebar
│   │   ├── MobileMenu.tsx     # Mobile navigation
│   │   └── SearchModal.tsx    # Product search overlay
│   ├── lib/
│   │   ├── contexts/
│   │   │   └── CartContext.tsx # Cart state management
│   │   └── data.ts            # Sample data and helper functions
│   └── types/
│       └── index.ts           # TypeScript type definitions
├── public/
│   └── images/                # Static image assets
├── styles/                    # Additional styling (if needed)
├── components/                # Legacy component directory
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Design System

### Colors
```css
Primary: #8B4513 (Saddle Brown)
Primary Light: #DEB887 (Burlywood)
Accent: #FF6B6B (Coral Pink)
Accent Light: #FFE5E5
Cream: #FDF6E3
Gray Light: #F8F9FA
Dark: #2C3E50
```

### Typography
- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)
- **Accent**: Dancing Script (script)

### Component Classes
```css
.btn-primary        # Primary action buttons
.btn-secondary      # Secondary action buttons
.card              # Product and content cards
.section-padding   # Consistent section spacing
.container-custom  # Max-width container
.text-gradient     # Gradient text effect
```

## 🛠️ Development

### Available Scripts
```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
```

### Adding New Components
1. Create component in `src/components/`
2. Use TypeScript for props and state
3. Follow existing animation patterns with Framer Motion
4. Ensure mobile responsiveness
5. Add proper accessibility attributes

### Customizing Data
- Edit `src/lib/data.ts` to modify products, categories, and content
- Update types in `src/types/index.ts` as needed
- Replace placeholder images in `public/images/`

## 📱 Mobile Optimization

- **Touch-friendly**: Large touch targets and gestures
- **Performance**: Optimized images and lazy loading
- **Navigation**: Hamburger menu with smooth animations
- **Layout**: Stack-based responsive design
- **Typography**: Readable fonts at all screen sizes

## 🔧 Customization

### Changing Colors
Update `tailwind.config.js` colors section:
```javascript
colors: {
  primary: {
    DEFAULT: '#YOUR_COLOR',
    light: '#YOUR_LIGHT_COLOR',
  },
  // ... other colors
}
```

### Adding New Sections
1. Create component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Update navigation in `Header.tsx`
4. Add scroll target ID

### Modifying Animations
- All animations use Framer Motion
- Consistent timing: 0.6s duration for most transitions
- Stagger children animations for lists
- Responsive to `prefers-reduced-motion`

## 🎯 SEO & Performance

- **Meta Tags**: Comprehensive OpenGraph and Twitter cards
- **Structured Data**: Ready for schema markup
- **Image Optimization**: Next.js Image component
- **Core Web Vitals**: Optimized for excellent Lighthouse scores
- **Accessibility**: WCAG 2.1 AA compliant

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Works with static export
- **AWS Amplify**: Full SSR support
- **Railway**: Easy deployment with database

## 📦 Production Considerations

### Environment Variables
```bash
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_TRACKING_ID
```

### Image Assets
- Replace all placeholder images in `public/images/`
- Optimize images (WebP format recommended)
- Add proper alt text for accessibility

### Content Management
- Consider integrating with headless CMS (Sanity, Contentful)
- Add admin panel for product management
- Implement user authentication for orders

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern bakery and food service websites
- **Icons**: Lucide React icon library
- **Fonts**: Google Fonts (Playfair Display, Inter, Dancing Script)
- **Animations**: Framer Motion community examples
- **Colors**: Carefully selected for food industry appeal

## 📞 Support

For support, email help@sherincakeshop.com or create an issue in the repository.

---

**Made with ❤️ for Sherin Cake Shop**

*Crafted with Love, Baked to Perfection*
