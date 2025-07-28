import styles from "./Skills.module.css";

const skillsLeft = [
  { label: "Apache Spark", percent: 95 },
  { label: "Python", percent: 90 },
  { label: "AWS (Glue, Redshift, S3)", percent: 90 },
  { label: "Power BI", percent: 85 },
  { label: "SQL", percent: 85 },
];

const skillsRight = [
  { label: "Airflow", percent: 80 },
  { label: "Delta Lake", percent: 80 },
  { label: "Snowflake", percent: 75 },
  { label: "Azure Synapse & Data Factory", percent: 75 },
  { label: "Data Governance & Compliance", percent: 70 },
];

const SkillBar = ({ label, percent }) => {
  return (
    <div className={styles.skillBar}>
      <div className={styles.label}>
        <span>{label}</span>
        <span className={styles.percent}>{percent}%</span>
      </div>
      <div className={styles.barWrapper}>
        <div
          className={styles.bar}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>My Skills</h2>
        <p className={styles.sectionDesc}>
          I specialize in scalable data pipelines, cloud infrastructure, and modern analytics platforms with automation.
        </p>
        <div className={styles.skillsGrid}>
          <div className={styles.skillsCol}>
            {skillsLeft.map((skill) => (
              <SkillBar key={skill.label} {...skill} />
            ))}
          </div>
          <div className={styles.skillsCol}>
            {skillsRight.map((skill) => (
              <SkillBar key={skill.label} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
