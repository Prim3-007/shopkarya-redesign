import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
  badgeColor?: 'accent' | 'secondary';
  rating?: number;
  reviews?: number;
}

/**
 * ProductCard Component
 * Design Philosophy: Minimalist luxury with subtle hover effects
 * - Product image with hover zoom
 * - Price and specifications
 * - Value badges (Best Value, Top Pick)
 * - Quick add to cart and wishlist
 */
export default function ProductCard({
  id,
  name,
  price,
  image,
  badge,
  badgeColor = 'accent',
  rating,
  reviews,
}: ProductCardProps) {
  return (
    <motion.div
      className="group relative"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Product Image Container */}
      <div className="relative overflow-hidden rounded-lg bg-secondary mb-4">
        <motion.img
          src={image}
          alt={name}
          className="w-full aspect-square object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />

        {/* Badge */}
        {badge && (
          <div
            className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${
              badgeColor === 'accent' ? 'bg-accent' : 'bg-secondary'
            }`}
          >
            {badge}
          </div>
        )}

        {/* Overlay Actions */}
        <motion.div
          className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end justify-between p-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-lg">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 shadow-lg">
            <Heart className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-300">
          {name}
        </h3>

        {/* Rating */}
        {rating && reviews && (
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${
                    i < Math.floor(rating) ? 'text-accent' : 'text-muted'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-foreground/60">({reviews})</span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-foreground">
            ${price.toLocaleString()}
          </span>
          {badge && (
            <span className="text-xs text-foreground/50 line-through">
              ${(price * 1.15).toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
