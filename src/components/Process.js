import Accordion from "./Accordion";

const Process = () => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_process">
        <div className="container">
          <div className="process_inner">
            <div className="left">
              <div className="devman_tm_main_title" data-text-align="left" style={{ marginTop: "60px" }}>
  <span>Turning Data Into Decisions</span>
  <h3>Passion for Building Intelligent, Scalable Solutions</h3>
  <p>
    With a strong foundation in data engineering, cloud platforms, and AI integration, I create automated, high-impact systems that streamline workflows, enhance reporting, and drive smarter business outcomes.
  </p>
</div>
            </div>
            <div className="right">
              <div className="acc_holder">
                <Accordion />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Process;
