"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Section from "@/components/UI/Section";
import FadeInSection from "@/components/UI/FadeInSection";
import Article from "@/components/UI/Article";
import Button from "@/components/UI/Button";

const ServicesSection = () => (
  <Section className="bg-[#626962] m-0">
    {/* Texture overlay */}
    <div
      className="h-[130vh] absolute z-0 w-full bg-repeat bg-[#626662]"
      style={{ backgroundImage: "url(https://www.transparenttextures.com/patterns/axiom-pattern.png)" }}
    />

    <Section.Body>
      <FadeInSection customStyle={{ flexDirection: "column" }}>
        <Section.Content className="border-none mb-[200px] max-md:mb-[200px] [&_a]:self-center">
          <h2>Services</h2>

          <div className="mt-5">
            <Article>
              <div className="group/svc cursor-pointer flex flex-col items-start w-[90%] h-[50px] overflow-hidden [transition:height_0.5s] hover:h-[200px]">
                <span className="font-normal">Lightning Reads</span>
                <p className="h-0 opacity-0 overflow-hidden text-left [transition:height_0.5s,opacity_0.5s] group-hover/svc:h-full group-hover/svc:opacity-100">
                  A 10-minute audio recording of a reading that focuses on
                  one specific question or area of your life. Perfect for
                  quick insights and guidance.
                </p>
              </div>
              <button>
                <Link
                  href="https://calendly.com/brightshadowastrology/lightning-read"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </button>
            </Article>

            <Article>
              <div className="group/svc cursor-pointer flex flex-col items-start w-[90%] h-[50px] overflow-hidden [transition:height_0.5s] hover:h-[200px]">
                <span className="font-normal">Natal Chart Readings</span>
                <p className="h-0 opacity-0 overflow-hidden text-left [transition:height_0.5s,opacity_0.5s] group-hover/svc:h-full group-hover/svc:opacity-100">
                  A 60-minute deep dive into your natal chart. Learn about
                  your strengths, weaknesses, and life path.
                </p>
              </div>
              <button>
                <Link
                  href="https://calendly.com/brightshadowastrology/natal-chart-reading"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </button>
            </Article>

            <Article>
              <div className="group/svc cursor-pointer flex flex-col items-start w-[90%] h-[50px] overflow-hidden [transition:height_0.5s] hover:h-[200px]">
                <span className="font-normal">Synastry Readings</span>
                <p className="h-0 opacity-0 overflow-hidden text-left [transition:height_0.5s,opacity_0.5s] group-hover/svc:h-full group-hover/svc:opacity-100">
                  A 60-minute reading that compares two natal charts to
                  determine compatibility and potential challenges.
                </p>
              </div>
              <button>
                <Link
                  href="https://calendly.com/brightshadowastrology/synastry-chart-reading"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </button>
            </Article>
          </div>

          <Link href="/services">
            <Button>See All My Services</Button>
          </Link>
        </Section.Content>
      </FadeInSection>
    </Section.Body>
  </Section>
);

export default ServicesSection;
