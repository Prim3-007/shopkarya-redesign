import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

/**
 * Shop By Shape Component
 * Design Philosophy: Minimalist line-art icons with elegant hover effects
 * - Custom SVG icons for each diamond shape
 * - Responsive grid layout
 * - Smooth transitions on hover
 */

const shapes = [
  { id: 'round', label: 'Round', href: '/diamonds?shape=round' },
  { id: 'oval', label: 'Oval', href: '/diamonds?shape=oval' },
  { id: 'cushion', label: 'Cushion', href: '/diamonds?shape=cushion' },
  { id: 'pear', label: 'Pear', href: '/diamonds?shape=pear' },
  { id: 'emerald', label: 'Emerald', href: '/diamonds?shape=emerald' },
  { id: 'princess', label: 'Princess', href: '/diamonds?shape=princess' },
  { id: 'marquise', label: 'Marquise', href: '/diamonds?shape=marquise' },
  { id: 'radiant', label: 'Radiant', href: '/diamonds?shape=radiant' },
  { id: 'asscher', label: 'Asscher', href: '/diamonds?shape=asscher' },
  { id: 'heart', label: 'Heart', href: '/diamonds?shape=heart' },
];

function DiamondIcon({ shape }: { shape: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    round: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="50" cy="50" r="40" />
        <circle cx="50" cy="50" r="30" opacity="0.3" />
      </svg>
    ),
    oval: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="50" cy="50" rx="25" ry="40" />
        <ellipse cx="50" cy="50" rx="15" ry="30" opacity="0.3" />
      </svg>
    ),
    cushion: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M 20 30 Q 20 20 30 20 L 70 20 Q 80 20 80 30 L 80 70 Q 80 80 70 80 L 30 80 Q 20 80 20 70 Z" />
        <path d="M 35 35 Q 35 30 40 30 L 60 30 Q 65 30 65 35 L 65 65 Q 65 70 60 70 L 40 70 Q 35 70 35 65 Z" opacity="0.3" />
      </svg>
    ),
    pear: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M 50 15 Q 70 30 70 55 Q 70 80 50 85 Q 30 80 30 55 Q 30 30 50 15" />
        <path d="M 50 30 Q 60 40 60 55 Q 60 70 50 73 Q 40 70 40 55 Q 40 40 50 30" opacity="0.3" />
      </svg>
    ),
    emerald: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M 50 20 L 75 35 L 75 65 L 50 80 L 25 65 L 25 35 Z" />
        <path d="M 50 35 L 65 42 L 65 58 L 50 65 L 35 58 L 35 42 Z" opacity="0.3" />
      </svg>
    ),
    princess: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M 30 30 L 50 20 L 70 30 L 75 50 L 70 70 L 50 80 L 30 70 L 25 50 Z" />
        <path d="M 40 40 L 50 35 L 60 40 L 63 50 L 60 60 L 50 65 L 40 60 L 37 50 Z" opacity="0.3" />
      </svg>
    ),
    marquise: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M 30 50 Q 50 20 70 50 Q 50 80 30 50" />
        <path d="M 40 50 Q 50 35 60 50 Q 50 65 40 50" opacity="0.3" />
      </svg>
    ),
    radiant: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M 30 30 L 50 20 L 70 30 L 80 50 L 70 70 L 50 80 L 30 70 L 20 50 Z" />
        <path d="M 40 40 L 50 35 L 60 40 L 65 50 L 60 60 L 50 65 L 40 60 L 35 50 Z" opacity="0.3" />
      </svg>
    ),
    asscher: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M 35 35 L 50 25 L 65 35 L 75 50 L 65 65 L 50 75 L 35 65 L 25 50 Z" />
        <path d="M 42 42 L 50 37 L 58 42 L 63 50 L 58 58 L 50 63 L 42 58 L 37 50 Z" opacity="0.3" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M 50 80 C 30 65 20 55 20 45 C 20 35 28 28 35 28 C 42 28 50 35 50 35 C 50 35 58 28 65 28 C 72 28 80 35 80 45 C 80 55 70 65 50 80" />
      </svg>
    ),
  };

  return iconMap[shape] || null;
}

export default function ShopByShape() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop by Shape
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Explore our collection of premium diamonds in every shape and size
          </p>
        </motion.div>

        {/* Shape Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {shapes.map((shape) => (
            <motion.div key={shape.id} variants={itemVariants}>
              <Link href={shape.href} className="flex flex-col items-center group">
                {/* Icon Container */}
                <div className="w-24 h-24 flex items-center justify-center rounded-lg border border-border group-hover:border-accent transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 mb-4">
                  <div className="text-foreground/70 group-hover:text-accent transition-colors duration-300">
                    <DiamondIcon shape={shape.id} />
                  </div>
                </div>
                {/* Label */}
                <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  {shape.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
