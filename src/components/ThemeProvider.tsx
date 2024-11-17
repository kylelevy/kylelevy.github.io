"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check for saved user preference in local storage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDark(savedTheme === 'dark');
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        } else {
            // Check the user's system preference
            const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const prefersDark = darkModeMediaQuery.matches;
            setIsDark(prefersDark);
            document.documentElement.classList.toggle('dark', prefersDark);

            // Update state on change
            const handleChange = (event: MediaQueryListEvent) => {
                const isDarkMode = event.matches;
                setIsDark(isDarkMode);
                document.documentElement.classList.toggle('dark', isDarkMode);
            };

            // Event Listener
            darkModeMediaQuery.addEventListener('change', handleChange);

            // Cleanup event listener on unmount
            return () => {
                darkModeMediaQuery.removeEventListener('change', handleChange);
            };
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark');
        setIsDark(prev => !prev); // Toggle the state
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
