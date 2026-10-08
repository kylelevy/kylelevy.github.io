import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { Badge } from "@/components/Badge";
import { MobileSocials } from "@/components/MobileSocials";


export default function Home() {

  return (
    <Container>
        <span className="text-4xl">👋</span>
        <Heading className="font-black dark:font-white">Hello there! I&apos;m Kyle</Heading>
        <Paragraph className="max-w-xl mt-4">
          Hi! I&apos;m a Mechatronics and Robotics Engineering graduate from Queen&apos;s University. 
          I have interests in{" "} 
        <Highlight>automation, machine learning, control systems and robotics</Highlight>. 
        </Paragraph>
        <Paragraph className="max-w-xl mt-4">
          In this portfolio, you will be able to learn a little about me, see some of my previous 
          projects and can connect with me. Please feel free to reach out if you have any 
          further questions!
        </Paragraph>
          <div className="lg:hidden max-w-[40%] mx-auto pt-8">
            <Badge href="/resume" text="Read Resume" />
          </div>
            <MobileSocials/>
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
