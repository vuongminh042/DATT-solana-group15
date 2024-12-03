import cause3 from "../../../../assets/img/causes/cause3.jpg";
import breadcrum_bg_2 from "../../../../assets/img/bg/breadcrum_bg_2.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Typography, message } from "antd"; // Make sure to import message
import axios from "axios";

const Main = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { Title } = Typography;

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8000/api/cause")
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const newData = result.data.data.map((item) => ({
            key: item?.item?.id ?? "", // Ensure item.id exists, fallback to empty string
            name: item?.item?.name ?? "Unknown", // Fallback to 'Unknown' if item.name is undefined
            description: item?.item?.description ?? "No description", // Fallback to 'No description'
            environment: item?.item?.environment ?? "N/A", // Fallback to 'N/A'
            imageUrl: item?.item?.imageUrl ?? "", // Fallback to empty string if imageUrl is missing
            collectionName: item?.item.collection?.name ?? "No collection", // Fallback if collection is undefined
            collectionDescription:
              item?.item.collection?.description ?? "No description", // Fallback
          }));
          setData(newData); // Set data state
        } else {
          message.error(result.message || "Failed to load categories");
        }
        setLoading(false);
      })
      .catch((error) => {
        message.error("Failed to load categories");
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <main>
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
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <span className="active">Cause</span>
                    </li>
                  </ul>
                  <div className="breadcrumb_title">
                    <h2>Recent Causes</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="causes_area gray-bg pt-120 pb-85">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12 text-center">
                <div className="cause_button_wrapper mb-25">
                  <nav>
                    <div
                      className="nav tab_buttons"
                      id="nav-tab"
                      role="tablist"
                    >
                      {/* Category buttons can be added dynamically */}
                      <button className="nav-link active" id="nav-home-tab">
                        All Categories
                      </button>
                      <button className="nav-link" id="nav-water">
                        Water
                      </button>
                      <button className="nav-link" id="nav-education">
                        Education
                      </button>
                      <button className="nav-link" id="nav-medical">
                        Medical
                      </button>
                      <button className="nav-link" id="nav-furniture">
                        Food
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="row">
                  {data.map((cause) => (
                    <div
                      key={cause.key}
                      className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
                    >
                      <div className="single_cause mb-30">
                        <div className="single_cause_img_wrapper">
                          <div className="single_cause_img w_img img_effect_white">
                            <a href={`cause-details/${cause.key}`}>
                              <img
                                src={cause.imageUrl || cause3} // Fallback to default image
                                alt={cause.name}
                              />
                            </a>
                          </div>
                        </div>
                        <div className="single_cause_content">
                          <div className="single_cause">
                            <span className="sub_title">
                              {" "}
                              Danh mục :{cause.collectionName}
                            </span>
                            <h3 className="title">
                              <a href={`cause-details/${cause.key}`}>
                                {" "}
                                tên NFT :{cause.name}
                              </a>
                            </h3>
                          </div>
                          <div className="single_cause_meta">
                            <div className="single_meta d-inline-block">
                              <span className="meta_text clr_theme1">
                                <i className="fal fa-globe" /> Price
                              </span>
                              <span className="meta_price clr_theme1">
                                $45,100 {/* Dynamic amount goes here */}
                              </span>
                              <br />
                              <button
                                onClick={async () => {
                                  const url =
                                    "https://api.gameshift.dev/nx/unique-assets/d1daa684-0030-4a6f-b17c-12f627131f96/buy";
                                  const headers = {
                                    accept: "application/json",
                                    "content-type": "application/json",
                                    "x-api-key":
                                      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJhYjRiMDljOC0wYTBkLTQyN2QtYWJlYi02MTkxNjRlMDQ3MGMiLCJzdWIiOiI0NjY1YTU5OS1kMjMwLTRlMGMtYmQ2ZC0zNTAxYzhhMWVjN2MiLCJpYXQiOjE3MzI3OTc4OTF9.9A-QNs6wrfSmz7vfEcFtrwP2hon_StDWceOtW32Z2Uo", // Replace <your key here> with your actual API key
                                  };
                                  const body = {
                                    buyerId: "starcinguyen",
                                  };
                                  const response = await axios.post(url, body, {
                                    headers,
                                  });
                                  console.log(response.data);
                                }}
                              >
                                Mua NFT
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cause_button text-center mt-10 mb-30">
                <Link to="/causes" className="cause_btn g_btn to_right1 rad-30">
                  Load More <i className="far fa-plus" /> <span />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
};

export default Main;
