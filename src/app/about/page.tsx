import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

import { motion } from "framer-motion";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Kyle Levy",
  description:
    "Explore the portfolio of Kyle, a Mechatronics and Robotics Engineering student at Queen's University. Discover his innovative projects in automation, machine learning, and robotics, and see how he's shaping the future of technology.",
};

export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      <About />
    </Container>
  );
}
