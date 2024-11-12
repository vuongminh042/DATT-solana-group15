import { Link } from "react-router-dom";
import member1 from '../../../../assets/img/team/member1.jpg'
import member2 from '../../../../assets/img/team/member2.jpg'
import member3 from '../../../../assets/img/team/member3.jpg'
import member4 from '../../../../assets/img/team/member4.jpg'
import member5 from '../../../../assets/img/team/member5.jpg'
import member6 from '../../../../assets/img/team/member6.jpg'
import member7 from '../../../../assets/img/team/member7.jpg'
import member8 from '../../../../assets/img/team/member8.jpg'
import about_big_1 from '../../../../assets/img/about/about_big_1.jpg'
import about_small1 from '../../../../assets/img/about/about_small1.jpg'
import nfeed2_1 from '../../../../assets/img/news/nfeed2_1.jpg'
import nfeed2_2 from '../../../../assets/img/news/nfeed2_2.jpg'
import nfeed2_3 from '../../../../assets/img/news/nfeed2_3.jpg'
import breadcrum_bg_2 from '../../../../assets/img/bg/breadcrum_bg_2.jpg'


const Main = () => {
  return (
    <div>
      {/* Main Area Start*/}
      <main>
        {/*breadcrumb area start*/}
        <section
          className="breadcrumb_area breadcrumb_overlay"
          style={{ backgroundImage: `url(${breadcrum_bg_2})` }}
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
                      <span className="active">Team</span>
                    </li>
                  </ul>
                  <div className="breadcrumb_title">
                    <h2>Volunteer</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*breadcrumb area end*/}
        {/* Team area start */}
        <div className="team_area pt-110 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6 text-center">
                <div className="single_team mb-30">
                  <div className="team_thumb img_effect_white">
                    <Link to='/volunteer-details'>
                      <img src={member1} alt="img" />
                    </Link>
                  </div>
                  <span className="designation">Founder</span>
                  <h5 className="member_name">
                    <Link to='/volunteer-details'>Miranda H. Halim</Link>
                  </h5>
                  <div className="member_social">
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
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6 text-center">
                <div className="single_team mb-30">
                  <div className="team_thumb img_effect_white">
                    <Link to='/volunteer-details'>
                      <img src={member2} alt="img" />
                    </Link>
                  </div>
                  <span className="designation">Chairman</span>
                  <h5 className="member_name">
                    <Link to='/volunteer-details'>N. Uddin</Link>
                  </h5>
                  <div className="member_social">
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
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6 text-center">
                <div className="single_team mb-30">
                  <div className="team_thumb img_effect_white">
                    <Link to='/volunteer-details'>
                      <img src={member3} alt="img" />
                    </Link>
                  </div>
                  <span className="designation">Designer</span>
                  <h5 className="member_name">
                    <Link to='/volunteer-details'>Mark Billah</Link>
                  </h5>
                  <div className="member_social">
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
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6 text-center">
                <div className="single_team mb-30">
                  <div className="team_thumb img_effect_white">
                    <Link to='/volunteer-details'>
                      <img src={member4} alt="img" />
                    </Link>
                  </div>
                  <span className="designation">Developer</span>
                  <h5 className="member_name">
                    <Link to='/volunteer-details'>Andreu Salim</Link>
                  </h5>
                  <div className="member_social">
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
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6 text-center">
                <div className="single_team mb-30">
                  <div className="team_thumb img_effect_white">
                    <Link to='/volunteer-details'>
                      <img src={member5} alt="img" />
                    </Link>
                  </div>
                  <span className="designation">Founder</span>
                  <h5 className="member_name">
                    <Link to='/volunteer-details'>Mark Tahiya</Link>
                  </h5>
                  <div className="member_social">
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
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6 text-center">
                <div className="single_team mb-30">
                  <div className="team_thumb img_effect_white">
                    <Link to='/volunteer-details'>
                      <img src={member6} alt="img" />
                    </Link>
                  </div>
                  <span className="designation">Developer</span>
                  <h5 className="member_name">
                    <Link to='/volunteer-details'>Andreu Salim</Link>
                  </h5>
                  <div className="member_social">
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
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6 text-center">
                <div className="single_team mb-30">
                  <div className="team_thumb img_effect_white">
                    <Link to='/volunteer-details'>
                      <img src={member7} alt="img" />
                    </Link>
                  </div>
                  <span className="designation">Chairman</span>
                  <h5 className="member_name">
                    <Link to='/volunteer-details'>Andreu Masum</Link>
                  </h5>
                  <div className="member_social">
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
              <div className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6 text-center">
                <div className="single_team mb-30">
                  <div className="team_thumb img_effect_white">
                    <Link to='/volunteer-details'>
                      <img src={member8} alt="img" />
                    </Link>
                  </div>
                  <span className="designation">Developer</span>
                  <h5 className="member_name">
                    <Link to='/volunteer-details'>Andreu Israt</Link>
                  </h5>
                  <div className="member_social">
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
            </div>
          </div>
        </div>
        {/* Team area end */}
        {/* Newsletter cta area start*/}
        <div className="newsletter_cta_area">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="newsletter_cta_wrapper">
                  <div className="nfeed_title nfeed_title_single">
                    <span className="sub_title sub_title_2">Newsletter</span>
                    <h3 className="n_title n_title_single mb-0">
                      Get Weekly Newsletter
                    </h3>
                  </div>
                  <div className="newsletter_content newsletter_content_single">
                    <input
                      type="text"
                      placeholder="Enter Full Name"
                      className="rad-30"
                    />
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="rad-30"
                    />
                    <button type="submit" className="rad-30 g_btn to_left">
                      Subscribe Now <span />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Newsletter cta area end*/}
        {/*about single area start */}
        <div className="about_single_area about-bg pt-205 pb-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6">
                <div className="about_team_img pr-20">
                  <div className="about_signle_img">
                    <img
                      src={about_big_1}
                      alt="img"
                      className="big_single"
                    />
                    <img
                      src={about_small1}
                      alt="img"
                      className="small_single"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about_wrapper pl-30">
                  <div className="section_title">
                    <span className="sub_title sub_title_2">Why Choose Us</span>
                    <h3 className="title title_2">
                      Charity to Change Child’s and Poor People Life
                    </h3>
                  </div>
                  <p className="mb-40 n_mb20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis with nostrud
                    exercitation ullamco laboris nisi ut aliquip
                  </p>
                  <ul className="about_list about_single_list">
                    <li>We will help you with the choice of fund</li>
                    <li>Donor satisfaction is guaranteed</li>
                    <li>We help companies give well</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about single area end */}
        {/* newsfeed area start */}
        <div className="nfeed_area pt-105 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="section_title mb-50 text-center">
                  <span className="sub_title sub_title_2">Insights</span>
                  <h3 className="title title_2">News Feeds</h3>
                </div>
              </div>
            </div>
            <div className="row gutter_85">
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="single_nfeed single_nfeed_2 has_before mb-30">
                  <div className="single_feed_img img_effect_white">
                    <Link to='/blog-details'>
                      <img src={nfeed2_1} alt="img" />
                    </Link>
                  </div>
                  <div className="nfeed_content nfeed_content_2">
                    <div className="nfeed_title">
                      <a
                        href="blog-details.html"
                        className="nsub_title nsub_title_2"
                      >
                        Charity, Goods
                      </a>
                      <h3 className="n_title">
                        <Link to='/blog-details'>
                          Expected Goods for everybody in a fund campagin
                          anyways to win.
                        </Link>
                      </h3>
                    </div>
                    <div className="nfeed_meta_wrapper d-flex">
                      <div className="nfeed_meta mr-20">
                        <a href="#" className="nmeta_icon theme-1">
                          <i className="fal fa-user" />
                        </a>
                        <a href="#" className="nmeta_text theme-1">
                          <span className="nmeta_by">By</span>Admin
                        </a>
                      </div>
                      <div className="nfeed_meta">
                        <a href="#" className="nmeta_icon theme-2">
                          <i className="fal fa-calendar-alt" />
                        </a>
                        <a href="#" className="nmeta_text theme-2">
                          <span className="nmeta_date">24th June 2021</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="single_nfeed single_nfeed_2 has_before mb-30">
                  <div className="single_feed_img img_effect_white">
                    <Link to='/blog-details'>
                      <img src={nfeed2_2} alt="img" />
                    </Link>
                  </div>
                  <div className="nfeed_content nfeed_content_2">
                    <div className="nfeed_title">
                      <Link to='/blog-details'
                        className="nsub_title nsub_title_2"
                      >
                        Charity, Cloths
                      </Link>
                      <h3 className="n_title">
                        <Link to='/blog-details'>
                          Necessary Cloths for everyone in a fund campaign
                          anyways to win.
                        </Link>
                      </h3>
                    </div>
                    <div className="nfeed_meta_wrapper d-flex">
                      <div className="nfeed_meta mr-20">
                        <a href="#" className="nmeta_icon theme-1">
                          <i className="fal fa-user" />
                        </a>
                        <a href="#" className="nmeta_text theme-1">
                          <span className="nmeta_by">By</span>Admin
                        </a>
                      </div>
                      <div className="nfeed_meta">
                        <a href="#" className="nmeta_icon theme-2">
                          <i className="fal fa-calendar-alt" />
                        </a>
                        <a href="#" className="nmeta_text theme-2">
                          <span className="nmeta_date">24th June 2021</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="single_nfeed single_nfeed_2 mb-30">
                  <div className="single_feed_img img_effect_white">
                    <Link to='/blog-details'>
                      <img src={nfeed2_3} alt="img" />
                    </Link>
                  </div>
                  <div className="nfeed_content nfeed_content_2">
                    <div className="nfeed_title">
                      <Link to='/blog-details'
                        className="nsub_title nsub_title_2"
                      >
                        Charity, Food
                      </Link>
                      <h3 className="n_title">
                        <Link to='/blog-details'>
                          Healthy food for everyone in a fund campaign anyways
                          to win.
                        </Link>
                      </h3>
                    </div>
                    <div className="nfeed_meta_wrapper d-flex">
                      <div className="nfeed_meta mr-20">
                        <a href="#" className="nmeta_icon theme-1">
                          <i className="fal fa-user" />
                        </a>
                        <a href="#" className="nmeta_text theme-1">
                          <span className="nmeta_by">By</span>Admin
                        </a>
                      </div>
                      <div className="nfeed_meta">
                        <a href="#" className="nmeta_icon theme-2">
                          <i className="fal fa-calendar-alt" />
                        </a>
                        <a href="#" className="nmeta_text theme-2">
                          <span className="nmeta_date">24th June 2021</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* newsfeed area end */}
      </main>
      {/* Main Area End*/}
    </div>
  );
};

export default Main;
