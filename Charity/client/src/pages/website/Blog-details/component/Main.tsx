import { Link } from 'react-router-dom';
import breadcrumb_bg_4 from '../../../../assets/img/bg/breadcrumb_bg_4.jpg'
import blog_details_big from '../../../../assets/img/news/blog_details_big.jpg'
import details_s1 from '../../../../assets/img/news/details_s1.jpg'
import details_s2 from '../../../../assets/img/news/details_s2.jpg'
import dot9 from '../../../../assets/img/news/dot9.png'
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
import details_person from '../../../../assets/img/news/details_person.jpg'
import comment1 from '../../../../assets/img/news/comment1.jpg'
import comment2 from '../../../../assets/img/news/comment2.jpg'
import comment3 from '../../../../assets/img/news/comment3.jpg'



const Main = () => {
  return (
    <div>
      {/* Main Area Start*/}
      <main>
        {/*breadcrumb area start*/}
        <section
          className="breadcrumb_area breadcrumb_overlay"
          style={{ backgroundImage: `url(${breadcrumb_bg_4})` }}
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
                      <span className="active">Blog Details</span>
                    </li>
                  </ul>
                  <div className="breadcrumb_title">
                    <h2>Personal Info</h2>
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
                <div className="blog_details_wrapper has_border mb-40">
                  <div className="blog_details_content">
                    <div className="blog_category mb-20">
                      <a href="#" className="blog_cat theme-1">
                        Business
                      </a>
                    </div>
                    <h4 className="blog_title">
                      Business contents insurance is a type business insurance
                      that can protect
                    </h4>
                    <div className="blog_meta mb-25">
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
                    <p className="mb-20">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Neque porro quisquam est, qui
                      dolorem ipsum quia dolor sit amet, consectetur, adipisci
                      velit, sed quia non numquam eius modi tempora incidunt ut
                      labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                    <p className="mb-45">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt.
                    </p>
                    <div className="blog_details_img mb-45">
                      <img
                        src={blog_details_big}
                        alt="img"
                      />
                    </div>
                    <h6 className="inner_details_title mb-23">
                      A cleansing hot shower or bath
                    </h6>
                    <p className="mb-35">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia.{" "}
                    </p>
                    <hr className="mb-35" />
                    <h6 className="inner_details_title mb-30">
                      Setting the mood with incense
                    </h6>
                    <div className="blog_details_thumb d-flex pb-30">
                      <div className="details_thumb">
                        <img src={details_s1} alt="img" />
                      </div>
                      <div className="details_content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate
                        </p>
                      </div>
                    </div>
                    <hr className="mb-35" />
                    <h6 className="inner_details_title mb-23">
                      Set Up the charity easily
                    </h6>
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="details_list mb-30">
                          <li>Importance of Fundraise</li>
                          <li>How to place in charity</li>
                          <li>Donar is highly respected</li>
                          <li>Donation is predictable</li>
                          <li>Poverty is removed</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="details_list mb-30">
                          <li>Enrich knowledge to remove poverty</li>
                          <li>Focusing on creative task all time</li>
                          <li>Think positive at least</li>
                          <li>Do not destroy others</li>
                          <li>Love others and lead life</li>
                        </ul>
                      </div>
                    </div>
                    <div className="details_blockquote text-center mb-30">
                      <i className="fas fa-quote-left" />
                      <blockquote>
                        <span>by Hetmayar</span>
                        <h3>
                          Choices to take a holiday and travelling out in this
                          pandemic situation are limited. Why not take a
                          staycation.
                        </h3>
                      </blockquote>
                    </div>
                    <p className="mb-30">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium.{" "}
                    </p>
                    <div className="blog_details_thumb d-flex mb-20">
                      <div className="details_thumb">
                        <img src={details_s2} alt="img" />
                      </div>
                      <div className="details_content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum. Sed ut
                          perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium. Lorem
                          ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip
                        </p>
                      </div>
                    </div>
                    <p className="mb-45">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem.
                    </p>
                  </div>
                  <div className="row  pb-20">
                    <div className="col-xl-6 col-sm-6">
                      <div className="details_tag">
                        <h5 className="details_title mb-25">Releted Tags</h5>
                        <div className="tagcloud tagcloud-sm">
                          <a href="#">Popular</a>
                          <a href="#">Desgin</a>
                          <a href="#">UX</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-sm-6">
                      <div className="details_social text-end">
                        <h5 className="details_title mb-25">Social Share</h5>
                        <div className="social_share">
                          <a href="#" className="facebook">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a href="#" className="twitter">
                            <i className="fab fa-twitter" />
                          </a>
                          <a href="#" className="youtube">
                            <i className="fab fa-youtube" />
                          </a>
                          <a href="#" className="instagram">
                            <i className="fab fa-instagram" />
                          </a>
                          <a href="#" className="viber">
                            <i className="fab fa-viber" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-0 mb-45" />
                  <div className="details_postnav mb-50 d-none">
                    <div className="post-dot-shape">
                      <img src={dot9} alt="img" />
                    </div>
                    <div className="row">
                      <div className="col-xl-6 col-sm-6">
                        <Link to='/blog-details' className="single_post_nav">
                          <span>Prev Post</span>
                          <h4>Tips On Minimalist</h4>
                        </Link>
                      </div>
                      <div className="col-xl-6 col-sm-6">
                        <Link to='/blog-details'
                          className="single_post_nav right_nav text-end"
                        >
                          <span>Next Post</span>
                          <h4>Less Is More</h4>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-0 mb-45" />
                  <div className="related_post mb-20 d-none">
                    <h6 className="related_post_title mb-35">Releted Post</h6>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="related_post_single mb-30">
                          <div className="details_thumb">
                            <Link to='/blog-details'>
                              <img
                                src="assets/img/news/details_rp1.jpg"
                                className="img-fluid"
                                alt="img"
                              />{" "}
                            </Link>
                          </div>
                          <div className="details_content">
                            <div className="blog_meta mb-10">
                              <a href="#" className="calendar">
                                <i className="fal fa-calendar-alt" />
                                24 March 2022
                              </a>
                            </div>
                            <h6 className="related_title theme-1">
                              <Link to='/blog-details'>
                                A series of iOS 7 inspire vector icons sense.
                              </Link>
                            </h6>
                            <p>
                              Lorem ipsum dolor sit amet, conse ctet ur
                              adipisicing elit, sed doing.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="related_post_single mb-30">
                          <div className="details_thumb">
                            <Link to='/blog-details'>
                              <img
                                src="assets/img/news/details_rp2.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="details_content">
                            <div className="blog_meta mb-10">
                              <a href="#" className="calendar">
                                <i className="fal fa-calendar-alt" />
                                24 March 2022
                              </a>
                            </div>
                            <h6 className="related_title theme-1">
                              <Link to='/blog-details'>
                                iPhone inspires a man to buy its configaration.
                              </Link>
                            </h6>
                            <p>
                              Lorem ipsum dolor sit amet, conse ctet ur
                              adipisicing elit, sed doing.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /. related post */}
                  <div className="details_author_box d-flex">
                    <div className="author_thumb">
                      <Link to='/volunteer-details'>
                        <img
                          src={details_person}
                          alt="img"
                        />
                      </Link>
                    </div>
                    <div className="details_content">
                      <span>Written by</span>
                      <h6 className="author_details_name">
                        <Link to='/blog-details'>Andreu D. William</Link>
                      </h6>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation is enougn for today. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit, sed do{" "}
                      </p>
                    </div>
                  </div>
                  {/* /. single author */}
                  <div className="single_post_comment pb-27">
                    <h6 className="related_post_title mb-35">03 Comments</h6>
                    <div className="latest_comments">
                      <ul>
                        <li className="mb-30">
                          <div className="comments_box  pb-30">
                            <div className="comment_avater f-left">
                              <Link to='/volunteer-details'>
                                <img
                                  src={comment1}
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="comment_text has-children">
                              <div className="avater_text">
                                <h5>
                                  <Link to='/volunteer-details'>
                                    Arista Williamson{" "}
                                    <span>
                                      <i className="fal fa-bookmark" />
                                    </span>
                                  </Link>
                                </h5>
                                <div className="blog_meta mb-10">
                                  <a href="#" className="calendar">
                                    <i className="fal fa-calendar-alt" />
                                    24 March 2022
                                  </a>
                                </div>
                                <a href="#" className="replay_btn has_abs">
                                  <i className="fal fa-reply" />
                                  Reply
                                </a>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                            </div>
                          </div>
                          <ul>
                            <li className="children">
                              <div className="comments_box">
                                <div className="comment_avater f-left">
                                  <Link to='/volunteer-details'>
                                    <img
                                      src={comment2}
                                      alt="img"
                                    />
                                  </Link>
                                </div>
                                <div className="comment_text">
                                  <div className="avater_text">
                                    <h5>
                                      <Link to='/volunteer-details'>
                                        Mark Kelian{" "}
                                        <span>
                                          <i className="fal fa-bookmark" />
                                        </span>
                                      </Link>
                                    </h5>
                                    <div className="blog_meta mb-10">
                                      <a href="#" className="calendar">
                                        <i className="fal fa-calendar-alt" />
                                        24 March 2022
                                      </a>
                                    </div>
                                    <a href="#" className="replay_btn has_abs">
                                      <i className="fal fa-reply" />
                                      Reply
                                    </a>
                                  </div>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="mb-45">
                          <div className="comments_box  pb-30">
                            <div className="comment_avater f-left">
                              <Link to='/volunteer-details'>
                                <img
                                  src={comment3}
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="comment_text">
                              <div className="avater_text">
                                <h5>
                                  <Link to='/volunteer-details'>
                                    H. Akanda{" "}
                                    <span>
                                      <i className="fal fa-bookmark" />
                                    </span>
                                  </Link>
                                </h5>
                                <div className="blog_meta mb-10">
                                  <a href="#" className="calendar">
                                    <i className="fal fa-calendar-alt" />
                                    24 March 2022
                                  </a>
                                </div>
                                <a href="#" className="replay_btn has_abs">
                                  <i className="fal fa-reply" />
                                  Reply
                                </a>
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /. single post comment */}
                  <div className="comment_form_wrapper">
                    <h6 className="related_post_title mb-35">Post Comment</h6>
                    <div className="comment_form_details">
                      <form action="#" method="POST">
                        <div className="comment_form_single">
                          <div className="comment_textarea">
                            <textarea
                              name="comment"
                              id="comment"
                              cols={30}
                              rows={10}
                              placeholder="Type your comments..."
                              defaultValue={""}
                            />
                            <label htmlFor="comment">
                              <i className="fal fa-pencil-alt" />
                            </label>
                          </div>
                        </div>
                        <div className="comment_form_single">
                          <input
                            type="text"
                            placeholder="Type your name...."
                            name="cinput"
                            id="cinput"
                          />
                          <label htmlFor="cinput">
                            <i className="fal fa-user" />
                          </label>
                        </div>
                        <div className="comment_form_single">
                          <input
                            type="email"
                            placeholder="Type your email...."
                            name="cemail"
                            id="cemail"
                          />
                          <label htmlFor="cemail">
                            <i className="fal fa-user" />
                          </label>
                        </div>
                        <div className="comment_form_single">
                          <input
                            type="text"
                            placeholder="Type your website...."
                            name="cweb"
                            id="cweb"
                          />
                          <label htmlFor="cweb">
                            <i className="fal fa-globe" />
                          </label>
                        </div>
                        <button
                          type="submit"
                          className="comment_details_btn g_btn to_right1"
                        >
                          <i className="fal fa-comments" /> Post Comment{" "}
                          <span />
                        </button>
                      </form>
                    </div>
                  </div>
                  {/* /. comment form */}
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-5">
                <div className="blog_sidebar_wrapper pl-15">
                  <div className="sidebar_widget has_border about_widget mb-40">
                    <div className="sidebar_title">
                      <h4 className="sidebar_title_text has_border">
                        <span className="theme-1">//</span>About Me
                      </h4>
                    </div>
                    <div className="about_widget_content text-center">
                      <div className="widget_about_img">
                        <Link to='/volunteer-details'>
                          <img
                            src={blog_person}
                            alt="img"
                          />
                        </Link>
                      </div>
                      <h6 className="about_person_title">
                        <Link to='/volunteer-details'>
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
