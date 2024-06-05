"use client"
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimationContainerProps {
    children: ReactNode;
    className?: string;
}

const AnimationContainer: React.FC<AnimationContainerProps> = ({ children, className }) => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={className}
            transition={{ duration: 0.2, ease: "easeInOut" }}
        >
            {children}
        </motion.section>
    );
}

export default AnimationContainer;
