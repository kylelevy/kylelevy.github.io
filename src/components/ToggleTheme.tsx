"use client";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "./ThemeProvider";

export const ToggleTheme: React.FC = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div className="grid">
            <a onClick={toggleTheme} className="text-black dark:text-white grid-center my-auto">
                {isDark ? <IconSun /> : <IconMoon />}
            </a>
        </div>
    );
};
