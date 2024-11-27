import React, { useEffect, useState } from "react";
import { Button, Form, Input, Space, Select, Typography, message } from "antd";
import { useNavigate } from "react-router-dom"; // If using react-router for navigation
import axios from "axios";

const { Title } = Typography;
const { Option } = Select;

const CauseAdd = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const destinationUserReferenceId = localStorage.getItem("phantom");

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8000/api/category");
        console.log(response);
        
        if (response.data && Array.isArray(response.data)) {
          setCategories(response.data); // Save categories in state
        } else {
          console.error("Invalid response format");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Handle form submission
  // const onFinish = (values) => {
  //   // Gửi yêu cầu POST đến API của backend
  //   fetch("http://localhost:8000/api/wallet/create-nft", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ ...values, destinationUserReferenceId }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.success) {
  //         message.success("Cause added successfully!");
  //         navigate("/dashboard/category-list"); // Redirect to category list
  //       } else {
  //         message.error("Failed to add cause");
  //       }
  //     })
  //     .catch((error) => {
  //       message.error("Failed to add cause");
  //       console.error("Error:", error);
  //     });
  // };

  return (
    <div>
      <Title level={2}>Add New Cause</Title>
      <Form
        name="cause_add"
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          name: "",
          description: "",
        }}
        style={{ maxWidth: 600, margin: "0 auto" }}
      >
        <Form.Item
          name="name"
          label="Cause Name"
          rules={[
            { required: true, message: "Please enter the cause name!" },
          ]}
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
          name="category"
          label="Category"
          rules={[
            { required: true, message: "Please select a category!" },
          ]}
        >
          <Select placeholder="Select a category" loading={loading}>
            {categories.map((category) => (
              <Option key={category._id} value={category._id}>
                {category.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Space>
          <Button type="primary" htmlType="submit">
            Save Cause
          </Button>
          <Button
            type="default"
            onClick={() => navigate("/dashboard/category-list")}
          >
            Cancel
          </Button>
        </Space>
      </Form>
    </div>
  );
};

export default CauseAdd;
