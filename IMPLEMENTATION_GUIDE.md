# ShopKarya Redesign - Implementation Guide

## Project Overview

This is a complete redesign of the ShopKarya jewelry e-commerce platform, transforming it into a high-end boutique website with minimalist motion design, technical depth, and value-focused UX.

## Design Philosophy

### Core Principles

1. **Minimalist Luxury**: Negative space as content, elegant typography, and restrained color palette
2. **Fluid Motion**: Smooth animations (300-500ms) that reflect the aesthetic of bent metal and flowing jewelry
3. **Technical Transparency**: Granular 4Cs data, ASET/Idealscope specifications, and detailed product information
4. **Value Communication**: Clear pricing, badges, and trust signals that emphasize exceptional value

### Inspirations

- **Leen Heyne** (leenheyne.nl): Extreme minimalism, dark backgrounds, serif typography, subtle fluid motion
- **Whiteflash** (whiteflash.com): Technical depth, 4Cs data, ASET/Idealscope images, robust filtering
- **The Diamond Store UK**: Value-focused UX, clear badges, comparison features, trust signals

## Color Palette

| Color | Value | Purpose |
|-------|-------|---------|
| Background | #FAFAF8 | Primary background (off-white) |
| Foreground | #2C2C2C | Text and primary elements (deep charcoal) |
| Accent | #D4AF37 | CTAs, highlights, hover states (warm gold) |
| Secondary | #F5F3F0 | Secondary backgrounds, subtle accents (soft taupe) |
| Border | #E8E6E3 | Dividers and borders (light taupe) |
| Muted | #D4D2CF | Disabled states, secondary text (muted taupe) |

## Typography System

| Font | Weight | Usage |
|------|--------|-------|
| Playfair Display | 700 | H1, H2 headings (elegant, serif) |
| Inter | 400, 500, 600 | Body text, UI elements (clean, readable) |
| IBM Plex Mono | 400 | Technical specifications (monospace) |

## Component Architecture

### Pages

1. **Home** (`client/src/pages/Home.tsx`)
   - Hero section with background image and CTA
   - Shop by Shape section with diamond icons
   - Featured Collections placeholder
   - Footer with contact and links

2. **Diamonds** (`client/src/pages/Diamonds.tsx`)
   - Product listing page with filtering sidebar
   - Product grid with value badges
   - Pagination and sorting

3. **ProductDetail** (`client/src/pages/ProductDetail.tsx`)
   - Sticky product gallery with thumbnails
   - Product details and pricing
   - Technical specifications (accordion)
   - Related products section

### Components

1. **Header** (`client/src/components/Header.tsx`)
   - Sticky navigation with logo and menu
   - Search, account, and cart buttons
   - Mobile hamburger menu
   - Scroll-based background fade

2. **Footer** (`client/src/components/Footer.tsx`)
   - Brand information and social links
   - Product categories and support links
   - Contact information
   - Trust badges and legal links

3. **Hero** (`client/src/components/Hero.tsx`)
   - Full-screen background image with zoom animation
   - Elegant headline and subheading
   - Dual CTAs (Shop Diamonds, Book Appointment)
   - Trust signals

4. **ShopByShape** (`client/src/components/ShopByShape.tsx`)
   - 10 diamond shape icons (custom SVG)
   - Responsive grid layout
   - Hover effects with scale and shadow

5. **FilterSidebar** (`client/src/components/FilterSidebar.tsx`)
   - Collapsible filter sections
   - 4Cs specifications (Shape, Carat, Color, Clarity, Cut, Price)
   - Active filters display
   - Reset functionality

6. **ProductCard** (`client/src/components/ProductCard.tsx`)
   - Product image with hover zoom
   - Price and specifications
   - Value badges (Best Value, Top Pick)
   - Quick add to cart and wishlist

7. **ProductGallery** (`client/src/components/ProductGallery.tsx`)
   - Sticky main image display
   - Thumbnail carousel with scroll-snapping
   - Image counter
   - Navigation arrows

8. **TechnicalSpecs** (`client/src/components/TechnicalSpecs.tsx`)
   - Accordion-style specification sections
   - Clean table layout for data
   - Smooth expand/collapse animations

## Key Features Implemented

### ✓ Minimalist Design
- High negative space with intentional whitespace
- Elegant typography hierarchy
- Restrained color palette with gold accents
- Clean, organized layouts

### ✓ Smooth Animations
- Framer Motion for page transitions
- Hover effects with scale and shadow
- Staggered animations for lists
- Smooth color transitions

