"use client";
import { navlinks } from "@/constants/navlinks"
import { Navlink } from "@/types/navlink"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { ToggleTheme } from "./ToggleTheme"

export const MobileNav = ({ className }) => {
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href

  return (
    <span
      className={twMerge(
        "absolute bottom-0 left-0 right-0 z-[100] px-4 pb-[env(safe-area-inset-bottom)]",
        className
      )}
    >
      {/* Glass Dock */}
      <div
        className="
          relative mx-auto max-w-lg
          rounded-[2rem]
          border border-white/20 dark:border-white/10
          bg-white/20 dark:bg-black/30
          backdrop-blur-2xl
          shadow-[0_8px_40px_rgba(0,0,0,0.25)]
          before:absolute before:inset-0 before:rounded-[2rem]
          before:bg-gradient-to-b before:from-white/40 before:to-white/5
          before:opacity-40
          before:pointer-events-none
        "
      >
        <div className="relative z-10 flex items-center justify-between px-4 py-3">
          {navlinks.map((link: Navlink) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch
              className={twMerge(
                `
                relative flex flex-col items-center justify-center gap-1
                px-3 py-2 rounded-xl
                text-[11px] font-medium
                text-black/70 dark:text-white/70
                transition-all duration-300
                hover:text-black dark:hover:text-white
                `,
                isActive(link.href) &&
                  `
                  text-black dark:text-white
                  bg-white/40 dark:bg-white/10
                  backdrop-blur-xl
                  shadow-[0_4px_20px_rgba(0,0,0,0.15)]
                  before:absolute before:inset-0 before:rounded-xl
                  before:bg-gradient-to-b before:from-white/60 before:to-white/10
                  before:opacity-40
                `
              )}
            >
              <link.icon
                className={twMerge(
                  "h-6 w-6 transition-all duration-300",
                  isActive(link.href)
                    ? "text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.8)] scale-110"
                    : "text-black/60 dark:text-white/60"
                )}
              />
              <span>{link.label}</span>
            </Link>
          ))}

          {/* Glass Theme Toggle */}
          <ToggleTheme
            className="
              relative flex items-center justify-center
              h-10 w-10 rounded-full
              bg-white/30 dark:bg-white/10
              backdrop-blur-xl
              border border-white/20
              shadow-[0_6px_24px_rgba(0,0,0,0.25)]
              text-black dark:text-white
              hover:scale-105 transition
            "
          />
        </div>
      </div>
    </span>
  )
}
