"use client";
import React from "react";
import Link from "next/link";
import { socials } from "@/constants/socials"; // Correct path to the constants file
import { twMerge } from "tailwind-merge";

export const MobileSocials = () => {
  return (
    <div className="flex justify-center sm:justify-start space-x-4 my-4">
      {socials.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={twMerge(
            "flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 border",
            "dark:bg-white dark:text-black bg-black text-white border-transparent dark:border-transparent",
            "hover:border-gray-300"
          )}
        >
          <link.icon className="w-6 h-6" aria-label={link.label} />
        </Link>
      ))}
    </div>
  );
};
