"use client"
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { Badge } from "@/components/Badge";
import { isMobile } from "@/lib/utils";
import { useState, useEffect } from "react";


export default function Home() {
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

  return (
    <Container>
        <span className="text-4xl">👋</span>
        <Heading className="font-black dark:font-white">Hello there! I&apos;m Kyle</Heading>
        <Paragraph className="max-w-xl mt-4">
          Hi! I&apos;m a Mechatronics and Robotics Engineering student at Queen&apos;s University. 
          I have interests in{" "} 
        <Highlight>automation, machine learning, control systems and robotics</Highlight>. 
        </Paragraph>
        <Paragraph className="max-w-xl mt-4">
          In this portfolio, you will be able to learn a little about me, see some of my previous 
          projects and can connect with me. Please feel free to reach out if you have any 
          further questions!
        </Paragraph>
              {isMobileView ? (<div className="max-w-[40%] mx-auto pt-8"><Badge href="/resume" text="Read Resume" /></div>) : null}
        <Heading
          as="h2"
          className="font-black dark:font-white text-lg md:text-lg lg:text-lg mt-20 mb-4"
        >
          What I&apos;ve been working on
        </Heading>
        <Products />
        <TechStack />
    </Container>
  );
}
