import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ImageCycler({ images, alt, interval = 3500, className = '' }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative w-full h-full ${className}`}>
      <AnimatePresence mode="sync">
        <motion.img
          key={index}
          src={images[index]}
          alt={alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
}
