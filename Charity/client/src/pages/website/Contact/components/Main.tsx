import { Link } from 'react-router-dom'
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
                                        <li className="bhas_border"><Link to='/'>Home</Link></li>
                                        <li><span className="active">Contact</span></li>
                                    </ul>
                                    <div className="breadcrumb_title">
                                        <h2>Get In Touch</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*breadcrumb area end*/}
                {/*get_intouch area start */}
                <div className="get_intouch_area pt-120 pb-120" data-background="assets/img/bg/contact_map.png">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-7 order-1 order-lg-0">
                                <div className="contact_section contact_contact bottom_radius0">
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
                            <div className="col-xxl-6 col-xl-6 col-lg-5 order-0 order-lg-1">
                                <div className="contact_location_section pl-50 mb-50">
                                    <div className="section_title mb-40">
                                        <a href="contact.html" className="sub_title sub_title_2">Contact Us</a>
                                        <h3 className="title">Get In Touch</h3>
                                    </div>
                                    <div className="contact_location_wrapper">
                                        <div className="single_contact_location theme-6">
                                            <a href="#" className="icon"><i className="far fa-map-marker-alt" /></a>
                                            <div className="contact_location_text">
                                                <span>Location</span>
                                                <h5 className="contact_address_title">14/A, Kinglo City Hall, NYC</h5>
                                            </div>
                                        </div>
                                        <div className="single_contact_location theme-1">
                                            <a href="https://wphix.com/cdn-cgi/l/email-protection#442d2a222b04332126213c25293428216a272b29" className="icon"><i className="fal fa-envelope" /></a>
                                            <div className="contact_location_text">
                                                <span>Email</span>
                                                <a href="https://wphix.com/cdn-cgi/l/email-protection#f49d9a929bb4839196918c9599849891da979b99" className="contact_address_title"><span className="__cf_email__" data-cfemail="8fc6e1e9e0cff8eaedeaf7eee2ffe3eaa1ece0e2">[email&nbsp;protected]</span></a>
                                            </div>
                                        </div>
                                        <div className="single_contact_location theme-2">
                                            <a href="tel:789.765.741.69" className="icon"><i className="fal fa-phone" /></a>
                                            <div className="contact_location_text">
                                                <span>Phone</span>
                                                <a href="tel:789.765.741.69" className="contact_address_title">789. 765. 741. 69</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* get_intouch area end */}
                {/*google map area start */}
                <div className="contact_map_area">
                    <div className="container-fluid g-0">
                        <div className="contact_map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d193595.91489303828!2d-74.1197634!3d40.6974034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z4Kao4Ka_4KaJIOCmh-Cmr-CmvOCmsOCnjeCmlSwg4Kau4Ka-4Kaw4KeN4KaV4Ka_4KaoIOCmr-CngeCmleCnjeCmpOCmsOCmvuCmt-CnjeCmn-CnjeCmsA!5e0!3m2!1sbn!2sbd!4v1618211532935!5m2!1sbn!2sbd" allowFullScreen loading="lazy" />
                        </div>
                    </div>
                </div>
                {/*google map area end */}
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
