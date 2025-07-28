import styles from "./Service.module.css";

const serviceData = [
  {
    name: "Arc Erie County, Buffalo, NY",
    role: "Senior Data Engineer",
    year: "Jan 2025 – Present",
    highlights: [
      "Built AWS pipelines improving accuracy to 99.7%",
      "Automated ETL with Airflow, reduced reporting time by 50%",
    ],
  },
  {
    name: "HCL Technologies - Remote",
    role: "Data Engineer",
    year: "Jan 2024 - Dec 2024",
    highlights: [
      "Migrated 40+ ETL jobs to AWS Glue and Spark",
      "Built Power BI dashboards, reduced compute costs by 30%",
    ],
  },
  {
    name: "Softtek, Bangalore, India",
    role: "Data Engineer",
    year: "Aug 2020 – Dec 2023",
    highlights: [
      "Processed 6TB+ daily healthcare data with Spark",
      "Integrated into Snowflake, reduced ETL runtime by 40%",
    ],
  },
  {
    name: "Education",
    role: "",
    year: "",
    highlights: [
      "M.S. in Data Science – University at Buffalo, SUNY",
      "B.Tech – Chennai Institute of Technology, India",
    ],
  },
];

const Service = () => {
  return (
    <section id="service" className="devman_tm_section">
      <div className="container">
        <div
          className="devman_tm_main_title"
          data-text-align="center"
          style={{ marginBottom: 50 }}
        >
          <span style={{ fontSize: 30, fontWeight: 600 }}>Experience</span>
          <h3>Projects, Roles & Education That Shaped My Career</h3>
          <p>
            From AI-driven pipelines to automating ETL and improving compliance — here’s how I build scalable, impactful data solutions.
          </p>
        </div>

        <div className={styles.cardGrid}>
          {serviceData.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardInner}>
                <div className={`${styles.cardFront} ${styles["bg" + (idx + 1)]}`}>
                  <h3 className={styles.title}>{item.name}</h3>
                  {item.role && <p className={styles.role}>{item.role}</p>}
                  {item.year && <p className={styles.date}>{item.year}</p>}
                </div>
                <div className={styles.cardBack}>
                  <h4 className={styles.backTitle}>Highlights</h4>
                  <ul className={styles.points}>
                    {item.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
