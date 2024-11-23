import React, { useState, useEffect } from "react";
import Header from "../pages/website/Home/components/Header";
import Footer from "../pages/website/Home/components/Footer";
import "../App.css";
const Phantom = () => {
  const [walletAddress, setWalletAddress] = useState(null);

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
          </div>
        ) : (
          <button className="btn btn-primary" onClick={connectPhantomWallet}>
            Kết Nối Phantom Wallet
          </button>
        )}
      </div>

      {/* Form đăng ký */}
      <div className="container mt-5">
        <div className="card shadow p-4">
          <h2 className="text-center mb-4">Register User</h2>
          <form action="/submit" method="post">
            {/* Trường 1: referenceId */}
            <div className="mb-3">
              <label htmlFor="referenceId" className="form-label">
                Reference ID:
              </label>
              <input
                type="text"
                id="referenceId"
                name="referenceId"
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
                className="form-control"
                placeholder="Enter your Email"
                required
              />
            </div>
            {/* Trường 3: externalWalletAddress */}
            <div className="mb-3">
              <label htmlFor="externalWalletAddress" className="form-label">
                External Wallet Address:
              </label>
              <input
                type="text"
                id="externalWalletAddress"
                name="externalWalletAddress"
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
      <Footer />
    </div>
  );
};

export default Phantom;
