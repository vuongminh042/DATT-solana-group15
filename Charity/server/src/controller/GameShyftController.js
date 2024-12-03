import assetNft from "../model/assetNft.js";
import Nft from "../model/Nft.js";
import { API_KEY } from "../ultils/env.js";
import axios from "axios"


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
        "x-api-key": API_KEY,
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

// export const NFT = async(req,res,next) => {
//   try {
//     const url = 'https://api.gameshift.dev/nx/asset-collections';
//   // Lấy dữ liệu từ request body
//   const { name, description, imageUrl } = req.body;

//   const options = {
//     method: 'POST',
//     headers: {
//       accept: 'application/json',
//       'x-api-key': API_KEY,
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify({
//       name,
//       description,
//       imageUrl,
//     }),
//   };

//   try {
//     // Gửi yêu cầu tới API bên thứ ba
//     const response = await fetch(url, options);

//     if (!response.ok) {
//       return res.status(response.status).json({
//         error: `API Error: ${response.statusText}`,
//       });
//     }

//     const data = await response.json();
//     console.log(data.id);

    
//     // Trả dữ liệu về client
//     const newNFT = new Nft({
//       wallet: data.id,
//       name: data.name,
//       description: data.description,
//       imageUrl: data.imageUrl,
//     });

//     await newNFT.save();

//     res.status(200).json({
//       message: 'NFT created successfully and saved to database',
//       data,
//     });
//   } catch (error) {
//     res.status(500).json({
//       error: 'Internal Server Error',
//     });
//   }

    
// } catch (err) {
//     // console.error('Error creating and saving NFT:', err);
//     res.status(500).send('Something went wrong.');
// }
// }
export const NFT = async (req, res, next) => {
  const url = "https://api.gameshift.dev/nx/asset-collections";

  // Lấy dữ liệu từ request body
  const { name, description, imageUrl } = req.body;

  // Kiểm tra dữ liệu đầu vào
  if (!name || !description || !imageUrl) {
    return res.status(400).json({ error: "Missing required fields (name, description, imageUrl)" });
  }

  // Cấu hình API request
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "x-api-key": API_KEY,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: name.trim(),
      description: description.trim(),
      imageUrl: imageUrl.trim(),
    }),
  };

  try {
    // Gửi yêu cầu tới API bên thứ ba
    const response = await fetch(url, options);

    // Kiểm tra phản hồi từ API
    if (!response.ok) {
      const errorResponse = await response.json();
      return res.status(response.status).json({
        error: `API Error: ${response.statusText}`,
        details: errorResponse,
      });
    }

    // Lấy dữ liệu trả về từ API
    const data = await response.json();
    console.log("API Response:", data);

    // Kiểm tra dữ liệu trả về từ API
    const { id, name: apiName, description: apiDescription, imageUrl: apiImageUrl } = data;
    if (!id) {
      return res.status(400).json({
        error: "Missing ID from API response",
      });
    }

    // Tạo đối tượng NFT mới và lưu vào MongoDB
    const newNFT = new Nft({
      wallet: id, // ID từ API trả về
      name: apiName || name, // Nếu không có, fallback từ request body
      description: apiDescription || description,
      imageUrl: apiImageUrl || imageUrl,
    });

    console.log("Saving NFT:", newNFT);

    await newNFT.save();

    // Trả kết quả về client
    res.status(200).json({
      message: "NFT created successfully and saved to database",
      data: newNFT, // Trả về NFT đã lưu
    });
  } catch (error) {
    console.error("Error creating and saving NFT:", error);
    res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
};


export const createUniqueAsset  = async(req,res,next)=>{
  try {
    const url = 'https://api.gameshift.dev/nx/unique-assets';
    const { collectionId, description, imageUrl, name, destinationUserReferenceId } = req.body;
  
    // Kiểm tra các trường bắt buộc
    if (!collectionId || !description || !imageUrl || !name || !destinationUserReferenceId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'x-api-key': API_KEY,
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
      const newNFT = new assetNft({
        name:req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        collectionId: data.collection.id,
        destinationUserReferenceId: req.body.destinationUserReferenceId,
      });
  
      await newNFT.save();
  
      res.status(200).json({
        message: 'Unique asset created successfully and saved to database',
        data: newNFT,
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

export const market = async(req,res,next)=> {
  const assetId = req.params.id; // lấy assetId từ body request
  const price = req.body.price;     // lấy thông tin giá từ body request

  // URL và header
  const url = `https://api.gameshift.dev/nx/unique-assets/${assetId}/list-for-sale`;
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'x-api-key': API_KEY,
      'content-type': 'application/json',
    },
    data: {
      price: {
        currencyId: 'USDC',     // Đơn vị tiền tệ (USD Coin)
        naturalAmount: price.naturalAmount || '1'  // Số tiền
      }
    }
  };

  try {
    const response = await axios(url, options);
    res.status(200).json({
      success: true,
      message: 'Asset listed for sale successfully!',
      data: response.data,
    });
  } catch (error) {
    console.error('Error listing asset for sale:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to list asset for sale',
      error: error.response?.data || error.message,
    });
  }
}

export const buy = async(req,res,next)=> {
  const itemId = req.params.id
  const url = `https://api.gameshift.dev/nx/unique-assets/${itemId}/buy`;

  // Lấy buyerId từ body request
  const { buyerId } = req.body;

  if (!buyerId) {
    return res.status(400).json({ error: 'Buyer ID là bắt buộc' });
  }

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'x-api-key': API_KEY,
      'content-type': 'application/json'
    },
    body: JSON.stringify({ buyerId })
  };

  try {
    // Gửi yêu cầu tới API Gameshift
    const response = await fetch(url, options);
    const json = await response.json();

    if (response.ok) {
      // Nếu yêu cầu thành công, trả kết quả cho client
      res.status(200).json(json);
    } else {
      // Nếu API trả về lỗi, gửi mã lỗi và thông báo
      res.status(response.status).json(json);
    }
  } catch (err) {
    console.error('Lỗi:', err);
    res.status(500).json({ error: 'Đã có lỗi xảy ra trong quá trình xử lý yêu cầu.' });
  }
}