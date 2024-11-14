import React, { useState, useEffect } from "react";

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
      <h2>Kết Nối với Phantom Wallet</h2>

      {walletAddress ? (
        <div>
          <p>Đã kết nối với ví: {walletAddress}</p>
          <button className="btn btn success">
            <a href="/">Quay lại home</a>
          </button>
        </div>
      ) : (
        <button onClick={connectPhantomWallet}>Kết Nối Phantom Wallet</button>
      )}
    </div>
  );
};

export default Phantom;
