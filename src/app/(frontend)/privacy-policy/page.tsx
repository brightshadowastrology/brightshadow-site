"use client";

import FadeInSection from "@/components/UI/FadeInSection";
import Page from "@/components/UI/Page";
import Section from "@/components/UI/Section";

const PrivacyPolicyPage = () => {
  return (
    <Page>
      <Section>
        <Section.Content className="mb-[200px] max-md:mb-[200px]">
          <FadeInSection
            customStyle={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="text-center">Privacy Policy</h1>

            <p>
              The following is from the Confidentiality section of the national
              council for geocosmic research's "Code of Ethics". As a
              professional astrologer with integrity, AND AS a Member of the
              NCGR, I adhere to all of these codes and apply them in all of my
              practices:
            </p>

            <h2>Maintaining Confidentiality</h2>
            <p>
              a) Astrologers respect the confidentiality and rights to privacy
              of their clients, students and others who they deal with in
              astrological contexts. Confidentiality applies to the identity of
              and personal information about clients and other individuals.
            </p>
            <p>
              b) Astrologers do not disclose personal information that is
              unattainable from public sources without the consent of the person
              involved as long as that person is living.
            </p>

            <h2>Consultations With Colleagues</h2>
            <p>
              When consulting with colleagues, astrologers do not share the
              identity of the person or persons involved without prior consent.
              If unavoidable, they share only that information which is
              necessary to achieve the purposes of the consultation.
            </p>

            <h2>Confidential Information in Data Collections</h2>
            <p>
              Astrologers seek permission from living subjects (such as clients,
              students and friends) before including confidential information in
              named data collections. Alternatively, astrologers use coding or
              other techniques to protect the identity of the subjects.
            </p>

            <p>Read the NCGR's full "Code of Ethics" here. </p>
          </FadeInSection>
        </Section.Content>
      </Section>
    </Page>
  );
};

export default PrivacyPolicyPage;
