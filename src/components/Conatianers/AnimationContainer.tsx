"use client"
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';// Assuming you've created the useIsMdScreen hook
import useIsMdScreen from '@/Hooks/useIsMdScreen';

interface AnimationContainerProps {
    children: ReactNode;
    className?: string;
}

const AnimationContainer: React.FC<AnimationContainerProps> = ({ children, className }) => {
    const isMdScreen = useIsMdScreen();

    return (
        <motion.section
            initial={isMdScreen ? { opacity: 0 } : {}}
            animate={isMdScreen ? { opacity: 1 } : {}}
            exit={isMdScreen ? { opacity: 0 } : {}}
            className={className}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            {children}
        </motion.section>
    );
}

export default AnimationContainer;
