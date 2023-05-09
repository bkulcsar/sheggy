import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
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
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="ms-5 collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" href="#about">
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#how-to-buy">
                how to buy
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tokenomics">
                tokenomics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tokenomics">
                roadmap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
