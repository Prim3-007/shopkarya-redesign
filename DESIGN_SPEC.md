# ShopKarya Redesign: Design Specification

## Executive Summary

This document outlines the comprehensive design and technical architecture for transforming ShopKarya's jewelry e-commerce platform into a high-end boutique experience. The redesign synthesizes three distinct design philosophies: **Leen Heyne's minimalist motion design**, **Whiteflash's technical depth**, and **The Diamond Store UK's value-focused UX**.

---

## Design Philosophy & Aesthetic Direction

### Core Design Movement: Minimalist Luxury with Technical Precision

The redesigned ShopKarya platform will embody a **sophisticated minimalist aesthetic** that prioritizes elegance through restraint. The design draws inspiration from high-end jewelry retailers that understand their audience: discerning buyers who appreciate both visual refinement and technical transparency.

**Key Design Principles:**

1. **Negative Space as Content**: Ample whitespace and breathing room create a sense of exclusivity and luxury. Every element is intentional; nothing is decorative without purpose.

2. **Fluid Motion & Continuity**: Subtle, continuous animations mirror the organic nature of bent metal and precious stones. Motion is never jarring—it guides the eye and creates visual flow without distraction.

3. **Technical Transparency**: Complex diamond specifications are presented with clarity and elegance. Data-rich sections (4Cs, ASET maps, Idealscope images) are organized into digestible, visually harmonious layouts.

4. **Value Communication**: Clear pricing, comparison features, and trust signals (certifications, guarantees) are woven into the design without appearing "cheap" or aggressive.

---

## Color Philosophy

### Primary Palette

The color system balances sophistication with accessibility:

| Color Role | Value | Purpose |
|---|---|---|
| **Background** | Off-white (`#FAFAF8`) | Neutral canvas that lets products shine |
| **Primary Text** | Deep charcoal (`#1A1A1A`) | High contrast for readability |
| **Accent** | Warm gold (`#D4AF37`) | Luxury signifier, used sparingly for highlights |
| **Secondary** | Soft taupe (`#E8E4E0`) | Subtle dividers and secondary backgrounds |
| **Technical Data** | Slate gray (`#4A5568`) | Professional appearance for specifications |

### Color Usage Guidelines

- **Gold accents** appear on hover states, value badges, and premium product indicators
- **Taupe backgrounds** separate sections without harsh borders
- **Slate gray** is reserved for technical data tables and detailed specifications
- **Avoid** bright colors or high-saturation elements that compete with product photography

---

## Typography System

### Font Pairing

| Font | Usage | Characteristics |
|---|---|---|
| **Playfair Display** (Serif) | Headings (H1, H2, H3) | Elegant, high-end, distinctive |
| **Inter** (Sans-serif) | Body text, UI elements | Clean, readable, professional |
| **IBM Plex Mono** (Monospace) | Technical data, specifications | Precise, data-focused |

### Typography Hierarchy

- **H1**: 48px, Playfair Display, weight 700, letter-spacing: 0.5px
- **H2**: 36px, Playfair Display, weight 600, letter-spacing: 0.3px
- **H3**: 24px, Playfair Display, weight 600
- **Body**: 16px, Inter, weight 400, line-height: 1.6
- **Small**: 14px, Inter, weight 400, color: muted
- **Technical Data**: 13px, IBM Plex Mono, weight 400

---

## Layout Paradigm

### Grid & Spacing System

The design uses a **12-column responsive grid** with consistent spacing:

- **Desktop**: 1280px max-width, 32px gutters
- **Tablet**: 768px max-width, 24px gutters
- **Mobile**: Full-width, 16px gutters

### Asymmetric Layout Approach

Rather than centered, symmetrical layouts, the design employs **asymmetric compositions** that create visual interest:

- **Hero Section**: Full-screen image/video on right, text content on left with generous whitespace
- **Product Grid**: 3-column on desktop, 2-column on tablet, 1-column on mobile
- **PDP Layout**: Image gallery on left (60%), product details on right (40%)

---

## Signature Visual Elements

### 1. Minimalist Line-Art Icons

Custom SVG icons for diamond shapes (Round, Oval, Cushion, Pear, Emerald, Princess, Marquise, Radiant, Asscher, Heart) rendered in thin strokes with subtle hover animations.

### 2. Subtle Dividers & Separators

Thin horizontal lines (1px, taupe color) separate sections. Diagonal SVG dividers with fluid curves create visual transitions between major sections.

### 3. Value Badges

Small, elegant badges indicate "Best Value," "Top Pick for Budget," or "Exceptional Quality." Styled with gold accents and subtle shadows.

---

## Interaction Philosophy

### Hover States

- **Product Cards**: Subtle shadow increase, slight scale (1.02x), smooth 300ms transition
- **Links**: Gold underline appears smoothly, no color change
- **Buttons**: Background color shift, shadow enhancement
- **Filter Tags**: Border color change, background highlight

