import React, { useEffect, useState } from "react";


const Features = () => {
  const features_list = [
    {
      title: "Dedication",
      icon: "img/svg/design.svg",
      text: "Committed to delivering reliable, scalable data solutions that drive real-world impact through automation, accuracy, and intelligent design.",
    },
    {
      title: "Smart Work",
      icon: "img/svg/development.svg",
      text: "I focus on automation, AI integration, and optimized data pipelines to reduce manual effort and boost efficiency—working smarter to deliver faster, more impactful results.",
    },
    {
      title: "Intelligence",
      icon: "img/svg/landing.svg",
      text: "I design data systems that not only process information but also enable smart insights, powering informed decisions through AI, analytics, and automation.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features_list.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="devman_tm_section">
      <div className="devman_tm_features">
        <div className="container">
          <div className="features_carousel_wrapper">
            {features_list.map((feature, i) => (
              <div
                key={i}
                className={`carousel_card ${i === activeIndex ? "active" : "inactive"}`}
              >
                <div className="short">
                  <div className="carousel_title">
                    
                    <h3>{feature.title}</h3>
                  </div>
                  <div className="carousel_icon">
                    <img className="svg" src={feature.icon} alt={feature.title} />
                  </div>
                </div>
                <div className="carousel_text">
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
            <div className="carousel_dots">
              {features_list.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
