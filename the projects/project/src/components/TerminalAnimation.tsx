import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TerminalAnimation() {
  const [stats, setStats] = useState({
    cpu: 0,
    memory: 0,
    network: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        cpu: Math.random() * 100,
        memory: Math.random() * 100,
        network: Math.random() * 1000
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono bg-gray-800 rounded-lg p-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-green-400">
          <p>$ system_status</p>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="ml-2">CPU Usage: {stats.cpu.toFixed(1)}%</p>
          </motion.div>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="ml-2">Memory: {stats.memory.toFixed(1)}%</p>
          </motion.div>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="ml-2">Network: {stats.network.toFixed(0)} KB/s</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}