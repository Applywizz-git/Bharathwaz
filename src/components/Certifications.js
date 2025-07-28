const Certifications = () => {
  const certifications = [
    {
      title: "Google Cloud Data Engineering Professional Certificate",
      description:
        "Coursera certification covering large-scale data pipelines, BigQuery, and GCP tools.",
    },
    {
      title: "IBM Data Engineering Professional Certificate",
      description:
        "Covers databases, ETL, SQL, data warehousing, and cloud platforms from IBM experts.",
    },
    {
      title: "Databricks Lakehouse Fundamentals",
      description:
        "Core concepts of Delta Lake, Apache Spark, and lakehouse architecture from Databricks Academy.",
    },
    {
      title: "Data Engineering with Python",
      description:
        "Practical skills in building ETL pipelines, data validation, and integration using Python.",
    },
    {
      title: "Power BI Data Analyst Professional Certificate",
      description:
        "Focused on data modeling, DAX, dashboarding, and role-based reporting in Power BI.",
    },
  ];

  return (
    <div
      className="devman_tm_section"
      id="certifications"
      style={{
        backgroundColor: "#ffffff",
        paddingTop: "60px",
        paddingBottom: "80px",
      }}
    >
      <div className="container">
        {/* Title */}
        <div className="devman_tm_main_title" data-text-align="center">
          <span>Certifications</span>
          <h3>Credentials That Power My Craft</h3>
          <p >
            These certifications reflect my commitment to mastering modern data engineering, cloud architecture, and analytics tools—spanning platforms like AWS, Databricks, Power BI, and Python to deliver high-impact, scalable data solutions.
          </p>
        </div>

        {/* Certification Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            marginTop: "40px",
          }}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#ffffff",
                padding: "24px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                transition: "all 0.3s ease",
                borderLeft: "5px solid #f97316", // orange accent
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f9fafb"; // light hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
              }}
            >
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "10px",
                  color: "#0f172a", // deep navy
                }}
              >
                {cert.title}
              </h4>
              <p
                style={{
                  fontSize: "15px",
                  color: "#475569", // slate grey
                  lineHeight: "1.6",
                }}
              >
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;

