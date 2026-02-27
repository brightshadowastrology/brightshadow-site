"use client";

import Section from "@/components/UI/Section";
import FadeInSection from "@/components/UI/FadeInSection";
import Carousel from "@/components/UI/Carousel/Carousel";
import CarouselSlide from "@/components/UI/Carousel/CarouselSlide";

const TestimonialsSection = () => (
  <Section className="bg-[#2a342a] m-0 min-h-0 h-fit">
    <Section.Body className="w-full">
      <Section.Content>
        <FadeInSection customStyle={{ flexDirection: "column" }}>
          <h2>Testimonials</h2>
          <Carousel>
            <CarouselSlide
              caption={
                <div>
                  <p>
                    "I have had a few astrology readings over the years,
                    but this reading was on a whole other level.
                  </p>
                  <p>
                    Her vast astrological knowledge is apparent and so
                    much of the explanations rang true, but that is not
                    what stood out the most for me. It was this unique
                    ability to match the vast astrological knowledge with
                    this extreme sense of humanity and empathy. It was
                    such a powerful, beautiful reading.
                  </p>
                  <p>
                    The age old very important saying "Know Thyself" makes
                    astrology so valuable to many, but this was more than
                    just a reading for me, it was a heart opening.
                  </p>
                  <p>
                    I cannot recommend Singithi enough. Hands down the
                    most holistic astrology reading I have had."
                  </p>
                  <p> - Lia</p>
                </div>
              }
            />
            <CarouselSlide
              caption={
                <div>
                  <p>
                    "The session was very informative. Singithi's in-depth
                    understanding of astrology goes beyond general
                    knowledge. She was able to identify specific details
                    that really resonated with me. I felt like aspects of
                    my life were really seen and analyzed in a way that
                    helps me understand myself better. This is a great
                    tool for self-discovery and gaining a bit more insight
                    into what is working and not working in our lives. It
                    gave me a lot to think about."
                  </p>
                  <p>- Ewelina</p>
                </div>
              }
            />
            <CarouselSlide
              caption={
                <div>
                  <p>
                    "Wow! I told this to Singithi at the end of our
                    session but wow does she ever know her stuff! I was
                    blown away by the amount of information I learned
                    today about my chart, placements, connections and how
                    this comes out in my life. I gained a greater
                    awareness of myself, my strengths, opportunities, and
                    a lot of validation of why I do or feel certain
                    things.
                  </p>
                  <p>
                    Singithi taught me about chart reading including what
                    the placements and houses are while sharing my own. I
                    was able to ask specific questions about my life and
                    received great guidance from the answers.
                  </p>
                  <p>
                    I would highly recommend Singithi for anyone looking
                    for a deeper connection and understanding of their
                    natal chart and finding guidance as to how to bring
                    together your spiritual and egoic existence."
                  </p>
                  <p>- Veronica</p>
                </div>
              }
            />
            <CarouselSlide
              caption={
                <div>
                  <p>
                    "Singithi has a warm approach that makes every session
                    feel like a conversation with a friend who understands
                    you. She has a gift for making astrology accessible
                    and personal, leaving you with a sense of direction
                    and reassurance. Highly recommended!"
                  </p>
                  <p>- Adrian</p>
                </div>
              }
            />
            <CarouselSlide
              caption={
                <div>
                  <p>
                    "My experience with Bright Shadow Astrology was
                    incredible. Singithi really took the time to prepare
                    for my Natal Chart Reading - she asked insightful
                    questions and went into incredible detail while
                    reading my chart. The reading itself felt deeply
                    personal and enlightening, so much so that I have
                    referred to it in my daily life again and again."
                  </p>
                  <p>- Stephanie</p>
                </div>
              }
            />
            <CarouselSlide
              caption={
                <div>
                  <p>
                    "Singithi is a brilliant, empathetic and incisive
                    astrologer. Our consultation helped me unlock a fresh
                    perspective on my chart that had never occurred to me
                    before. I highly recommend her."
                  </p>
                  <p>- Christian</p>
                </div>
              }
            />
            <CarouselSlide
              caption={
                <div>
                  <p>
                    "Working with Singithi was an enlightening experience!
                    Her deep knowledge of astrology and Vedic teachings
                    brought profound clarity to my life. Her intuitive
                    approach to my natal chart reading was insightful and
                    offered me new perspectives on my journey. I walked
                    away feeling empowered and connected to my true self.
                    I highly recommend her for anyone seeking guidance and
                    wisdom through astrology."
                  </p>
                  <p>- Magda</p>
                </div>
              }
            />
          </Carousel>
        </FadeInSection>
      </Section.Content>
    </Section.Body>
  </Section>
);

export default TestimonialsSection;
