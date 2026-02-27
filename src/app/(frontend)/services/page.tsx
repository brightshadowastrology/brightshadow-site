"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import FadeInSection from "@/components/UI/FadeInSection";
import Footer from "@/components/UI/Footer";
import Page from "@/components/UI/Page";
import Section from "@/components/UI/Section";
import Details from "@/components/UI/Details";

const ServicesPage = () => {
  <Page>
    <Section>
      <FadeInSection>
        <Section.Content className="border border-[#dcc063] mt-[150px] mb-[250px] max-md:mb-[250px] [&_a]:text-white [&_a]:no-underline">
          <div className="mb-[50px] max-md:[&_p]:w-4/5 max-md:[&_p]:mx-auto max-md:[&_ul]:w-4/5 max-md:[&_ul]:mx-auto">
            <h1>Services</h1>
            <p>
              Welcome to Bright Shadow Astrology! A few things to know before
              you book:
            </p>
            <ul>
              <li>
                For all readings, accurate birth date, time, and location are
                required. No exceptions.
              </li>
              <li>
                Full payment is required upon checkout. All payments are
                processed through Stripe.
              </li>
              <li>All readings are done via Zoom.</li>
            </ul>
            <p>
              For my privacy policy, and all other codes of ethics, click{" "}
              <Link href="/privacy-policy">HERE</Link>.
            </p>
            <p>
              For any other questions or concerns, contact
              brightshadowastrology@gmail.com.
            </p>
            <br />
            <p>
              <FontAwesomeIcon icon={faStar} /> = For Return Clients only
            </p>
          </div>
          <div>
            <Details>
              <Details.Summary>
                Lightning Reads (10 minutes for $30)
              </Details.Summary>
              <p>
                A ten minute long audio recording of a reading for a specific
                question in regards to your natal chart. At this time, I do not
                offer lightning reads for compatibility charts (synastry,
                composite,etc.).
              </p>
              <p>
                You will be emailed the audio recording within three (3)
                business days of making your purchase.
              </p>
              <Details.ButtonRow>
                <Link
                  href="https://calendly.com/brightshadowastrology/lightning-read"
                  target="_blank"
                >
                  <button>
                    <span>Book</span> <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </Link>
              </Details.ButtonRow>
            </Details>
            <Details>
              <Details.Summary>
                Natal Chart Reading (60 minutes for $100)
              </Details.Summary>
              <p>
                The Natal Chart (also known as the Birth Chart) is a snapshot of
                the sky the moment you took your first breath. Together, we will
                consider the placements of the Sun, the Moon, the planets, and
                the lunar nodes as elements of your psyche, and contemplate the
                complex interplays between them. This in-depth analysis will
                present some of the main themes, gifts, and challenges present,
                and advice on how to navigate them.
              </p>
              <p>
                This service comes with an audio recording which will be emailed
                to you three (3) business days after the reading.
              </p>
              <Details.ButtonRow>
                <Link
                  href="https://calendly.com/brightshadowastrology/natal-chart-reading"
                  target="_blank"
                >
                  <button>
                    <span>Book</span> <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </Link>
              </Details.ButtonRow>
            </Details>
            <Details>
              <Details.Summary>
                <FontAwesomeIcon icon={faStar} /> Natal Chart Reading - Return
                Client Referral Discount (1 Natal Chart Reading for $75)
              </Details.Summary>
              <p>
                NOTE: This natal chart reading service is priced a 25% discount,
                and only available to clients who are both returning, and have
                referred my services to someone else who has booked a session
                with me.
              </p>
              <Details.ButtonRow>
                <Link
                  href="https://calendly.com/brightshadowastrology/natal-chart-reading-return-client-referral-discount"
                  target="_blank"
                >
                  <button>
                    <span>Book</span> <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </Link>
              </Details.ButtonRow>
            </Details>
            <Details>
              <Details.Summary>
                Natal Chart Reading - Referral Client Discount (1 Natal Chart
                Reading for $80)
              </Details.Summary>
              <p>
                NOTE: This natal chart reading service is priced a 20% discount,
                and only available to clients who have been referred to me by a
                previous client.
              </p>
              <Details.ButtonRow>
                <Link
                  href="https://calendly.com/brightshadowastrology/natal-chart-reading-referral-client-discount"
                  target="_blank"
                >
                  <button>
                    <span>Book</span> <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </Link>
              </Details.ButtonRow>
            </Details>
            <Details>
              <Details.Summary>
                Synastry Chart Reading (60 minutes for $125)
              </Details.Summary>
              <p>
                The Synastry Chart (also known as the Compatibility Chart)
                involves looking at the overlay of two individuals' natal charts
                and analyzing how they interact with one another. This is one of
                the most useful tools in understanding the day-to-day relating
                between two people, and identifying where the relationship
                shines and what areas are more difficult to deal with.{" "}
              </p>
              <p>
                My approach to synastry readings is not to provide a judgement
                on whether a relationship should exist, but instead help the
                individuals involved get more of what they both want and need
                from their bond.
              </p>
              <p>
                This service comes with an audio recording which will be emailed
                to you three (3) business days after the reading.
              </p>
              <Details.ButtonRow>
                <Link
                  href="https://calendly.com/brightshadowastrology/synastry-chart-reading"
                  target="_blank"
                >
                  <button>
                    <span>Book</span> <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </Link>
              </Details.ButtonRow>
            </Details>
            <Details>
              <Details.Summary>
                Value Pack Readings (3 Natal Chart Readings for $220)
              </Details.Summary>
              <p>
                This service gives you three (3) natal chart readings at a
                reduced price. This option is great if you're looking for my
                services as a return client, or would like to dig deeper into
                your chart beyond what is possible in a regular one hour
                session.
              </p>
              <p>
                At this time, I do not offer value pack readings for
                compatibility charts (synastry, composite,etc.). Please schedule
                the date you'd like your first reading, and I will contact you
                after to schedule the following two (2) readings.
              </p>
              <p>
                This service comes with three (3) audio recordings in total,
                each of which will be emailed to you three (3) business days
                afterward.
              </p>
              <Details.ButtonRow>
                <Link
                  href="https://calendly.com/brightshadowastrology/value-pack-readings"
                  target="_blank"
                >
                  <button>
                    <span>Book</span> <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </Link>
              </Details.ButtonRow>
            </Details>
          </div>
        </Section.Content>
      </FadeInSection>
    </Section>
  </Page>;
};

export default ServicesPage;
