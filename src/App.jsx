/****************** In-Build Functions************************/
import React, { useEffect, lazy } from 'react';
import { Helmet } from 'react-helmet';
/*************************************************************/

/****************** Custom Functions *************************/
import { collectUserData } from './utils/collectUserData';
import usePermissions from './hooks/usePermissions';
import useEventListeners from './hooks/useEventListeners';
/*************************************************************/

/****************** Contexts *********************************/
import { useTheme } from './contexts/ThemeContext';
/*************************************************************/

/****************** Media Files ******************************/

/*************************************************************/

/****************** Styles ***********************************/
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/Fonts.css';
/*************************************************************/

/****************** Components *******************************/
import InstallUpdatePopUpComponent from './components/installUpdatePopUp/installUpdatePopUpComponent/installUpdatePopUpComponent';
import HeaderComponent from './components/header/headerComponent/HeaderComponent';
// import PermissionRequestComponent from './components/PermissionRequest/permissionRequestComponent/PermissionRequestComponent';
/*************************************************************/

/****************** Pages ************************************/
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ClientsPage = lazy(() => import('./pages/ClientsPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FooterPage = lazy(() => import('./pages/FooterPage'));
// const ConstructionPage = lazy(() => import('./pages/ConstructionPage'));
/*************************************************************/

const App = () => {
    const { theme } = useTheme();
    const {
        isModalOpen,
        isSafariOpen,
        handleInstallClick,
        handleCloseModal,
    } = usePermissions();

    useEventListeners();

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

            <HeaderComponent />
            <HomePage id='home' />
            <AboutPage id='about' />
            <ServicesPage id='services' />
            <ProductsPage id='products' />
            <ClientsPage id='clients' />
            <BlogPage id='blog' />
            <TeamPage id='team' />
            <SupportPage id='support' />
            <ContactPage id='contact' />
            <FooterPage id='footer' />
            {/* <ConstructionPage id='construction' /> */}
            {/* <PermissionRequestComponent id='permission' /> */}

            <InstallUpdatePopUpComponent
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onProceed={handleInstallClick}
                processProceedText="Install"
                processCancelText="Close"
                modalType='install'
            />
            <InstallUpdatePopUpComponent
                isOpen={isSafariOpen}
                onClose={handleCloseModal}
                processCancelText="Close"
                modalType='instructions'
                instructionDetails={`
                    <ul style="text-align: left;">
                        <li>Tap the Share Button.</li>
                        <li>Select "Add to Home Screen."</li>
                        <li>Edit the Name (optional) and tap "Add."</li>
                        <li>Find and Tap the New Icon on your home screen to open the web app.</li>
                    </ul>
                `}
            />
        </div>
    );
};

export default App;