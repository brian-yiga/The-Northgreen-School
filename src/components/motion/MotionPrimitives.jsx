import React from 'react';
import { motion } from 'framer-motion';

// Smooth editorial easing curve
export const EDITORIAL_EASE = [0.22, 1, 0.36, 1];

export const RevealOnScroll = ({
  children,
  delay = 0,
  yOffset = 32,
  duration = 0.75,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: EDITORIAL_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  className = '',
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: EDITORIAL_EASE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const EditorialImage = ({ src, alt, className = '', aspectClass = 'aspect-[4/3]' }) => {
  return (
    <div className={`overflow-hidden rounded-2xl bg-tngs-mint/30 ${aspectClass} ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        initial={{ scale: 1.08, opacity: 0.85 }}
        whileInView={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.04 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: EDITORIAL_EASE }}
        className="h-full w-full object-cover"
      />
    </div>
  );
};