### ✓ Technical Depth
- 4Cs specifications (Shape, Carat, Color, Clarity, Cut)
- Detailed product specifications
- GIA certification information
- Technical data in accordion format

### ✓ Value-Focused UX
- Clear pricing with savings display
- Value badges (Best Value, Top Pick, Exceptional Value)
- Trust signals (GIA Certified, 15-Day Returns, Insured Shipping)
- Financing information

### ✓ Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly spacing
- Responsive product grids

### ✓ Advanced Filtering
- Collapsible filter sections
- Multiple filter options per category
- Active filters display
- Reset functionality

## File Structure

```
client/
  src/
    components/
      Header.tsx                 # Navigation header
      Footer.tsx                 # Footer section
      Hero.tsx                   # Hero section with background
      ShopByShape.tsx            # Diamond shape selector
      FilterSidebar.tsx          # Product filtering
      ProductCard.tsx            # Product listing card
      ProductGallery.tsx         # Product image gallery
      TechnicalSpecs.tsx         # Specifications accordion
      MobileMenu.tsx             # Mobile navigation menu
    pages/
      Home.tsx                   # Home page
      Diamonds.tsx               # Product listing page
      ProductDetail.tsx          # Product detail page
    styles/
      animations.css             # Animation utilities
    index.css                    # Global styles and design tokens
    App.tsx                      # Route configuration
  index.html                     # HTML template
```

## Design Tokens

All design tokens are defined in `client/src/index.css` using CSS variables:

- **Colors**: `--primary`, `--secondary`, `--accent`, `--background`, `--foreground`, etc.
- **Spacing**: Uses Tailwind's default spacing scale
- **Border Radius**: `--radius` (0.65rem), `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`
- **Shadows**: Tailwind's default shadow scale
- **Typography**: Playfair Display (headings), Inter (body), IBM Plex Mono (technical)

## Animation Guidelines

All animations follow these principles:

- **Duration**: 300-500ms for most interactions
- **Easing**: Cubic bezier (0.4, 0, 0.2, 1) for natural motion
- **Triggers**: Hover, scroll, page load, state changes
- **Philosophy**: Subtle, elegant, never distracting

## Performance Considerations

1. **Image Optimization**: All images use CDN URLs with proper sizing
2. **Component Lazy Loading**: Consider lazy loading for below-fold sections
3. **Animation Performance**: Using Framer Motion's optimized rendering
4. **CSS Efficiency**: Tailwind CSS for minimal custom CSS

## Future Enhancements

1. **Product Comparison**: Side-by-side comparison tool
2. **Advanced Filtering**: Price range sliders, more filter options
3. **Product Reviews**: Customer reviews and ratings
4. **Wishlist**: Save favorites for later
5. **Live Chat**: Customer support integration
6. **Customization Tool**: Design your own jewelry
7. **Virtual Try-On**: AR/VR jewelry preview
8. **Payment Integration**: Stripe/PayPal integration
9. **User Accounts**: Login, order history, saved items
10. **Analytics**: Conversion tracking and user behavior

## Development Notes

### Typography
- Playfair Display is used for all headings (H1, H2, H3)
- Inter is used for body text and UI elements
- IBM Plex Mono is reserved for technical specifications
- Font weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Color Usage
- Always pair background colors with corresponding foreground colors
- Use semantic color names (`bg-background`, `text-foreground`) for consistency
- Accent color is reserved for CTAs and important highlights
- Secondary color is used for subtle backgrounds and accents

### Animation Best Practices
- Use `whileInView` for animations triggered on scroll
- Use `whileHover` for interactive elements
- Keep animations under 500ms for responsiveness
- Use `transition={{ duration: 0.3 }}` as default

### Responsive Design
- Mobile-first approach: design for mobile, then enhance for larger screens
- Use Tailwind's responsive prefixes (`md:`, `lg:`, etc.)
- Test on actual devices, not just browser dev tools
- Ensure touch targets are at least 44x44px on mobile

## Testing Checklist

- [ ] All pages load without errors
- [ ] Navigation works on all devices
- [ ] Animations are smooth and not janky
- [ ] Images load correctly
- [ ] Forms are functional
- [ ] Mobile menu opens/closes properly
- [ ] Product filtering works
- [ ] Product detail page displays correctly
- [ ] Footer links are functional
- [ ] No console errors or warnings

## Deployment

1. Create a checkpoint with `webdev_save_checkpoint`
2. Click the Publish button in the Management UI
3. Configure custom domain if needed
4. Monitor analytics and user feedback

## Support

For questions or issues, refer to the design specification document or contact the development team.
