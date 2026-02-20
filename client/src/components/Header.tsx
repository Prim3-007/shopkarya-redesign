import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Header Component
 * Design Philosophy: Minimalist luxury with subtle motion
 * - Sticky navigation bar with logo, menu, search, and account
 * - Smooth background fade on scroll
 * - Responsive hamburger menu on mobile
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Engagement Rings', href: '/diamonds?category=engagement-rings' },
    { label: 'Earrings', href: '/diamonds?category=earrings' },
    { label: 'Pendants', href: '/diamonds?category=pendants' },
    { label: 'Bracelets', href: '/diamonds?category=bracelets' },
    { label: 'Diamonds', href: '/diamonds' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-background'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="text-2xl font-bold text-foreground tracking-wide">
              KARYA
            </div>
            <div className="ml-2 text-xs text-muted-foreground uppercase tracking-widest">
              Boutique
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 relative group">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-secondary transition-colors duration-200">
              <Search className="w-5 h-5 text-foreground/70" />
            </button>

            {/* Account */}
            <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full hover:bg-secondary transition-colors duration-200">
              <User className="w-5 h-5 text-foreground/70" />
            </button>

            {/* Cart */}
            <button className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-secondary transition-colors duration-200">
              <ShoppingCart className="w-5 h-5 text-foreground/70" />
              <span className="absolute top-2 right-2 w-4 h-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-secondary transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden pb-6 border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
