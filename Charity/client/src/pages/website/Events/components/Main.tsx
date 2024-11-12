import cause1 from '../../../../assets/img/causes/cause1.jpg'
import cause2 from '../../../../assets/img/causes/cause2.jpg'
import cause3 from '../../../../assets/img/causes/cause3.jpg'
import cause4 from '../../../../assets/img/causes/cause4.jpg'
import cause5 from '../../../../assets/img/causes/cause5.jpg'
import cause6 from '../../../../assets/img/causes/cause6.jpg'
import cause10 from '../../../../assets/img/causes/cause10.jpg'
import cause11 from '../../../../assets/img/causes/cause11.jpg'
import cause12 from '../../../../assets/img/causes/cause12.jpg'
import cause14 from '../../../../assets/img/causes/cause14.jpg'
import cause15 from '../../../../assets/img/causes/cause15.jpg'
import cause16 from '../../../../assets/img/causes/cause16.jpg'
import cause19 from '../../../../assets/img/causes/cause19.jpg'
import cause24 from '../../../../assets/img/causes/cause24.jpg'
import cause25 from '../../../../assets/img/causes/cause25.jpg'
import cause26 from '../../../../assets/img/causes/cause26.jpg'
import donation_s1 from '../../../../assets/img/donation/donation_s1.jpg'
import donation_s2 from '../../../../assets/img/donation/donation_s2.jpg'
import events_abs from '../../../../assets/img/donation/events_abs.jpg'
import breadcrum_bg_2 from '../../../../assets/img/bg/breadcrum_bg_2.jpg'

