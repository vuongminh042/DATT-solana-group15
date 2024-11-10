import logo from "../../../../assets/img/logo/logo.png";
import sidebar1 from "../../../../assets/img/causes/sidebar1.jpg";
import sidebar2 from "../../../../assets/img/causes/sidebar2.jpg";
import sidebar3 from "../../../../assets/img/causes/sidebar3.jpg";
import sidebar4 from "../../../../assets/img/causes/sidebar4.jpg";
import sidebar5 from "../../../../assets/img/causes/sidebar5.jpg";
import sidebar6 from "../../../../assets/img/causes/sidebar6.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [name, setUserName] = useState<string | null>(null); // State mới để lưu tên người dùng
  useEffect(() => {
    const storedName = localStorage.getItem("user");
    try {
      if (storedName) {
        const storedUserObject = JSON.parse(storedName);
        const userName = storedUserObject.name;
        setUserName(userName);
      } else {
        console.error("Không tìm thấy tên người dùng trong localStorage");
      }
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu từ localStorage:", error);
    }
  }, []);
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
                        data-cfemail="e382878e8a8da3878c8e828a8dcd808c8e"
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
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li className="active menu-item-has-children">
                          <Link to="/causes">Causes</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/causes">Causes</Link>
                            </li>
                            <li>
                              <Link to="/cause-details">Cause Details</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Pages</a>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/events">Events</Link>
                            </li>
                            <li>
                              <Link to="/events-details">Events Details</Link>
                            </li>
                            <li>
                              <Link to="/volunteer">Volunteer</Link>
                            </li>
                            <li>
                              <Link to="/volunteer-details">
                                Volunteer Details
                              </Link>
                            </li>
                            <li>
                              <Link to="/donation">Donation</Link>
                            </li>
                            <li>
                              <Link to="/mission">Mission</Link>
                            </li>
                            <li>
                              <Link to="/faq">Faq</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="/blog">News</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/blog">News</Link>
                            </li>
                            <li>
                              <Link to="/blog-details">News Details</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          {name ? (
                            <Link to="/">Hello, {name}!</Link>
                          ) : (
                            <Link to="/account">
                              Account
                              <ul className="sub-menu">
                                <li>
                                  <Link to="/register">Register</Link>
                                </li>
                                <li>
                                  <Link to="/login">Login</Link>
                                </li>
                              </ul>
                            </Link>
                          )}
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-1 col-md-6 col-6">
                  <div className="header-right d-flex align-items-center justify-content-end">
                    <div className="header-sing d-inline-block d-none d-xl-block">
                      <Link
                        to="/donation"
                        className="g_btn hbtn_1 to_right1 rad-30"
                      >
                        Make Donation
                        <span />
                      </Link>
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
                  <div className="col-8">
                    <Link to="/" className="mobile_logo">
                      <img src={logo} alt="Logo" />
                    </Link>
                  </div>
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
                  {/* <button type="submit" className="offset_search_button">
                    <i className="fal fa-search" />
                  </button> */}
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
                  href="https://wphix.com/cdn-cgi/l/email-protection#1c7d787175725c7873717d7572327f7371"
                  className="theme-3"
                >
                  <i className="far fa-envelope" />
                  <span>
                    <span
                      className="__cf_email__"
                      data-cfemail="bcddd8d1d5d2fcd8d3d1ddd5d292dfd3d1"
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
                  <Link to="/">
                    <img src={logo} alt="Logo" />
                  </Link>
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
                  href="https://wphix.com/cdn-cgi/l/email-protection#d6b7b2bbbfb896b2b9bbb7bfb8f8b5b9bb"
                  className="theme-3"
                >
                  <i className="far fa-envelope" />
                  <span>
                    <span
                      className="__cf_email__"
                      data-cfemail="0667626b6f684662696b676f682865696b"
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
