// Modal.js
import React from 'react';
import '../styles/Modal.css'; // Optional: Add your styles here
import { Helmet } from 'react-helmet';

const Modal = ({ 
    isOpen, 
    onClose, 
    onProceed, 
    processProceedText, 
    processCancelText, 
    modalType, // 'install', 'update', or 'instructions'
    instructionDetails 
}) => {
    if (!isOpen) return null;

    const renderContent = () => {
        switch (modalType) {
            case 'install':
                return (
                    <>
                        <h2>Install Our App</h2>
                        <p>Would you like to install our app for a better experience?</p>
                    </>
                );
            case 'update':
                return (
                    <>
                        <h2>Update Available</h2>
                        <p>A new version of the app is available. Would you like to update?</p>
                    </>
                );
            case 'instructions':
                return (
                    <>
                        <h2>Instructions</h2>
                        <div dangerouslySetInnerHTML={{ __html: instructionDetails }} />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <Helmet>
                <title>{processProceedText}</title>
                <meta name="description" content="Install For Make Usage Better" />
            </Helmet>
            <div className="modal-overlay">
                <div className="modal-content">
                    {renderContent()}
                    <div className='w-50 d-flex justify-content-evenly align-items-center'>
                        {onProceed && (
                            <button onClick={onProceed} className="spectacledcoder-hover-fill-button2">
                                <div className="color-fill-2"></div>
                                <p>{processProceedText}</p>
                            </button>
                        )}
                        <button onClick={onClose} className="spectacledcoder-hover-fill-button2">
                            <div className="color-fill-2"></div>
                            <p>{processCancelText}</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;