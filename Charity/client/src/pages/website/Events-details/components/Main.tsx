import event_sbig from '../../../../assets/img/featureEvent/event_sbig.jpg'
import speaker from '../../../../assets/img/featureEvent/speaker.jpg'
import event_small1 from '../../../../assets/img/featureEvent/event_small1.jpg'
import event_small2 from '../../../../assets/img/featureEvent/event_small2.jpg'
import prev from '../../../../assets/img/causes/prev.jpg'
import next from '../../../../assets/img/causes/next.jpg'
import donar1 from '../../../../assets/img/causes/donar1.jpg'
import donar2 from '../../../../assets/img/causes/donar2.jpg'
import donar3 from '../../../../assets/img/causes/donar3.jpg'
import donar4 from '../../../../assets/img/causes/donar4.jpg'
import donar5 from '../../../../assets/img/causes/donar5.jpg'
import donar6 from '../../../../assets/img/causes/donar6.jpg'
import breadcrumb_bg_4 from '../../../../assets/img/bg/breadcrumb_bg_4.jpg'

const Main = () => {
    return (
        <>
            <div>
                <main>
                    {/*breadcrumb area start*/}
                    <section className="breadcrumb_area breadcrumb_overlay" style={{ backgroundImage: `url(${breadcrumb_bg_4})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="breadcrumb_section">
                                        <ul className="breadcrumb-list volunteer_breadcrumb">
                                            <li className="bhas_border"><a href="index.html">Home</a></li>
                                            <li><span className="active">Cause Details</span></li>
                                        </ul>
                                        <div className="breadcrumb_title">
                                            <h2>Redcurrant food for homeless</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*breadcrumb area end*/}
                    {/* cause_details_area start  */}
                    <div className="cause_details_area pt-120 pb-80">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-8 col-xl-8 col-lg-7">
                                    <div className="single_details_wrapper mb-40">
                                        <div className="single_details_img p-rel">
                                            <img src={event_sbig} alt="img" />
                                            <div className="details_img_meta details_meta_abs">
                                                <div className="donar_post_content donar_post_event_details">
                                                    <h5 className="donar_name"><a href="volunteer-details.html">Nilmarendra Max</a></h5>
                                                    <div className="donar_meta">
                                                        <a href="#" className="donar_date sep theme-2"><i className="fal fa-calendar-alt" /> February 20, 2022</a>
                                                        <a href="#" className="donar_time theme-8"><i className="fal fa-clock" /> 11:00 - 3:00</a>
                                                    </div>
                                                </div>
                                                <div className="donar_category">
                                                    <h5 className="donar_name"><a href="event-details.html">Category</a></h5>
                                                    <span className="category_name theme-1">Water</span>
                                                </div>
                                                <div className="meta_speaker">
                                                    <div className="speaker_img"><a href="volunteer-details.html"><img src={speaker} alt="img" /></a></div>
                                                    <div className="speaker_info">
                                                        <h5 className="donar_name"><a href="volunteer-details.html">Mahindra H.</a></h5>
                                                        <span className="category_name">Speaker</span>
                                                    </div>
                                                </div>
                                                <div className="details_meta_button">
                                                    <button type="submit" className="rad-30 g_btn theme1_bg to_right2">Book Your Seat <span /></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single_details_content">
                                            <h4 className="details_title">The community state of the art with recurring
                                                donation need to save world.</h4>
                                            <p className="mb-40">generous actions or donations to aid the poor, ill, or needy: to devote one's life to charity. something given to a
                                                \person or persons in need; alms: She asked for work, not charity. a charitable act or work. Thank you so much
                                                for visiting my page, something I never thought I would be setting up. Having fought stage IV cancer for almost
                                                two years, I have ran out of options which makes my diagnosis terminal </p>
                                            <p className="mb-30">When I was 21 I had just finished my second year at Uni studying to be a primary school teacher, which is a
                                                career I have always dreamed of achieving. However, during my summer break in August 2017, my world
                                                turned upside down when I was diagnosed with an incredibly rare and aggressive cancer called Alveolar
                                                Rhabdomyosarcoma, stage 4.
                                            </p>
                                            <p className="mb-45">The symptoms were so minimal (agonising back and leg pain) it had made its way around my full body by the
                                                time I was diagnosed. Since then I have undergone over 20 cycles of chemotherapy, 50 sessions of
                                                radiotherapy and numerous operations to try and stabilise my disease.</p>
                                            <div className="row mb-45">
                                                <div className="col-6 w_img">
                                                    <img src={event_small1} alt="img" />
                                                </div>
                                                <div className="col-6 w_img">
                                                    <img src={event_small2} alt="img" />
                                                </div>
                                            </div>
                                            <p className="mb-30">I have always dreamed of achieving. However, during my summer break in August 2017, my world turned upside
                                                down when I was diagnosed with an incredibly rare and aggressive cancer called Alveolar Rhabdomyosarcoma,
                                                stage 4. The symptoms were so minimal (agonising back and leg pain) it had made its way around my full body
                                                time I was diagnosed. Since then I have undergone over 20 cycles of chemotherapy, 50 sessions of
                                                radiotherapy and numerous operations to try and stabilise my disease.</p>
                                            <p className="single_border pb-55 mb-50">At its most basic, charity means: giving someone something they need but can't get for themselves. And normal
                                                that's understood to mean something material. We overwhelmingly associate charity with giving money. The
                                                heroes of Christianity are exemplars of such charity.</p>
                                            <div className="page_pagination_withimg">
                                                <a href="event-details.html" className="img_pagination img_pagination_left">
                                                    <div className="left_img"><img src={prev} alt="img" /></div>
                                                    <div className="left_text">
                                                        <span className="sub_pagination">Prev Cause</span>
                                                        <h5 className="pagination_title">World Water Charity</h5>
                                                    </div>
                                                </a>
                                                <a href="event-details.html" className="img_pagination img_pagination_right">
                                                    <div className="right_text text-sm-end">
                                                        <span className="sub_pagination">Next Cause</span>
                                                        <h5 className="pagination_title">Helping poor people</h5>
                                                    </div>
                                                    <div className="right_img"><img src={next} alt="img" /></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-5">
                                    <div className="single_sidebar_wrapper pl-15">
                                        <div className="single_widget has_border form_widget mb-40">
                                            <div className="single_widget_title">
                                                <h4 className="widget_title_text has_border">Book Your Seat</h4>
                                            </div>
                                            <div className="newsletter_content newsletter_widget">
                                                <input type="text" placeholder="Enter Full Name" className="rad-30 has_border" />
                                                <input type="email" placeholder="Enter Email" className="rad-30 has_border" />
                                                <div className="event_select">
                                                    <select name="select" id="widget_select" className="widget has_border">
                                                        <option value="Select Event">Select Event</option>
                                                        <option value="Abroad Roaming">Abroad Roaming</option>
                                                        <option value="Likely Moments">Likely Moments</option>
                                                    </select>
                                                </div>
                                                <div className="calendar_icon">
                                                    <input type="text" id="datepicker_event" name="Category" placeholder="Select date" className="has_border" />
                                                </div>
                                                <button type="submit" className="rad-30 g_btn theme1_bg to_right2">Book Your Seat <span /></button>
                                            </div>
                                        </div>
                                        <div className="single_widget has_border post_widget mb-40">
                                            <div className="single_widget_title">
                                                <h4 className="widget_title_text has_border">Donors Post</h4>
                                            </div>
                                            <div className="donor_post_wrapper">
                                                <div className="single_donor_post">
                                                    <div className="donar_post_img"><a href="volunteer-details.html"><img src={donar1} alt="img" /></a></div>
                                                    <div className="donar_post_content">
                                                        <h5 className="donar_name"><a href="volunteer-details.html">Nilmarendra Max</a></h5>
                                                        <div className="donar_meta">
                                                            <a href="#" className="donar_amount theme-1 sep">$900</a>
                                                            <a href="#" className="donar_date theme-2"><i className="fal fa-calendar-alt" /> February 20, 2022</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single_donor_post">
                                                    <div className="donar_post_img"><a href="volunteer-details.html"><img src={donar2} alt="img" /></a></div>
                                                    <div className="donar_post_content">
                                                        <h5 className="donar_name"><a href="volunteer-details.html">Miranda H. Hilix</a></h5>
                                                        <div className="donar_meta">
                                                            <a href="#" className="donar_amount theme-1 sep">$500</a>
                                                            <a href="#" className="donar_date theme-2"><i className="fal fa-calendar-alt" /> February 20, 2022</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single_donor_post">
                                                    <div className="donar_post_img"><a href="volunteer-details.html"><img src={donar3} alt="img" /></a></div>
                                                    <div className="donar_post_content">
                                                        <h5 className="donar_name"><a href="volunteer-details.html">Anayatulla Abbasi</a></h5>
                                                        <div className="donar_meta">
                                                            <a href="#" className="donar_amount theme-1 sep">$900</a>
                                                            <a href="#" className="donar_date theme-2"><i className="fal fa-calendar-alt" /> February 20, 2022</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single_donor_post">
                                                    <div className="donar_post_img"><a href="volunteer-details.html"><img src={donar4} alt="img" /></a></div>
                                                    <div className="donar_post_content">
                                                        <h5 className="donar_name"><a href="volunteer-details.html">Ahmadullah Fokir</a></h5>
                                                        <div className="donar_meta">
                                                            <a href="#" className="donar_amount theme-1 sep">$300</a>
                                                            <a href="#" className="donar_date theme-2"><i className="fal fa-calendar-alt" /> February 20, 2022</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single_donor_post">
                                                    <div className="donar_post_img"><a href="volunteer-details.html"><img src={donar5} alt="img" /></a></div>
                                                    <div className="donar_post_content">
                                                        <h5 className="donar_name"><a href="volunteer-details.html">Ahmed Riad</a></h5>
                                                        <div className="donar_meta">
                                                            <a href="#" className="donar_amount theme-1 sep">$500</a>
                                                            <a href="#" className="donar_date theme-2"><i className="fal fa-calendar-alt" /> February 20, 2022</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single_donor_post">
                                                    <div className="donar_post_img"><a href="volunteer-details.html"><img src={donar6} alt="img" /></a></div>
                                                    <div className="donar_post_content">
                                                        <h5 className="donar_name"><a href="volunteer-details.html">Andreu R.</a></h5>
                                                        <div className="donar_meta">
                                                            <a href="#" className="donar_amount theme-1 sep">$500</a>
                                                            <a href="#" className="donar_date theme-2"><i className="fal fa-calendar-alt" /> February 20, 2022</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* cause_details_area end  */}
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
