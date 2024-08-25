"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

import aboutMe_img1 from "/public/images/abtMe_1.jpg";
import aboutMe_img2 from "/public/images/abtMe_2.jpg";
import aboutMe_img3 from "/public/images/abtMe_3.jpg";
import aboutMe_img4 from "/public/images/abtMe_4.jpg";

export default function About() {
  const images = [
    aboutMe_img1,
    aboutMe_img2,
    aboutMe_img3,
    aboutMe_img4,
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
        When not working, I enjoy hiking, photography, listening to music and seeing my friends. 
        I want to travel the world with my camera and explore what life is like in different parts 
        of the world. I am currently working on a collection of my travel photos that I can use 
        as a time capsule of all my travels. I am always down for a good cup of tea and to watch 
        a comedy.
        </Paragraph>
      </div>
    </div>
  );
}
