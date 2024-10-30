import mission from '../../../../assets/img/bg/mission.jpg'
import mission_bg from '../../../../assets/img/bg/mission_bg.jpg'

const Main = () => {
    return (
        <>
            <div>
                <main>
                    {/*breadcrumb area start*/}
                    <section className="breadcrumb_area breadcrumb_overlay" data-background="assets/img/bg/breadcrum_bg_2.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="breadcrumb_section">
                                        <ul className="breadcrumb-list volunteer_breadcrumb">
                                            <li className="bhas_border"><a href="index.html">Home</a></li>
                                            <li><span className="active">Mission</span></li>
                                        </ul>
                                        <div className="breadcrumb_title">
                                            <h2>Our Missions</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*breadcrumb area end*/}
                    {/*about single area start */}
                    <div className="about_single_area pt-120 pb-80">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-6">
                                    <div className="about_signle_video mb-40">
                                        <div className="img_effect_white about_video_image_wrapper">
                                            <a href="event.html"><img src={mission} alt="img" /></a>
                                        </div>
                                        <a href="https://www.youtube.com/watch?v=opCE7J_LHp4" className="video_icon">
                                            <i className="fal fa-play" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="about_wrapper pl-50 mb-40">
                                        <div className="section_title mb-30">
                                            <span className="sub_title sub_title_2">Work Program</span>
                                            <h3 className="title title_2 no_br">Keep Track of Our <br />
                                                Annual Charity Program</h3>
                                        </div>
                                        <p className="mb-55">NewLook unlike many traditional plastic surgery centers in San Diego, are
                                            industry recognized experts in a wide variety of cosmetic procedure and are
                                            dedicated to providing customers.</p>
                                        <div className="mission_progress_wrapper">
                                            <div className="mission_progress_single">
                                                <div className="progress_circle theme-1" data-percentage={65}>
                                                    <span className="progress-left">
                                                        <span className="progress-bar" />
                                                    </span>
                                                    <span className="progress-right">
                                                        <span className="progress-bar" />
                                                    </span>
                                                    <div className="progress-value">
                                                        <div className="value">65<span>%</span></div>
                                                    </div>
                                                </div>
                                                <span className="progress_text">Annual Program</span>
                                            </div>
                                            <div className="mission_progress_single">
                                                <div className="progress_circle theme-3" data-percentage={75}>
                                                    <span className="progress-left">
                                                        <span className="progress-bar" />
                                                    </span>
                                                    <span className="progress-right">
                                                        <span className="progress-bar" />
                                                    </span>
                                                    <div className="progress-value">
                                                        <div className="value">75<span>%</span></div>
                                                    </div>
                                                </div>
                                                <span className="progress_text">Monthly Program</span>
                                            </div>
                                            <div className="mission_progress_single">
                                                <div className="progress_circle theme-2" data-percentage={55}>
                                                    <span className="progress-left">
                                                        <span className="progress-bar" />
                                                    </span>
                                                    <span className="progress-right">
                                                        <span className="progress-bar" />
                                                    </span>
                                                    <div className="progress-value">
                                                        <div className="value">55<span>%</span></div>
                                                    </div>
                                                </div>
                                                <span className="progress_text">Global Program</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* about single area end */}
                    {/* Support area start */}
                    <div className="support_area gray-bg pt-115 pb-90">
                        <div className="container">
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
                                            <div className="choose_single_card theme-3 p-rel mb-30">
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
                                        <div className="support-wrapper p-rel">
                                            <h4 className="support_title">Support Us</h4>
                                            <p className="mb-35">Charity is the largest global for crowdfunding</p>
                                            <div className="support_form">
                                                <form action="#">
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
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Support area end */}
                    {/*about single area start */}
                    <div className="about_single_area about_subscribe pt-105 pb-120">
                        <img src={mission_bg} alt="img" />
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-6 offset-xl-6 col-md-10 offset-md-1">
                                    <div className="about_wrapper subscribe_mission pl-50">
                                        <div className="section_title">
                                            <a href="#" className="sub_title sub_title_2">subscribe</a>
                                            <h3 className="title title_2 text_white">Get every weekly update
                                                from here.</h3>
                                        </div>
                                        <p className="mb-45">NewLook unlike many traditional plastic surgery centers in San Diego, are
                                            industry recognized experts in a wide variety of cosmetic procedure and are
                                            dedicated to providing customers.</p>
                                        <div className="subscribe_form height_70">
                                            <form action="#">
                                                <input type="text" placeholder="Enter email address" />
                                                <button className="submit_btn abs_submit" type="submit"><i className="fal fa-envelope i_left" />Subscribe Now</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* about single area end */}
                    {/* Icon Box area start */}
                    <div className="icon_box_area pt-120 pb-80">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6">
                                    <a href="cause.html" className="single_iconbox text-center theme-1 mb-40">
                                        <i className="flaticon-lotus-flower" />
                                        <h5 className="icon_title">Community &amp; Culture</h5>
                                    </a>
                                </div>
                                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6">
                                    <a href="cause.html" className="single_iconbox text-center theme-2 mb-40">
                                        <i className="flaticon-graduation-cap" />
                                        <h5 className="icon_title">Family &amp; Education</h5>
                                    </a>
                                </div>
                                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6">
                                    <a href="cause.html" className="single_iconbox text-center theme-3 mb-40">
                                        <i className="flaticon-care" />
                                        <h5 className="icon_title">Charity &amp; Causes</h5>
                                    </a>
                                </div>
                                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6">
                                    <a href="cause.html" className="single_iconbox text-center theme-5 mb-40">
                                        <i className="flaticon-dumbbell" />
                                        <h5 className="icon_title">Sports &amp; Fitness</h5>
                                    </a>
                                </div>
                                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6">
                                    <a href="cause.html" className="single_iconbox text-center theme-6 mb-40">
                                        <i className="flaticon-creativity" />
                                        <h5 className="icon_title">Conference &amp; Ideas</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Icon Box area end */}
                </main>
                {/* Main Area End*/}
                {/* back to top start */}
                <div className="progress-wrap">
                    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                    </svg>
                </div>
            </div>

        </>
    )
}

export default Main
