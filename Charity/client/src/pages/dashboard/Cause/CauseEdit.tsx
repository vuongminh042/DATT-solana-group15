import React, { useEffect, useState } from "react";
import { Button, Form, Input, Space, Select, Typography, message } from "antd";
import { useNavigate, useParams } from "react-router-dom"; // useParams để lấy id từ URL
import axios from "axios";

const { Title } = Typography;
const { Option } = Select;

const CauseEdit = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm(); // Khởi tạo form
  const [categories, setCategories] = useState([]); // Danh sách danh mục
  const [loading, setLoading] = useState(false);
  const { id } = useParams(); // Lấy ID của cause từ URL

  // Lấy danh sách danh mục từ API
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8000/api/category");

        if (response.data && Array.isArray(response.data)) {
          setCategories(response.data); // Lưu danh sách danh mục nếu phản hồi là mảng
        } else if (response.data?.data && Array.isArray(response.data.data)) {
          setCategories(response.data.data); // Nếu danh mục nằm trong thuộc tính `data`
        } else {
          console.error("Invalid category response format");
        }
      } catch (error) {
        message.error("Failed to fetch categories");
        console.error(
          "Error fetching categories:",
          error.response || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Lấy thông tin cause từ API và điền vào form
  useEffect(() => {
    const fetchCause = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/cause/${id}`
        );

        if (response.data.success) {
          form.setFieldsValue({
            name: response.data.data.name,
            description: response.data.data.description,
            imageUrl: response.data.data.imageUrl,
            collectionId: response.data.data.collectionId, // Điền danh mục nếu có
          });
        } else {
          message.error("Failed to load cause data");
        }
      } catch (error) {
        message.error("Failed to load cause data");
        console.error("Error fetching cause:", error.response || error.message);
      }
    };

    fetchCause();
  }, [id, form]);

  // Xử lý khi submit form để cập nhật cause
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/cause/${id}`,
        values
      );

      if (response.data.success) {
        message.success("Cause updated successfully!");
        navigate("/dashboard/cause-list"); // Điều hướng về danh sách cause sau khi cập nhật thành công
      } else {
        message.error(response.data.message || "Failed to update cause");
      }
    } catch (error) {
      message.error("Failed to update cause");
      console.error("Error updating cause:", error.response || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Title level={2}>Edit Cause</Title>
      <Form
        form={form}
        name="cause_edit"
        onFinish={onFinish}
        layout="vertical"
        style={{ maxWidth: 600, margin: "0 auto" }}
      >
        <Form.Item
          name="name"
          label="Cause Name"
          rules={[{ required: true, message: "Please enter the cause name!" }]}
        >
          <Input placeholder="Enter cause name" />
        </Form.Item>

        <Form.Item
          name="imageUrl"
          label="Cause Image URL"
          rules={[
            { required: true, message: "Please enter the cause image URL!" },
          ]}
        >
          <Input placeholder="Enter cause image URL" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please enter a description!" }]}
        >
          <Input.TextArea rows={4} placeholder="Enter cause description" />
        </Form.Item>

        <Form.Item
          name="collectionId"
          label="Category"
          rules={[{ required: true, message: "Please select a category!" }]}
        >
          <Select placeholder="Category cannot be changed" disabled>
            {Array.isArray(categories) && categories.length > 0 ? (
              categories.map((category) => (
                <Option key={category._id} value={category._id}>
                  {category.name}
                </Option>
              ))
            ) : (
              <Option disabled>Loading categories...</Option>
            )}
          </Select>
        </Form.Item>

        <Space>
          <Button type="primary" htmlType="submit" loading={loading}>
            {loading ? "Saving..." : "Save Cause"}
          </Button>
          <Button
            type="default"
            onClick={() => navigate("/dashboard/cause-list")}
          >
            Cancel
          </Button>
        </Space>
      </Form>
    </div>
  );
};

export default CauseEdit;
