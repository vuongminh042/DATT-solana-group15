
import breadcrumb_bg_4 from '../../../../assets/img/bg/breadcrumb_bg_4.jpg'
import cause_sbig from '../../../../assets/img/causes/cause_sbig.jpg'
import casuse_s1 from '../../../../assets/img/causes/casuse_s1.jpg'
import casuse_s2 from '../../../../assets/img/causes/cause_s2.jpg'
import cause_person from '../../../../assets/img/causes/cause_person.jpg'
import prev from '../../../../assets/img/causes/prev.jpg'
import next from '../../../../assets/img/causes/next.jpg'
import person_main from '../../../../assets/img/causes/person_main.jpg'
import donar1 from '../../../../assets/img/causes/donar1.jpg'
import donar2 from '../../../../assets/img/causes/donar2.jpg'
import donar3 from '../../../../assets/img/causes/donar3.jpg'
import donar4 from '../../../../assets/img/causes/donar4.jpg'
import donar5 from '../../../../assets/img/causes/donar5.jpg'
import donar6 from '../../../../assets/img/causes/donar6.jpg'

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
                                        <div className="single_details_img">
                                            <img src={cause_sbig} alt="img" />
                                        </div>
                                        <div className="single_details_content">
                                            <div className="single_donation_content single_border pb-45 mb-45">
                                                <div className="section_title">
                                                    <a href="#" className="sub_title_details line_h2_2">Water</a>
                                                </div>
                                                <h4 className="details_title">The community state of the art with recurring
                                                    donation need to save world.</h4>
                                                <p>generous actions or donations to aid the poor, ill, or needy: to devote one's life to charity. something given to a
                                                    \person or persons in need; alms: She asked for work, not charity. a charitable act or work. Thank you so much
                                                    for visiting my page, something I never thought I would be setting up. Having fought stage IV cancer for almost
                                                    two years, I have ran out of options which makes my diagnosis terminal </p>
                                                <div className="feature_progress_wrapper mb-25 mt-35">
                                                    <div className="progress feature_progress">
                                                        <div className="progress-bar" role="progressbar" data-width="50%" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }} />
                                                    </div>
                                                </div>
                                                <div className="single_cause_meta">
                                                    <div className="single_meta feature_meta feature_border d-inline-block">
                                                        <span className="meta_text clr_theme1"><i className="fal fa-globe" /> Goal</span>
                                                        <span className="meta_price single_price clr_theme1">$4,5100</span>
                                                    </div>
                                                    <div className="single_meta feature_meta feature_border d-inline-block">
                                                        <span className="meta_text clr_theme2"><i className="fal fa-users" /> Raised</span>
                                                        <span className="meta_price single_price clr_theme2">$45,300</span>
                                                    </div>
                                                    <div className="single_meta feature_meta d-inline-block">
                                                        <span className="meta_text clr_theme3"><i className="fal fa-reply" /> To go</span>
                                                        <span className="meta_price single_price clr_theme3">$45,200</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="mb-30">When I was 21 I had just finished my second year at Uni studying to be a primary school teacher, which is a
                                                career I have always dreamed of achieving. However, during my summer break in August 2017, my world
                                                turned upside down when I was diagnosed with an incredibly rare and aggressive cancer called Alveolar
                                                Rhabdomyosarcoma, stage 4.</p>
                                            <p className="mb-45">The symptoms were so minimal (agonising back and leg pain) it had made its way around my full body by the
                                                time I was diagnosed. Since then I have undergone over 20 cycles of chemotherapy, 50 sessions of
                                                radiotherapy and numerous operations to try and stabilise my disease.</p>
                                            <div className="row mb-45">
                                                <div className="col-6 w_img">
                                                    <img src={casuse_s1} alt="img" />
                                                </div>
                                                <div className="col-6 w_img">
                                                    <img src={casuse_s2} alt="img" />
                                                </div>
                                            </div>
                                            <p className="mb-45">I have always dreamed of achieving. However, during my summer break in August 2017, my world turned upside
                                                down when I was diagnosed with an incredibly rare and aggressive cancer called Alveolar Rhabdomyosarcoma,
                                                stage 4. The symptoms were so minimal (agonising back and leg pain) it had made its way around my full body
                                                time I was diagnosed. Since then I have undergone over 20 cycles of chemotherapy, 50 sessions of
                                                radiotherapy and numerous operations to try and stabilise my disease.</p>
                                            <div className="single_person_quote">
                                                <i className="icofont-speech-comments" />
                                                <div className="person_image"><a href="volunteer-details.html"><img src={cause_person} alt="img" /></a></div>
                                                <div className="person_quote_text">
                                                    <p>After endless hours and incredibly late nights of research, we have
                                                        found that the USA have a trial drug available which works
                                                        alongside my current chemotherapy.</p>
                                                    <div className="person_designation">
                                                        <h5 className="person_nam"><a href="#">Anarkoli Disco Cali</a></h5>
                                                        <span className="person_surname">Founder,Anarkoli Co.</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="single_border pb-45 mb-50">The symptoms were so minimal (agonising back and leg pain) it had made its way around my full body by the
                                                time I was diagnosed. Since then I have undergone over 20 cycles of chemotherapy, 50 sessions of radio
                                                therapy and numerous operations to try and stabilise my disease. We have now been told that I have stopped
                                                responding to the few drugs available for Sarcoma. After endless hours and incredibly late nights of research,
                                                we have found that the USA have a trial drug available which works alongside.</p>
                                            <div className="single_donation_input single_border mb-50 pb-30">
                                                <div className="donation_submit_wrapper mb-20">
                                                    <div className="donation_submit_box">
                                                        <button type="submit">$</button>
                                                        <input type="text" placeholder="$100" />
                                                    </div>
                                                </div>
                                                <div className="input_value_wrapper">
                                                    <button className="input_value">$05</button>
                                                    <button className="input_value">$10</button>
                                                    <button className="input_value">$50</button>
                                                    <button className="input_value">$100</button>
                                                    <button className="input_value">Custom</button>
                                                </div>
                                            </div>
                                            <div className="single_donation_payment single_border mb-50 pb-30">
                                                <h5 className="single_title mb-0">Payment Method</h5>
                                                <div className="payment_icons">
                                                    <a href="#"><i className="icofont-amazon" /></a>
                                                    <a href="#"><i className="icofont-paypal" /></a>
                                                    <a href="#"><i className="icofont-visa" /></a>
                                                    <a href="#"><i className="icofont-cash-on-delivery" /></a>
                                                    <a href="#"><i className="icofont-google-wallet-alt-3" /></a>
                                                </div>
                                            </div>
                                            <div className="single_donation_info single_border mb-50 pb-45">
                                                <h5 className="single_title">Personal Information</h5>
                                                <form action="#">
                                                    <div className="input_info_wrapper">
                                                        <div className="input_info_name info_input"><input type="text" placeholder="Enter full name" /><i className="fal fa-user" /></div>
                                                        <div className="input_info_email info_input"><input type="email" placeholder="Enter email" /><i className="fal fa-envelope" /></div>
                                                    </div>
                                                </form>
                                                <div className="submit_info_wrapper d-sm-inline-flex">
                                                    <div className="donation_submit_wrapper">
                                                        <div className="donation_submit_box w_208">
                                                            <button type="submit">Donation</button>
                                                            <input type="text" placeholder="$100" />
                                                        </div>
                                                    </div>
                                                    <div className="submit_info_button">
                                                        <a href="cause.html" className="g_btn hbtn_1 to_right1 i_left rad-30"><i className="fal fa-heart" /> Explore Causes<span /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="page_pagination_withimg">
                                                <a href="cause-details.html" className="img_pagination img_pagination_left">
                                                    <div className="left_img"><img src={prev} alt="img" /></div>
                                                    <div className="left_text">
                                                        <span className="sub_pagination">Prev Cause</span>
                                                        <h5 className="pagination_title">World Water Charity</h5>
                                                    </div>
                                                </a>
                                                <a href="cause-details.html" className="img_pagination img_pagination_right">
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
                                    <div className="single_sidebar_wrapper pl-15 mb-40">
                                        <div className="single_widget has_border person_widget text-center mb-40">
                                            <div className="widget_person_img">
                                                <a href="volunteer-details.html"><img src={person_main} alt="img" /></a>
                                                <span className="check_sign"><i className="fal fa-check" /></span>
                                            </div>
                                            <div className="person_designation widget_mb25">
                                                <h5 className="person_nam f_size24"><a href="volunteer-details.html">MR. Muhammad Ali</a></h5>
                                                <span className="person_surname">Founder,Anarkoli Co.</span>
                                            </div>
                                            <div className="feature_buttons widget_buttons">
                                                <a href="donation.html" className="g_btn hbtn_1 to_right1 i_left rad-30"><i className="fal fa-heart" />Donate Now<span /></a>
                                                <a href="#" className="reply_btn theme-2"><i className="fal fa-reply" /></a>
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
