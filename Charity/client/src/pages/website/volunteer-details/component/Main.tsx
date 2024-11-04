import { Link } from 'react-router-dom';
import person from '../../../../assets/img/team/person.jpg'
import breadcrumb_bg_3 from '../../../../assets/img/bg/breadcrumb_bg_3.jpg'

const Main = () => {
  return (
    <div>
      {/* Main Area Start*/}
      <main>
        {/*breadcrumb area start*/}
        <section
          className="breadcrumb_area breadcrumb_overlay"
          data-background={breadcrumb_bg_3}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb_section">
                  <ul className="breadcrumb-list volunteer_breadcrumb">
                    <li className="bhas_border">
                      <Link to='/'>Home</Link>
                    </li>
                    <li>
                      <span className="active">Team Details</span>
                    </li>
                  </ul>
                  <div className="breadcrumb_title">
                    <h2>Personal Info</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*breadcrumb area end*/}
        {/*team single area start */}
        <div className="team_single_area pt-120 pb-90">
          <div className="container">
            <div className="row align-items-center mb-80">
              <div className="col-xxl-5 col-xl-5 col-lg-5">
                <div className="team_single_img">
                  <img src={person} alt="img" />
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7">
                <div className="team_single_info_wrapper pl-50">
                  <div className="section_title">
                    <span className="sub_title sub_title_2">
                      Founder &amp; CDO
                    </span>
                    <h3 className="title title_2">Hawkni K. Hakli</h3>
                  </div>
                  <p className="mb-40">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis with nostrud
                    exercitation ullamco laboris nisi ut aliquip
                  </p>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="team_person_info">
                        <a href="tell:+09638664967007">
                          <strong>Phone:</strong> +09638 664 967007
                        </a>
                        <a href="https://wphix.com/cdn-cgi/l/email-protection#f2978a939f829e97b2959f939b9edc919d9f">
                          <strong>Email:</strong>{" "}
                          <span
                            className="__cf_email__"
                            data-cfemail="214459404c514d4461464c40484d0f424e4c"
                          >
                            [email&nbsp;protected]
                          </span>
                        </a>
                        <a href="#">
                          <strong>Working Area:</strong> African Congo
                        </a>
                        <a href="#">
                          <strong>Nationality:</strong> American
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="team_person_info">
                        <a href="#">
                          <strong>Website:</strong> webexample.com
                        </a>
                        <a href="#">
                          <strong>Linkedin:</strong> Webhuntexample
                        </a>
                        <a href="#">
                          <strong>Address:</strong> 16/A, New Town Hall City, US
                        </a>
                        <div className="team_info_social">
                          <a href="#" className="facebook">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a href="#" className="google">
                            <i className="fab fa-google-plus-g" />
                          </a>
                          <a href="#" className="twitter">
                            <i className="fab fa-twitter" />
                          </a>
                          <a href="#" className="pinterest">
                            <i className="fab fa-pinterest-p" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-12">
                <div className="team_person_description d_flex mb-20">
                  <span className="first_letter">D</span>
                  <p>
                    ispensers for Safe Water is underpinned by Nobel
                    Prize-winning research. In 2019, Michael Kremer (Nobel
                    Laureate, Economic Sciences) even contributed one of our
                    dispensers to the Nobel Museum to represent his work! Kremer
                    and colleagues from Harvard and Berkeley tested chlorine
                    dispensers in Kenya against a variety of other water
                    treatment options. They found that 1) chlorine dispensers
                    had much higher usage rates than comparable treatments, and
                    2) usage stayed high over time.
                  </p>
                </div>
                <div className="team_person_description mb-50">
                  <p>
                    But many people around the world don’t have that luxury.
                    Every day, about 1,400 children die from diseases caused by
                    unsafe water and poor sanitation. But it doesn’t have to be
                    that way. There are simple solutions like drilled wells,
                    spring protections and BioSand filters that help provide
                    clean water to communities around the world.
                  </p>
                  <p>
                    In rural parts of low-income countries, most water sources
                    are untreated, meaning that water is not safe to drink
                    directly from the source. Our uniquely-engineered chlorine
                    dispensers are installed next to commonly-used water
                    sources, enabling people to treat their water using a safe
                    and pre-measured dose of chlorine. The chlorine stays active
                    for 2-3 days, ensuring water doesn’t get recontaminated even
                    when stored at home. Adding diluted chlorine to water is a
                    WHO-endorsed approach to improving water quality. In fact,
                    water systems the world over routinely chlorinate water,
                    making it safe to drink.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                <div className="team_progress_wrapper mb-30">
                  <span>Work Progress</span>
                  <span className="progress_value theme-1">90%</span>
                  <div className="progress team_progress">
                    <div
                      className="progress-bar theme-1"
                      role="progressbar"
                      data-width="90%"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                <div className="team_progress_wrapper mb-30">
                  <span>Design Remain</span>
                  <span className="progress_value theme-2">62%</span>
                  <div className="progress team_progress">
                    <div
                      className="progress-bar theme-2"
                      role="progressbar"
                      data-width="62%"
                      aria-valuenow={62}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                <div className="team_progress_wrapper mb-30">
                  <span>UX Process</span>
                  <span className="progress_value theme-6">77%</span>
                  <div className="progress team_progress">
                    <div
                      className="progress-bar theme-6"
                      role="progressbar"
                      data-width="77%"
                      aria-valuenow={77}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                <div className="team_progress_wrapper mb-30">
                  <span>Substince Donation</span>
                  <span className="progress_value theme-1">88%</span>
                  <div className="progress team_progress">
                    <div
                      className="progress-bar theme-1"
                      role="progressbar"
                      data-width="88%"
                      aria-valuenow={88}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                <div className="team_progress_wrapper mb-30">
                  <span>Donation Progress</span>
                  <span className="progress_value theme-2">72%</span>
                  <div className="progress team_progress">
                    <div
                      className="progress-bar theme-2"
                      role="progressbar"
                      data-width="72%"
                      aria-valuenow={72}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                <div className="team_progress_wrapper mb-30">
                  <span>Hospital Bill</span>
                  <span className="progress_value theme-6">92%</span>
                  <div className="progress team_progress">
                    <div
                      className="progress-bar theme-6"
                      role="progressbar"
                      data-width="92%"
                      aria-valuenow={92}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*team single area end */}
      </main>
      {/* Main Area End*/}
    </div>
  );
};

export default Main;
