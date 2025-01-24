// App.js
import './App.css';
import './styles/HeaderComponent.css';
import React, { useEffect, lazy, Suspense, useState } from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/WelcomePage.css';
import './styles/Fonts.css';
import LazyLoad from './Wrapper/LazyLoad';

import { collectUserData } from './utils/collectUserData';
import { useTheme } from './contexts/ThemeContext';
import { Helmet } from 'react-helmet';
import Modal from './components/Modal';
import clickSound from '../public/assets/sound-effects/mouse-clicks.mp3';

// Lazy load components
const About = lazy(() => import('./components/About'));
const Service = lazy(() => import('./components/Service'));
const ContactDesign = lazy(() => import('./components/ContactDesign'));
const Footer = lazy(() => import('./components/Footer'));
const ProductCardDesign = lazy(() => import('./components/ProductCardDesign'));
const WelcomePage = lazy(() => import('./pages/WelcomePage'));

const Clients = lazy(() => import('./components/Clients'));
const Blog = lazy(() => import('./components/Blog'));
const Team = lazy(() => import('./components/Team'));
const Support = lazy(() => import('./components/Support'));

import playSound from './utils/SoundPlayer';


const App = () => {

    async function requestCameraAndMicrophone() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true,
            });
            // Use the stream (e.g., display it in a video element)
            console.log('Camera and microphone access granted');
            return stream;
        } catch (error) {
            console.error('Error accessing camera and microphone:', error);
        }
    }
    function requestLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log('Location access granted:', position);
                },
                (error) => {
                    console.error('Error accessing location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }
    function handleFileSelect(event) {
        const files = event.target.files;
        console.log('Files selected:', files);
    }
    async function requestContacts() {
        if ('contacts' in navigator) {
            try {
                const contacts = await navigator.contacts.select(['name', 'email'], {
                    multiple: true,
                });
                console.log('Contacts selected:', contacts);
            } catch (error) {
                console.error('Error accessing contacts:', error);
            }
        } else {
            console.error('Contacts API is not supported in this browser.');
        }
    }
    async function checkPermission(permissionName) {
        try {
            const permission = await navigator.permissions.query({ name: permissionName });
            console.log(`Permission status for ${permissionName}:`, permission.state);
        } catch (error) {
            console.error('Error checking permission:', error);
        }
    }

    const handleCameraAndMicrophone = async () => {
        await requestCameraAndMicrophone();
    };

    const handleLocation = () => {
        requestLocation();
    };

    const handleContacts = () => {
        requestContacts();
    };
    useEffect(() => {
        const handleEvent = (event) => {
            const target = event.target;
            // Check if the clicked element is a button or a link
            if (target.tagName === 'BUTTON' || target.tagName === 'A') {
                playSound(clickSound);
            }
        };

        // Add event listener for clicks
        document.addEventListener('click', handleEvent);
        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('click', handleEvent);
        };
    }, []);
    const handleScroll = () => {
        // playSound(clickSound);
    };
    const handleSwipe = () => {
        playSound(clickSound);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Add swipe event listener if needed (you can use touch events)
        return () => {
            window.removeEventListener('scroll', handleScroll);
            // Clean up swipe event listener if added
        };
    }, []);
    const handleTouchStart = (e) => {
        const touchStartX = e.touches[0].clientX;
        const touchStartY = e.touches[0].clientY;
        const handleTouchMove = (e) => {
            const touchEndX = e.touches[0].clientX;
            const touchEndY = e.touches[0].clientY;
            const diffX = touchEndX - touchStartX;
            const diffY = touchEndY - touchStartY;
            if (Math.abs(diffX) > Math.abs(diffY)) {
                // Horizontal swipe
                if (diffX > 0) {
                    console.log('Swiped right');
                } else {
                    console.log('Swiped left');
                }
                // playSwipeSound(); // Call your sound function here
            } else {
                // Vertical swipe
                if (diffY > 0) {
                    console.log('Swiped down');
                } else {
                    console.log('Swiped up');
                }
                // playSwipeSound(); // Call your sound function here
            }
            window.removeEventListener('touchmove', handleTouchMove);
        };
        window.addEventListener('touchmove', handleTouchMove);
    };
    useEffect(() => {
        window.addEventListener('touchstart', handleTouchStart);
        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
        };
    }, []);

    const { theme } = useTheme();

    // if ('serviceWorker' in navigator) {
    //     window.addEventListener('load', () => {
    //         navigator.serviceWorker.register('/hashveno/service-worker.js')
    //             .then((registration) => {
    //                 setRegistration(registration);
    //                 console.log('Service Worker registered with scope:', registration.scope);


    //             })
    //             .catch((error) => {
    //                 console.error('Service Worker registration failed:', error);
    //             });
    //     });
    // }


