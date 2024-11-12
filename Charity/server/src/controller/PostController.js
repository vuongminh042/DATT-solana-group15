import Post from "../model/Post.js";

class PostController {
  async create(req, res, next) {
    try {
      const data = await Post.create(req.body);
      if (data) {
        return res.status(201).json({
          success: true,
          data,
          message: "create successfuly",
        });
      }

      next();
    } catch (error) {
      next(error);
    }
  }

  async get(req, res, next) {
    try {
      const data = await Post.find().populate('category_id').populate('user_id');
      if (data) {
        return res.status(200).json({
          success: true,
          data,
          message: "get successfuly",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  async getDetail(req, res, next) {
    try {
      const data = await Post.findById(req.params.id).populate('category_id').populate('user_id');
      if (data) {
        return res.status(200).json({
          success: true,
          data,
          message: "get successfuly",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const data = await Post.findByIdAndDelete(req.params.id);
      if (data) {
        return res.status(200).json({
          success: true,
          data,
          message: "deltete successfuly",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const data = await Post.findByIdAndUpdate(
        { _id: req.params.id },
        { ...req.body, updatedAt: new Date() },
        { new: true }
      );
      if (data) {
        return res.status(200).json({
          success: true,
          data,
          message: "update successfuly",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  }
}

export default new PostController();
