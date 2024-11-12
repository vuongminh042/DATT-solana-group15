import { Link } from 'react-router-dom';
import breadcrum_bg_2 from '../../../../assets/img/bg/breadcrum_bg_2.jpg'
import blog_image from '../../../../assets/img/news/blog_image.jpg'
import admin from '../../../../assets/img/news/admin.jpg'
import blog_video from '../../../../assets/img/news/blog_video.jpg'
import blog_image2 from '../../../../assets/img/news/blog_image2.jpg'
import blog_audio from '../../../../assets/img/news/blog_audio.jpg'
import audio_logo from '../../../../assets/img/news/audio_logo.png'
import blog_quote from '../../../../assets/img/news/blog_quote.jpg'
import blog_person from '../../../../assets/img/news/blog_person.jpg'
import blog_feed1 from '../../../../assets/img/news/blog_feed1.jpg'
import blog_feed2 from '../../../../assets/img/news/blog_feed2.jpg'
import blog_feed3 from '../../../../assets/img/news/blog_feed3.jpg'
import blog_feed4 from '../../../../assets/img/news/blog_feed4.jpg'
import insta1 from '../../../../assets/img/news/insta1.jpg'
import insta2 from '../../../../assets/img/news/insta2.jpg'
import insta3 from '../../../../assets/img/news/insta3.jpg'
import insta4 from '../../../../assets/img/news/insta4.jpg'
import insta5 from '../../../../assets/img/news/insta5.jpg'
import insta6 from '../../../../assets/img/news/insta6.jpg'
import insta7 from '../../../../assets/img/news/insta7.jpg'
import insta8 from '../../../../assets/img/news/insta8.jpg'
import insta9 from '../../../../assets/img/news/insta9.jpg'
import insta10 from '../../../../assets/img/news/insta10.jpg'
import insta11 from '../../../../assets/img/news/insta11.jpg'
import insta12 from '../../../../assets/img/news/insta12.jpg'
import blog_add from '../../../../assets/img/news/blog_add.jpg'

