import { useEffect } from "react";
import { scrollSection, stickyNav } from "../utilits";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollSection);
    const navLinks = document.querySelectorAll(".anchor_nav li a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.forEach(el => el.parentElement.classList.remove("active"));
        link.parentElement.classList.add("active");
      });
    });
  }, []);

  return (
    <div className="devman_tm_header">
      <div className="container">
        <div className="header_inner">
          <div className="logo">
            <a className="light" href="#">
              <img src="img/logo/logo2.png" alt="logo" />
            </a>
            <a className="dark" href="#">
              <img src="img/logo/logo2.png" alt="logo" />
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#service">Experience</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li className="download_cv">
                <a href="img/cv/RESUME_BHARATHWAZKALAMSETTI_DE.pdf" download>
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
