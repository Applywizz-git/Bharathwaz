const Partners = ({ dark }) => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_partners">
        <div className="container">
          <div className="partners_inner">
            <ul>
              {/* Arc Erie County */}
              <li>
                <div className="list_inner">
                  <a
                    href="https://www.arceriecounty.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="devman_tm_full_link"
                  >
                    <img
                      className="wow fadeIn"
                      data-wow-duration="1s"
                      src={`img/partners/${dark ? "light" : "dark"}/arc.png`}
                      alt="Arc Erie County Logo"
                    />
                  </a>
                </div>
              </li>

              {/* HCL Technologies */}
              <li>
                <div className="list_inner">
                  <a
                    href="https://www.hcltech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="devman_tm_full_link"
                  >
                    <img
                      className="wow fadeIn"
                      data-wow-duration="1s"
                      data-wow-delay="0.2s"
                      src={`img/partners/${dark ? "light" : "dark"}/hcl.png`}
                      alt="HCL Technologies Logo"
                    />
                  </a>
                </div>
              </li>

              {/* Softtek */}
              <li>
                <div className="list_inner">
                  <a
                    href="https://www.softtek.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="devman_tm_full_link"
                  >
                    <img
                      className="wow fadeIn"
                      data-wow-duration="1s"
                      data-wow-delay="0.4s"
                      src={`img/partners/${dark ? "light" : "dark"}/Softtek.JPEG`}
                      alt="Softtek Logo"
                    />
                  </a>
                </div>
              </li>

              {/* University at Buffalo */}
              <li>
                <div className="list_inner">
                  <a
                    href="https://www.buffalo.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="devman_tm_full_link"
                  >
                    <img
                      className="wow fadeIn"
                      data-wow-duration="1s"
                      data-wow-delay="0.6s"
                      src={`img/partners/${dark ? "light" : "dark"}/buffalo.png`}
                      alt="University at Buffalo Logo"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
