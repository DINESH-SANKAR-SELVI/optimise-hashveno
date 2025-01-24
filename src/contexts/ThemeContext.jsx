// src/context/ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// ThemeProvider component to wrap around parts of your app that need access to the theme
export const ThemeProvider = ({ children }) => {
    // State to hold the current theme, defaulting to 'light'
    const [theme, setTheme] = useState('light');

    // Function to toggle between themes
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Provide the theme and toggle function to the context
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
    const context = useContext(ThemeContext);
    
    // Ensure that the hook is used within a ThemeProvider
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    
    return context;
};