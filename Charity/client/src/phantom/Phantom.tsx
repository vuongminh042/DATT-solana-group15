import React, { useState, useEffect } from "react";
import Header from "../pages/website/Home/components/Header";
import Footer from "../pages/website/Home/components/Footer";
import "../App.css";

const Phantom = () => {
  const phantom = localStorage.getItem("phantom");
  const [walletAddress, setWalletAddress] = useState(null);
  const [formData, setFormData] = useState({
    referenceId: phantom,
    email: "",
    externalWalletAddress: phantom,
  });

  // Kiểm tra xem Phantom Wallet có được cài đặt không
  const isPhantomInstalled = () => {
    return window.phantom?.solana?.isPhantom || false;
  };

  // Hàm kết nối với Phantom Wallet
  const connectPhantomWallet = async () => {
    if (isPhantomInstalled()) {
      try {
        const response = await window.phantom.solana.connect();
        setWalletAddress(response.publicKey.toString());
        localStorage.setItem("phantom", response.publicKey.toString());
        console.log(
          "Kết nối thành công với địa chỉ ví:",
          response.publicKey.toString()
        );
      } catch (error) {
        console.error("Lỗi khi kết nối với ví:", error);
      }
    } else {
      alert("Phantom Wallet chưa được cài đặt. Vui lòng cài đặt Phantom.");
    }
  };

  // Kiểm tra kết nối khi ứng dụng tải
  useEffect(() => {
    const checkConnection = async () => {
      if (isPhantomInstalled() && window.phantom.solana.isConnected) {
        const response = await window.phantom.solana.connect({
          onlyIfTrusted: true,
        });
        setWalletAddress(response.publicKey.toString());
      }
    };
    checkConnection();
  }, []);

  // Xử lý thay đổi trong form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Gửi dữ liệu form về backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/wallet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Dữ liệu đã được gửi thành công!");
      } else {
        alert("Đã xảy ra lỗi khi gửi dữ liệu.");
      }
    } catch (error) {
      console.error("Lỗi khi gửi dữ liệu:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="container2">
        <h1 className="display-4">Kết nối với Ví Phantom</h1>
        {walletAddress ? (
          <div id="wallet-info" className="alert alert-success mt-3">
            Đã kết nối với ví: {walletAddress}
            <br />
            <br />
            <button className="btn btn-primary">
              <a style={{ textDecoration: "none", color: "white" }} href="/">
                Quay lại home
              </a>
            </button>
            <div className="container mt-5">
              <div className="card shadow p-4">
                <h2 className="text-center mb-4">Register User</h2>
                <form onSubmit={handleSubmit}>
                  {/* Trường 1: referenceId */}
                  <div className="mb-3">
                    <label htmlFor="referenceId" className="form-label">
                      Reference ID:
                    </label>
                    <input
                      type="text"
                      id="referenceId"
                      name="referenceId"
                      value={formData.referenceId}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter Reference ID"
                      required
                    />
                  </div>
                  {/* Trường 2: email */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter your Email"
                      required
                    />
                  </div>
                  {/* Trường 3: externalWalletAddress */}
                  <div className="mb-3">
                    <label
                      htmlFor="externalWalletAddress"
                      className="form-label"
                    >
                      External Wallet Address:
                    </label>
                    <input
                      type="text"
                      id="externalWalletAddress"
                      name="externalWalletAddress"
                      value={formData.externalWalletAddress}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter Wallet Address"
                      required
                    />
                  </div>
                  {/* Nút gửi */}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <button className="btn btn-primary" onClick={connectPhantomWallet}>
            Kết Nối Phantom Wallet
          </button>
        )}
      </div>
      {/* Form đăng ký */}

      <Footer />
    </div>
  );
};

export default Phantom;
