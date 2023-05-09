"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });

    setToggler(false);
  };

  const [activeMenu, setActiveMenu] = useState({
    about: true,
    howToBuy: false,
    tokenomics: false,
    roadmap: false,
  });

  const [toggler, setToggler] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary justify-content-center mb-4">
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          <Image
            className="me-2"
            src="/favicon.ico"
            width={70}
            height={70}
            alt="Sheggy Rogers"
          />
          Sheggy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          ata-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setToggler(!toggler)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${!toggler ? "collapse" : ""} navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={activeMenu.about ? "nav-link active" : "nav-link"}
                href="#about"
                onClick={(event) => {
                  handleScroll(event);
                  setActiveMenu({
                    about: true,
                    roadmap: false,
                    howToBuy: false,
                    tokenomics: false,
                  });
                }}
              >
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={activeMenu.howToBuy ? "nav-link active" : "nav-link"}
                href="#how-to-buy"
                onClick={(event) => {
                  handleScroll(event);
                  setActiveMenu({
                    about: false,
                    roadmap: false,
                    howToBuy: true,
                    tokenomics: false,
                  });
                }}
              >
                how to buy
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  activeMenu.tokenomics ? "nav-link active" : "nav-link"
                }
                href="#tokenomics"
                onClick={(event) => {
                  handleScroll(event);
                  setActiveMenu({
                    about: false,
                    roadmap: false,
                    howToBuy: false,
                    tokenomics: true,
                  });
                }}
              >
                tokenomics
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={activeMenu.roadmap ? "nav-link active" : "nav-link"}
                href="#roadmap"
                onClick={(event) => {
                  handleScroll(event);
                  setActiveMenu({
                    about: false,
                    roadmap: true,
                    howToBuy: false,
                    tokenomics: false,
                  });
                }}
              >
                roadmap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
