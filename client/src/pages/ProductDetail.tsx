import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/ProductGallery';
import TechnicalSpecs from '@/components/TechnicalSpecs';

/**
 * Product Detail Page (PDP)
 * Design Philosophy: Technical depth with luxury presentation
 * - Sticky product image gallery on left
 * - Product details and specifications on right
 * - Technical data sections (4Cs, ASET, Idealscope)
 * - Floating action area for Add to Cart and Book Appointment
 */

// Mock product data
const mockProduct = {
  id: '1',
  name: 'Round Brilliant Diamond - 1.5ct H VS1 Ideal Cut',
  price: 4250,
  originalPrice: 5000,
  rating: 5,
  reviews: 24,
  images: [
    'https://private-us-east-1.manuscdn.com/sessionFile/LqL5ZObKENavRKPg7nafDJ/sandbox/AVQQJ0FcMc3FpAH6ZbsHQ1-img-1_1771182853000_na1fn_cHJvZHVjdC1kaWFtb25kLTE.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTHFMNVpPYktFTmF2UktQZzduYWZESi9zYW5kYm94L0FWUVFKMEZjTWMzRnBBSDZaYnNIUTEtaW1nLTFfMTc3MTE4Mjg1MzAwMF9uYTFmbl9jSEp2WkhWamRDMWthV0Z0YjI1a0xURS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=B4-z7DdwoFZrcAmAFyxN6VvFtwFOdLHR-6hfpnEHBGdhVcGU1YavojtbTUXl-YrJ5bQPYknI6zsJq-BwyQKarPKIxP7CVKySauV0cCUr8GBGnBfhZJbFCODuDcI1OeiDIUvZBnmID8Rm6PsUbFMW1AQu7PfYUBNXSBiHvOJ2LjsRGwwzIN5oYD~C9Jty2JILTXGhdp1zH~1R-P-9Hep4P24iYhhRKNZcRP~uCDcLRLvEgLOyyAHWh5vIcCptqjeS~3PBNKVQzWmmlCtSk07UgDknnTndJ4wSXey9wWfXoTzc3gvIWi8lnx3efvFeVp~XalJPBXc1FmrfGngoPtIYxQ__',
    'https://private-us-east-1.manuscdn.com/sessionFile/LqL5ZObKENavRKPg7nafDJ/sandbox/CHqSryRzlLqOvJVXd1OFzG-img-1_1771182874000_na1fn_cHJvZHVjdC1kaWFtb25kLTI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTHFMNVpPYktFTmF2UktQZzduYWZESi9zYW5kYm94L0NIcVNyeVJ6bExxT3ZKVlhkMU9GekctaW1nLTFfMTc3MTE4Mjg3NDAwMF9uYTFmbl9jSEp2WkhWamRDMWthV0Z0YjI1a0xUSS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=N4HdGEZfIAU0hOoOm7R2my9aCLPZJgJFWnNQdzkZf18W6RycJfTKdtADQJt1so4yDtsL5agRP9-vacz7c9hpxkQWOdb0-C~5~VTL7Oibm91Tkm4-5vleLTwVxoc6KLdgyGuz0oe3mgbSG3dzxWlvmRMTBFKCVKPcUDuo~96RxqTvqft2gXInHbdCYjWkar22IRCuJPcxMA-VGk6qu1BHx~VfduJG1WNkD9B-ljhpfdAMYZFWh3UX1E8G-xD10vBrJhYpzrnuEZfpg-OzIsLBkDxkf0TXY-LjCfKkpRz6g-pi~76XcxsG8sLfZrSxRiE2zJlAZnM9pNq6YEJ3tL7kfg__',
    'https://private-us-east-1.manuscdn.com/sessionFile/LqL5ZObKENavRKPg7nafDJ/sandbox/z3P5A9chCa1QmwGCm4GzM3-img-1_1771182895000_na1fn_cHJvZHVjdC1kaWFtb25kLTM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTHFMNVpPYktFTmF2UktQZzduYWZESi9zYW5kYm94L3ozUDVBOWNoQ2ExUW13R0NtNEd6TTMtaW1nLTFfMTc3MTE4Mjg5NTAwMF9uYTFmbl9jSEp2WkhWamRDMWthV0Z0YjI1a0xUTS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=mYtbGz0IvJfuibr~vpUPkmm03zQMLn86m4r-cT2R12PBydyJOjx5yGaStvv7rU4tHasXMcqbyBTrQydGxLnKB-aNZHXnqN8Webc1-rz3Hh1S7ykpg4gDPASI1fxzX~ylisjFi6afolbKVZG~U5SQhyE0u2W44ft-jzr~Jc0778xJMWa0LDijEXs9h6TZ-~-nYbCe3v9rRTRNIDTDPKKFHFJSPYFfoPepfqaRznJrI1dIkwoa8dziBxtrMYt-aFC66UzgQLCgJ5s6omU1HcmZ1qwX5YogtzBWovEqP2mssb9QBRwYNa8yX1oWSaGpP~l6N0JwOVwU6e7vlEE1f8A~-g__',
  ],
  description: 'This exceptional round brilliant diamond showcases perfect light performance with ideal proportions. Certified by GIA with H color and VS1 clarity, this stone represents the pinnacle of diamond quality at an exceptional value.',
  badge: 'Best Value',
  specs: [
    {
      title: 'Diamond Information',
      specs: {
        'Shape': 'Round Brilliant',
        'Carat': '1.50',
        'Color': 'H',
        'Clarity': 'VS1',
        'Cert. Number': 'GIA-1232785235',
      } as Record<string, string | number>,
    },
    {
      title: 'Diamond Performance',
      specs: {
        'Light Performance': 'Ideal',
        'Cut': 'Excellent',
        'Polish': 'Excellent',
        'Symmetry': 'Excellent',
        'Fluorescence': 'None',
        'Eye Clean': 'Yes',
      } as Record<string, string | number>,
    },
    {
      title: 'Diamond Specifications',
      specs: {
        'Depth %': '61.3',
        'Table %': '57.0',
        'Crown Angle': '34.5°',
        'Pavilion Angle': '40.6°',
        'Star %': '55.0',
        'Lower Girdle %': '75.0',
      } as Record<string, string | number>,
    },
  ],
};

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumbs */}
      <div className="pt-24 pb-6 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-foreground/60">
            <a href="/" className="hover:text-foreground transition-colors">
              Home
            </a>
            <span>/</span>
            <a href="/diamonds" className="hover:text-foreground transition-colors">
              Diamonds
            </a>
            <span>/</span>
            <span className="text-foreground">{mockProduct.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Product Gallery */}
          <ProductGallery images={mockProduct.images} productName={mockProduct.name} />

          {/* Right: Product Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            {mockProduct.badge && (
              <div className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-4">
                {mockProduct.badge}
              </div>
            )}

            {/* Product Name */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {mockProduct.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg text-accent">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-foreground/60">
                ({mockProduct.reviews} verified reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              {mockProduct.description}
            </p>

            {/* Price Section */}
            <div className="mb-8 pb-8 border-b border-border">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-foreground">
                  ${mockProduct.price.toLocaleString()}
                </span>
                <span className="text-lg text-foreground/50 line-through">
                  ${mockProduct.originalPrice.toLocaleString()}
                </span>
                <span className="text-sm font-semibold text-accent">
                  Save ${(mockProduct.originalPrice - mockProduct.price).toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-foreground/60">
                Financing available at checkout
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-foreground hover:bg-secondary transition-colors"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 text-foreground font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-foreground hover:bg-secondary transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <motion.button
                onClick={handleAddToCart}
                className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  isAdded
                    ? 'bg-accent/20 text-accent'
                    : 'bg-accent text-accent-foreground hover:shadow-lg'
                }`}
                whileHover={{ scale: isAdded ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isAdded ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </>
                )}
              </motion.button>

              {/* Book Appointment Button */}
              <button className="w-full py-4 border-2 border-foreground text-foreground font-semibold rounded-lg hover:bg-foreground/5 transition-colors duration-300">
                Book Appointment
              </button>

              {/* Wishlist Button */}
              <button className="w-full py-3 flex items-center justify-center gap-2 text-foreground/70 hover:text-foreground transition-colors duration-300">
                <Heart className="w-5 h-5" />
                Add to Wishlist
              </button>
            </div>

            {/* Trust Signals */}
            <div className="space-y-3 p-4 bg-secondary/30 rounded-lg">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    GIA Certified
                  </p>
                  <p className="text-xs text-foreground/60">
                    Independently verified diamond quality
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    15-Day Returns
                  </p>
                  <p className="text-xs text-foreground/60">
                    Hassle-free returns within 15 days
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Insured Shipping
                  </p>
                  <p className="text-xs text-foreground/60">
                    Free worldwide shipping with insurance
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Specifications Section */}
        <motion.div
          className="mt-16 pt-16 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Technical Specifications
          </h2>
          <TechnicalSpecs sections={mockProduct.specs} />
        </motion.div>

        {/* Related Products Section */}
        <motion.div
          className="mt-16 pt-16 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-8">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-secondary rounded-lg overflow-hidden">
                <div className="aspect-square bg-muted animate-pulse" />
                <div className="p-4">
                  <div className="h-4 bg-muted rounded mb-2 animate-pulse" />
                  <div className="h-4 bg-muted rounded w-2/3 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
