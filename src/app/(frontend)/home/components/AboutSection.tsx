"use client";

import Link from "next/link";
import Section from "@/components/UI/Section";
import Button from "@/components/UI/Button";
import FadeInSection from "@/components/UI/FadeInSection";

const AboutSection = () => (
  <Section className="bg-[#cbd1cb] m-0">
    <Section.Body className="flex flex-col relative">
      <FadeInSection>
        <Section.Content divided className="border-none">
          {/* Headshot */}
          <div className="w-2/5 max-md:w-4/5">
            <img
              src="/assets/headshot.jpg"
              className="w-[700px] max-md:mb-[40px]"
            />
          </div>

          {/* Text */}
          <div className="w-1/2 max-md:flex max-md:flex-col max-md:w-[70%]">
            <h2>About</h2>
            <p>Hi, I'm Singithi!</p>
            <p>
              I'm an astrologer with a passion for helping people gain
              insight into their lives through the symbolic language of
              astrology. I have been practicing Western archetypal
              astrology for several years, and during this time, I have
              helped countless individuals find direction, purpose, and
              meaning in their lives.
            </p>
            <p>
              My approach to astrology combines the psychological approach
              to Western astrology, which I blend with the ancient
              techniques of Vedic teaching to offer a comprehensive and
              personalized reading to each of my clients. Whether you are
              seeking guidance on love and relationships, career and
              finances, health and wellness, or personal growth and
              spirituality, I am here to help.
            </p>
            <Link href="/about" className="self-center max-md:self-center">
              <Button className="mt-0">Learn More</Button>
            </Link>
          </div>
        </Section.Content>
      </FadeInSection>
    </Section.Body>
  </Section>
);

export default AboutSection;
