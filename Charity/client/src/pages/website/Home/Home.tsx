import './Home.css'

const Home = () => {
    return (
        <div>
            <header className="header-area header-transparent">
                <div id="sticky-header" className="header_menu_area res_padd">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                                <div className="logo">
                                    <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-xxl-7 col-xl-6 col-lg-8 d-none d-lg-block">
                                <div className="main-menu theme-1 text-center">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className="active menu-item-has-children"><a href="index.html">Home</a>
                                                <ul className="sub-menu">
                                                    <li><a href="index.html">Home 1</a></li>
                                                    <li><a href="index-2.html">Home 2</a></li>
                                                    <li><a href="index-3.html">Home 3</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="about.html">About</a></li>
                                            <li className="menu-item-has-children"><a href="cause-details.html">Causes</a>
                                                <ul className="sub-menu">
                                                    <li><a href="cause-details.html">Causes</a></li>
                                                    <li><a href="cause-details.html">Cause Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><a href="#">Pages</a>
                                                <ul className="sub-menu">
                                                    <li><a href="event.html">Events</a></li>
                                                    <li><a href="event-details.html">Events Details</a></li>
                                                    <li><a href="volunteer.html">Volunteer</a></li>
                                                    <li><a href="volunteer-details.html">Volunteer Details</a></li>
                                                    <li><a href="donation.html">Donation</a></li>
                                                    <li><a href="mission.html">Mission</a></li>
                                                    <li><a href="faq.html">Faq</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><a href="blog.html">News</a>
                                                <ul className="sub-menu">
                                                    <li><a href="blog.html">News</a></li>
                                                    <li><a href="blog-details.html">News Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-2 col-md-6 col-6">
                                <div className="header-right d-flex align-items-center justify-content-end">
                                    <div className="header-icon d-inline-block">
                                        <a className="nav-search search-trigger" href="javascript:void(0)"><i className="fal fa-search"></i></a>
                                    </div>
                                    <div className="header-sing d-inline-block ml-20 d-none d-xl-block">
                                        <a className="g_btn hbtn_1 to_right1 rad-30" href="donation.html">Make Donation<span></span></a>
                                    </div>
                                    <div className="hamburger-menu menu-bar info-bar d-inline-block ml-20">
                                        <button className="hamburger-btn open-mobile-menu"><i className="fal fa-bars"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="fix d-lg-none">
                <div className="side-info">
                    <div className="offset-widget offset-logo mb-30 pb-20">
                        <div className="row align-items-center">
                            <div className="col-8"><a href="index.html" className="mobile_logo"><img src="assets/img/logo/logo.png" alt="Logo" /></a></div>
                            <div className="col-4 text-end"><button className="side-info-close"><i className="fal fa-times" /></button></div>
                        </div>
                    </div>
                    <div className="offset-widget offset_searchbar mb-30">
                        <form method="get" action="#">
                            <div className="offset_search_content">
                                <input type="search" placeholder="What are you searching for?" />
                                <button type="submit" className="offset_search_button"><i className="fal fa-search" /></button>
                            </div>
                        </form>
                    </div>
                    <div className="mobile-menu" />
                    <div className="contact-infos mt-30 mb-30">
                        <div className="contact-list mobile_contact mb-30">
                            <h4>Contact Info</h4>
                            <a href="#" className="theme-1"><i className="fal fa-map-marker-alt" /><span>12/A, Mirnada City Tower, NYC</span></a>
                            <a href="tel:088889797697" className="theme-2"><i className="fal fa-phone" /><span>088889797697</span></a>
                            <a href="https://wphix.com/cdn-cgi/l/email-protection#9afbfef7f3f4dafef5f7fbf3f4b4f9f5f7" className="theme-3"><i className="far fa-envelope" /><span><span className="__cf_email__" data-cfemail="4223262f2b2c02262d2f232b2c6c212d2f">[email&nbsp;protected]</span></span></a>
                        </div>
                        <div className="top_social offset_social mt-20 mb-30">
                            <a href="#" target="_blank" className="facebook"><i className="fab fa-facebook-f" /></a>
                            <a href="#" target="_blank" className="twitter"><i className="fab fa-twitter" /></a>
                            <a href="#" target="_blank" className="linkedin"><i className="fab fa-linkedin" /></a>
                            <a href="#" target="_blank" className="youtube"><i className="fab fa-youtube" /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fix d-none d-lg-block">
                <div className="offset-sidebar side-info">
                    <div className="offset-widget offset-logo mb-30 pb-20">
                        <div className="row align-items-center">
                            <div className="col-8"><a href="index.html"><img src="assets/img/logo/logo.png" alt="Logo" /></a></div>
                            <div className="col-4 text-end"><button className="side-info-close"><i className="fal fa-times" /></button></div>
                        </div>
                    </div>
                    <div className="offset-widget offset_searchbar mb-30">
                        <form method="get" action="#">
                            <div className="offset_search_content">
                                <input type="search" placeholder="What are you searching for?" />
                                <button type="submit" className="offset_search_button"><i className="fal fa-search" /></button>
                            </div>
                        </form>
                    </div>
                    <div className="offset-widget mb-40">
                        <div className="info-widget">
                            <h4 className="offset-title mb-20 d-none">About Us</h4>
                            <p className="mb-30">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system and expound the actual teachings of the great explore</p>
                            <a href="#" className="c-btn btn-round-02 d-none">Contact Us</a>
                        </div>
                    </div>
                    <div className="row side-row">
                        <div className="col-4 mb-15">
                            <a className="popup-image" href="assets/img/causes/sidebar1.jpg"><img src="assets/img/causes/sidebar1.jpg" alt="sidebar-img" /></a>
                        </div>
                        <div className="col-4 mb-15">
                            <a className="popup-image" href="assets/img/causes/sidebar2.jpg"><img src="assets/img/causes/sidebar2.jpg" alt="sidebar-img" /></a>
                        </div>
                        <div className="col-4 mb-15">
                            <a className="popup-image" href="assets/img/causes/sidebar3.jpg"><img src="assets/img/causes/sidebar3.jpg" alt="sidebar-img" /></a>
                        </div>
                        <div className="col-4 mb-15">
                            <a className="popup-image" href="assets/img/causes/sidebar4.jpg"><img src="assets/img/causes/sidebar4.jpg" alt="sidebar-img" /></a>
                        </div>
                        <div className="col-4 mb-15">
                            <a className="popup-image" href="assets/img/causes/sidebar5.jpg"><img src="assets/img/causes/sidebar5.jpg" alt="sidebar-img" /></a>
                        </div>
                        <div className="col-4 mb-15">
                            <a className="popup-image" href="assets/img/causes/sidebar6.jpg"><img src="assets/img/causes/sidebar6.jpg" alt="sidebar-img" /></a>
                        </div>
                    </div>
                    <div className="side-map mt-20 mb-30">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29176.030811137334!2d90.3883827!3d23.924917699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1605272373598!5m2!1sen!2sbd" />
                    </div>
                    <div className="contact-infos mt-30 mb-30">
                        <div className="contact-list mb-30">
                            <h4>Contact Info</h4>
                            <a href="#" className="theme-1"><i className="fal fa-map-marker-alt" /><span>12/A, Mirnada City Tower, NYC</span></a>
                            <a href="tel:088889797697" className="theme-2"><i className="fal fa-phone" /><span>088889797697</span></a>
                            <a href="https://wphix.com/cdn-cgi/l/email-protection#f392979e9a9db3979c9e929a9ddd909c9e" className="theme-3"><i className="far fa-envelope" /><span><span className="__cf_email__" data-cfemail="5c3d383135321c3833313d3532723f3331">[email&nbsp;protected]</span></span></a>
                        </div>
                        <div className="top_social offset_social mt-20 mb-30">
                            <a href="#" target="_blank" className="facebook"><i className="fab fa-facebook-f" /></a>
                            <a href="#" target="_blank" className="twitter"><i className="fab fa-twitter" /></a>
                            <a href="#" target="_blank" className="instagram"><i className="fab fa-instagram" /></a>
                            <a href="#" target="_blank" className="linkedin"><i className="fab fa-linkedin" /></a>
                            <a href="#" target="_blank" className="youtube"><i className="fab fa-youtube" /></a>
                            <a href="#" className="pinterest"><i className="fab fa-pinterest-p" /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offcanvas-overlay" />

            <main>
                {/*slider area start*/}
                <section className="slider_area">
                    <div className="img_topleft"><img data-depth={1} src="assets/img/slider/lefttop.png" alt="img" /></div>
                    <div className="img_topright"><img data-depth="1.3" src="assets/img/slider/righttop.png" alt="img" /></div>
                    <div className="img_bottomleft"><img data-depth="1.5" src="assets/img/slider/bottomleft.png" alt="img" /></div>
                    <div className="slider_active">
                        <div className="single_slider slider_height p-rel d-flex align-items-center align-items-md-end">
                            <div className="img_bottomright"><img data-depth="0.8" src="assets/img/slider/bottomright.png" alt="img" /></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9">
                                        <div className="slider_content text_space">
                                            <div className="slider_text text_overlay">
                                                <h2 className="slider_title"> <span>Make</span> <br /> Donation</h2>
                                                <div className="slider_button"><a href="cause.html" className="g_btn theme1_bg to_right2 slider_btn i_left rad-30 p-35"><i className="fal fa-heart" /> Explore Causes<span /></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*slider area end*/}
                {/*cta area start*/}
                <section className="cta_area cta-bg text-white pt-90 pb-60">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-4 text-center text-xxl-start">
                                <div className="section_title_2 mb-30">
                                    <span className="sub_title_2">Make Donation</span>
                                    <h3 className="section_title_2 mb-0">Become a Donar</h3>
                                </div>
                            </div>
                            <div className="col-xxl-8">
                                <div className="donar_section d-lg-flex justify-content-center justify-content-xxl-end text-center">
                                    <div className="donar_form d-inline-block mb-30">
                                        <input type="text" placeholder="Your name" className="donar_input mr-15" />
                                        <input type="text" placeholder="Enter email" className="donar_input mr-15" />
                                    </div>
                                    <div className="donar_currency d-inline-block mb-30">
                                        <button className="currency mr-15">50</button>
                                        <button className="currency mr-15">100</button>
                                        <button className="currency custom_padd mr-15">Custom</button>
                                    </div>
                                    <div className="donnar_button text-center">
                                        <button className="g_btn theme1_bg to_right2 donation rad-30 p-60 mb-30">Make a Donation<span /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*cta area end*/}
                {/*about area start*/}
                <section className="about_area pt-120 pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <div className="about_img_wrapper fix mr-30">
                                    <div className="row mb-40">
                                        <div className="col-12 custom_col">
                                            <a href="about.html" className="about_img w_img">
                                                <img src="assets/img/causes/cause_sbig.jpg" alt="img" />
                                                <div className="about_img_text theme-2">
                                                    <i className="flaticon-water-drop" />
                                                    <h6 className="img_text">Pure Water</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row gutter_40">
                                        <div className="col-xxl-6 col-md-6 col-sm-6 custom_col mb-40">
                                            <a href="about.html" className="about_img w_img rad-50p fix">
                                                <img src="assets/img/about/about_sm1.jpg" alt="img" />
                                                <div className="about_img_text theme-no1">
                                                    <i className="flaticon-doctor" />
                                                    <h6 className="img_text">Education</h6>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-xxl-6 col-md-6 col-sm-6 custom_col mb-40">
                                            <a href="about.html" className="about_img w_img">
                                                <img src="assets/img/about/about_sm2.jpg" alt="img" />
                                                <div className="about_img_text theme-no">
                                                    <i className="flaticon-stethoscope" />
                                                    <h6 className="img_text">Medical &amp; Health</h6>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                                <div className="about_wrapper_home pl-20">
                                    <div className="section_title">
                                        <span className="sub_title"><i className="fal fa-heart" /> About Us</span>
                                        <h3 className="title">Fight for right cause <br /> for save the world</h3>
                                    </div>
                                    <p className="mb-45">NewLook unlike many traditional plastic surgery centers in San Diego,
                                        are industry recognized experts in a wide variety of cosmetic procedure
                                        and are dedicated to providing customers.</p>
                                    <div className="row">
                                        <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <ul className="about_list mtm-20 mb-30">
                                                <li>Food &amp; water charity</li>
                                                <li>Sent a gift anytime</li>
                                                <li>Make donation</li>
                                                <li>24/7 online support</li>
                                            </ul>
                                        </div>
                                        <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <div className="about_review text-center mb-30" data-background="assets/img/about/about_review.jpg">
                                                <span className="author">-Mironton T.</span>
                                                <h5 className="review_text">Life is a long lesson
                                                    in humanity</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*about area end*/}
                {/* causes area start*/}
                <section className="causes_area grey-bg pt-105 pb-385" data-background="assets/img/causes/cause_map.png">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12 text-center">
                                <div className="section_title mb-45">
                                    <span className="sub_title"><i className="fal fa-heart" /> Causes</span>
                                    <h3 className="title">Latest Causes</h3>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-container cause_container_active">
                            <div className="swiper-wrapper">
                                <div className="single_cause swiper-slide mb-30">
                                    <div className="single_cause_img img_effect_white p-rel">
                                        <a href="cause-details.html"><img src="assets/img/causes/cause1.jpg" alt="img" /></a>
                                        <div className="progress_wrapper pbar_1">
                                            <div className="progress_circle" data-percentage={65}>
                                                <span className="progress-left">
                                                    <span className="progress-bar" />
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar" />
                                                </span>
                                                <div className="progress-value">
                                                    <div>
                                                        65%
                                                    </div>
                                                </div>
                                            </div>
                                            <span>Water</span>
                                        </div>
                                    </div>
                                    <div className="single_cause_content single_cause_content_2">
                                        <div className="single_cause">
                                            <h3 className="title"><a href="cause-details.html">The various agency help the poor, you also can try.</a></h3>
                                        </div>
                                        <div className="single_cause_meta">
                                            <div className="single_meta d-inline-block">
                                                <span className="meta_text clr_theme1"><i className="fal fa-globe" /> Goal</span>
                                                <span className="meta_price clr_theme1">$4,5100</span>
                                            </div>
                                            <div className="single_meta d-inline-block">
                                                <span className="meta_text clr_theme2"><i className="fal fa-users" /> Raised</span>
                                                <span className="meta_price clr_theme2">$45,300</span>
                                            </div>
                                            <div className="single_meta d-inline-block">
                                                <span className="meta_text clr_theme3"><i className="fal fa-reply" /> To go</span>
                                                <span className="meta_price clr_theme3">$45,200</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single_cause swiper-slide mb-30">
                                    <div className="single_cause_img p-rel img_effect_white">
                                        <a href="cause-details.html"><img src="assets/img/causes/cause17.jpg" alt="img" /></a>
                                        <div className="progress_wrapper pbar_2">
                                            <div className="progress_circle" data-percentage={80}>
                                                <span className="progress-left">
                                                    <span className="progress-bar" />
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar" />
                                                </span>
                                                <div className="progress-value">
                                                    <div>
                                                        80%
                                                    </div>
                                                </div>
                                            </div>
                                            <span>Education</span>
                                        </div>
                                    </div>
                                    <div className="single_cause_content single_cause_content_2">
                                        <div className="single_cause">
                                            <h3 className="title"><a href="cause-details.html">If poor will well educated, you and you country will be rich.</a></h3>
                                        </div>
                                        <div className="single_cause_meta">
                                            <div className="single_meta d-inline-block">
                                                <span className="meta_text clr_theme1"><i className="fal fa-globe" /> Goal</span>
                                                <span className="meta_price clr_theme1">$4,7100</span>
                                            </div>
                                            <div className="single_meta d-inline-block">
                                                <span className="meta_text clr_theme2"><i className="fal fa-users" /> Raised</span>
                                                <span className="meta_price clr_theme2">$43,300</span>
                                            </div>
                                            <div className="single_meta d-inline-block">
                                                <span className="meta_text clr_theme3"><i className="fal fa-reply" /> To go</span>
                                                <span className="meta_price clr_theme3">$40,200</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single_cause swiper-slide mb-30">
                                    <div className="single_cause_img p-rel img_effect_white">
                                        <a href="cause-details.html"><img src="assets/img/causes/cause3.jpg" alt="img" /></a>
                                        <div className="progress_wrapper pbar_3">
                                            <div className="progress_circle" data-percentage={80}>
                                                <span className="progress-left">
                                                    <span className="progress-bar" />
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar" />
                                                </span>
                                                <div className="progress-value">
                                                    <div>
                                                        50%
                                                    </div>
                                                </div>
                                            </div>
                                            <span>Education</span>
                                        </div>
                                    </div>
                                    <div className="single_cause_content single_cause_content_2">
                                        <div className="single_cause">
                                            <h3 className="title"><a href="cause-details.html">Give your helping hand to teach poor people always</a></h3>
                                        </div>
                                        <div className="single_cause_meta">
                                            <div className="single_meta d-inline-block">
                                                <span className="meta_text clr_theme1"><i className="fal fa-globe" /> Goal</span>
                                                <span className="meta_price clr_theme1">$21,100</span>
                                            </div>
                                            <div className="single_meta d-inline-block">
                                                <span className="meta_text clr_theme2"><i className="fal fa-users" /> Raised</span>
                                                <span className="meta_price clr_theme2">$19,300</span>
                                            </div>
                                            <div className="single_meta d-inline-block">
                                                <span className="meta_text clr_theme3"><i className="fal fa-reply" /> To go</span>
                                                <span className="meta_price clr_theme3">$31,200</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single_cause swiper-slide mb-30">
                                    <div className="single_cause_img p-rel img_effect_white">
                                        <a href="cause-details.html"><img src="assets/img/causes/cause10.jpg" alt="img" /></a>
                                        <div className="progress_wrapper pbar_3">
                                            <div className="progress_circle" data-percentage={80}>
                                                <span className="progress-left">
                                                    <span className="progress-bar" />
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar" />
                                                </span>
                                                <div className="progress-value">
                                                    <div>
                                                        50%
                                                    </div>
                                                </div>
                                            </div>
                                            <span>Medical</span>
                                        </div>
                                    </div>
                                    <div className="single_cause_content single_cause_content_2">
                                        <div className="single_cause">
                                            <h3 className="title"><a href="cause-details.html">We have to careful and helpful to poor people always.</a></h3>
                                        </div>
                                        <div className="single_cause_meta">
                                            <div className="single_meta d-inline-block">
                                                <span className="meta_text clr_theme1"><i className="fal fa-globe" /> Goal</span>
                                                <span className="meta_price clr_theme1">$21,100</span>
                                            </div>
                                            <div className="single_meta d-inline-block">
                                                <span className="meta_text clr_theme2"><i className="fal fa-users" /> Raised</span>
                                                <span className="meta_price clr_theme2">$19,300</span>
                                            </div>
                                            <div className="single_meta d-inline-block">
                                                <span className="meta_text clr_theme3"><i className="fal fa-reply" /> To go</span>
                                                <span className="meta_price clr_theme3">$31,200</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single_cause swiper-slide mb-30">
                                    <div className="single_cause_img p-rel img_effect_white">
                                        <a href="cause-details.html"><img src="assets/img/causes/cause11.jpg" alt="img" /></a>
                                        <div className="progress_wrapper pbar_3">
                                            <div className="progress_circle" data-percentage={80}>
                                                <span className="progress-left">
                                                    <span className="progress-bar" />
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar" />
                                                </span>
                                                <div className="progress-value">
                                                    <div>
                                                        50%
                                                    </div>
                                                </div>
                                            </div>
                                            <span>Medical</span>
                                        </div>
                                    </div>
                                    <div className="single_cause_content single_cause_content_2">
                                        <div className="single_cause">
                                            <h3 className="title"><a href="cause-details.html">Share your money to serve poor people as far possible.</a></h3>
                                        </div>
                                        <div className="single_cause_meta">
                                            <div className="single_meta d-inline-block">
                                                <span className="meta_text clr_theme1"><i className="fal fa-globe" /> Goal</span>
                                                <span className="meta_price clr_theme1">$21,100</span>
                                            </div>
                                            <div className="single_meta d-inline-block">
                                                <span className="meta_text clr_theme2"><i className="fal fa-users" /> Raised</span>
                                                <span className="meta_price clr_theme2">$19,300</span>
                                            </div>
                                            <div className="single_meta d-inline-block">
                                                <span className="meta_text clr_theme3"><i className="fal fa-reply" /> To go</span>
                                                <span className="meta_price clr_theme3">$31,200</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single_cause swiper-slide mb-30">
                                    <div className="single_cause_img p-rel img_effect_white">
                                        <a href="cause-details.html"><img src="assets/img/causes/cause12.jpg" alt="img" /></a>
                                        <div className="progress_wrapper pbar_3">
                                            <div className="progress_circle" data-percentage={80}>
                                                <span className="progress-left">
                                                    <span className="progress-bar" />
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar" />
                                                </span>
                                                <div className="progress-value">
                                                    <div>
                                                        50%
                                                    </div>
                                                </div>
                                            </div>
                                            <span>Medical</span>
                                        </div>
                                    </div>
                                    <div className="single_cause_content single_cause_content_2">
                                        <div className="single_cause">
                                            <h3 className="title"><a href="cause-details.html">Donate now to forward for poor at this pandemic time.</a></h3>
                                        </div>
                                        <div className="single_cause_meta">
                                            <div className="single_meta d-inline-block">
                                                <span className="meta_text clr_theme1"><i className="fal fa-globe" /> Goal</span>
                                                <span className="meta_price clr_theme1">$21,100</span>
                                            </div>
                                            <div className="single_meta d-inline-block">
                                                <span className="meta_text clr_theme2"><i className="fal fa-users" /> Raised</span>
                                                <span className="meta_price clr_theme2">$19,300</span>
                                            </div>
                                            <div className="single_meta d-inline-block">
                                                <span className="meta_text clr_theme3"><i className="fal fa-reply" /> To go</span>
                                                <span className="meta_price clr_theme3">$31,200</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single_cause swiper-slide mb-30">
                                    <div className="single_cause_img p-rel img_effect_white">
                                        <a href="cause-details.html"><img src="assets/img/causes/cause24.jpg" alt="img" /></a>
                                        <div className="progress_wrapper pbar_3">
                                            <div className="progress_circle" data-percentage={80}>
                                                <span className="progress-left">
                                                    <span className="progress-bar" />
                                                </span>
                                                <span className="progress-right">
                                                    <span className="progress-bar" />
                                                </span>
                                                <div className="progress-value">
                                                    <div>
                                                        50%
                                                    </div>
                                                </div>
                                            </div>
                                            <span>Food</span>
                                        </div>
                                    </div>
                                    <div className="single_cause_content single_cause_content_2">
                                        <div className="single_cause">
                                            <h3 className="title"><a href="cause-details.html">Putting the power of law in people's hand</a></h3>
                                        </div>
                                        <div className="single_cause_meta">
                                            <div className="single_meta d-inline-block">
                                                <span className="meta_text clr_theme1"><i className="fal fa-globe" /> Goal</span>
                                                <span className="meta_price clr_theme1">$21,100</span>
                                            </div>
                                            <div className="single_meta d-inline-block">
                                                <span className="meta_text clr_theme2"><i className="fal fa-users" /> Raised</span>
                                                <span className="meta_price clr_theme2">$19,300</span>
                                            </div>
                                            <div className="single_meta d-inline-block">
                                                <span className="meta_text clr_theme3"><i className="fal fa-reply" /> To go</span>
                                                <span className="meta_price clr_theme3">$31,200</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* causes area end*/}
                {/*support area start*/}
                <div className="support_area mtm-294 pb-90">
                    <div className="container">
                        <div className="support_bg white-bg">
                            <div className="row">
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                                    <div className="support_images_active swiper-container dots_style">
                                        <div className="swiper-wrapper">
                                            <div className="support_img_single swiper-slide img_effect_white">
                                                <a href="volunteer.html"><img src="assets/img/bg/support1.jpg" alt="img" /></a>
                                            </div>
                                            <div className="support_img_single swiper-slide img_effect_white">
                                                <a href="volunteer.html"><img src="assets/img/bg/support3.jpg" alt="img" /></a>
                                            </div>
                                            <div className="support_img_single swiper-slide img_effect_white">
                                                <a href="volunteer.html"><img src="assets/img/bg/support4.jpg" alt="img" /></a>
                                            </div>
                                            <div className="support_img_single swiper-slide img_effect_white">
                                                <a href="volunteer.html"><img src="assets/img/bg/support3.jpg" alt="img" /></a>
                                            </div>
                                        </div>
                                        {/* Add Pagination */}
                                        <div className="swiper-pagination-join text-center" />
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 d-flex align-items-center">
                                    <div className="support_wrapper">
                                        <div className="section_title">
                                            <span className="sub_title"><i className="fal fa-users" /> Join Us</span>
                                            <h3 className="title">Become an volunteer
                                                for save children</h3>
                                        </div>
                                        <p className="mb-45">NewLook unlike many traditional plastic surgery centers in San
                                            Diego, are industry recognized experts in a wide variety of with an
                                            cosmetic procedure and are dedicated</p>
                                        <a href="volunteer.html" className="g_btn theme1_bg to_right2 i_right rad-30 p-45">Apply Here<i className="fal fa-long-arrow-right" /><span /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-120">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-12 col-sm-12">
                                <div className="section_title mb-55">
                                    <span className="sub_title"><i className="fal fa-heart" />Why Choose Us</span>
                                    <h3 className="title">The perfect help</h3>
                                </div>
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6">
                                        <div className="choose_single_card theme-2 p-rel mb-30">
                                            <div className="choose_abs theme-2">
                                                <i className="flaticon-map" />
                                            </div>
                                            <span className="card_number">01</span>
                                            <div className="choose_card_content">
                                                <h5 className="choose_card_title">Places to get lost</h5>
                                                <p>Charity is the largest global for
                                                    crowdfunding community with
                                                    connecting nonprofits.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6">
                                        <div className="choose_single_card p-rel theme-3 mb-30">
                                            <div className="choose_abs theme-3">
                                                <i className="flaticon-user" />
                                            </div>
                                            <span className="card_number clr-theme-3">02</span>
                                            <div className="choose_card_content">
                                                <h5 className="choose_card_title">Free Refuge Shelter</h5>
                                                <p>Lorem ipsum dolor sit ametco bns ectetur adi pisicing elit sed do eiusmod tempor incid.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-12 col-sm-12 d-flex align-items-center text-center">
                                <div className="single-support p-rel ml-50 mb-30" data-background="assets/img/bg/support_bg.jpg">
                                    <form action="#">
                                        <div className="support-wrapper p-rel">
                                            <h4 className="support_title">Support Us</h4>
                                            <p className="mb-35 opacity_6">Charity is the largest global for crowdfunding</p>
                                            <div className="support_search_section mb-20">
                                                <input type="text" placeholder="$100" id="Support" />
                                                <button className="amount_btn">Amount</button>
                                                <select className="support_btn support_select">
                                                    <option value="Currency">USD</option>
                                                    <option value="">EUR</option>
                                                    <option value="">JPY</option>
                                                    <option value="">BDT</option>
                                                </select>
                                            </div>
                                            <div className="donar_section support_currency d-sm-flex d-inline-block justify-content-center">
                                                <div className="donar_currency mb-30">
                                                    <button className="currency">$5</button>
                                                    <button className="currency ml-10">$10</button>
                                                    <button className="currency ml-10">$50</button>
                                                    <button className="currency ml-10">$100</button>
                                                </div>
                                                <button type="submit" className="g_btn curr_btn rad-30 ml-10">Donate<span /></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*support area end*/}
                {/*featureevent area start */}
                <div className="f_event_area bg_cover p-rel pt-105 pb-120" data-background="assets/img/featureEvent/fevent_bg.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="section_title text-center mb-45">
                                    <span className="sub_title"><i className="fal fa-heart" /> Events</span>
                                    <h3 className="title">Featured Events</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="fevent_table">
                                    <div className="fevent_wrapper">
                                        <div className="fevent_heading bg_cover" data-background="assets/img/featureEvent/heading_bg.jpg" data-overlay="theme" data-opacity={9}>
                                            <div className="fevent_heading_wrapper d-flex p-rel">
                                                <div className="fdate">Calender</div>
                                                <div className="fcontent">Details</div>
                                                <div className="fauthor">Author &amp; Location</div>
                                                <div className="fbooking">Booking</div>
                                            </div>
                                        </div>
                                        <div className="single_fevent_wrapper">
                                            <div className="single_fevent event_border">
                                                <div className="fdate single_fdate theme-3"><span className="date">25</span><span>Feb</span></div>
                                                <div className="fcontent single_fcontent">
                                                    <a href="event-details.html" className="sub_title theme-3">Charity, Water</a>
                                                    <h3 className="title theme-3"><a href="event-details.html">Your Rennovation Programm 2021</a></h3>
                                                </div>
                                                <div className="fauthor single_fauthor">
                                                    <a href="volunteer-details.html" className="fdot"><img src="assets/img/causes/donar1.jpg" alt="img" /></a>
                                                    <div className="fauthor_address">
                                                        <a href="volunteer-details.html">Mark Salim</a>
                                                        <span className="fauthor_location"><i className="fal fa-map-marker-alt" /> 24/a New Town</span>
                                                    </div>
                                                </div>
                                                <div className="fbooking single_fbooking">
                                                    <a href="event-details.html" className="booking_btn theme-3 g_btn to_right3 rad-30">Book Your Seat <span /></a>
                                                </div>
                                            </div>
                                            <div className="single_fevent event_border">
                                                <div className="fdate single_fdate theme-2"><span className="date">15</span><span>MAR</span></div>
                                                <div className="fcontent single_fcontent">
                                                    <a href="event-details.html" className="sub_title theme-2">Charity, Education</a>
                                                    <h3 className="title theme-2"><a href="event-details.html">Your Reparation Programm 2022</a></h3>
                                                </div>
                                                <div className="fauthor single_fauthor">
                                                    <a href="volunteer-details.html" className="fdot"><img src="assets/img/causes/donar2.jpg" alt="img" /></a>
                                                    <div className="fauthor_address">
                                                        <a href="volunteer-details.html">Rossania D.</a>
                                                        <span className="fauthor_location"><i className="fal fa-map-marker-alt" /> 24/a New Town</span>
                                                    </div>
                                                </div>
                                                <div className="fbooking single_fbooking">
                                                    <a href="event-details.html" className="booking_btn theme-2 g_btn to_right2 rad-30">Book Your Seat <span /></a>
                                                </div>
                                            </div>
                                            <div className="single_fevent">
                                                <div className="fdate single_fdate theme-1"><span className="date">29</span><span>SEP</span></div>
                                                <div className="fcontent single_fcontent">
                                                    <a href="event-details.html" className="sub_title theme-1">Charity, Medical</a>
                                                    <h3 className="title theme-1"><a href="#">Your Alteration Project 2021</a></h3>
                                                </div>
                                                <div className="fauthor single_fauthor">
                                                    <a href="volunteer-details.html" className="fdot"><img src="assets/img/causes/donar3.jpg" alt="img" /></a>
                                                    <div className="fauthor_address">
                                                        <a href="volunteer-details.html">M. Billah</a>
                                                        <span className="fauthor_location"><i className="fal fa-map-marker-alt" /> 24/a New Town</span>
                                                    </div>
                                                </div>
                                                <div className="fbooking single_fbooking">
                                                    <a href="event-details.html" className="booking_btn theme-1 g_btn to_right1 rad-30">Book Your Seat <span /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*featureevent area end*/}
                <div className="nfeed_area pt-105 pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="section_title mb-45">
                                    <span className="sub_title"><i className="fal fa-heart" /> Insights</span>
                                    <h3 className="title">News Feeds</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                                <div className="single_nfeed mb-30">
                                    <div className="nfeed_img img_effect_white">
                                        <a href="blog-details.html"><img src="assets/img/news/nfeed1.jpg" alt="img" /></a>
                                    </div>
                                    <div className="nfeed_content">
                                        <div className="nfeed_title">
                                            <a href="blog-details.html" className="nsub_title">Charity Water</a>
                                            <h3 className="n_title"><a href="blog-details.html">Healthy food for everyone in
                                                a campagin.</a></h3>
                                        </div>
                                        <div className="nfeed_meta_wrapper d-flex">
                                            <div className="nfeed_meta mr-20">
                                                <a href="#" className="nmeta_icon theme-1"><i className="fal fa-user" /></a>
                                                <a href="#" className="nmeta_text theme-1"><span className="nmeta_by">By</span>Admin</a>
                                            </div>
                                            <div className="nfeed_meta">
                                                <a href="#" className="nmeta_icon theme-2"><i className="fal fa-calendar-alt" /></a>
                                                <a href="#" className="nmeta_text theme-2"><span className="nmeta_date">24th June 2021</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                                <div className="single_nfeed mb-30">
                                    <div className="nfeed_img img_effect_white">
                                        <a href="blog-details.html"><img src="assets/img/news/nfeed2.jpg" alt="img" /></a>
                                    </div>
                                    <div className="nfeed_content">
                                        <div className="nfeed_title">
                                            <a href="blog-details.html" className="nsub_title">Charity Goods</a>
                                            <h3 className="n_title"><a href="blog-details.html">Desired goods for all in
                                                a campagin.</a></h3>
                                        </div>
                                        <div className="nfeed_meta_wrapper d-flex">
                                            <div className="nfeed_meta mr-20">
                                                <a href="#" className="nmeta_icon theme-1"><i className="fal fa-user" /></a>
                                                <a href="#" className="nmeta_text theme-1"><span className="nmeta_by">By</span>Admin</a>
                                            </div>
                                            <div className="nfeed_meta">
                                                <a href="#" className="nmeta_icon theme-2"><i className="fal fa-calendar-alt" /></a>
                                                <a href="#" className="nmeta_text theme-2"><span className="nmeta_date">24th June 2021</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                                <div className="single_nfeed mb-30">
                                    <div className="nfeed_img img_effect_white">
                                        <a href="blog-details.html"><img src="assets/img/news/nfeed3.jpg" alt="img" /></a>
                                    </div>
                                    <div className="nfeed_content">
                                        <div className="nfeed_title">
                                            <a href="blog-details.html" className="nsub_title">Charity Cloths</a>
                                            <h3 className="n_title"><a href="blog-details.html">Expected cloths for all in
                                                a campagin.</a></h3>
                                        </div>
                                        <div className="nfeed_meta_wrapper d-flex">
                                            <div className="nfeed_meta mr-20">
                                                <a href="#" className="nmeta_icon theme-1"><i className="fal fa-user" /></a>
                                                <a href="#" className="nmeta_text theme-1"><span className="nmeta_by">By</span>Admin</a>
                                            </div>
                                            <div className="nfeed_meta">
                                                <a href="#" className="nmeta_icon theme-2"><i className="fal fa-calendar-alt" /></a>
                                                <a href="#" className="nmeta_text theme-2"><span className="nmeta_date">24th June 2021</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                                <div className="newsletter_feed mb-30">
                                    <div className="nfeed_title">
                                        <span className="nsub_title">Newsletter</span>
                                        <h3 className="n_title">Get Weekly Newsletter</h3>
                                    </div>
                                    <div className="newsletter_content">
                                        <form action="#">
                                            <input type="text" placeholder="Enter Full Name" className="rad-30 mb-12" />
                                            <input type="email" placeholder="Enter Email" className="rad-30 mb-17" />
                                            <button type="submit" className="rad-30 g_btn to_right1">Subscribe Now <span /></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>

            <footer>
                <div className="footer_top_area footer_default_area p-rel bg_cover" data-background="assets/img/footer/footer_bg.jpg">
                    <div className="footer_top_wrapper p-rel">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-3 col-xl-3 col-lg-7 col-md-7 col-sm-7">
                                    <div className="footer_widget mb-50">
                                        <div className="footer_widget_title mb-30">
                                            <h4 className="footer_title">About Us</h4>
                                        </div>
                                        <p className="mb-25">Because it does not spend hours selling
                                            to customers, maintaining a brick and mortar stores, or paying for a commissions, Carify Auto Center can run more with in
                                            efficiently than a traditional.</p>
                                        <div className="footer_locate_link theme-1">
                                            <ul>
                                                <li><a href="tel:00997722717"><i className="fal fa-phone" /><strong>Phone:</strong>00997722717</a></li>
                                                <li><a href="https://wphix.com/cdn-cgi/l/email-protection#93fef2e0e6fed3f4fef2faffbdf0fcfe"><i className="fal fa-envelope" /><strong>Phone:</strong><span className="__cf_email__" data-cfemail="f994988a8c94b99e94989095d79a9694">[email&nbsp;protected]</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-5 col-sm-5">
                                    <div className="footer_widget mb-50 pl_37">
                                        <div className="footer_widget_title mb-30">
                                            <h4 className="footer_title">Our Pages</h4>
                                        </div>
                                        <div className="footer_links theme-1">
                                            <ul>
                                                <li><a href="index.html">Home</a></li>
                                                <li><a href="about.html">Features</a></li>
                                                <li><a href="about.html">Services</a></li>
                                                <li><a href="about.html">Pricing</a></li>
                                                <li><a href="volunteer.html">Team</a></li>
                                                <li><a href="about.html">Terms &amp; condition</a></li>
                                                <li><a href="about.html">Privacy Policy</a></li>
                                                <li><a href="blog.html">News Insights</a></li>
                                                <li><a href="faq.html">Faq</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-5 col-sm-5">
                                    <div className="footer_widget mb-50 pl_17">
                                        <div className="footer_widget_title mb-30">
                                            <h4 className="footer_title">Causes</h4>
                                        </div>
                                        <div className="footer_links theme-1">
                                            <ul>
                                                <li><a href="cause.html">Water</a></li>
                                                <li><a href="cause.html">Education</a></li>
                                                <li><a href="cause.html">Medicine</a></li>
                                                <li><a href="cause.html">Medical</a></li>
                                                <li><a href="cause.html">Fresh Food</a></li>
                                                <li><a href="cause.html">Shelter</a></li>
                                                <li><a href="cause.html">Refuse Camp</a></li>
                                                <li><a href="cause.html">Donation</a></li>
                                                <li><a href="cause.html">Blood Donation</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-lg-7 col-md-7 col-sm-7">
                                    <div className="footer_widget footer_news mb-50">
                                        <div className="footer_widget_title mb-30">
                                            <h4 className="footer_title">News Feeds</h4>
                                        </div>
                                        <div className="footer_news_content">
                                            <div className="single_fnews d-flex mb-30">
                                                <div className="fnews_img"><a href="blog-details.html"><img src="assets/img/footer/fnews1.jpg" alt="img" /></a>
                                                </div>
                                                <div className="fnews_content">
                                                    <div className="fnews_meta">
                                                        <a href="blog-details.html" className="fnews_author theme-1 sep">Charity</a>
                                                        <span className="fnews_date">August 22th,2021</span>
                                                    </div>
                                                    <h5 className="fnews_title theme-1">
                                                        <a href="blog-details.html">Tips How to repair you by myself</a>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="single_fnews d-flex mb-30">
                                                <div className="fnews_img"><a href="blog-details.html"><img src="assets/img/footer/fnews2.jpg" alt="img" /></a>
                                                </div>
                                                <div className="fnews_content">
                                                    <div className="fnews_meta">
                                                        <a href="blog-details.html" className="fnews_author theme-1 sep">Charity</a>
                                                        <span className="fnews_date">August 22th,2021</span>
                                                    </div>
                                                    <h5 className="fnews_title theme-1">
                                                        <a href="blog-details.html">Tips How to keep yourself good health</a>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="single_fnews d-flex mb-30">
                                                <div className="fnews_img"><a href="blog-details.html"><img src="assets/img/footer/fnews3.jpg" alt="img" /></a>
                                                </div>
                                                <div className="fnews_content">
                                                    <div className="fnews_meta">
                                                        <a href="blog-details.html" className="fnews_author theme-1 sep">Charity</a>
                                                        <span className="fnews_date">August 22th,2021</span>
                                                    </div>
                                                    <h5 className="fnews_title theme-1">
                                                        <a href="blog-details.html">make you happy by yourself</a>
                                                    </h5>
                                                </div>
                                            </div>
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
                                <p>Copyright © 2021 All Rights Reserved by <strong><a href="#">ThemePure</a></strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="search-wrap">
                <div className="search-inner">
                    <i className="fas fa-times search-close" id="search-close" />
                    <div className="search-cell">
                        <form method="get">
                            <div className="search-field-holder">
                                <input type="search" className="main-search-input" placeholder="Search Your Keyword..." />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home;