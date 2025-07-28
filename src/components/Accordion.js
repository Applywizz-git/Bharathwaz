import { Fragment, useEffect, useRef, useState } from "react";

const accordionData = [
  {
    title: "Work Strategy",
    details:
      "I design scalable, AI-integrated data pipelines with a focus on automation, accuracy, and compliance—enabling fast, intelligent decision-making through clean, reliable data.",
  },
  {
    title: "The Process of Our Work",
    details:
      "We follow a streamlined, automation-first approach to build scalable, reliable, and insight-driven data solutions.",
  },
  {
    title: "Core Value of Development",
    details:
      "I value clean architecture, automation, and data integrity—building solutions that are scalable, efficient, and aligned with real business goals.",
  },
  {
    title: "Desire to Work Hard",
    details:
      "Driven by curiosity and purpose, I consistently push beyond expectations—committed to solving complex problems with precision, persistence, and pride in every line of code.",
  },
];

const Accordion = () => {
  const [active, setActive] = useState(null);
  const contentEl = useRef();
  useEffect(() => {
    setActive(0);
  }, [contentEl.current]);

  const onClick = (value) =>
    value === active ? setActive(null) : setActive(value);

  return (
    <Fragment>
      <div
        className="devman_tm_accordion"
        data-active={1}
        data-type="accordion"
        style={{ marginTop: "60px" }}
      >
        {accordionData.map((accordion, i) => (
          <div
            className={`accordion_in ${active == i ? "acc_active" : ""}`}
            key={i}
          >
            <div className="acc_head" onClick={() => onClick(i)}>
              <span className="plus" />
              <p>{accordion.title}</p>
            </div>
            <div
              className={`acc_content d-block`}
              ref={contentEl}
              style={
                active === i
                  ? {
                      height:
                        contentEl.current && contentEl.current.scrollHeight,
                    }
                  : { height: "0px" }
              }
            >
              <div className="acc_content_in">
                <p>{accordion.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default Accordion;
