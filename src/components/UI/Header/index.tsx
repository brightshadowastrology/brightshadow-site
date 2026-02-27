"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [isMenuActive, setIsUseMenuActive] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: { target: any }) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsUseMenuActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className="w-full text-white text-center h-[60px] md:h-[80px] sticky z-[100] top-0 flex justify-center items-center"
      style={{
        background: "linear-gradient(rgb(29, 33, 29), rgba(29, 33, 29, 0))",
      }}
    >
      <nav className="hidden md:block w-[95%] h-[75%]">
        <ul>
          <li className="inline-block">
            <Link href="/">
              <img
                className="h-[50px]"
                src={"/assets/logo.png"}
                alt="Bright Shadow Astrology"
              />
            </Link>
          </li>
        </ul>
        <ul className="mr-0">
          <li className="inline-block">
            <Link href="/mission" className="text-white px-5 py-[10px]">
              Mission
            </Link>
          </li>
          <li className="inline-block">
            <Link href="/about" className="text-white px-5 py-[10px]">
              About
            </Link>
          </li>
          <li className="inline-block">
            <Link href="/services" className="text-white px-5 py-[10px]">
              Services
            </Link>
          </li>
          <li className="inline-block">
            <button>
              <a
                href="https://calendly.com/brightshadowastrology"
                target="_blank"
                rel="noreferrer"
              >
                Book a Reading
              </a>
            </button>
          </li>
        </ul>
      </nav>

      <nav
        className="flex md:hidden justify-between items-center w-full"
        ref={menuRef}
      >
        <ul>
          <li>
            <Link href="/">
              <img
                className="h-[40px]"
                src={"assets/logo.png"}
                alt="Bright Shadow Astrology"
              />
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <button>
              <a
                href="https://calendly.com/brightshadowastrology"
                target="_blank"
                rel="noreferrer"
              >
                Book a Reading
              </a>
            </button>
          </li>
          <li>
            <button
              className="mobile-menu-btn"
              onClick={() => setIsUseMenuActive(!isMenuActive)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <div
              className={`absolute top-[60px] right-0 w-1/2 bg-gray-500 z-[100] p-[10px] text-center ${
                isMenuActive ? "block" : "hidden"
              }`}
            >
              <ul className="block m-0 p-0">
                <li className="block">
                  <Link href="/mission" className="text-white px-5 py-[10px]">
                    Mission
                  </Link>
                </li>
                <li className="block">
                  <Link href="/about" className="text-white px-5 py-[10px]">
                    About
                  </Link>
                </li>
                <li className="block">
                  <Link href="/services" className="text-white px-5 py-[10px]">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