const Main = () => {
  return (
    <div>
      {/* Main Area Start*/}
      <main>
        {/*breadcrumb area start*/}
        <section
          className="breadcrumb_area breadcrumb_overlay"
          style={{ backgroundImage: `url(${breadcrum_bg_2})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb_section">
                  <ul className="breadcrumb-list volunteer_breadcrumb">
                    <li className="bhas_border">
                      <Link to='/'>Home</Link>
                    </li>
                    <li>
                      <span className="active">Blog</span>
                    </li>
                  </ul>
                  <div className="breadcrumb_title">
                    <h2>News Insights</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*breadcrumb area end*/}
        {/* cause_details_area start  */}
        <div className="blog_details_area pt-120 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-7">
                <div className="blog_area mb-40">
                  <div className="blog_image_wrapper mb-40">
                    <div className="blog_image">
                      <Link to='/blog-details' className="w_img">
                        <img src={blog_image} alt="img" />
                      </Link>
                      <div className="admin_meta has_abs">
                        <Link to='/blog-details' className="blog_cat">
                          Business
                        </Link>
                        <div className="blog_admin">
                          <a href="volunteer-details.html">
                            <img src={admin} alt="img" />
                          </a>
                          <Link to='/blog-details' className="admin_by">
                            By Hetmayer
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="blog_content">
                      <h4 className="blog_title">
                        <Link to='/blog-details'>
                          Become a monthly giver and save a child’s life today
                        </Link>
                      </h4>
                      <p>
                        Novia's spaciously two bedroom apartments are perfect
                        for families and even business partners. Look out into
                        the Manhattan skyline from the open fully equipped
                        kitchen.
                      </p>
                      <div className="blog_meta has_border_top">
                        <a href="#" className="eye sep">
                          <i className="fal fa-eye" />
                          100 Views
                        </a>
                        <a href="#" className="comments sep">
                          <i className="fal fa-comments" />
                          30 Comments
                        </a>
                        <a href="#" className="calendar">
                          <i className="fal fa-calendar-alt" />
                          24 March 2022
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog_video_wrapper mb-40">
                    <div className="blog_image">
                      <Link to='/blog-details' className="w_img">
                        <img src={blog_video} alt="img" />
                      </Link>
                      <a
                        href="https://www.youtube.com/watch?v=LiydZUP8__I"
                        className="video_play has_abs"
                      >
                        <i className="fal fa-play" />
                      </a>
                      <div className="admin_meta has_abs">
                        <Link to='/blog-details' className="blog_cat">
                          Medical
                        </Link>
                        <div className="blog_admin">
                          <Link to='/blog-details'>
                            <img src={admin} alt="img" />
                          </Link>
                          <Link to='/blog-details' className="admin_by">
                            By Mark
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="blog_content">
                      <h4 className="blog_title">
                        <Link to='/blog-details'>
                          What takes an online fundraising site from good to
                          great?
                        </Link>
                      </h4>
                      <p>
                        Novia's spaciously two bedroom apartments are perfect
                        for families and even business partners. Look out into
                        the Manhattan skyline from the open fully equipped
                        kitchen.
                      </p>
                      <div className="blog_meta has_border_top">
                        <a href="#" className="eye sep">
                          <i className="fal fa-eye" />
                          150 Views
                        </a>
                        <a href="#" className="comments sep">
                          <i className="fal fa-comments" />
                          20 Comments
                        </a>
                        <a href="#" className="calendar">
                          <i className="fal fa-calendar-alt" />
                          24 March 2021
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog_image_wrapper mb-40">
                    <div className="blog_image">
                      <Link to='/blog-details' className="w_img">
                        <img src={blog_image2} alt="img" />
                      </Link>
                      <div className="admin_meta has_abs">
                        <Link to='/blog-details' className="blog_cat">
                          Education
                        </Link>
                        <div className="blog_admin">
                          <Link to='/blog-details'>
                            <img src={admin} alt="img" />
                          </Link>
                          <Link to='/blog-details' className="admin_by">
                            By Salim
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="blog_content">
                      <h4 className="blog_title">
                        <Link to='/blog-details'>
                          Themepure always offers for everybody to enrich
                          knowledge by yourself
                        </Link>
                      </h4>
                      <p>
                        Novia's spaciously two bedroom apartments are perfect
                        for families and even business partners. Look out into
                        the Manhattan skyline from the open fully equipped
                        kitchen.
                      </p>
                      <div className="blog_meta has_border_top">
                        <a href="#" className="eye sep">
                          <i className="fal fa-eye" />
                          300 Views
                        </a>
                        <a href="#" className="comments sep">
                          <i className="fal fa-comments" />
                          30 Comments
                        </a>
                        <a href="#" className="calendar">
                          <i className="fal fa-calendar-alt" />
                          21 March 2022
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog_audio_wrapper mb-40">
                    <div className="blog_audio_img">
                      <Link to='/blog-details' className="w_img">
                        <img src={blog_audio} alt="img" />
                      </Link>
                      <Link to='/blog-details' className="audio_logo_abs">
                        <img src={audio_logo} alt="" />
                      </Link>
                    </div>
                    <div className="blog_content">
                      <h4 className="blog_title">
                        <Link to='/blog-details'>
                          How to Survive a Recession When the Future Feels
                          Uncertain
                        </Link>
                      </h4>
                      <p>
                        Novia's spaciously two bedroom apartments are perfect
                        for families and even business partners. Look out into
                        the Manhattan skyline from the open fully equipped
                        kitchen.
                      </p>
                      <div className="blog_meta has_border_top">
                        <a href="#" className="eye sep">
                          <i className="fal fa-eye" />
                          100 Views
                        </a>
                        <a href="#" className="comments sep">
                          <i className="fal fa-comments" />
                          30 Comments
                        </a>
                        <a href="#" className="calendar">
                          <i className="fal fa-calendar-alt" />
                          14 March 2022
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="blog_noimg_wrapper mb-40">
                    <div className="blog_content noimg_content">
                      <h4 className="blog_title">
                        <Link to='/blog-details'>
                          All People can help others but can not do normally for
                          a social restriction
                        </Link>
                      </h4>
                      <p>
                        Novia's spaciously two bedroom apartments are perfect
                        for families and even business partners. Look out into
                        the Manhattan skyline from the open fully equipped
                        kitchen.
                      </p>
                      <div className="blog_meta has_border_top">
                        <a href="#" className="eye sep">
                          <i className="fal fa-eye" />
                          100 Views
                        </a>
                        <a href="#" className="comments sep">
                          <i className="fal fa-comments" />
                          30 Comments
                        </a>
                        <a href="#" className="calendar">
                          <i className="fal fa-calendar-alt" />
                          24 March 2022
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="blog_blockquote_wrapper bg_cover mb-40"
                    data-background={blog_quote}
                  >
                    <div className="blog_blockquote_content">
                      <i className="fas fa-quote-left" />
                      <h4 className="blog_title">
                        <Link to='/blog-details'>
                          Dharma Home Suites at Novia offers fully plain
                          furnished
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="page_pagination text-center mt-10">
                    <a href="#">
                      <i className="fal fa-chevron-double-left" />
                    </a>
                    <a href="#">1</a>
                    <a href="#" className="current">
                      2
                    </a>
                    <a href="#">1</a>
                    <a href="#">...</a>
                    <a href="#">10</a>
                    <a href="#">
                      <i className="fal fa-chevron-double-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-5">
                <div className="blog_sidebar_wrapper pl-15 mb-40">
                  <div className="sidebar_widget has_border about_widget mb-40">
                    <div className="sidebar_title">
                      <h4 className="sidebar_title_text has_border">
                        <span className="theme-1">//</span>About Me
                      </h4>
                    </div>
                    <div className="about_widget_content text-center">
                      <div className="widget_about_img">
                        <Link to='/blog-details'>
                          <img
                            src={blog_person}
                            alt="img"
                          />
                        </Link>
                      </div>
                      <h6 className="about_person_title">
                        <Link to='/blog-details'>
                          Rosalina D. Willaimson
                        </Link>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet, consect etur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore.
                      </p>
                      <div className="widget_social">
                        <a href="#" className="facebook">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#" className="twitter">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#" className="behance">
                          <i className="fab fa-behance" />
                        </a>
                        <a href="#" className="linkedin">
                          <i className="fab fa-linkedin-in" />
                        </a>
                        <a href="#" className="youtube">
                          <i className="fab fa-youtube" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar_widget has_border search_widget mb-40">
                    <div className="sidebar_title">
                      <h4 className="sidebar_title_text has_border">
                        <span className="theme-1">//</span>Search Here
                      </h4>
                    </div>
                    <div className="search_widget_content">
                      <form action="#">
                        <input
                          type="text"
                          placeholder="Search your keyword..."
                        />
                        <button type="submit">
                          <i className="fal fa-search" />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="sidebar_widget has_border feed_widget mb-40">
                    <div className="sidebar_title">
                      <h4 className="sidebar_title_text has_border">
                        <span className="theme-1">//</span>Popular Feeds
                      </h4>
                    </div>
                    <div className="feed_widget_content">
                      <div className="single_feed_widget has_border">
                        <div className="feed_widget_img">
                          <Link to='/blog-details'>
                            <img
                              src={blog_feed1}
                              alt="img"
                            />
                          </Link>
                        </div>
                        <div className="feed_widget_text">
                          <h5 className="feed_widget_title theme-1">
                            <Link to='/blog-details'>
                              How to improve knowledge for myself
                            </Link>
                          </h5>
                          <a href="#" className="feed_widget_date theme-1">
                            <i className="fal fa-calendar-alt" />
                            24th March 2022
                          </a>
                        </div>
                      </div>
                      <div className="single_feed_widget has_border">
                        <div className="feed_widget_img">
                          <Link to='/blog-details'>
                            <img
                              src={blog_feed2}
                              alt="img"
                            />
                          </Link>
                        </div>
                        <div className="feed_widget_text">
                          <h5 className="feed_widget_title theme-1">
                            <Link to='/blog-details'>
                              Everybody needs to know how to help myself
                            </Link>
                          </h5>
                          <a href="#" className="feed_widget_date theme-1">
                            <i className="fal fa-calendar-alt" />
                            24th March 2022
                          </a>
                        </div>
                      </div>
                      <div className="single_feed_widget has_border">
                        <div className="feed_widget_img">
                          <Link to='/blog-details'>
                            <img
                              src={blog_feed3}
                              alt="img"
                            />
                          </Link>
                        </div>
                        <div className="feed_widget_text">
                          <h5 className="feed_widget_title theme-1">
                            <Link to='/blog-details'>
                              Good foods available on behalf of fundraise
                            </Link>
                          </h5>
                          <a href="#" className="feed_widget_date theme-1">
                            <i className="fal fa-calendar-alt" />
                            24th Sep 2021
                          </a>
                        </div>
                      </div>
                      <div className="single_feed_widget">
                        <div className="feed_widget_img">
                          <Link to='/blog-details'>
                            <img
                              src={blog_feed4}
                              alt="img"
                            />
                          </Link>
                        </div>
                        <div className="feed_widget_text">
                          <h5 className="feed_widget_title theme-1">
                            <Link to='/blog-details'>
                              Keep focus on you to find out yourself
                            </Link>
                          </h5>
                          <a href="#" className="feed_widget_date theme-1">
                            <i className="fal fa-calendar-alt" />
                            24th March 2022
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar_widget has_border categories_widget mb-40">
                    <div className="sidebar_title">
                      <h4 className="sidebar_title_text has_border">
                        <span className="theme-1">//</span>Categories
                      </h4>
                    </div>
                    <ul>
                      <li>
                        <a href="#">Business</a>
                      </li>
                      <li>
                        <a href="#">Consultant</a>
                      </li>
                      <li>
                        <a href="#">Creative</a>
                      </li>
                      <li>
                        <a href="#">UI/UX</a>
                      </li>
                      <li>
                        <a href="#">Technology</a>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar_widget has_border instagram_widget mb-40">
                    <div className="sidebar_title">
                      <h4 className="sidebar_title_text has_border">
                        <span className="theme-1">//</span>Instagram Feeds
                      </h4>
                    </div>
                    <div className="instagram_widget_img_wrapper">
                      <a href="#">
                        <img src={insta1} alt="img" />
                      </a>
                      <a href="#">
                        <img src={insta2} alt="img" />
                      </a>
                      <a href="#">
                        <img src={insta3} alt="img" />
                      </a>
                      <a href="#">
                        <img src={insta4} alt="img" />
                      </a>
                      <a href="#">
                        <img src={insta5} alt="img" />
                      </a>
                      <a href="#">
                        <img src={insta6} alt="img" />
                      </a>
                      <a href="#">
                        <img src={insta7} alt="img" />
                      </a>
                      <a href="#">
                        <img src={insta8} alt="img" />
                      </a>
                      <a href="#">
                        <img src={insta9} alt="img" />
                      </a>
                      <a href="#">
                        <img src={insta10} alt="img" />
                      </a>
                      <a href="#">
                        <img src={insta11} alt="img" />
                      </a>
                      <a href="#">
                        <img src={insta12} alt="img" />
                      </a>
                    </div>
                  </div>
                  <div className="sidebar_widget has_border tagcloud_widget mb-40">
                    <div className="sidebar_title">
                      <h4 className="sidebar_title_text has_border">
                        <span className="theme-1">//</span>Tags
                      </h4>
                    </div>
                    <div className="tagcloud">
                      <a href="#">Popular</a>
                      <a href="#">Design</a>
                      <a href="#">UX</a>
                      <a href="#">UX</a>
                      <a href="#">Usability</a>
                      <a href="#">Develop</a>
                      <a href="#">Icon</a>
                      <a href="#">Icon</a>
                      <a href="#">Business</a>
                      <a href="#">Consult</a>
                      <a href="#">Kit</a>
                      <a href="#">Kit</a>
                      <a href="#">Keyboard</a>
                      <a href="#">Mouse</a>
                      <a href="#">Tech</a>
                      <a href="#">Tech</a>
                    </div>
                  </div>
                  <div className="sidebar_widget has_border addverise_widget mb-40">
                    <div className="sidebar_title">
                      <h4 className="sidebar_title_text has_border">
                        <span className="theme-1">//</span>Sponsor Adds
                      </h4>
                    </div>
                    <div className="advertise_img">
                      <Link to='/blog-details'>
                        <img src={blog_add} alt="img" />
                      </Link>
                      <div className="advertise_abs">
                        <span>270x240</span>
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
    </div>
  );
};

export default Main;
