"use client";

import FadeInSection from "@/components/UI/FadeInSection";
import Page from "@/components/UI/Page";
import Section from "@/components/UI/Section";
import Details from "@/components/UI/Details";

const FAQPage = () => {
  return (
    <Page>
      <Section>
        <Section.Content className="border-none">
          <FadeInSection customStyle={{ flexDirection: "column" }}>
            <h1 className="text-center">FAQs</h1>
            <Details>
              <Details.Summary>
                Do you keep my personal information?
              </Details.Summary>
              <p>
                No, I do not keep any personal information about my clients.
              </p>
            </Details>
            <Details>
              <Details.Summary>
                Is there a minimum age requirement for readings?
              </Details.Summary>
              <p>
                Yes! For a natal chart, my minimum age requirement for readings
                is 16 years old.
              </p>
              <p>
                However, for compatibility readings (synastry, composite, etc.),
                I require both parties to be at least 18 years old.
              </p>
            </Details>
            <Details>
              <Details.Summary>
                Do you offer readings for children's charts?
              </Details.Summary>
              <p>
                I do not give readings to parents of infants and very young
                toddlers. In my opinion, while understanding your child's birth
                chart can be helpful for knowing how best to meet their needs, I
                do not believe a reading is always a good idea very early on;
                for the parent, nor the child.
              </p>
              <p>
                There are myriad reasons for this that I won't expound upon too
                deeply here, but I will say that it can potentially create
                worries or concerns that could be mitigated—and may honestly be
                unwarranted—at a time when simply getting to know and bond with
                your child is paramount. Ultimately, my advice to parents who
                want a reading for their children is to at least wait until
                their personality starts setting in. Typically, between ages 3-5
                is when distinct character traits really start to emerge and
                become apparent. Bearing this in mind, I feel more sound reading
                for parents of pre-school age children and (preferably) older.
              </p>
            </Details>
            <Details>
              <Details.Summary>
                Do you use AI for the production of your readings?
              </Details.Summary>
              <p>
                No, and I am passionate about keeping it that way. I believe
                that the human touch is essential in astrology, and I am
                committed to providing personalized readings that are tailored
                to each individual client. I take the time to carefully analyze
                each chart and provide thoughtful insights that are unique to
                each person. I believe that astrology is an art as well as a
                science, and I am dedicated to providing a high-quality,
                personalized service that is free from the influence of AI or
                other automated systems.
              </p>
            </Details>
          </FadeInSection>
        </Section.Content>
      </Section>
    </Page>
  );
};

export default FAQPage;
