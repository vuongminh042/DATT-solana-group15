import assetNft from "../model/assetNft.js";
import Nft from "../model/Nft.js";

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
        "x-api-key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJjOWU4MDViOC05YmIwLTQxZmQtOGJjYy05YTAyYzY5NzY3YTgiLCJzdWIiOiJjZjMwMDkzOS1kNDBkLTQ1NjYtYjFhMy1iNDk1N2NjNmRhMzMiLCJpYXQiOjE3MzE3MzE0MDN9.pRk6VD_FeUxFmH4Ffl36cXpDM5WlpIwas2im6RLK0iQ", // Thay bằng API key thực tế
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

export const NFT = async(req,res,next) => {
  try {
    const url = 'https://api.gameshift.dev/nx/asset-collections';
  const apiKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJjOWU4MDViOC05YmIwLTQxZmQtOGJjYy05YTAyYzY5NzY3YTgiLCJzdWIiOiJjZjMwMDkzOS1kNDBkLTQ1NjYtYjFhMy1iNDk1N2NjNmRhMzMiLCJpYXQiOjE3MzE3MzE0MDN9.pRk6VD_FeUxFmH4Ffl36cXpDM5WlpIwas2im6RLK0iQ';

  // Lấy dữ liệu từ request body
  const { name, description, imageUrl } = req.body;

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'x-api-key': apiKey,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      name,
      description,
      imageUrl,
    }),
  };

  try {
    // Gửi yêu cầu tới API bên thứ ba
    const response = await fetch(url, options);

    if (!response.ok) {
      return res.status(response.status).json({
        error: `API Error: ${response.statusText}`,
      });
    }

    const data = await response.json();
    // Trả dữ liệu về client
    const newNFT = new Nft({
      name: data.name,
      description: data.description,
      imageUrl: data.imageUrl,
    });

    await newNFT.save();

    res.status(200).json({
      message: 'NFT created successfully and saved to database',
      data,
    });
  } catch (error) {
    console.error('Error creating NFT:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      details: error.message,
    });
  }

    
} catch (err) {
    console.error('Error creating and saving NFT:', err);
    res.status(500).send('Something went wrong.');
}
}


export const createUniqueAsset  = async(req,res,next)=>{
  try {
    const url = 'https://api.gameshift.dev/nx/unique-assets';
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJjOWU4MDViOC05YmIwLTQxZmQtOGJjYy05YTAyYzY5NzY3YTgiLCJzdWIiOiJjZjMwMDkzOS1kNDBkLTQ1NjYtYjFhMy1iNDk1N2NjNmRhMzMiLCJpYXQiOjE3MzE3MzE0MDN9.pRk6VD_FeUxFmH4Ffl36cXpDM5WlpIwas2im6RLK0iQ';
  
    const { collectionId, description, imageUrl, name, destinationUserReferenceId } = req.body;
  
    // Kiểm tra các trường bắt buộc
    if (!collectionId || !description || !imageUrl || !name || !destinationUserReferenceId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'x-api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        details: {
          collectionId: collectionId.trim(),
          description: description.trim(),
          imageUrl: imageUrl.trim(),
          name: name.trim(),
          // destinationUserReferenceId: destinationUserReferenceId.trim(),
        },
        destinationUserReferenceId: destinationUserReferenceId.trim(),
      }),
    };
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        const errorDetails = await response.json();
        return res.status(response.status).json({
          error: `API Error: ${response.statusText}`,
          details: errorDetails,
        });
      }
  
      const data = await response.json();
      console.log(data);
      
  
      // Nếu cần lưu vào MongoDB
      // const newNFT = new assetNft({
      //   name: data.collection.name,
      //   description: data.collection.description,
      //   imageUrl: data.collection.imageUrl,
      //   collectionId: data.collection.id,
      //   destinationUserReferenceId: data.collection.destinationUserReferenceId,
      // });
  
      // await newNFT.save();
  
      res.status(200).json({
        message: 'Unique asset created successfully and saved to database',
        data,
      });
    } catch (error) {
      console.error('Error creating unique asset:', error);
      res.status(500).json({
        error: 'Internal Server Error',
        details: error.message,
      });
    }
  } catch (error) {
    next(error)
  }
}