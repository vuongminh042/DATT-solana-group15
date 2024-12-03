import Category from "../model/Category.js";
import Nft from "../model/Nft.js";
import { API_KEY } from "../ultils/env.js";
import fetch from 'node-fetch'; // Sử dụng node-fetch để gửi HTTP request

class CategoryController {
  async create(req, res, next) {
    try {
      const data = await Category.create(req.body);
      if (data) {
        return res.status(201).json({
          success: true,
          data,
          messages: "Create successfuly",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  async get(req, res, next) {
    const url = 'https://api.gameshift.dev/nx/asset-collections';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-api-key': API_KEY // Lấy API key từ biến môi trường
      },
    };
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        // Nếu API trả về lỗi
        return res.status(response.status).json({
          message: `Error fetching items: ${response.statusText}`,
        });
      }
  
      const data = await response.json();
      return res.status(200).json({
        success: true,
        items: data , // Trả về danh sách các items (nếu có)
      });
    } catch (error) {
      // Bắt lỗi nếu có sự cố trong quá trình xử lý request
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        error: error.message,
      });
    }
  }

  async getDetail(req, res, next) {
    try {
      const data = await Nft.findById(req.params.id);
      if (data) {
        return res.status(200).json({
          success: true,
          data,
          messages: "get successfuly",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const data = await Nft.findByIdAndDelete(req.params.id);
      if (data) {
        return res.status(200).json({
          success: true,
          data,
          messages: "delete successfuly",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const data = await Nft.findByIdAndUpdate(
        { _id: req.params.id },
        { ...req.body, updatedAt: new Date() },
        { new: true }
      );
      if (data) {
        return res.status(200).json({
          success: true,
          data,
          messages: "get successfuly",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  }
}

export default new CategoryController();
