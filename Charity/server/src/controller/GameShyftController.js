export const wallet = async (req, res, next) => {
    const { referenceId, externalWalletAddress, email } = req.body;
  
    try {
      // Kiểm tra đầu vào
      if (!referenceId || !externalWalletAddress || !email) {
        return res.status(400).json({
          message: "Thiếu thông tin yêu cầu (referenceId, externalWalletAddress, email).",
        });
      }
  
      // Cấu hình API call
      const url = "https://api.gameshift.dev/nx/users";
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "x-api-key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiI2YjU3Njk1ZC0wNGYwLTQ2NWEtODAyYy00NWQ4ZTIxMTVmMTQiLCJzdWIiOiIzZTQwNzQ0NS0wN2EzLTRkOGEtODg5ZC00YzNmMmQxNjM3NzAiLCJpYXQiOjE3MzIzMzU1OTB9.EDGakdXwV4gQVgxyLHF_iiDnLQJ8ssJTrPPcCT65lSo", // Thay bằng API key thực tế
          "content-type": "application/json",
        },
        body: JSON.stringify({ referenceId, externalWalletAddress, email }),
      };
  
      // Gửi yêu cầu tới API
      const response = await fetch(url, options);
  
      // Kiểm tra phản hồi từ API
      if (!response.ok) {
        const errorResponse = await response.json();
        return res.status(response.status).json({
          message: "Đăng ký thất bại.",
          error: errorResponse,
        });
      }
  
      const data = await response.json();
  
      // Phản hồi thành công
      return res.status(200).json({
        message: "User đăng ký thành công.",
        data,
      });
    } catch (error) {
      // Xử lý lỗi hệ thống
      console.error(error);
      return res.status(500).json({
        message: "Lỗi hệ thống.",
        error: error.message,
      });
    }
  };
  