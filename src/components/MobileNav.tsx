"use client"
import { navlinks } from "@/constants/navlinks";
import { isMobile } from "@/lib/utils";
import { Navlink } from "@/types/navlink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { ToggleTheme } from "./ToggleTheme";

export const MobileNav = () => {
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;


    return (
        <span className="absolute rounded-t-xl bottom-0 left-0 right-0 bg-gray-100 dark:bg-slate-500 shadow-lg z-[100]" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
            <div className="flex justify-between items-center py-2 px-4">
                {navlinks.map((link: Navlink) => (
                <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    onClick={() => isMobile()}
                    className={twMerge(
                    "text-secondary dark:text-darkSecondary hover:text-primary dark:hover:text-darkPrimary transition duration-200 flex flex-col items-center space-y-1 text-sm",
                    isActive(link.href) && "bg-gray-100 dark:bg-slate-500 rounded-lg text-primary dark:text-darkPrimary"
                    )}
                >
                    <link.icon
                    className={twMerge(
                        "h-6 w-6 flex-shrink-0",
                        isActive(link.href) && "text-sky-500"
                    )}
                    />
                    <span>{link.label}</span> {/* Assuming each link has a label */}
                </Link>
                ))}
                <ToggleTheme className="text-gray-200 dark:text-gray-800 hover:text-primary dark:hover:text-darkPrimary transition duration-200 flex flex-col items-center space y-1 bg-black dark:bg-white rounded-full p-2"/>
            </div>
        </span>
    )
}