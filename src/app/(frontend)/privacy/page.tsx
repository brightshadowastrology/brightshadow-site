import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Bright Shadow Studio",
  description:
    "Privacy and confidentiality policy for Bright Shadow Studio, based on the NCGR Code of Ethics.",
};

export default async function PrivacyPage() {
  return (
    <div className="px-[var(--gutter-size)] py-[var(--spacing-3xl)] max-w-[var(--container-max)] mx-auto">
      <h1 className="mb-[var(--spacing-2xl)]">Privacy Policy</h1>

      <p className="mb-[var(--spacing-2xl)]">
        The following is from the Confidentiality section of the{" "}
        <a
          href="https://geocosmic.org/about/code-of-ethics/"
          target="_blank"
          rel="noopener noreferrer"
        >
          National Council for Geocosmic Research&rsquo;s &ldquo;Code of
          Ethics&rdquo;
        </a>
        . As a professional astrologer with integrity, and as a member of the
        NCGR, I adhere to all of these codes and apply them in all of my
        practices:
      </p>

      <div className="flex flex-col gap-[var(--spacing-2xl)]">
        {/* Maintaining Confidentiality */}
        <section>
          <h2 className="mb-[var(--spacing-lg)]">
            Maintaining Confidentiality
          </h2>
          <ol className="flex flex-col gap-[var(--spacing-md)] list-none">
            <li>
              <p>
                <span className="font-semibold">a)</span> Astrologers respect
                the confidentiality and rights to privacy of their clients,
                students and others who they deal with in astrological contexts.
                Confidentiality applies to the identity of and personal
                information about clients and other individuals.
              </p>
            </li>
            <li>
              <p>
                <span className="font-semibold">b)</span> Astrologers do not
                disclose personal information that is unattainable from public
                sources without the consent of the person involved as long as
                that person is living.
              </p>
            </li>
          </ol>
        </section>

        <div className="border-t border-[color:var(--border-divider)]" />

        {/* Consultations With Colleagues */}
        <section>
          <h2 className="mb-[var(--spacing-lg)]">
            Consultations With Colleagues
          </h2>
          <p>
            When consulting with colleagues, astrologers do not share the
            identity of the person or persons involved without prior consent. If
            unavoidable, they share only that information which is necessary to
            achieve the purposes of the consultation.
          </p>
        </section>

        <div className="border-t border-[color:var(--border-divider)]" />

        {/* Confidential Information in Data Collections */}
        <section>
          <h2 className="mb-[var(--spacing-lg)]">
            Confidential Information in Data Collections
          </h2>
          <p>
            Astrologers seek permission from living subjects (such as clients,
            students and friends) before including confidential information in
            named data collections. Alternatively, astrologers use coding or
            other techniques to protect the identity of the subjects.
          </p>
        </section>
      </div>
    </div>
  );
}
