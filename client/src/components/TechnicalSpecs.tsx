import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SpecSection {
  title: string;
  specs: Record<string, string | number>;
}

interface TechnicalSpecsProps {
  sections: SpecSection[];
}

/**
 * TechnicalSpecs Component
 * Design Philosophy: Technical depth with minimalist presentation
 * - Accordion-style sections for specifications
 * - Clean table layout for data
 * - ASET and Idealscope placeholder images
 */
export default function TechnicalSpecs({ sections }: TechnicalSpecsProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    [sections[0]?.title]: true,
  });

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="space-y-4">
      {sections.map((section) => (
        <motion.div
          key={section.title}
          className="border border-border rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Section Header */}
          <button
            onClick={() => toggleSection(section.title)}
            className="w-full flex items-center justify-between p-4 hover:bg-secondary transition-colors duration-200"
          >
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
              {section.title}
            </h3>
            <motion.div
              animate={{ rotate: expandedSections[section.title] ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 text-foreground/60" />
            </motion.div>
          </button>

          {/* Section Content */}
          {expandedSections[section.title] && (
            <motion.div
              className="border-t border-border p-4 bg-background/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(section.specs).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <span className="text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-1">
                      {key}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
