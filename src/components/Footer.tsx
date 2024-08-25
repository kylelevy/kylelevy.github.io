"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="p-4 text-center justify-center text-xs text-neutral-500 dark:text-gray-200 border-t border-neutral-100 dark:border-neutral-400">
      <span className="font-semibold">{new Date().getFullYear()} </span>
      &#8212; Built by Kyle Levy
    </div>
  );
};