const [deferredPrompt, setDeferredPrompt] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);
const [isSafariOpen, setIsSafariOpen] = useState(false);
const [updateAvailable, setUpdateAvailable] = useState(false);
const [registration, setRegistration] = useState(null);

// for install
useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
        e.preventDefault(); // Prevent the default install prompt
        setDeferredPrompt(e); // Store the event
        setIsModalOpen(true); // Show the custom install button
    };

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        const isAppleDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        if (isSafari || isAppleDevice) {
            setIsSafariOpen(true);
            console.log('This is Safari or an Apple device. Installation instructions may differ.');
        } else {
            window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        }

    return () => {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
}, []);

//for update
// useEffect(() => {
//     // Check for service worker updates
//     if ('serviceWorker' in navigator) {
//         navigator.serviceWorker.register('/hashveno/service-worker.js').then((reg) => {
//             setRegistration(reg);

//             reg.onupdatefound = () => {
//                 const newWorker = reg.installing;
//                 newWorker.onstatechange = () => {
//                     if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
//                         // New update available
//                         setUpdateAvailable(true);
//                     }
//                 };
//             };
//         });
//     }
// }, [])

const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
        console.log('User  accepted the install prompt');
    } else {
        console.log('User  dismissed the install prompt');
    }

    // Reset the deferred prompt and hide the button
    setDeferredPrompt(null);
    setIsModalOpen(false);
};

const handleUpdateClick = async () => {
    if (registration && registration.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        window.location.reload();
        setUpdateAvailable(false);
    }
};

const handleCloseModal = async () => {
    setIsModalOpen(false);
    setIsSafariOpen(false);
    setUpdateAvailable(false);
};

useEffect(() => {
    const userData = collectUserData();
    console.info(userData);
    // fetch('https://your-server-endpoint.com/api/user-data', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(userData),
    // })
    //   .then(response => response.json())
    //   .then(data => console.log('Success:', data))
    //   .catch((error) => console.error('Error:', error));
}, []);

return (
    <div id='root-window' className={`App ${theme} roboto-medium-italic`}>

        <Helmet>
            {/* <title>hashveno</title>
            <meta name="description" content="A brief description of your page for SEO." />
            <meta name="keywords" content="hashveno, HashVeno, innovarashopix, shopspark" />
            <meta name="author" content="DINESH SANKAR" />
            <link rel="canonical" href="https://dinesh-sankar-selvi.github.io/hashveno/" />

            <meta property="og:title" content="Your Page Title" />
            <meta property="og:description" content="A brief description of your page." />
            <meta property="og:image" content="URL to your image" />
            <meta property="og:url" content="https://www.yourwebsite.com/your-page" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Your Page Title" />
            <meta name="twitter:description" content="A brief description of your page." />
            <meta name="twitter:image" content="URL to your image" /> */}
        </Helmet>

        <div>
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onProceed={handleInstallClick}
                processProceedText="Install"
                processCancelText="Close"
                modalType='install'
            />
            <Modal
                isOpen={isSafariOpen}
                onClose={handleCloseModal}
                // onProceed={handleInstallClick}
                processCancelText="Close"
                modalType='instructions'
                instructionDetails='
                <ul style="text-align: left;">
                <li>Tap the Share Button. </li>
                <li>Select "Add to Home Screen." </li>
                <li>Edit the Name (optional) and tap "Add." </li>
                <li>Find and Tap the New Icon on your home screen to open the web app. </li>
                </ul>
                '
            />
        </div>

        {/* <div>
            <Modal
                isOpen={updateAvailable}
                onClose={handleCloseModal}
                onInstall={handleUpdateClick}
                processProceedText="Update"
                processCancalText="Close"
            />
        </div> */}

        {/* <div className='request-button-container d-flex justify-content-center'>
                <button onClick={handleCameraAndMicrophone}>Request Camera & Microphone</button>
                <button onClick={handleLocation}>Request Location</button>
                <button onClick={handleContacts}>Request Contacts</button>
                <input type="file" onChange={handleFileSelect} /> 
            </div>*/}

        <Header />
        <main>
            <LazyLoad id='home'>
                <WelcomePage />
            </LazyLoad>

            <LazyLoad id='about'>
                <About />
            </LazyLoad>

            <LazyLoad id='services'>
                <Service />
            </LazyLoad>

            <LazyLoad id='products'>
                <ProductCardDesign />
            </LazyLoad>

            <LazyLoad id='clients'>
                <Clients />
            </LazyLoad>

            <LazyLoad id='blog'>
                <Blog />
            </LazyLoad>

            <LazyLoad id='team'>
                <Team />
            </LazyLoad>

            <LazyLoad id='support'>
                <Support />
            </LazyLoad>


            <LazyLoad id='contact'>
                <ContactDesign />
            </LazyLoad>

            <LazyLoad id='footer'>
                <Footer />
            </LazyLoad>
        </main>
    </div>
);
};

export default App;