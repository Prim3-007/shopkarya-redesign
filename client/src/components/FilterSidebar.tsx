import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FilterSidebarProps {
  onFiltersChange?: (filters: Record<string, string[]>) => void;
}

/**
 * FilterSidebar Component
 * Design Philosophy: Technical depth with minimalist presentation
 * - Collapsible filter sections for 4Cs specifications
 * - Range sliders for carat and price
 * - Clean, organized layout
 */
export default function FilterSidebar({ onFiltersChange }: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    shape: true,
    carat: true,
    color: false,
    clarity: false,
    cut: false,
    price: false,
  });

  const [filters, setFilters] = useState<Record<string, string[]>>({
    shape: [],
    carat: [],
    color: [],
    clarity: [],
    cut: [],
    price: [],
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFilterChange = (section: string, value: string) => {
    setFilters((prev) => {
      const current = prev[section] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [section]: updated };
    });
  };

  const handleReset = () => {
    setFilters({
      shape: [],
      carat: [],
      color: [],
      clarity: [],
      cut: [],
      price: [],
    });
  };

  const filterSections = [
    {
      id: 'shape',
      label: 'Shape',
      options: ['Round', 'Oval', 'Cushion', 'Pear', 'Emerald', 'Princess'],
    },
    {
      id: 'carat',
      label: 'Carat Weight',
      options: ['0.5 - 1.0', '1.0 - 1.5', '1.5 - 2.0', '2.0+'],
    },
    {
      id: 'color',
      label: 'Color',
      options: ['D', 'E', 'F', 'G', 'H', 'I', 'J'],
    },
    {
      id: 'clarity',
      label: 'Clarity',
      options: ['IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2'],
    },
    {
      id: 'cut',
      label: 'Cut Quality',
      options: ['Ideal', 'Excellent', 'Very Good', 'Good', 'Fair'],
    },
    {
      id: 'price',
      label: 'Price Range',
      options: ['Under $1,000', '$1,000 - $2,500', '$2,500 - $5,000', '$5,000+'],
    },
  ];

  const hasActiveFilters = Object.values(filters).some((f) => f.length > 0);

  return (
    <motion.aside
      className="w-full md:w-64 bg-background rounded-lg border border-border p-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-foreground">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={handleReset}
            className="text-xs font-semibold text-accent hover:text-accent/80 transition-colors duration-200"
          >
            Reset
          </button>
        )}
      </div>

      {/* Filter Sections */}
      <div className="space-y-4">
        {filterSections.map((section) => (
          <div key={section.id} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
            {/* Section Header */}
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between py-3 hover:text-accent transition-colors duration-200"
            >
              <span className="text-sm font-semibold text-foreground">
                {section.label}
              </span>
              <motion.div
                animate={{ rotate: expandedSections[section.id] ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4 text-foreground/60" />
              </motion.div>
            </button>

            {/* Section Options */}
            {expandedSections[section.id] && (
              <motion.div
                className="space-y-3 mt-3"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {section.options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={filters[section.id]?.includes(option) || false}
                      onChange={() => handleFilterChange(section.id, option)}
                      className="w-4 h-4 rounded border-border accent-accent cursor-pointer"
                    />
                    <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors duration-200">
                      {option}
                    </span>
                  </label>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <motion.div
          className="mt-6 pt-6 border-t border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-xs font-semibold text-foreground/60 mb-3 uppercase tracking-wide">
            Active Filters
          </p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(filters).map(([section, values]) =>
              values.map((value) => (
                <button
                  key={`${section}-${value}`}
                  onClick={() => handleFilterChange(section, value)}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium hover:bg-accent/20 transition-colors duration-200"
                >
                  {value}
                  <span className="text-accent/60">×</span>
                </button>
              ))
            )}
          </div>
        </motion.div>
      )}
    </motion.aside>
  );
}
