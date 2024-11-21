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
      <Footer />
    </div>
  );
};

export default Phantom;
