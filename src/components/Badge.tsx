import React from "react";
import Link from "next/link";

export const Badge = ({
  text,
  href,
  ...props
}: {
  text: string;
  href: string;
  props?: React.ComponentProps<typeof Link>;
}) => {
  return (
    <Link
      href={href}
      className="bg-slate-900 w-full items-center dark:bg-neutral-100 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white dark:text-black inline-block"
      {...props}
    >
      <span className="absolute inset-0 overflow-hidden rounded-full ">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative text-center justify-center flex space-x-2 z-10 rounded-full bg-transparent py-2 px-4 ring-1 ring-white/10 dark:ring-black/10 ">
        <span>{text}</span>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </Link>
  );
};
