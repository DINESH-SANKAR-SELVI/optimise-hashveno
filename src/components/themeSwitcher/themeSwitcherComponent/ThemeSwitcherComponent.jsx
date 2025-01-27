import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { FaLightbulb } from 'react-icons/fa';
import './ThemeSwitcherComponent.css'

const ThemeSwitcherComponent = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className='theme-toggle-container' >
            <label className="theme-toggle" >
                <input type="checkbox" onClick={toggleTheme} />
                <FaLightbulb />
                <span>Change theme</span>
            </label>
        </div>
    );
};

export default ThemeSwitcherComponent;