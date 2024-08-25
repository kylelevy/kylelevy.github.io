"use client";
import { useState, useEffect } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";

interface ToggleThemeProps {
    noReturn?: boolean;
}

export const ToggleTheme: React.FC<ToggleThemeProps> = ({ noReturn }) => {
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

    if (noReturn) {return null};
    
    return (
        <div className="grid">
            <a onClick={toggleTheme} className="text-black dark:text-white grid-center my-auto">
                {isDark ? <IconSun /> : <IconMoon />}
            </a>
        </div>
    );
};