const Main = () => {
    return (
        <>
            <main>
                {/*breadcrumb area start*/}
                <section className="breadcrumb_area breadcrumb_overlay" style={{ backgroundImage: `url(${breadcrum_bg_2})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="breadcrumb_section">
                                    <ul className="breadcrumb-list volunteer_breadcrumb">
                                        <li className="bhas_border"><a href="index.html">Home</a></li>
                                        <li><span className="active">Events</span></li>
                                    </ul>
                                    <div className="breadcrumb_title">
                                        <h2>Held Events</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*breadcrumb area end*/}
                {/*Recent causes area start*/}
                <section className="event_causes_area pt-120 pb-85">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12 text-center">
                                <div className="cause_button_wrapper mb-25">
                                    <nav>
                                        <div className="nav tab_buttons" id="nav-tab" role="tablist">
                                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All Categories</button>
                                            <button className="nav-link" id="nav-water" data-bs-toggle="tab" data-bs-target="#water" type="button" role="tab" aria-controls="water" aria-selected="false">Water</button>
                                            <button className="nav-link" id="nav-education" data-bs-toggle="tab" data-bs-target="#education" type="button" role="tab" aria-controls="education" aria-selected="false">Education</button>
                                            <button className="nav-link" id="nav-medical" data-bs-toggle="tab" data-bs-target="#medical" type="button" role="tab" aria-controls="medical" aria-selected="false">Medical</button>
                                            <button className="nav-link" id="nav-furniture" data-bs-toggle="tab" data-bs-target="#furniture" type="button" role="tab" aria-controls="furniture" aria-selected="false">Food</button>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="single_events_wrapper tab-border mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-lg-block">
                                            <div className="eventcount_img w_img">
                                                <a href="event-details.html"><img src={cause1} alt="img" /></a>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-5 text-center text-md-start">
                                            <div className="eventcount_text heading-clr">
                                                <h5><a href="event-details.html">Every Second Until the Event</a></h5>
                                                <span>Douglas Park, Chicago, IL</span>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-7 text-center text-md-end">
                                            <div className="count_down_box heading-clr" data-countdown="2021/08/19" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single_events_wrapper tab-border mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-lg-block">
                                            <div className="eventcount_img w_img">
                                                <a href="event-details.html"><img src={cause2} alt="img" /></a>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-5 text-center text-md-start">
                                            <div className="eventcount_text heading-clr">
                                                <h5><a href="event-details.html">Trigger Event Every Second</a></h5>
                                                <span>Douglas Park, Chicago, IL</span>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-7 text-center text-md-end">
                                            <div className="count_down_box heading-clr" data-countdown="2021/07/19" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single_events_wrapper tab-border mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-lg-block">
                                            <div className="eventcount_img w_img">
                                                <a href="event-details.html"><img src={cause3} alt="img" /></a>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-5 text-center text-md-start">
                                            <div className="eventcount_text heading-clr">
                                                <h5><a href="event-details.html">Each Second Until the Case</a></h5>
                                                <span>Douglas Park, Chicago, IL</span>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-7 text-center text-md-end">
                                            <div className="count_down_box heading-clr" data-countdown="2021/06/19" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single_events_wrapper tab-border mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-lg-block">
                                            <div className="eventcount_img w_img">
                                                <a href="event-details.html"><img src={cause19} alt="img" /></a>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-5 text-center text-md-start">
                                            <div className="eventcount_text heading-clr">
                                                <h5><a href="event-details.html">Every Second Until the Case</a></h5>
                                                <span>Douglas Park, Chicago, IL</span>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-7 text-center text-md-end">
                                            <div className="count_down_box heading-clr" data-countdown="2021/07/19" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single_events_wrapper tab-border mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-lg-block">
                                            <div className="eventcount_img w_img">
                                                <a href="event-details.html"><img src={cause4} alt="img" /></a>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-5 text-center text-md-start">
                                            <div className="eventcount_text heading-clr">
                                                <h5><a href="event-details.html">Trigger Case Every Second</a></h5>
                                                <span>Douglas Park, Chicago, IL</span>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-7 text-center text-md-end">
                                            <div className="count_down_box heading-clr" data-countdown="2021/08/19" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single_events_wrapper tab-border mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-lg-block">
                                            <div className="eventcount_img w_img">
                                                <a href="event-details.html"><img src={cause5} alt="img" /></a>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-5 text-center text-md-start">
                                            <div className="eventcount_text heading-clr">
                                                <h5><a href="event-details.html">Trigger Time until Event</a></h5>
                                                <span>Douglas Park, Chicago, IL</span>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-7 text-center text-md-end">
                                            <div className="count_down_box heading-clr" data-countdown="2021/06/19" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="water" role="tabpanel" aria-labelledby="nav-water">
                                <div className="single_events_wrapper tab-border mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-lg-block">
                                            <div className="eventcount_img w_img">
                                                <a href="event-details.html"><img src={cause6} alt="img" /></a>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-5 text-center text-md-start">
                                            <div className="eventcount_text heading-clr">
                                                <h5><a href="event-details.html">Every Second Until the Event</a></h5>
                                                <span>Douglas Park, Chicago, IL</span>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-7 text-center text-md-end">
                                            <div className="count_down_box heading-clr" data-countdown="2021/08/19" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single_events_wrapper tab-border mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-lg-block">
                                            <div className="eventcount_img w_img">
                                                <a href="event-details.html"><img src={cause5} alt="img" /></a>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-5 text-center text-md-start">
                                            <div className="eventcount_text heading-clr">
                                                <h5><a href="event-details.html">Trigger Event Every Second</a></h5>
                                                <span>Douglas Park, Chicago, IL</span>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-7 text-center text-md-end">
                                            <div className="count_down_box heading-clr" data-countdown="2021/09/19" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single_events_wrapper tab-border mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-lg-block">
                                            <div className="eventcount_img w_img">
                                                <a href="event-details.html"><img src={cause4} alt="img" /></a>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-5 text-center text-md-start">
                                            <div className="eventcount_text heading-clr">
                                                <h5><a href="event-details.html">Each Second Until the Case</a></h5>
                                                <span>Douglas Park, Chicago, IL</span>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-7 text-center text-md-end">
                                            <div className="count_down_box heading-clr" data-countdown="2021/07/19" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="education" role="tabpanel" aria-labelledby="nav-education">
                                <div className="single_events_wrapper tab-border mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-lg-block">
                                            <div className="eventcount_img w_img">
                                                <a href="event-details.html"><img src={cause14} alt="img" /></a>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-5 text-center text-md-start">
                                            <div className="eventcount_text heading-clr">
                                                <h5><a href="event-details.html">Every Second Until the Event</a></h5>
                                                <span>Douglas Park, Chicago, IL</span>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-7 text-center text-md-end">
                                            <div className="count_down_box heading-clr" data-countdown="2021/06/19" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single_events_wrapper tab-border mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-lg-block">
                                            <div className="eventcount_img w_img">
                                                <a href="event-details.html"><img src={cause15} alt="img" /></a>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-5 text-center text-md-start">
                                            <div className="eventcount_text heading-clr">
                                                <h5><a href="event-details.html">Trigger Event Every Second</a></h5>
                                                <span>Douglas Park, Chicago, IL</span>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-7 text-center text-md-end">
                                            <div className="count_down_box heading-clr" data-countdown="2021/06/19" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single_events_wrapper tab-border mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-lg-block">
                                            <div className="eventcount_img w_img">
                                                <a href="event-details.html"><img src={cause16} alt="img" /></a>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-5 text-center text-md-start">
                                            <div className="eventcount_text heading-clr">
                                                <h5><a href="event-details.html">Each Second Until the Case</a></h5>
                                                <span>Douglas Park, Chicago, IL</span>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-7 text-center text-md-end">
                                            <div className="count_down_box heading-clr" data-countdown="2021/05/19" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="medical" role="tabpanel" aria-labelledby="nav-medical">
                                <div className="single_events_wrapper tab-border mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-lg-block">
                                            <div className="eventcount_img w_img">
                                                <a href="event-details.html"><img src={cause10} alt="img" /></a>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-5 text-center text-md-start">
                                            <div className="eventcount_text heading-clr">
                                                <h5><a href="event-details.html">Every Second Until the Event</a></h5>
                                                <span>Douglas Park, Chicago, IL</span>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-7 text-center text-md-end">
                                            <div className="count_down_box heading-clr" data-countdown="2021/09/01" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single_events_wrapper tab-border mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-lg-block">
                                            <div className="eventcount_img w_img">
                                                <a href="event-details.html"><img src={cause11} alt="img" /></a>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-5 text-center text-md-start">
                                            <div className="eventcount_text heading-clr">
                                                <h5><a href="event-details.html">Trigger Event Every Second</a></h5>
                                                <span>Douglas Park, Chicago, IL</span>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-7 text-center text-md-end">
                                            <div className="count_down_box heading-clr" data-countdown="2021/09/09" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single_events_wrapper tab-border mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-lg-block">
                                            <div className="eventcount_img w_img">
                                                <a href="event-details.html"><img src={cause12} alt="img" /></a>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-5 text-center text-md-start">
                                            <div className="eventcount_text heading-clr">
                                                <h5><a href="event-details.html">Each Second Until the Case</a></h5>
                                                <span>Douglas Park, Chicago, IL</span>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-7 text-center text-md-end">
                                            <div className="count_down_box heading-clr" data-countdown="2021/09/23" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="furniture" role="tabpanel" aria-labelledby="nav-furniture">
                                <div className="single_events_wrapper tab-border mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-lg-block">
                                            <div className="eventcount_img w_img">
                                                <a href="event-details.html"><img src={cause26} alt="img" /></a>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-5 text-center text-md-start">
                                            <div className="eventcount_text heading-clr">
                                                <h5><a href="event-details.html">Every Second Until the Event</a></h5>
                                                <span>Douglas Park, Chicago, IL</span>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-7 text-center text-md-end">
                                            <div className="count_down_box heading-clr" data-countdown="2021/09/29" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single_events_wrapper tab-border mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-lg-block">
                                            <div className="eventcount_img w_img">
                                                <a href="event-details.html"><img src={cause25} alt="img" /></a>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-5 text-center text-md-start">
                                            <div className="eventcount_text heading-clr">
                                                <h5><a href="event-details.html">Trigger Event Every Second</a></h5>
                                                <span>Douglas Park, Chicago, IL</span>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-7 text-center text-md-end">
                                            <div className="count_down_box heading-clr" data-countdown="2021/09/09" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single_events_wrapper tab-border mb-30">
                                    <div className="row align-items-center">
                                        <div className="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-lg-block">
                                            <div className="eventcount_img w_img">
                                                <a href="event-details.html"><img src={cause24} alt="img" /></a>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-5 text-center text-md-start">
                                            <div className="eventcount_text heading-clr">
                                                <h5><a href="event-details.html">Each Second Until the Case</a></h5>
                                                <span>Douglas Park, Chicago, IL</span>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-7 text-center text-md-end">
                                            <div className="count_down_box heading-clr" data-countdown="2021/07/19" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="cause_button text-center mt-10 mb-30">
                                <a href="event.html" className="cause_btn g_btn to_right1 rad-30">Load More <i className="far fa-plus" /> <span /></a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Recent causes area end*/}
                {/* donation area start */}
                <div className="donation_area bg_cover pt-120 pb-115" data-background="assets/img/bg/donate_bg2.jpg">
                    <div className="container">
                        <div className="row flex-column-reverse flex-md-row">
                            <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
                                <div className="donation_wrappar">
                                    <h4 className="donate_title">Make Donation</h4>
                                    <span className="opacity_6">100% of your helping donation funds spinal  cord research.</span>
                                    <div className="donate_progress_wrapper">
                                        <label className="event_lab">Raised: <span className="theme-3">$1,25,000</span></label>
                                        <div className="progress donate_progress">
                                            <div className="progress-bar theme-3" role="progressbar" data-width="30%" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <div className="support_search_section event_single mb-20">
                                        <input type="text" placeholder="50" id="Support" className="mb-10" />
                                        <select className="support_btn support_select">
                                            <option value="Currency">USD</option>
                                            <option value="">EUR</option>
                                            <option value="">JPY</option>
                                            <option value="">BDT</option>
                                        </select>
                                        <p className="s_14">Please enter amount over 500 manually</p>
                                    </div>
                                    <button className="g_btn hbtn_1 to_left rad-30">Donate Now <span /></button>
                                </div>
                            </div>
                            <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
                                <div className="donate_img_wrapper ml-70">
                                    <div className="donate_img_inner p-rel">
                                        <img src={donation_s1} alt="img" />
                                        <img src={donation_s2} alt="img" />
                                        <img className="abs_img event_abs_img" src={events_abs} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* donation area end*/}
            </main>
            {/* Main Area End*/}
            {/* back to top start */}
            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
        </>
    )
}

export default Main
