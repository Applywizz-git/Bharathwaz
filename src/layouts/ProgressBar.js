import { useEffect, useState } from "react";

const Progressbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`progressbar ${isVisible ? "visible" : ""}`}>
      <a href="#">
        <span className="text">To Top</span>
      </a>
      <span className="line" />
    </div>
  );
};

export default Progressbar;
