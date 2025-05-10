import React from "react";
import { Heading } from "./Heading";

export const TechStack = () => {
  const stack = [
    "python",
    "c",
    "cpp",
    "pytorch",
    "git",
    "docker",
    "kubernetes",
    "react",
    "nextjs",
    "django",
    "tailwind",
    "html",
    "css",
    "js",
    "ts"
  ];
  const otherTech = [
    "Matlab",
    "ROS",
    "Linux",
    "Raspberry Pi",
    "Embedded Programming (C)",
    "SolidWorks",
    "Fusion 360",
    "Nginx",
    "Jenkins",
    "OIDC/OAuth2"
  ]
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item, index) => (
          <i key={index} className={`ci ci-3x ci-${item} p-1 m-[-1]`}>{index}</i>
        ))}
      </div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4">
          Additional technologies
        </Heading>
        <ul className="list-disc pl-5">
        {otherTech.map((item, index) => (
            <li className="text-secondary dark:text-darkSecondary" key={index}>{item}</li>
          ))}
        </ul>
    </div>
  );
};
