"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import profileImage from "/public/images/profile.jpg"
import { navlinks } from "@/constants/navlinks";
import { usePathname } from "next/navigation";
import { socials } from "@/constants/socials";
import { ToggleTheme } from "./ToggleTheme";
import { Navlink } from "@/types/navlink";
import { twMerge } from "tailwind-merge";
import { MobileNav } from "./MobileNav";
import { isMobile } from "@/lib/utils";
import { Heading } from "./Heading";
import { Badge } from "./Badge";

export const Sidebar = () => {
  const [isMobileView, setIsMobileView] = useState(isMobile());

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(isMobile());
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  if (isMobileView) {return <MobileNav/>}

  return (
    <>
          <div className={"px-6 z-[100] py-10 bg-neutral-100 dark:bg-slate-900 max-w-[14rem] lg:w-fit  fixed lg:relative  h-screen left-0 flex flex-col justify-between"}>
            <div className="flex-1 overflow-auto">
              <SidebarHeader />
              <Navigation />
            </div>
            <div className="pb-[60%] sm:pb-0">
              <Badge href="/resume" text="Read Resume" />
            </div>
          </div>
    </>
  );
};

export const Navigation = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-10 relative z-[100]">
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          prefetch={true}
          onClick={() => isMobile()}
          className={twMerge(
            "text-secondary dark:text-darkSecondary hover:text-primary dark:hover:text-darkPrimary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm",
            isActive(link.href) && "bg-white dark:bg-slate-500 shadow-lg text-primary dark:text-darkPrimary"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-10 px-2">
        Socials
      </Heading>
      {socials.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          className={twMerge(
            "text-secondary dark:text-darkSecondary hover:text-primary hover:dark:text-darkPrimary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex space-x-2">
      <Image
        src={profileImage}
        alt="Kyle Levy"
        height="40"
        width="40"
        className="object-cover object-top rounded-full flex-shrink-0"
      />
      <div className="flex text-sm flex-col">
        <p className="font-bold text-primary dark:text-darkPrimary">Kyle Levy</p>
        <p className="font-light text-secondary dark:text-darkSecondary">Innovator</p>
      </div>
      <ToggleTheme/>
    </div>
  );
};
