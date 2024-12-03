import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null); // Lưu asset được chọn
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    // Fetch data từ API
    fetch("http://localhost:8000/api/cause")
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const newData = result.data.data.map((item) => ({
            key: item?.item?.id ?? "",
            name: item?.item?.name ?? "Unknown",
            description: item?.item?.description ?? "No description",
            imageUrl: item?.item?.imageUrl ?? "",
            collection: item?.collection ?? {},
            owner: item?.item?.owner ?? {},
          }));
          setData(newData);
        } else {
          console.error(result.message || "Failed to load categories");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  // Hàm xử lý khi người dùng chọn một asset
  const handleSelectAsset = (asset) => {
    setSelectedAsset(asset);
  };

  // Hàm quay về danh sách
  const handleBackToList = () => {
    setSelectedAsset(null);
  };

  if (selectedAsset) {
    // Giao diện chi tiết asset
    const { name, description, imageUrl, collection, owner } = selectedAsset;
    return (
      <div className="container mt-5">
        <button className="btn btn-secondary mb-3" onClick={handleBackToList}>
          Back to List
        </button>
        <div className="card shadow p-4">
          <div className="row">
            <div className="col-md-4">
              <img
                src={imageUrl || "https://via.placeholder.com/300"}
                alt={name}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-8">
              <h2>{name || "Unnamed Asset"}</h2>
              <p>{description || "No description available"}</p>
              <h4>Collection: {collection.name || "Unknown Collection"}</h4>
              <p>{collection.description || "No collection description"}</p>
              <p>
                Owner: {owner.referenceId || "Unknown"} ({owner.address || ""})
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Giao diện danh sách
  return (
    <main>
      <section className="breadcrumb_area breadcrumb_overlay">
        <div className="container">
          <div className="breadcrumb_section">
            <h2>Recent Causes</h2>
          </div>
        </div>
      </section>
      <section className="causes_area gray-bg pt-120 pb-85">
        <div className="container">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="row">
              {data.map((item) => (
                <div className="col-md-4" key={item.key}>
                  <div
                    className="card shadow mb-4"
                    onClick={() => handleSelectAsset(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={item.imageUrl || "https://via.placeholder.com/300"}
                      alt={item.name}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">
                        {item.description.length > 100
                          ? `${item.description.slice(0, 100)}...`
                          : item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Main;
