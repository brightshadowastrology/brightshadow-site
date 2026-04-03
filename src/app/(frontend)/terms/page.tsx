import Divider from "@/components/UI/Divider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Bright Shadow Studio",
  description:
    "Cancellation policy, rescheduling policy, and professional disclosures for Bright Shadow Studio.",
};

export default async function TermsPage() {
  return (
    <div className="px-[var(--gutter-size)] pt-[var(--spacing-3xl)] pb-[var(--gutter-size)] max-w-[var(--container-max)] mx-auto flex flex-col gap-[var(--spacing-xl)]">
      <h1 className="mb-[var(--spacing-2xl)]">Terms &amp; Conditions</h1>

      {/* Cancellation Policy */}
      <section>
        <h2 className="mb-[var(--spacing-lg)]">Cancellation Policy</h2>
        <ol className="flex flex-col gap-[var(--spacing-md)] list-none">
          <li>
            <p>
              <span className="font-semibold">a)</span> If you need to cancel an
              appointment, I require 24 hour notice. Cancellation infers that no
              services are rendered and a refund will be issued. Refunds can
              take 5–7 business days to show up in your account.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">b)</span> Clients who cancel after
              the 24 hour window has passed will not receive a refund.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">c)</span> Clients who do not show
              up for their appointment will not receive a refund.{" "}
              <span className="font-semibold">Note:</span> Clients who are more
              than 15 minutes late for their session will be considered
              &ldquo;no shows,&rdquo; will lose their appointment slot, and will
              not receive a refund.
            </p>
          </li>
        </ol>
      </section>

      <Divider />

      {/* Rescheduling Policy */}
      <section>
        <h2 className="mb-[var(--spacing-lg)]">Rescheduling Policy</h2>
        <ol className="flex flex-col gap-[var(--spacing-md)] list-none">
          <li>
            <p>
              <span className="font-semibold">a)</span> Clients can always
              reschedule their appointment. To reschedule an appointment with no
              penalty, I require 24 hour notice.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">b)</span> Clients who reschedule
              after the 24 hour window, but before their appointment, will incur
              a $15 fee. Clients who reschedule after missing their appointment
              will incur a $30 fee.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">c)</span> A fee can only be waived
              due to an emergency, and I must receive email notification within
              48 hours of the original appointment slot. Failure to notify me
              will result in the aforementioned, respective penalty charges.
            </p>
          </li>
        </ol>
      </section>

      <Divider />

      {/* Professional Disclosures */}
      <section>
        <h2 className="mb-[var(--spacing-lg)]">Professional Disclosures</h2>
        <p>
          As a professional astrologer with integrity, and as a member of the{" "}
          <a
            href="https://geocosmic.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            National Council of Geocosmic Research
          </a>
          , I adhere to all of the NCGR&rsquo;s{" "}
          <a
            href="https://geocosmic.org/about/code-of-ethics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codes of Ethics
          </a>{" "}
          which you can read in full there. Furthermore, please take the
          following into account when booking with me:
        </p>
      </section>

      <Divider />

      {/* I am not a Licensed Professional */}
      <section>
        <h2 className="mb-[var(--spacing-lg)]">
          I am not a Licensed Professional
        </h2>
        <p>
          The readings that I provide are based on my knowledge, expertise, and
          personal opinions. I am not qualified to give legal, financial,
          medical, psychological, psychiatric, or any other specialist advice.
          If you require such advice you should seek a licensed professional.
        </p>
      </section>

      <Divider />

      {/* I am not Responsible nor Liable */}
      <section>
        <h2 className="mb-[var(--spacing-lg)]">
          I am not Responsible nor Liable for Your Actions
        </h2>
        <p>
          What you decide to do with the information that I give you, including
          any actions you take, is based on your own personal responsibility and
          choice.
        </p>
      </section>

      <Divider />

      {/* All Readings are Final */}
      <section>
        <h2 className="mb-[var(--spacing-lg)]">All Readings are Final</h2>
        <p>All transactions for services rendered are final. No exceptions.</p>
      </section>
    </div>
  );
}
