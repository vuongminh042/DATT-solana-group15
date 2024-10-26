import breadcrum_bg_2 from '../../../../assets/img/bg/breadcrum_bg_2.jpg'
import donation_single1 from '../../../../assets/img/donation/donation_single1.jpg'
import donation_single2 from '../../../../assets/img/donation/donation_single2.jpg'

const Main = () => {
    return (
        <>
            <div>
                <main>
                    {/*breadcrumb area start*/}
                    <section className="breadcrumb_area breadcrumb_overlay" data-background={breadcrum_bg_2}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="breadcrumb_section">
                                        <ul className="breadcrumb-list volunteer_breadcrumb">
                                            <li className="bhas_border"><a href="index.html">Home</a></li>
                                            <li><span className="active">Donation</span></li>
                                        </ul>
                                        <div className="breadcrumb_title">
                                            <h2>Make Donation</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*breadcrumb area end*/}
                    {/*single donation area start */}
                    <div className="single_donation_area pt-120 pb-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-6 col-xl-6 col-lg-5">
                                    <div className="single_donation_img_wrapper pr-30">
                                        <div className="single_donation_img mb-40">
                                            <img src={donation_single1} alt="img" />
                                        </div>
                                        <div className="single_donation_img mb-40">
                                            <img src={donation_single2} alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-7">
                                    <div className="single_donation_content donation_border">
                                        <div className="section_title">
                                            <a href="#" className="sub_title sub_title_2">Water</a>
                                        </div>
                                        <h4 className="donation_title">The community state of the art <br />
                                            recurring donation.</h4>
                                        <p>generous actions or donations to aid the poor, ill, or needy: to devote
                                            one's life to charity. something given to a person or persons in need;
                                            alms: She asked for work, not charity. a charitable act or work.</p>
                                        <div className="feature_progress_wrapper mb-25 mt-35">
                                            <div className="progress feature_progress">
                                                <div className="progress-bar" role="progressbar" data-width="50%" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }} />
                                            </div>
                                        </div>
                                        <div className="single_cause_meta mb-20">
                                            <div className="single_meta feature_meta feature_border d-inline-block">
                                                <span className="meta_text red_clr"><i className="fal fa-globe" /> Goal</span>
                                                <span className="meta_price red_clr">$4,5100</span>
                                            </div>
                                            <div className="single_meta feature_meta feature_border d-inline-block">
                                                <span className="meta_text red_clr"><i className="fal fa-users" /> Raised</span>
                                                <span className="meta_price red_clr">$45,300</span>
                                            </div>
                                            <div className="single_meta feature_meta d-inline-block">
                                                <span className="meta_text red_clr"><i className="fal fa-reply" /> To go</span>
                                                <span className="meta_price red_clr">$45,200</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single_donation_input donation_border">
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
                                    <div className="single_donation_payment donation_border">
                                        <h5 className="single_title mb-0">Payment Method</h5>
                                        <div className="payment_icons">
                                            <a href="#"><i className="icofont-amazon" /></a>
                                            <a href="#"><i className="icofont-paypal" /></a>
                                            <a href="#"><i className="icofont-visa" /></a>
                                            <a href="#"><i className="icofont-cash-on-delivery" /></a>
                                            <a href="#"><i className="icofont-google-wallet-alt-3" /></a>
                                        </div>
                                    </div>
                                    <div className="single_donation_info">
                                        <h5 className="single_title">Personal Information</h5>
                                        <div className="input_info_wrapper">
                                            <form action="#">
                                                <div className="input_info_name info_input"><input type="text" placeholder="Enter full name" /><i className="fal fa-user" /></div>
                                                <div className="input_info_email info_input"><input type="email" placeholder="Enter email" /><i className="fal fa-envelope" /></div>
                                            </form>
                                        </div>
                                        <div className="submit_info_wrapper d-inline-flex">
                                            <div className="donation_submit_wrapper">
                                                <div className="donation_submit_box w_208">
                                                    <button type="submit">Donation</button>
                                                    <input type="text" placeholder="$100" />
                                                </div>
                                            </div>
                                            <div className="submit_info_button">
                                                <a href="cause.html" className="g_btn hbtn_1 to_right1 i_left rad-30 p-35"><i className="fal fa-heart" /> Explore Causes<span /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*single donation area end */}
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
