import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`progressbar ${visible ? "visible" : ""}`} onClick={scrollToTop}>
      <span className="text">To Top</span>
      <span className="line" />
    </div>
  );
};

export default ScrollTop;
