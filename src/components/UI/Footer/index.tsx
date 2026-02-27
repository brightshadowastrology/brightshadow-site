//ts boilerplate
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#181e18] text-white text-center p-[10px] flex flex-col justify-center items-center">
      <nav className="justify-around">
        <ul className="flex flex-col md:flex-row">
          <li className="py-[5px] md:py-0">
            <Link href="/terms-and-conditions" className="text-white">
              Terms and Conditions
            </Link>
          </li>
          <li className="py-[5px] md:py-0">
            <Link href="/privacy-policy" className="text-white">
              Privacy Policy
            </Link>
          </li>
          <li className="py-[5px] md:py-0">
            <Link href="/faqs" className="text-white">
              FAQs
            </Link>
          </li>
        </ul>
      </nav>
      <p className="text-[0.5rem] md:text-[0.75rem]">
        © 2025. Bright Shadow Astrology. All Rights Reserved.{" "}
      </p>
    </footer>
  );
};

export default Footer;
