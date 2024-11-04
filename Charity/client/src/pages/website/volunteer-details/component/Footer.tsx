const Footer = () => {
  return (
    <div>
      {/* back to top start */}
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* back to top end */}

      {/* Footer Area Start */}
      <footer>
        <div className="footer_top_area footer_top_2">
          <div className="footer_top_wrapper">
            <div className="container">
              <div className="row">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-7 col-sm-7">
                  <div className="footer_widget footer_about mb-50">
                    <div className="footer_logo mb-35">
                      <img src="assets/img/logo/logo_white.png" alt="img" />
                    </div>
                    <p className="mb-30">
                      Eaque ipsa quae ab illo inventore veris quasi architecto
                      beatae vitae dicta exp enim ipsam voluptatem.
                    </p>
                    <div className="footer_social_2">
                      <a href="#" className="facebook">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#" className="twitter">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#" className="behance">
                        <i className="fab fa-behance" />
                      </a>
                      <a href="#" className="youtube">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-5 col-sm-5">
                  <div className="footer_widget mb-50 pl_15">
                    <div className="footer_widget_title mb-25">
                      <h4 className="footer_title footer_title_2">
                        Useful links
                      </h4>
                    </div>
                    <div className="footer_links footer_links_2">
                      <ul>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="volunteer.html">Meet The Team</a>
                        </li>
                        <li>
                          <a href="volunteer.html">Volenteers</a>
                        </li>
                        <li>
                          <a href="about.html">Service Provided</a>
                        </li>
                        <li>
                          <a href="blog.html">Latest News</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-7 col-sm-7">
                  <div className="footer_widget mb-50 pl_25">
                    <div className="footer_widget_title mb-25">
                      <h4 className="footer_title footer_title_2">Donations</h4>
                    </div>
                    <div className="footer_links footer_links_2">
                      <ul>
                        <li>
                          <a href="donation.html">How to Donate</a>
                        </li>
                        <li>
                          <a href="donation.html">Donation List</a>
                        </li>
                        <li>
                          <a href="cause.html">Recent Causes</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQ</a>
                        </li>
                      </ul>
                    </div>
                    <div className="footer_btn">
                      <a
                        href="about.html"
                        className="g_btn fbtn_2 to_right1 p-40 rad-50"
                      >
                        Get Support
                        <span />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-5">
                  <div className="footer_widget footer_news mb-50">
                    <div className="footer_widget_title mb-25">
                      <h4 className="footer_title footer_title_2">
                        Keep In Touch
                      </h4>
                    </div>
                    <div className="footer_info_content">
                      <p>
                        <span>
                          <strong>Address :</strong>44 New Design Street, <br />{" "}
                          Melbourne 005
                        </span>
                      </p>
                      <p>
                        <a href="#">
                          <span>
                            <strong>Phone :</strong>(01) 800 433 633
                          </span>
                        </a>
                      </p>
                      <p>
                        <a href="#">
                          <span>
                            <strong>Email :</strong>
                            <span
                              className="__cf_email__"
                              data-cfemail="3851565e57787d40595548545d165b5755"
                            >
                              [email&nbsp;protected]
                            </span>
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-12">
                  <div className="fcta_sigle has_bg mb-30">
                    <img src="assets/img/footer/fcta2_1.png" alt="img" />
                    <div className="fcta_text">
                      <h4>Help &amp; Support Now</h4>
                      <span>
                        Might as well say Would you Could be you be mine?{" "}
                      </span>
                    </div>
                    <div className="fcta_button">
                      <a
                        href="donation.html"
                        className="g_btn fca_btn1 to_right2 p-40 rad-50"
                      >
                        Donate <span />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-12">
                  <div className="fcta_sigle has_bg pad_170s mb-30">
                    <img src="assets/img/footer/fcta2_2.png" alt="img" />
                    <div className="fcta_text">
                      <h4>Join as Volunteer</h4>
                      <span>
                        Might as well say Would you Could be you be mine?{" "}
                      </span>
                    </div>
                    <div className="fcta_button">
                      <a
                        href="about.html"
                        className="g_btn fca_btn to_left p-40 rad-50"
                      >
                        Join <span />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_copyright_area">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12 text-center">
                <p>
                  Copyright © 2021 All Rights Reserved by{" "}
                  <strong>
                    <a href="#">ThemePure</a>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Area End */}
    </div>
  );
};

export default Footer;
