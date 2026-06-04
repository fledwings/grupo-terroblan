import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const aboutSection = document.getElementById('about');
      
      if (heroSection && aboutSection) {
        // Show the button when we've scrolled past the hero section
        // (i.e. we are at or past the "Nosotros" section)
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        
        // If the bottom of the hero section is above the middle of the screen, we consider
        // ourselves in the next section
        if (heroBottom <= window.innerHeight / 2) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        // Fallback
        if (window.scrollY > window.innerHeight * 0.5) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            size="icon"
            className="h-14 w-14 rounded-full bg-orange-600 hover:bg-orange-700 text-white shadow-lg flex items-center justify-center border-2 border-white"
            asChild
          >
            <a href="tel:4426767696" aria-label="Llamar ahora">
              <Phone className="h-6 w-6" />
            </a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
