import cause1 from '../../../../assets/img/causes/cause1.jpg'
import cause17 from '../../../../assets/img/causes/cause17.jpg'
import cause3 from '../../../../assets/img/causes/cause3.jpg'
import cause10 from '../../../../assets/img/causes/cause10.jpg'
import cause11 from '../../../../assets/img/causes/cause11.jpg'
import cause12 from '../../../../assets/img/causes/cause12.jpg'
import cause24 from '../../../../assets/img/causes/cause24.jpg'
import cause8 from '../../../../assets/img/causes/cause8.jpg'
import cause5 from '../../../../assets/img/causes/cause5.jpg'
import cause26 from '../../../../assets/img/causes/cause26.jpg'
import cause6 from '../../../../assets/img/causes/cause6.jpg'
import cause4 from '../../../../assets/img/causes/cause4.jpg'
import cause18 from '../../../../assets/img/causes/cause18.jpg'
import cause16 from '../../../../assets/img/causes/cause16.jpg'
import cause21 from '../../../../assets/img/causes/cause21.jpg'
import cause22 from '../../../../assets/img/causes/cause22.jpg'
import cause27 from '../../../../assets/img/causes/cause27.jpg'
import cause28 from '../../../../assets/img/causes/cause28.jpg'
import cause29 from '../../../../assets/img/causes/cause29.jpg'
import cause25 from '../../../../assets/img/causes/cause25.jpg'
import cause23 from '../../../../assets/img/causes/cause23.jpg'
import cause7 from '../../../../assets/img/causes/cause7.jpg'
import cause20 from '../../../../assets/img/causes/cause20.jpg'
import breadcrum_bg_2 from '../../../../assets/img/bg/breadcrum_bg_2.jpg'
import cause_s2 from '../../../../assets/img/causes/cause_s2.jpg'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <main>
                {/*breadcrumb area start*/}
                <section className="breadcrumb_area breadcrumb_overlay" data-background={breadcrum_bg_2}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="breadcrumb_section">
                                    <ul className="breadcrumb-list volunteer_breadcrumb">
                                        <li className="bhas_border"><a href="index.html">Home</a></li>
                                        <li><span className="active">Cause</span></li>
                                    </ul>
                                    <div className="breadcrumb_title">
                                        <h2>Recent Causes</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* breadcrumb area end*/}
                {/*Recent causes area start*/}
                <section className="causes_area gray-bg pt-120 pb-85">
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
                                <div className="row">
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause3} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="88%" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}><span>88%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Education</span>
                                                    <h3 className="title"><a href="cause-details.html">Give your helping hand to teach poor people always</a></h3>
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
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause17} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="98%" aria-valuenow={98} aria-valuemin={0} aria-valuemax={100}><span>98%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Education</span>
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
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause8} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="68%" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}><span>68%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Education</span>
                                                    <h3 className="title"><a href="cause-details.html">The various agency help the poor, you also can try.</a></h3>
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
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause10} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="88%" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}><span>88%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Medical</span>
                                                    <h3 className="title"><a href="cause-details.html">We have to careful and helpful to poor people always.</a></h3>
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
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause11} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="98%" aria-valuenow={98} aria-valuemin={0} aria-valuemax={100}><span>98%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Medical</span>
                                                    <h3 className="title"><a href="cause-details.html">Share your money to serve poor people as far possible.</a></h3>
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
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause12} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="68%" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}><span>68%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Medical</span>
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
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause24} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="88%" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}><span>88%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Food</span>
                                                    <h3 className="title"><a href="cause-details.html">Putting the power of law in people's hand</a></h3>
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
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause5} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="98%" aria-valuenow={98} aria-valuemin={0} aria-valuemax={100}><span>98%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Food</span>
                                                    <h3 className="title"><a href="cause-details.html">Don't rude to poor who respect you and your family</a></h3>
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
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause26} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="68%" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}><span>68%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Food</span>
                                                    <h3 className="title"><a href="cause-details.html">Donate now to help the helpless people authentically</a></h3>
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
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause8} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="78%" aria-valuenow={78} aria-valuemin={0} aria-valuemax={100}><span>78%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Water</span>
                                                    <h3 className="title"><a href="cause-details.html">Don't afraid man, poor is not dangerous but helpful.</a></h3>
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
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause1} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="78%" aria-valuenow={78} aria-valuemin={0} aria-valuemax={100}><span>78%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Water</span>
                                                    <h3 className="title"><a href="cause-details.html">Let them take pure water from country government.</a></h3>
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
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause_s2} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="78%" aria-valuenow={78} aria-valuemin={0} aria-valuemax={100}><span>78%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Water</span>
                                                    <h3 className="title"><a href="cause-details.html">Human beings has right to take water evenly from the earth.</a></h3>
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
                            <div className="tab-pane fade" id="water" role="tabpanel" aria-labelledby="nav-water">
                                <div className="row">
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause6} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="88%" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}><span>88%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Water</span>
                                                    <h3 className="title"><a href="cause-details.html">Putting the power of law in people's hand</a></h3>
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
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause5} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="98%" aria-valuenow={98} aria-valuemin={0} aria-valuemax={100}><span>98%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Water</span>
                                                    <h3 className="title"><a href="cause-details.html">Don't rude to poor who respect you and your family</a></h3>
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
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause4} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="68%" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}><span>68%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Water</span>
                                                    <h3 className="title"><a href="cause-details.html">Donate now to help the helpless people authentically</a></h3>
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
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause8} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="78%" aria-valuenow={78} aria-valuemin={0} aria-valuemax={100}><span>78%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Water</span>
                                                    <h3 className="title"><a href="cause-details.html">Don't afraid man, poor is not dangerous but helpful.</a></h3>
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
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause1} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="78%" aria-valuenow={78} aria-valuemin={0} aria-valuemax={100}><span>78%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Water</span>
                                                    <h3 className="title"><a href="cause-details.html">Let them take pure water from country government.</a></h3>
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
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause_s2} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="78%" aria-valuenow={78} aria-valuemin={0} aria-valuemax={100}><span>78%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Water</span>
                                                    <h3 className="title"><a href="cause-details.html">Human beings has right to take water evenly from the earth.</a></h3>
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
                            <div className="tab-pane fade" id="education" role="tabpanel" aria-labelledby="nav-education">
                                <div className="row">
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause3} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="88%" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}><span>88%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Education</span>
                                                    <h3 className="title"><a href="cause-details.html">Give your helping hand to teach poor people always</a></h3>
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
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause17} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="98%" aria-valuenow={98} aria-valuemin={0} aria-valuemax={100}><span>98%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Education</span>
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
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause18} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="68%" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}><span>68%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Education</span>
                                                    <h3 className="title"><a href="cause-details.html">The various agency help the poor, you also can try.</a></h3>
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
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause16} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="68%" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}><span>68%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Education</span>
                                                    <h3 className="title"><a href="cause-details.html">Everyone moves to stand besides the affected children.</a></h3>
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
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause21} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="68%" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}><span>68%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Education</span>
                                                    <h3 className="title"><a href="cause-details.html">Every Children in the society has to be well educated.</a></h3>
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
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause22} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="68%" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}><span>68%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Education</span>
                                                    <h3 className="title"><a href="cause-details.html">Everyone moves to stand besides the affected children.</a></h3>
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
                            <div className="tab-pane fade" id="medical" role="tabpanel" aria-labelledby="nav-medical">
                                <div className="row">
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause10} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="88%" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}><span>88%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Medical</span>
                                                    <h3 className="title"><a href="cause-details.html">We have to careful and helpful to poor people always.</a></h3>
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
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause11} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="98%" aria-valuenow={98} aria-valuemin={0} aria-valuemax={100}><span>98%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Medical</span>
                                                    <h3 className="title"><a href="cause-details.html">Share your money to serve poor people as far possible.</a></h3>
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
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause12} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="68%" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}><span>68%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Medical</span>
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
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause27} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="98%" aria-valuenow={98} aria-valuemin={0} aria-valuemax={100}><span>98%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Medical</span>
                                                    <h3 className="title"><a href="cause-details.html">Serve the people as like as Mather Teresa</a></h3>
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
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause28} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="88%" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}><span>88%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Medical</span>
                                                    <h3 className="title"><a href="cause-details.html">Don't neglect poor but serve them from heart.</a></h3>
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
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause29} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="68%" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}><span>68%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Medical</span>
                                                    <h3 className="title"><a href="cause-details.html">Creator wants you to be a doctor for animal also.</a></h3>
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
                            <div className="tab-pane fade" id="furniture" role="tabpanel" aria-labelledby="nav-furniture">
                                <div className="row">
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause24} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="88%" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}><span>88%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Food</span>
                                                    <h3 className="title"><a href="cause-details.html">Putting the power of law in people's hand</a></h3>
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
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause25} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="98%" aria-valuenow={98} aria-valuemin={0} aria-valuemax={100}><span>98%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Food</span>
                                                    <h3 className="title"><a href="cause-details.html">Don't rude to poor who respect you and your family</a></h3>
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
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause26} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="68%" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}><span>68%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Food</span>
                                                    <h3 className="title"><a href="cause-details.html">Share your food with homeless children to get peace.</a></h3>
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
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause23} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="68%" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}><span>68%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Food</span>
                                                    <h3 className="title"><a href="cause-details.html">Donate now to help the helpless people authentically</a></h3>
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
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause7} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="68%" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}><span>68%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Food</span>
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
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <a href="cause-details.html"><img src={cause20} alt="img" /></a>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" data-width="68%" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}><span>68%</span></div>
                                                </div>
                                            </div>
                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">Food</span>
                                                    <h3 className="title"><a href="cause-details.html">Serve the people as like as Hazi Muhammad Mohsin</a></h3>
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
                        </div>
                        <div className="row">
                            <div className="cause_button text-center mt-10 mb-30">
                                <Link to='/causes' className="cause_btn g_btn to_right1 rad-30">Load More <i className="far fa-plus" /> <span /></Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Recent causes area end*/}
            </main>

            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>

        </>
    )
}

export default Main
