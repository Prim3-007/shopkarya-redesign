import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'wouter';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * MobileMenu Component
 * Design Philosophy: Minimalist mobile navigation with smooth animations
 * - Slide-in menu from left
 * - Full-screen overlay
 * - Touch-friendly spacing
 */
export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = [
    { label: 'Engagement Rings', href: '/engagement-rings' },
    { label: 'Earrings', href: '/earrings' },
    { label: 'Pendants', href: '/pendants' },
    { label: 'Bracelets', href: '/bracelets' },
    { label: 'Loose Diamonds', href: '/diamonds' },
  ];

  const bottomLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Book Appointment', href: '/appointment' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed left-0 top-0 bottom-0 w-64 bg-background z-50 overflow-y-auto"
            initial={{ x: -256 }}
            animate={{ x: 0 }}
            exit={{ x: -256 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-lg font-bold text-foreground">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-secondary rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Menu Items */}
            <nav className="p-6 space-y-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={item.href}>
                    <a
                      onClick={onClose}
                      className="block px-4 py-3 text-foreground hover:bg-secondary rounded-lg transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Links */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border space-y-2 bg-background">
              {bottomLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    onClick={onClose}
                    className="block px-4 py-3 text-sm text-foreground/70 hover:text-foreground hover:bg-secondary rounded-lg transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
