import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";
import { title } from "process";

export const TechStack = () => {
  const stack = [
    {
      title: "Python",
      src: "/images/logos/python.png",

      className: "h-10 w-12"
    },
    {
      title: "C",
      src: "/images/logos/c.png",

      className: "h-10 w-12"
    },
    {
      title: "C++",
      src: "/images/logos/cpp.png",

      className: "h-10 w-12"
    },
    {
      title: "Git",
      src: "/images/logos/git.png",

      className: "h-10 w-12"
    },
    {
      title: "Matlab",
      src: "/images/logos/matlab.png",

      className: "h-10 w-12"
    },
    {
      title: "Linux",
      src: "/images/logos/linux.png",

      className: "h-10 w-12"
    },
    {
      title: "Docker",
      src: "/images/logos/docker.png",

      className: "h-10 w-12"
    },
    {
      title: "ROS",
      src: "/images/logos/ros.png",

      className: "h-10 w-12"
    },
    {
      title: "Next.js",
      src: "/images/logos/next.png",

      className: "h-10 w-14",
    },
    {
      title: "React",
      src: "/images/logos/react.png",

      className: "h-10 w-12",
    },
    {
      title: "Node",
      src: "/images/logos/node.png",

      className: "h-10 w-12",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-24",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};
