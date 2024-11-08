import aboutus1 from '../../../../assets/img/about/aboutus1.jpg'
import aboutus2 from '../../../../assets/img/about/aboutus2.jpg'
import video_bg from '../../../../assets/img/bg/video_bg.jpg'
import breadcrum_bg_2 from '../../../../assets/img/bg/breadcrum_bg_2.jpg'
import { Link } from 'react-router-dom'


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
                                        <li><span className="active">About Us</span></li>
                                    </ul>
                                    <div className="breadcrumb_title">
                                        <h2>About Us</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about_area pt-120">
                    <div className="about_white_bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-6 col-xl-4 col-lg-4">
                                    <div className="donate_img_wrapper about_img_wrapper mr-10">
                                        <div className="donate_img_inner about_img_inner p-rel">
                                            <img className="about_block" src={aboutus1} alt="img" />
                                            <img className="space_t30" src={aboutus2} alt="img" />
                                            <div className="about_champ_card about_abs_single">
                                                <i className="flaticon-creativity" />
                                                <h3 className="abs_numb">40 <span className="plus">+</span></h3>
                                                <span>Years Experience</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-8 col-lg-8">
                                    <div className="about_wrapper pl-30">
                                        <div className="section_title">
                                            <span className="sub_title sub_title_2">About Us</span>
                                            <h3 className="title title_2 mb-20">Charity to Change Child’s
                                                and Poor People Life</h3>
                                        </div>
                                        <p className="mb-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis with
                                            nostrud exercitation ullamco laboris nisi ut aliquip</p>
                                        <div className="about_summary">
                                            <p>Helped Fund <span className="theme-1">24,537</span> Projects in <span className="theme-4">24 Countries</span>, <br />
                                                Benefiting Over <span className="theme-2">8.2 Million</span> People.</p>
                                        </div>
                                        <Link to='/about' className="g_btn trans_btn rad-50 p-45">Learn More <span /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="about_features_area soft-grey-2 pt-205 pb-390">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div className="section_title text-center mb-60">
                                    <span className="sub_title sub_title_2">Why Choose Us</span>
                                    <h3 className="title title_2">The perfect help</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-sm-6">
                                <div className="choose_single_card theme-2 p-rel bg-white mb-30">
                                    <div className="choose_abs theme-2">
                                        <i className="flaticon-map" />
                                    </div>
                                    <span className="card_number">01</span>
                                    <div className="choose_card_content">
                                        <h5 className="choose_card_title">Places to Get Lost</h5>
                                        <p>Charity is the largest global for
                                            crowdfunding community with
                                            connecting nonprofits.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-sm-6">
                                <div className="choose_single_card p-rel theme-3 bg-white mb-30">
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
                            <div className="col-xl-3 col-lg-6 col-sm-6">
                                <div className="choose_single_card p-rel theme-4 bg-white mb-30">
                                    <div className="choose_abs theme-4">
                                        <i className="flaticon-flower" />
                                    </div>
                                    <span className="card_number clr-theme-4">03</span>
                                    <div className="choose_card_content">
                                        <h5 className="choose_card_title">Food &amp; Shelter</h5>
                                        <p>Ut enim ad minim veniam, quis with nostrudexerci of ullamco laboris nisi ut aliquip.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-sm-6">
                                <div className="choose_single_card p-rel theme-5 bg-white mb-30">
                                    <div className="choose_abs theme-5">
                                        <i className="flaticon-water-drop" />
                                    </div>
                                    <span className="card_number clr-theme-5">04</span>
                                    <div className="choose_card_content">
                                        <h5 className="choose_card_title">Fresh &amp; Clean Water</h5>
                                        <p>We are called by God to and our purpose is to raise awareness of the 147 million work.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row d-none">
                            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                <div className="about_feature_wrapper mb-30">
                                    <div className="about_feature_icon">
                                        <i className="flaticon-charity" />
                                        <span className="card_number feature_number theme-1">01</span>
                                    </div>
                                    <div className="about_feature_text">
                                        <h5 className="about_feature_title theme-1">Fresh &amp; Clean Water</h5>
                                        <p>Our primary goal is developing a secure and safe world for poor peoples in the world.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                <div className="about_feature_wrapper mb-30">
                                    <div className="about_feature_icon">
                                        <i className="flaticon-healthcare" />
                                        <span className="card_number feature_number theme-2">02</span>
                                    </div>
                                    <div className="about_feature_text">
                                        <h5 className="about_feature_title theme-2">Food &amp; Shelter</h5>
                                        <p>Lorem ipsum dolor sit amet, cons ectetur adi pisicing elit, sed do eiusmod tempor incid.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                <div className="about_feature_wrapper mb-30">
                                    <div className="about_feature_icon">
                                        <i className="flaticon-health-check" />
                                        <span className="card_number feature_number theme-2">03</span>
                                    </div>
                                    <div className="about_feature_text">
                                        <h5 className="about_feature_title theme-2">Medicine &amp; Medical</h5>
                                        <p>Neque porro quisquam est, qui dol orem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                <div className="about_feature_wrapper mb-30">
                                    <div className="about_feature_icon">
                                        <i className="flaticon-graduated" />
                                        <span className="card_number feature_number theme-3">04</span>
                                    </div>
                                    <div className="about_feature_text">
                                        <h5 className="about_feature_title theme-3">Basic Education</h5>
                                        <p>Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about_videos_area mtm-300">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-12">
                                <div
                                    className="about_video_section text-center p-250 bg_cover"
                                    style={{
                                        backgroundImage: `url(${video_bg || 'https://via.placeholder.com/800x400'})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <a
                                        href="https://www.youtube.com/watch?v=B4GwnBrp41s"
                                        className="play_btn p-rel popup-video ab_4"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fas fa-play" style={{ fontSize: '32px', color: '#fff' }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about_faq_area pt-110 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-5 col-xl-5">
                                <div className="accordion_wrapper mr-30">
                                    <div className="section_title mb-50">
                                        <span className="sub_title sub_title_2">FAQ</span>
                                        <h3 className="title title_2">Get every answers
                                            from here.</h3>
                                    </div>
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button faq_button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How to edit this kind plugin base theme?</button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">We are called by God to, and our purpose. is to raise awareness
                                                    of the 147 million orphaned and abandoned children in our world
                                                    and then educate and equip people with the resources
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button faq_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">How to use this kind plugin base theme?</button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">We are called by God to, and our purpose. is to raise awareness
                                                    of the 147 million orphaned and abandoned children in our world
                                                    and then educate and equip people with the resources
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button faq_button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseTwo">How to build this kind plugin base theme?</button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">We are called by God to, and our purpose. is to raise awareness
                                                    of the 147 million orphaned and abandoned children in our world
                                                    and then educate and equip people with the resources
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-7 col-xl-7">
                                <div className="contact_section has_border mt-60">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-xxl-6 col-sm-6">
                                                <input type="text" placeholder="Enter full name" />
                                            </div>
                                            <div className="col-xxl-6 col-sm-6">
                                                <input type="email" placeholder="Enter email address" />
                                            </div>
                                            <div className="col-xxl-6 col-sm-6">
                                                <input type="tel" placeholder="Phone number" />
                                            </div>
                                            <div className="col-xxl-6 col-sm-6">
                                                <select name="contact_select" id="contact_select" className="contact_select">
                                                    <option value="Select Subject">Select Subject</option>
                                                    <option value="Bangla">Bangla</option>
                                                    <option value="English">English</option>
                                                    <option value="Mathmatics">Mathmatics</option>
                                                    <option value="Textile">Textile</option>
                                                </select>
                                            </div>
                                            <div className="col-xxl-12">
                                                <textarea name="message" id="message" cols={30} rows={10} placeholder="Enter Message" defaultValue={""} />
                                            </div>
                                            <div className="col-xxl-12">
                                                <button type="submit" className="contact_btn">Get A Quote</button>
                                            </div>
                                        </div>
                                    </form>
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
        </>
    )
}

export default Main
