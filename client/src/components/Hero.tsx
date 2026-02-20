import { motion } from 'framer-motion';
import { Link } from 'wouter';

/**
 * Hero Section Component
 * Design Philosophy: Minimalist luxury with fluid motion
 * - Full-screen background image with subtle panning animation
 * - Elegant headline and CTA
 * - Asymmetric layout with text on left, image on right
 */
export default function Hero() {
  const heroImage = 'https://private-us-east-1.manuscdn.com/sessionFile/LqL5ZObKENavRKPg7nafDJ/sandbox/v9NNqVPbvlA7AZlXFCzDPB-img-1_1771182791000_na1fn_aGVyby1qZXdlbHJ5LWVsZWdhbnQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTHFMNVpPYktFTmF2UktQZzduYWZESi9zYW5kYm94L3Y5Tk5xVlBidmxBN0FabFhGQ3pEUEItaW1nLTFfMTc3MTE4Mjc5MTAwMF9uYTFmbl9hR1Z5YnkxcVpYZGxiSEo1TFdWc1pXZGhiblEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=hfezeTulM1IpPLMLVPNuDzpoYwcPWvOiClSqH1gIK6CU5pqQQx-t1BiA48zjhNHM2P6eeEmA3b176dnAwo7CKsqjtEVyy40dVohigFwYMDcBFooVvOPz25Hux-UdFatZH2Trq9Aqsvw-uryXODzDT4pevAARYvZ9prxGKjh1Im5BmLTm7KLHCnpPIbPXEEWfOevdPewcEIDtMU2EfNTXt9rwJjwtfywKEW14etfmMmjCFhz-gKEj21pjKk-kE-cs6yjCun0CkHC-WaNARrmrOCuQkSReoXVOZLX1CGe5X3Gn2ZIVzSkMwX8HHZl3v14P-vsIq~EKelIOEU1iKrqrNw__';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen pt-20 overflow-hidden bg-background">
      {/* Background Image with Panning Animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
        }}
      >
        <img
          src={heroImage}
          alt="Luxury jewelry showcase"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div
          className="w-full md:w-1/2 py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              Luxury Jewelry
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Designed for You
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/70 mb-8 max-w-md leading-relaxed"
          >
            Exquisite jewelry crafted with ethical diamonds and customizable designs at exceptional value.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Link href="/diamonds" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              Shop Diamonds
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-foreground text-foreground font-semibold rounded-lg hover:bg-foreground/5 transition-all duration-300">
              Book Appointment
            </button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-foreground/10 flex flex-wrap gap-8"
          >
            <div>
              <div className="text-sm font-semibold text-foreground mb-1">
                Ethical Sourcing
              </div>
              <div className="text-xs text-foreground/60">Certified diamonds</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground mb-1">
                Customizable
              </div>
              <div className="text-xs text-foreground/60">Design your own</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground mb-1">
                Low Price
              </div>
              <div className="text-xs text-foreground/60">Best value</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
