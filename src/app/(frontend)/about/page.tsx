"use client";

import FadeInSection from "@/components/UI/FadeInSection";
import Page from "@/components/UI/Page";
import Section from "@/components/UI/Section";

const AboutPage = () => {
  return (
    <Page>
      <Section>
        <FadeInSection>
          <Section.Content divided className="mb-[200px]">
            <div className="w-2/5 max-md:w-4/5 flex flex-col justify-center items-center my-[50px]">
              <img src="/assets/about_page.png" className="w-full h-auto" />
            </div>
            <div className="w-1/2 max-md:w-4/5">
              <h2 className="font-bold text-[#383c38]">About</h2>
              <p className="text-[#383c38]">
                Hi, I'm Singithi! I've been practicing Western archetypal
                astrology for ten years, and during this time, I have helped my
                clients find direction, purpose, and meaning in their lives.
                Most recently, I've been the manager of Montreal's Astrology
                Meetup since 2023, a role that has been an immense pleasure to
                fulfill.
              </p>
              <p className="text-[#383c38]">
                My work blends the psychological approach of archetypal
                astrology with ancient techniques and philosophy of Vedic
                teachings to offer a comprehensive and personalized reading to
                each of my clients. I use the tropical zodiac, and employ an
                intuitive approach to house systems, though I'm most often using
                whole sign houses.
              </p>
              <p className="text-[#383c38]">
                My services include birth chart readings, synastry and composite
                chart analysis, and transit astrology. Currently, I only provide
                my services in English. My readings are produced solely with my
                skills and knowledge, and are free from AI content.
              </p>
              <p className="text-[#383c38]">
                Whether you are seeking guidance on love and relationships,
                career and finances, health and wellness, or personal growth and
                spirituality, I am here to help.
              </p>
            </div>
          </Section.Content>
        </FadeInSection>
      </Section>
    </Page>
  );
};

export default AboutPage;
