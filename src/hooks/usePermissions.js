import { useEffect, useState } from 'react';

const usePermissions = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSafariOpen, setIsSafariOpen] = useState(false);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setIsModalOpen(true);
        };

        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        const isAppleDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        if (isSafari || isAppleDevice) {
            setIsSafariOpen(true);
        } else {
            window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        }

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(outcome === 'accepted' ? 'User  accepted the install prompt' : 'User  dismissed the install prompt');
        setDeferredPrompt(null);
        setIsModalOpen(false);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setIsSafariOpen(false);
    };

    return {
        isModalOpen,
        isSafariOpen,
        handleInstallClick,
        handleCloseModal,
        setDeferredPrompt,
    };
};

export default usePermissions;