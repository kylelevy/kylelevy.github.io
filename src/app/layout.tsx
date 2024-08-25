import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kyle Levy",
  description:
    "Explore the portfolio of Kyle, a Mechatronics and Robotics Engineering student at Queen's University. Discover his innovative projects in automation, machine learning, and robotics, and see how he's shaping the future of technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark:bg-slate-900">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100 dark:bg-slate-900"
        )}
      >
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-gray-100 dark:bg-slate-900 flex-1 overflow-y-auto">
          <div className="flex-1 bg-white min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 lg:dark:border-slate-800 overflow-y-auto dark:bg-slate-800 -z-5">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
