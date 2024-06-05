import { useEffect, useState } from 'react';

const useIsMdScreen = () => {
    const [isMdScreen, setIsMdScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMdScreen(window.innerWidth >= 600); // Adjust the breakpoint value as needed
        };

        handleResize(); // Check initial screen size

        window.addEventListener('resize', handleResize); // Listen for resize events

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up event listener
        };
    }, []);

    return isMdScreen;
};

export default useIsMdScreen;
