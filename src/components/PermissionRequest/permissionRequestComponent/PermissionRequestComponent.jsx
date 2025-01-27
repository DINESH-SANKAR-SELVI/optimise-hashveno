import React from 'react';

const PermissionRequestComponent = () => {
    const handlePermissionRequest = async (permissionType) => {
        try {
            switch (permissionType) {
                case 'camera':
                    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                    console.log('Camera and microphone access granted', stream);
                    break;
                case 'location':
                    navigator.geolocation.getCurrentPosition(
                        (position) => console.log('Location access granted:', position),
                        (error) => console.error('Error accessing location:', error)
                    );
                    break;
                case 'contacts':
                    if ('contacts' in navigator) {
                        const contacts = await navigator.contacts.select(['name', 'email'], { multiple: true });
                        console.log('Contacts selected:', contacts);
                    } else {
                        console.error('Contacts API is not supported in this browser.');
                    }
                    break;
                default:
                    console.error('Unknown permission type');
            }
        } catch (error) {
            console.error(`Error accessing ${permissionType}:`, error);
        }
    };

    const handleFileSelect = (event) => {
        const files = event.target.files;
        console.log('Files selected:', files);
    };

    return (
        <div className='request-button-container d-flex justify-content-center'>
            <button onClick={() => handlePermissionRequest('camera')}>Request Camera & Microphone</button>
            <button onClick={() => handlePermissionRequest('location')}>Request Location</button>
            <button onClick={() => handlePermissionRequest('contacts')}>Request Contacts</button>
            <input type="file" onChange={handleFileSelect} />
        </div>
    );
};

export default PermissionRequestComponent;