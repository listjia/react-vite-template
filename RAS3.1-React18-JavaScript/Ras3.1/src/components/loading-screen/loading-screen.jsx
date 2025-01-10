import React from 'react';
import { motion } from 'framer-motion';

// ----------------------------------------------------------------------

export function LoadingScreen() {
  const paths = [
    // “扬”字的路径
    {
      d: 'M 50 100 L 50 50 Q 50 30 70 30 L 130 30 Q 150 30 150 50 L 150 100',
      color: '#00a8ff',
    },
    {
      d: 'M 100 100 L 100 50',
      color: '#00a8ff',
    },
    // “子”字的路径
    {
      d: 'M 200 100 L 200 50 Q 200 30 220 30 L 280 30 Q 300 30 300 50 L 300 100',
      color: '#00ffaa',
    },
    {
      d: 'M 250 100 L 250 50',
      color: '#00ffaa',
    },
    // “江”字的路径
    {
      d: 'M 350 100 L 350 50 Q 350 30 370 30 L 430 30 Q 450 30 450 50 L 450 100',
      color: '#ff6b6b',
    },
    {
      d: 'M 400 100 L 400 50',
      color: '#ff6b6b',
    },
  ];
  return (
    <motion.div
      style={{
        display: 'flex',
        // top: 0,
        // left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)',
        zIndex: 999998,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.3)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <svg width="500" height="150" viewBox="0 0 500 150" style={{ overflow: 'visible' }}>
        {paths.map((path, index) => (
          <motion.path
            key={index}
            d={path.d}
            stroke={path.color}
            strokeWidth="15"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: index * 0.5, // 每个路径的动画延迟
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}

// ----------------------------------------------------------------------
