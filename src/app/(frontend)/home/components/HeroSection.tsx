"use client";

import Link from "next/link";
import Section from "@/components/UI/Section";
import Button from "@/components/UI/Button";

const HeroSection = () => (
  <Section className="bg-[#1d211d] m-0">
    {/* Rotating star-field background */}
    <Section.Background className="overflow-hidden">
      <div
        className="animate-[rotateBackground_240s_linear_infinite] bg-repeat bg-center h-[200%] w-[200%] relative left-[-50%] top-[-50%]"
        style={{ backgroundImage: "url(/assets/background_home2.svg)" }}
      />
    </Section.Background>

    {/* Texture overlay */}
    <div
      className="h-[130vh] absolute z-0 w-full bg-repeat bg-[#1d211d]"
      style={{ backgroundImage: "url(https://www.transparenttextures.com/patterns/axiom-pattern.png)" }}
    />

    {/* Content */}
    <Section.Body className="z-[2] w-full h-[130vh]">
      <Section.Content className="max-md:[&_h1]:text-left max-md:[&_h2]:text-left">
        <div className="p-[40px] max-md:p-5 bg-[#1d211d] w-3/5 max-md:w-full h-fit border border-[#dcc063]">
          <h1 className="text-[3.5rem] max-md:text-[2.5rem] w-full">
            <div className="text-[#dcc063]">Bright</div>
            <div className="text-[#ebbc98]">Shadow</div>
            <div className="text-[#e1a646]">Astrology</div>
          </h1>
          <h2 className="text-[1rem] my-[50px]">
            Helping you find your story written in the stars.
          </h2>
          <Link href="/mission">
            <Button className="mt-0 self-start">Let's Go</Button>
          </Link>
        </div>
      </Section.Content>
    </Section.Body>
  </Section>
);

export default HeroSection;
