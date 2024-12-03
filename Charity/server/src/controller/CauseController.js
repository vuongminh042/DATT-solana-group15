import assetNft from "../model/assetNft.js";
import Category from "../model/Category.js";
import Cause from "../model/Cause.js";
import User from "../model/User.js";

class CauseController {
  async create(req, res, next) {
    try {
      const data = await Cause.create(req.body);
      if (data) {
        const updateUser = await User.findByIdAndUpdate(
          req.body.user_id,
          {
            $push: { cause: data._id },
          },
          { new: true }
        );

        const updatecategory = await Category.findByIdAndUpdate(
          req.body.category_id,
          {
            $push: { cause: data._id },
          },
          { new: true }
        );

        if (data && updateUser && updatecategory) {
          return res.status(201).json({
            success: true,
            data,
            messages: "Create successfuly",
          });
        }
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  async get(req, res, next) {
    const url = 'https://api.gameshift.dev/nx/items';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-api-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiI2ZjE2MzVkMC0wZDFhLTQ3YTQtYTM3Ny1lNmJiNjA4NTMwZjEiLCJzdWIiOiIwN2Q5MjIyMi03OGFmLTRlZjUtODEzMS0zM2FiZGI0NTEzMmUiLCJpYXQiOjE3MzMxOTA0NjF9.jIv7HYvEqfqE2EdkR4B_qydgMMck18mtghcZUdLCgjw'
    }
  };

  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message: `Failed to fetch items. Status: ${response.status}`
      });
    }

    const data = await response.json();
    res.status(200).json({
      success: true,
      data: data
    });
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message
    });
  }
  }

  async getDetail(req, res, next) {
    try {
      const data = await assetNft.findById(req.params.id);
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
      const data = await assetNft.findByIdAndDelete(req.params.id);
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
      const data = await assetNft.findByIdAndUpdate(
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

export default new CauseController();
