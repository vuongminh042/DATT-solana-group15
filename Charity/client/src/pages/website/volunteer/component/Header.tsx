import logo from "../../../../assets/img/logo/logo.png";
import sidebar1 from "../../../../assets/img/causes/sidebar1.jpg";
import sidebar2 from "../../../../assets/img/causes/sidebar2.jpg";
import sidebar3 from "../../../../assets/img/causes/sidebar3.jpg";
import sidebar4 from "../../../../assets/img/causes/sidebar4.jpg";
import sidebar5 from "../../../../assets/img/causes/sidebar5.jpg";
import sidebar6 from "../../../../assets/img/causes/sidebar6.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div>
        {/* Header One Start*/}
        <header className="header-area">
          <div className="header_top_area d-none d-lg-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-9 col-xl-9 col-lg-8">
                  <div className="top_mailing">
                    <a href="#" className="theme-1">
                      <i className="fal fa-envelope" />
                      <span
                        className="__cf_email__"
                        data-cfemail="08696c656166486c6765696166266b6765"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                    <a href="#" className="theme-2">
                      <i className="fal fa-phone" />
                      088889797697
                    </a>
                    <a href="#" className="theme-3">
                      <i className="fal fa-map-marker-alt" />
                      street 222, South Africa
                    </a>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-4 text-start text-md-end">
                  <div className="top_social">
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
          <div
            id="sticky-header"
            className="header_menu_area header_menu_area_2"
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                  <div className="logo">
                    <Link to="/">
                      <img src={logo} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-9 d-none d-lg-block">
                  <div className="main-menu menu_2 text-center">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="menu-item-has-children">
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="cause.html">Causes</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="cause.html">Causes</a>
                            </li>
                            <li>
                              <a href="cause-details.html">Cause Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="active menu-item-has-children">
                          <a href="#">Pages</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="event">Events</a>
                            </li>
                            <li>
                              <a href="event-details">Events Details</a>
                            </li>
                            <li>
                              <a href="volunteer">Volunteer</a>
                            </li>
                            <li>
                              <a href="volunteer-details">Volunteer Details</a>
                            </li>
                            <li>
                              <a href="donation">Donation</a>
                            </li>
                            <li>
                              <a href="mission">Mission</a>
                            </li>
                            <li>
                              <a href="faq">Faq</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="blog.html">News</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="blog.html">News</a>
                            </li>
                            <li>
                              <a href="blog-details.html">News Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-1 col-md-6 col-6">
                  <div className="header-right d-flex align-items-center justify-content-end">
                    <div className="header-sing d-inline-block d-none d-xl-block">
                      <a
                        className="g_btn hbtn_1 to_right1 rad-30"
                        href="donation.html"
                      >
                        Make Donation
                        <span />
                      </a>
                    </div>
                    <div className="hamburger-menu menu-bar info-bar d-inline-block ml-20">
                      <button className="hamburger-btn open-mobile-menu">
                        <i className="fal fa-bars" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Header One End*/}
        {/* slide-bar start */}
        {/* Sidebar for Mobile */}
        <div className="fix d-lg-none">
          <div className="side-info">
            <div className="offset-widget offset-logo mb-30 pb-20">
              <div className="row align-items-center">
                <div className="col-8">
                  <a href="index.html" className="mobile_logo">
                    <img src={logo} alt="Logo" />
                  </a>
                </div>
                <div className="col-4 text-end">
                  <button className="side-info-close">
                    <i className="fal fa-times" />
                  </button>
                </div>
              </div>
            </div>
            <div className="offset-widget offset_searchbar mb-30">
              <form method="get" action="#">
                <div className="offset_search_content">
                  <input
                    type="search"
                    placeholder="What are you searching for?"
                  />
                  <button type="submit" className="offset_search_button">
                    <i className="fal fa-search" />
                  </button>
                </div>
              </form>
            </div>
            <div className="mobile-menu" />
            <div className="contact-infos mt-30 mb-30">
              <div className="contact-list mobile_contact mb-30">
                <h4>Contact Info</h4>
                <a href="#" className="theme-1">
                  <i className="fal fa-map-marker-alt" />
                  <span>12/A, Mirnada City Tower, NYC</span>
                </a>
                <a href="tel:088889797697" className="theme-2">
                  <i className="fal fa-phone" />
                  <span>088889797697</span>
                </a>
                <a
                  href="https://wphix.com/cdn-cgi/l/email-protection#147570797d7a54707b79757d7a3a777b79"
                  className="theme-3"
                >
                  <i className="far fa-envelope" />
                  <span>
                    <span
                      className="__cf_email__"
                      data-cfemail="d3b2b7bebabd93b7bcbeb2babdfdb0bcbe"
                    >
                      [email&nbsp;protected]
                    </span>
                  </span>
                </a>
              </div>
              <div className="top_social offset_social mt-20 mb-30">
                <a href="#" target="_blank" className="facebook">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" target="_blank" className="twitter">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" target="_blank" className="linkedin">
                  <i className="fab fa-linkedin" />
                </a>
                <a href="#" target="_blank" className="youtube">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar for Laptop */}
        <div className="fix d-none d-lg-block">
          <div className="offset-sidebar side-info">
            <div className="offset-widget offset-logo mb-30 pb-20">
              <div className="row align-items-center">
                <div className="col-8">
                  <a href="index.html">
                    <img src={logo} alt="Logo" />
                  </a>
                </div>
                <div className="col-4 text-end">
                  <button className="side-info-close">
                    <i className="fal fa-times" />
                  </button>
                </div>
              </div>
            </div>
            <div className="offset-widget offset_searchbar mb-30">
              <form method="get" action="#">
                <div className="offset_search_content">
                  <input
                    type="search"
                    placeholder="What are you searching for?"
                  />
                  <button type="submit" className="offset_search_button">
                    <i className="fal fa-search" />
                  </button>
                </div>
              </form>
            </div>
            <div className="offset-widget mb-40">
              <div className="info-widget">
                <h4 className="offset-title mb-20 d-none">About Us</h4>
                <p className="mb-30">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and will give
                  you a complete account of the system and expound the actual
                  teachings of the great explore
                </p>
                <a href="#" className="c-btn btn-round-02 d-none">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="row side-row">
              <div className="col-4 mb-15">
                <a className="popup-image" href={sidebar1}>
                  <img src={sidebar1} alt="sidebar-img" />
                </a>
              </div>
              <div className="col-4 mb-15">
                <a className="popup-image" href={sidebar2}>
                  <img src={sidebar2} alt="sidebar-img" />
                </a>
              </div>
              <div className="col-4 mb-15">
                <a className="popup-image" href={sidebar3}>
                  <img src={sidebar3} alt="sidebar-img" />
                </a>
              </div>
              <div className="col-4 mb-15">
                <a className="popup-image" href={sidebar4}>
                  <img src={sidebar4} alt="sidebar-img" />
                </a>
              </div>
              <div className="col-4 mb-15">
                <a className="popup-image" href={sidebar5}>
                  <img src={sidebar5} alt="sidebar-img" />
                </a>
              </div>
              <div className="col-4 mb-15">
                <a className="popup-image" href={sidebar6}>
                  <img src={sidebar6} alt="sidebar-img" />
                </a>
              </div>
            </div>
            <div className="side-map mt-20 mb-30">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29176.030811137334!2d90.3883827!3d23.924917699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1605272373598!5m2!1sen!2sbd" />
            </div>
            <div className="contact-infos mt-30 mb-30">
              <div className="contact-list mb-30">
                <h4>Contact Info</h4>
                <a href="#" className="theme-1">
                  <i className="fal fa-map-marker-alt" />
                  <span>12/A, Mirnada City Tower, NYC</span>
                </a>
                <a href="tel:088889797697" className="theme-2">
                  <i className="fal fa-phone" />
                  <span>088889797697</span>
                </a>
                <a
                  href="https://wphix.com/cdn-cgi/l/email-protection#debfbab3b7b09ebab1b3bfb7b0f0bdb1b3"
                  className="theme-3"
                >
                  <i className="far fa-envelope" />
                  <span>
                    <span
                      className="__cf_email__"
                      data-cfemail="7110151c181f31151e1c10181f5f121e1c"
                    >
                      [email&nbsp;protected]
                    </span>
                  </span>
                </a>
              </div>
              <div className="top_social offset_social mt-20 mb-30">
                <a href="#" target="_blank" className="facebook">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" target="_blank" className="twitter">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" target="_blank" className="instagram">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#" target="_blank" className="linkedin">
                  <i className="fab fa-linkedin" />
                </a>
                <a href="#" target="_blank" className="youtube">
                  <i className="fab fa-youtube" />
                </a>
                <a href="#" className="pinterest">
                  <i className="fab fa-pinterest-p" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas-overlay" />
        {/* slide-bar end */}
      </div>
    </div>
  );
};

export default Header;