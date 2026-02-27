"use client";

import Link from "next/link";
import FadeInSection from "@/components/UI/FadeInSection";
import Page from "@/components/UI/Page";
import Section from "@/components/UI/Section";
import Button from "@/components/UI/Button";

const MissionPage = () => {
  return (
    <Page>
      <Section className="bg-[#5e665e]">
        <FadeInSection>
          <Section.Content className="mb-[200px]">
            <div className="max-md:flex max-md:flex-col max-md:w-4/5">
              <h1 className="text-center">Mission</h1>

              <p>
                Over a decade ago, I came to the study of astrology with the
                eyes of a skeptic, though burning with more raw curiosity than
                I'd like to have admitted at the time. Far from any kind of ,
                what I discovered was an ancient system of understanding the
                human spirit, one of profound beauty.
              </p>
              <p>
                Far from being the cold mechanistic void, I was taught to
                believe, the universe was in fact a place bursting with meaning.
                Reality itself is fractal, big patterns repeating little
                patterns into infinity. The turning of the heavens in lockstep
                with the shapes of weather patterns, of migrating birds, and the
                seasons of our own little human lives all the same. As above, so
                below.
              </p>

              <h2>My Approach</h2>

              <p>
                A tumultuous season of my own life revealed to me the ways in
                which astrology could not only be a source of philosophical
                pleasure, but also solace in its ability to help us make
                coherent stories from what appears to be chaos. It's this (in
                combination with a Sun-Pluto opposition in my own chart) that
                inspired the creation of Bright Shadow Astrology. Founded in
                2025, a particularly tumultuous year for the globe, I'm seeking
                to use astrology to help people address both the bright and dark
                in their own lives, and to find the bright in even the shadows.
              </p>
              <p>
                This is to say, I am not someone working in the spiritual space
                that is aiming to give you comforting lies to make painful
                realities more bearable. In my experience, it's only the
                acceptance of one's reality that can alleviate suffering.
                Understand, you may come to me for a reading, and I may tell you
                things that disappoint you.
              </p>
              <p>
                By the same token, I'm also not one to approach an astrological
                chart and panic at the first sight of difficult things I may see
                in it. With any placement comes both challenges and gifts, and
                our birthcharts reveal not only our most persistent struggles,
                but also the character we have cultivated. With all of my
                readings, I take a client-centered approach focusing on
                empowering my clients to explore their own thoughts, feelings,
                and experiences within a supportive and non-judgmental
                environment. By providing empathy, unconditional positive
                regard, and congruence, my focus is to work together with my
                clients to come to possible solutions.
              </p>
              <p>
                Lastly, a key value of mine is to make my services as
                financially accessible to as many people as possible. I'm
                committed to providing a variety of services in a range of
                formats, from pre-recorded short format sessions, to combination
                deals, and reduced prices for return clients.
              </p>
              <p>
                Thank you for considering me for your astrological needs. I look
                forward to helping you gain clarity and insight into your life
                through the transformative power of astrology.
              </p>

              <Link
                href="/services"
                className="text-white no-underline self-center max-md:self-center"
              >
                <Button>Let's Get Started!</Button>
              </Link>
            </div>
          </Section.Content>
        </FadeInSection>
      </Section>
    </Page>
  );
};

export default MissionPage;
