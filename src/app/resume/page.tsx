import { Container } from "@/components/Container";
import { DownloadButton } from "@/components/DownloadButton";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Kyle Levy",
  description:
    "Explore the portfolio of Kyle, a Mechatronics and Robotics Engineering student at Queen's University. Discover his innovative projects in automation, machine learning, and robotics, and see how he's shaping the future of technology.",
};


const Resume = "https://kylelevy.github.io/Kyle_Levy_Resume.pdf";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m an innovative problem solver that loves{" "}
        <Highlight>finding new ways</Highlight> to solve unique and complex 
        problems.
      </Paragraph>
      <Paragraph className="italic">
        <br/>
        P.S. the PDF version can be downloaded at the bottom of the page :)
      </Paragraph>
      <WorkHistory />
      <DownloadButton
        text="Download PDF"
        href={Resume}
        className="flex justify-center pb-1 sm:pb-0"
      />
    </Container>
  );
}
