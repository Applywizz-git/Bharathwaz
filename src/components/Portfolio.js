import { Fragment, useState } from "react";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  const [popup, setPopup] = useState(false);

  return (
    <Fragment>
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="devman_tm_section" id="portfolio">
        <div className="devman_tm_portfolio">
          <div className="container">
            <div className="devman_tm_main_title" data-text-align="center">
              <span style={{ color: "#f97316", fontWeight: "600", marginBottom: "40px" }} >Projects</span>
              <h3 style={{ fontSize: "36px", fontWeight: "700", margin: "10px 0" }}>My Amazing Works</h3>
              <p style={{ color: "#444", maxWidth: "800px", margin: "0 auto",fontSize: "16px", lineHeight: "1.6"  }}>
                My projects showcase end-to-end data engineering solutions featuring cloud-native pipelines,
                real-time processing, and AI-powered automation. Built with tools like Apache Spark, AWS Glue,
                Power BI, and Python, they highlight my ability to transform raw data into insights and support
                impactful decision-making.
              </p>
            </div>

            <div className="portfolio_list" style={{ marginTop: "60px" }}>
              <ul style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                {/* Project Card Component */}
                {[
                  {
                    title: "AI-Powered Document Summarization & Workflow Automation",
                    tools: ["Python", "OpenAI API", "Flask", "Azure Blob", "SharePoint", "Power BI"],
                    description:
                      "Built a microservice with OpenAI and Flask to auto-summarize documents, integrate SharePoint and Azure storage, and track adoption via Power BI dashboards.",
                    image: "/img/portfolio/8.png",
                  },
                  {
                    title: "Enterprise Data Intelligence Portal with Power BI",
                    tools: ["Power BI", "SQL Server", "Azure Synapse", "DAX", "Excel"],
                    description:
                      "Consolidated HR, finance, and operations data into Azure Synapse and built 30+ interactive Power BI dashboards for department-specific insights and leadership reporting.",
                    image: "/img/portfolio/14.png",
                  },
                ].map((project, index) => (
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    key={index}
                    style={{
                      backgroundColor: "#1e1e2f",
                      borderRadius: "16px",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                      overflow: "hidden",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <div className="list_inner" style={{ display: "flex", flexDirection: "column" }}>
                      <div
                        className="background_image"
                        style={{
                          height: "260px",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundImage: `url(${project.image})`,
                        }}
                      />

                      <div className="content" style={{ padding: "24px" }}>
                        <div className="details">
                          <h3
                            className="title"
                            style={{
                              fontSize: "24px",
                              fontWeight: "700",
                              color: "#f59e0b",
                              marginBottom: "20px",
                            }}
                          >
                            {project.title}
                          </h3>

                          {/* Tools */}
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: "10px",
                              marginBottom: "20px",
                            }}
                          >
                            {project.tools.map((tool, i) => (
                              <span
                                key={i}
                                style={{
                                  backgroundColor: "#ffffff22",
                                  color: "#fff",
                                  padding: "6px 16px",
                                  borderRadius: "20px",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  backdropFilter: "blur(4px)",
                                }}
                              >
                                {tool}
                              </span>
                            ))}
                          </div>

                          {/* Description */}
                          <p
                            className="project-description"
                            style={{
                              fontSize: "15px",
                              lineHeight: "1.6",
                              color: "#ddd",
                            }}
                          >
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Decorative shapes (optional) */}
              <div
                className="shape_1 moving_effect"
                data-direction="y"
                data-reverse="yes"
              />
              <div
                className="shape_2 moving_effect"
                data-direction="y"
                data-reverse="yes"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Portfolio;
