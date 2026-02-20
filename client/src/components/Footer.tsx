import { Link } from 'wouter';
import { Mail, Phone, MapPin } from 'lucide-react';

/**
 * Footer Component
 * Design Philosophy: Minimalist luxury with clear information hierarchy
 * - Clean layout with subtle borders
 * - Trust signals and certifications
 * - Contact and legal information
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">KARYA</h3>
            <p className="text-sm text-foreground/60 leading-relaxed mb-4">
              Luxury jewelry for the discerning buyer. Ethical sourcing, customizable designs, and exceptional value.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/40 hover:text-accent transition-colors duration-200">
                Instagram
              </a>
              <a href="#" className="text-foreground/40 hover:text-accent transition-colors duration-200">
                Facebook
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/diamonds?category=engagement-rings" className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200">
                  Engagement Rings
                </Link>
              </li>
              <li>
                <Link href="/diamonds?category=earrings" className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200">
                  Earrings
                </Link>
              </li>
              <li>
                <Link href="/diamonds?category=pendants" className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200">
                  Pendants
                </Link>
              </li>
              <li>
                <Link href="/diamonds?category=bracelets" className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200">
                  Bracelets
                </Link>
              </li>
              <li>
                <Link href="/diamonds" className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200">
                  Loose Diamonds
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200">
                  Design Your Own
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@shopkarya.com" className="text-sm text-foreground/60 hover:text-foreground transition-colors duration-200">
                  hello@shopkarya.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground/60">
                  123 Luxury Lane<br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-wrap gap-4 mb-6 md:mb-0 justify-center md:justify-start">
            <a href="#" className="text-xs text-foreground/40 hover:text-foreground/60 transition-colors duration-200">
              Privacy Policy
            </a>
            <span className="text-foreground/20">•</span>
            <a href="#" className="text-xs text-foreground/40 hover:text-foreground/60 transition-colors duration-200">
              Terms of Service
            </a>
            <span className="text-foreground/20">•</span>
            <a href="#" className="text-xs text-foreground/40 hover:text-foreground/60 transition-colors duration-200">
              Cookie Policy
            </a>
          </div>

          <p className="text-xs text-foreground/40">
            © {currentYear} ShopKarya. All rights reserved.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-foreground/40 text-center mb-4">
            Trusted by jewelry enthusiasts worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="text-center">
              <div className="text-xs font-semibold text-foreground mb-1">Ethical Sourcing</div>
              <div className="text-xs text-foreground/40">Certified diamonds</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-xs font-semibold text-foreground mb-1">15-Day Returns</div>
              <div className="text-xs text-foreground/40">Hassle-free</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-xs font-semibold text-foreground mb-1">Worldwide Shipping</div>
              <div className="text-xs text-foreground/40">Fast & insured</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-xs font-semibold text-foreground mb-1">4.5/5 Rating</div>
              <div className="text-xs text-foreground/40">From customers</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
