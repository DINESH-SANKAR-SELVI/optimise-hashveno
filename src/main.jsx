// In-Build Packages
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Context & Config
import './languages/i18n';
import { ThemeProvider } from './contexts/ThemeContext';

// Components
import App from './App.jsx'

/*******************************************************************************/

/* Styles */
import './Index.css';

/******************************************************************************/

/* Service Worker For Offline And Update and Install */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);

        // Check for updates
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;

          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                console.log('New update available. Please refresh the page.');
                showUpdateNotification();
              } else {
                console.log('Content is now available offline!');
              }
            }
          };
        };
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

function showUpdateNotification() {
  const updateNotification = document.createElement('div');
  updateNotification.innerText = 'A new version is available. Click to refresh.';
  updateNotification.style.position = 'fixed';
  updateNotification.style.bottom = '20px';
  updateNotification.style.right = '20px';
  updateNotification.style.backgroundColor = 'lightblue';
  updateNotification.style.padding = '10px';
  updateNotification.style.cursor = 'pointer';
  document.body.appendChild(updateNotification);

  updateNotification.addEventListener('click', () => {
    window.location.reload(true);
  });
}
/********************************************************************************/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
