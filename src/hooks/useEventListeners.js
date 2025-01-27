// src/hooks/useEventListeners.js
import { useEffect } from 'react';
import playSound from '../utils/SoundPlayer';
import clickSound from '../../public/assets/sound-effects/mouse-clicks.mp3';

const useEventListeners = () => {
    useEffect(() => {
        const handleEvent = (event) => {
            const target = event.target;
            if (target.tagName === 'BUTTON' || target.tagName === 'A') {
                playSound(clickSound);
            }
        };

        document.addEventListener('click', handleEvent);
        return () => {
            document.removeEventListener('click', handleEvent);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            // Optional: Add scroll-related functionality
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleTouchStart = (e) => {
            const touchStartX = e.touches[0].clientX;
            const touchStartY = e.touches[0].clientY;
            const handleTouchMove = (e) => {
                const touchEndX = e.touches[0].clientX;
                const touchEndY = e.touches[0].clientY;
                const diffX = touchEndX - touchStartX;
                const diffY = touchEndY - touchStartY;
                if (Math.abs(diffX) > Math.abs(diffY)) {
                    console.log(diffX > 0 ? 'Swiped right' : 'Swiped left');
                } else {
                    console.log(diffY > 0 ? 'Swiped down' : 'Swiped up');
                }
                window.removeEventListener('touchmove', handleTouchMove);
            };
            window.addEventListener('touchmove', handleTouchMove);
        };

        window.addEventListener('touchstart', handleTouchStart);
        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
        };
    }, []);
};

export default useEventListeners;