"use client";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "./ThemeProvider";

interface ToggleThemeProps {
    className?: string,
}

export const ToggleTheme: React.FC<ToggleThemeProps> = ({ className }) => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div className="grid">
            <a onClick={toggleTheme} className={className ? className : "text-black dark:text-white grid-center my-auto"}>
                {isDark ? <IconSun /> : <IconMoon />}
            </a>
        </div>
    );
};
