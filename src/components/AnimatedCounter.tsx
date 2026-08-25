import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';

export const AnimatedCounter = ({ from = 0, to, duration = 2, className = "" }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        if (!hasAnimated) {
          animate(count, to, { duration });
          setHasAnimated(true);
        }
      }}
    >
      {rounded}
    </motion.span>
  );
};
