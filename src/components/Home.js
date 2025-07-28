import Counter from "./Counter";

const homeData = {
  firstName: "Bharathwaz",
  lastName: "Kalamsetti",
  designation: "Senior Data Engineer",
  address: "Tampa, FL ",
  img: "img/hero/6.png",
  bio: "Experienced Data Engineer specializing in scalable cloud pipelines, AI automation, and data visualization for actionable business insights.",
  numberOfProject: 9,
  numberofyear: 4,
};

const Home = () => {
  return (
    <div className="devman_tm_section" id="home">
      <div className="devman_tm_hero">
        <div className="background">
          <div className="image" data-img-url="img/hero/5.PNG" />
        </div>
        <div className="container">
          <div className="content">
            <div className="left">
              <div className="inner">
                <h3 className="hello"></h3>
                <h3 className="name gradient-name">
                  {homeData.firstName} {homeData.lastName}
                </h3>
                <h3 className="job">
                  {homeData.designation} from {homeData.address}
                </h3>
                <p className="text">{homeData.bio}</p>
                <div className="buttons">
                  <div className="devman_tm_button">
                    <a href="img/cv/RESUME_BHARATHWAZKALAMSETTI_DE.pdf" download>
                      Download Cv
                    </a>
                  </div>
                  <div className="simple_button">
                    <a className="anchor" href="#about">
                      About Me
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="stroke_1">{homeData.firstName}</h3>
              <h3 className="stroke_2">{homeData.lastName}</h3>
            </div>
            <div className="right">
              <div className="profile-image-wrapper">
  <img src={homeData.img} alt="Profile" />
              
                {/* <span className="win">
                  <img src="img/svg/award.svg" alt="" className="svg" />
                </span>
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={homeData.numberofyear} />
                    </h3>
                    <span className="item_name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={homeData.numberOfProject} />
                      <span className="extra">+</span>
                    </h3>
                    <span className="item_name">
                      Projects
                      <br />
                      Completed
                    </span>
                  </div>
                </div>*/}
                {/* <span className="circle anim_circle">
                  <img src="img/hero/round5.png" alt="" />
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