### Focus States

All interactive elements maintain visible focus rings (2px gold outline) for accessibility.

### Micro-interactions

- **Fade-in animations** on page load (300ms duration)
- **Smooth scroll-snapping** in product image galleries
- **Continuous subtle animations** in hero section (slow panning, gentle zoom)

---

## Animation Guidelines

### Motion Principles

1. **Easing**: Use `cubic-bezier(0.4, 0, 0.2, 1)` for smooth, natural motion
2. **Duration**: 300-500ms for micro-interactions, 800-1200ms for page transitions
3. **Subtlety**: Animations should enhance, not distract. Avoid bouncy or playful effects
4. **Continuity**: Motion should feel connected across the entire experience

### Specific Animations

| Element | Animation | Duration | Effect |
|---|---|---|---|
| Hero background | Slow pan/zoom | 15s loop | Continuous, subtle movement |
| Page entrance | Fade-in + slight scale | 400ms | Content appears smoothly |
| Product card hover | Shadow + scale | 300ms | Subtle elevation |
| Filter application | Fade transition | 300ms | Smooth state change |
| Scroll-snap gallery | Momentum scroll | Natural | Smooth image transitions |

---

## Component Architecture

### Core Components

#### 1. Navigation Bar
- Sticky header with logo, main navigation, search, cart, and account
- Minimalist design with subtle background on scroll
- Responsive hamburger menu on mobile

#### 2. Hero Section
- Full-screen background (video or high-res image with panning animation)
- Centered headline with subheading
- Call-to-action button with hover effects
- "Shop by Shape" section below with line-art icons

#### 3. Product Grid
- Responsive grid (3 columns desktop, 2 tablet, 1 mobile)
- Product cards with image, name, price, and value badge
- Smooth hover effects and shadow transitions

#### 4. Filtering Sidebar (PLP)
- Vertical sidebar with collapsible filter sections
- Filters: Cut, Color, Clarity, Carat, Symmetry, Polish
- "Reset Filters" button
- Active filter indicators

#### 5. Product Detail Page (PDP)
- Left: Sticky image gallery with scroll-snapping
- Right: Product name, price, specifications
- Accordion sections for "Light Performance" and "Gemological Data"
- Floating action area with "Add to Cart" and "Book Appointment"

#### 6. Technical Data Sections
- Tabbed or accordion interface for 4Cs, ASET, Idealscope
- Clean table layouts for specifications
- Placeholder images for technical diagrams

---

## Page Structure

### Home Page
1. Navigation bar
2. Hero section with background video/image
3. "Shop by Shape" section with line-art icons
4. Featured products carousel
5. Brand propositions section (Ethical Sourcing, Customizable, Low Price)
6. Call-to-action section
7. Footer

### Product Listing Page (PLP)
1. Navigation bar
2. Page title and breadcrumbs
3. Filtering sidebar (left) + product grid (right)
4. Pagination or infinite scroll
5. Footer

### Product Detail Page (PDP)
1. Navigation bar
2. Breadcrumbs
3. Image gallery (left) + product details (right)
4. Technical data sections (accordions/tabs)
5. Related products carousel
6. Footer

---

## Technical Stack

| Technology | Purpose |
|---|---|
| **React 19** | Component framework |
| **Tailwind CSS 4** | Utility-first styling |
| **Framer Motion** | Fluid animations |
| **Wouter** | Client-side routing |
| **shadcn/ui** | Pre-built accessible components |

---

## Responsive Design Strategy

### Breakpoints

- **Mobile**: 0–639px
- **Tablet**: 640–1023px
- **Desktop**: 1024px+

### Mobile-First Approach

All designs start with mobile constraints, then enhance for larger screens. Touch-friendly spacing (minimum 44px tap targets) is maintained throughout.

---

## Accessibility Considerations

1. **Color Contrast**: All text meets WCAG AA standards (4.5:1 minimum)
2. **Focus Indicators**: Visible 2px gold outline on all interactive elements
3. **Semantic HTML**: Proper heading hierarchy, ARIA labels where needed
4. **Keyboard Navigation**: All functionality accessible via keyboard
5. **Motion Preferences**: Respect `prefers-reduced-motion` for animations

---

## Next Steps

1. Generate high-quality hero background images using AI
2. Create custom SVG icons for diamond shapes
3. Build core layout components (Header, Hero, Product Grid)
4. Implement filtering system and PDP technical sections
5. Add animations and refine interactions
6. Test responsiveness and accessibility
7. Deploy and gather user feedback

---

## Design Tokens Reference

All design tokens are defined in `client/src/index.css` using CSS custom properties. This ensures consistency across the entire application and allows for theme switching if needed in the future.
