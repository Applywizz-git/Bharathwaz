const aboutData = {
  designation: "Senior Data Engineer ",
  title: "AI-Driven Data Solutions Architect",
  text: [
    "I’m a data engineer with 4+ years of experience designing scalable pipelines, lakehouses, and analytics platforms across AWS, Azure, and Snowflake.",
    "I specialize in integrating AI (OpenAI, Flask) to automate workflows, drive intelligent reporting, and reduce manual overhead.",
    "From real-time IoT analytics to regulatory dashboards, I build data products that deliver actionable insights and operational efficiency.",
  ],
};

const About = () => {
  return (
    <div className="devman_tm_section" id="about">
      <div className="devman_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="image_wrap">
                <img
                  src="/img/about/8.png"
                  alt="About"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    position: 'relative',
                    zIndex: 2,
                    opacity: 1,
                    borderRadius: '12px', // Optional, for style
                  }}
                />
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>
                  {`I'm`} a {aboutData.designation}
                </span>
                <h3>{aboutData.title}</h3>
              </div>
              <div className="text">
                {aboutData.text.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
              <div className="devman_tm_button">
                <a className="anchor" href="#portfolio">
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

