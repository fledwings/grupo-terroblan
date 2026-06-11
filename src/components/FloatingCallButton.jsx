import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
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
              onClick={() => setDialogOpen(true)}
              aria-label="Llamar ahora"
            >
              <Phone className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-sm bg-white border-gray-200 text-black">
          <DialogHeader>
            <DialogTitle className="text-black text-center text-xl">Llamar ahora</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <a
              href="tel:4426767696"
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-colors"
            >
              <div>
                <p className="font-semibold text-black">Querétaro</p>
                <p className="text-lg text-orange-600">442-676-7696</p>
              </div>
              <Phone className="h-5 w-5 text-orange-500" />
            </a>
            <a
              href="tel:4271200178"
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-colors"
            >
              <div>
                <p className="font-semibold text-black">Otro contacto</p>
                <p className="text-lg text-orange-600">427-120-0178</p>
              </div>
              <Phone className="h-5 w-5 text-orange-500" />
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
