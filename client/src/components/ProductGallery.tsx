import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

/**
 * ProductGallery Component
 * Design Philosophy: Minimalist luxury with smooth interactions
 * - Sticky main image display
 * - Scroll-snapping thumbnail carousel
 * - Smooth transitions between images
 */
export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="sticky top-24 space-y-4">
      {/* Main Image */}
      <motion.div
        className="relative w-full aspect-square bg-secondary rounded-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          key={selectedIndex}
          src={images[selectedIndex]}
          alt={`${productName} - Image ${selectedIndex + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background transition-colors duration-200 flex items-center justify-center shadow-lg"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background transition-colors duration-200 flex items-center justify-center shadow-lg"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-background/80 rounded-full text-xs font-semibold text-foreground">
          {selectedIndex + 1} / {images.length}
        </div>
      </motion.div>

      {/* Thumbnail Carousel */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              selectedIndex === index
                ? 'border-accent shadow-lg'
                : 'border-border hover:border-accent/50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.button>
        ))}
      </div>

      {/* Additional Info */}
      <div className="pt-4 border-t border-border space-y-3">
        <div>
          <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-2">
            Certifications
          </p>
          <div className="flex gap-2">
            <div className="px-3 py-2 bg-secondary rounded text-xs font-medium text-foreground">
              GIA Certified
            </div>
            <div className="px-3 py-2 bg-secondary rounded text-xs font-medium text-foreground">
              Eye Clean
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-2">
            Shipping
          </p>
          <p className="text-sm text-foreground">
            Ships within 2-3 business days with insured FedEx
          </p>
        </div>
      </div>
    </div>
  );
}
