import Category from "../model/Category.js";
import Nft from "../model/Nft.js";

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
    try {
      const data = await Nft.find();
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
