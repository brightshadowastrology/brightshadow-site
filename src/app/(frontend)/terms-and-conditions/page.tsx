"use client";

import FadeInSection from "@/components/UI/FadeInSection";
import Page from "@/components/UI/Page";
import Section from "@/components/UI/Section";

const TermsConditionsPage = () => {
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
            <div className="max-md:w-4/5">
              <h1 className="text-center">Terms & Conditions</h1>
              <h2>Cancellation Policy</h2>
              <p>
                a) If you need to cancel an appointment, I require 24 hour
                notice. Cancellation infers that no services are rendered and a
                refund will be issued. Refunds can take 5-7 business days to
                show up in your account.
              </p>
              <p>
                b) Clients who cancel after the 24 hour window has passed will
                not receive a refund.
              </p>
              <p>
                c) Clients who do not show up for their appointment will not
                receive a refund. Note: Clients who are more than 15 minutes
                late for their session will be considered "no shows," will lose
                their appointment slot, and will not receive a refund.
              </p>

              <h2>Rescheduling Policy</h2>
              <p>
                a) Clients can always reschedule their appointment. To
                reschedule an appointment with no penalty, I require 24 hour
                notice.
              </p>
              <p>
                b) Clients who reschedule after the 24 hour window, but before
                their appointment, will incur a $15 fee. Clients who reschedule
                after missing their appointment will incur a $30 fee.
              </p>
              <p>
                c) A fee can only be waived due to an emergency, and I must
                receive email notification within 48 hours of the original
                appointment slot. Failure to notify me will result in the
                aforementioned, respective penalty charges.
              </p>

              <p>
                As a professional astrologer with integrity, AND as A member of
                the National Council of Geocosmic Research, I adhere to all of
                the NCGR's "Codes of EthicS" which you can read in full here.
                furthermore, please take the following into account when booking
                with me:
              </p>

              <h3>I am not a Licensed Professional</h3>
              <p>
                The readings that I provide are based on my knowledge,
                expertise, and personal opinions. I am not qualified to give
                legal, financial, medical, psychological, psychiatric, or any
                other specialist advice. If you require such advice you should
                seek a licensed professional.
              </p>

              <h3>I am not Responsible nor Liable for Your Actions</h3>
              <p>
                What you decide to do with the information that I give you,
                including any actions you take, is based on your own personal
                responsibility and choice.
              </p>

              <h3>All Readings are Final</h3>
              <p>
                All transactions for services rendered are final. No exceptions.
              </p>
            </div>
          </FadeInSection>
        </Section.Content>
      </Section>
    </Page>
  );
};

export default TermsConditionsPage;
