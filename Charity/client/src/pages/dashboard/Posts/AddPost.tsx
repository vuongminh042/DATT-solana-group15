import { Button, Form, Input, Select, Typography, message } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";

const { Title } = Typography;
const { TextArea } = Input;

const AddPost = () => {
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/category");
        const result = await response.json();
        if (result.success) {
          setCategories(result.data);
        } else {
          message.error(result.message || "Failed to load categories");
        }
      } catch (error) {
        message.error("Failed to load categories");
        console.error("Error:", error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/auth");
        const result = await response.json();
        if (result.success) {
          setUsers(result.data);
        } else {
          message.error(result.message || "Failed to load users");
        }
      } catch (error) {
        message.error("Failed to load users");
        console.error("Error:", error);
      }
    };

    fetchCategories();
    fetchUsers();
  }, []);

  const onFinish = async (values) => {
    try {
      const storedName = localStorage.getItem("user");
      const storedUserObject = JSON.parse(storedName);
      const user = storedUserObject._id;
      console.log(user);

      const response = await axios.post("http://localhost:8000/api/post", {
        user_id: user,
        category_id: values.category_id,
        title: values.title,
        images: values.images,
        description: values.description,
        messages: values.messages,
      });

      if (response.data.success) {
        message.success("Bài viết đã được thêm thành công!");
      } else {
        message.error("Có lỗi xảy ra khi thêm bài viết.");
      }
    } catch (error) {
      console.error("Error adding post:", error);
      message.error("Có lỗi xảy ra!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Thêm Bài viết Mới</Title>
      <Form
        name="add_post"
        onFinish={onFinish}
        layout="vertical"
        style={{ maxWidth: 600, margin: "0 auto" }}
      >

        <Form.Item
          name="category_id"
          label="Danh mục"
          rules={[{ required: true, message: "Vui lòng chọn danh mục!" }]}
        >
          <Select placeholder="Chọn danh mục">
            {categories.map((category) => (
              <Select.Option key={category._id} value={category._id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="title"
          label="Tiêu đề"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tiêu đề bài viết!",
              min: 6,
              max: 255,
            },
          ]}
        >
          <Input placeholder="Nhập tiêu đề bài viết" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Mô tả"
          rules={[{ required: true, message: "Vui lòng nhập mô tả bài viết!" }]}
        >
          <TextArea rows={4} placeholder="Nhập mô tả bài viết" />
        </Form.Item>

        <Form.Item
          name="images"
          label="Link ảnh"
          rules={[
            { required: true, message: "Vui lòng nhập link ảnh!", max: 255 },
          ]}
        >
          <Input placeholder="Nhập URL ảnh bài viết" />
        </Form.Item>

        <Form.Item
          name="messages"
          label="Tin nhắn"
          rules={[
            { required: true, message: "Vui lòng nhập nội dung tin nhắn!" },
          ]}
        >
          <TextArea rows={2} placeholder="Nhập nội dung tin nhắn" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Lưu bài viết
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddPost;
