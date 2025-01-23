import React from 'react';
import { motion, useAnimation } from 'framer-motion';

export const ProgressBar = () => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({
      width: '100%',
      transition: { duration: 1, ease: 'linear' },
    });
  }, [controls]);

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '250px',
        height: '15px',
        backgroundColor: '#e0e0e0',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <motion.div
        style={{
          width: '0%',
          height: '100%',
          backgroundColor: '#007bff',
          borderRadius: '5px',
        }}
        animate={controls}
      />
    </div>
  );
};
