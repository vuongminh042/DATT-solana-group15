import { Button, Form, Input, Space, Typography, message } from "antd";
import { useNavigate } from "react-router-dom"; // If using react-router for navigation

const { Title } = Typography;

const CategoryAdd = () => {
  const navigate = useNavigate();

  // Handle form submission
  const onFinish = (values) => {
    // Gửi yêu cầu POST đến API của backend
    fetch("http://localhost:8000/api/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          message.success("Category added successfully!");
          navigate("/dashboard/category-list"); // Redirect to category list
        } else {
          message.error("Failed to add category");
        }
      })
      .catch((error) => {
        message.error("Failed to add category");
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Title level={2}>Add New Category</Title>
      <Form
        name="category_add"
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
          label="Category Name"
          rules={[
            { required: true, message: "Please enter the category name!" },
          ]}
        >
          <Input placeholder="Enter category name" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please enter a description!" }]}
        >
          <Input.TextArea rows={4} placeholder="Enter category description" />
        </Form.Item>

        <Space>
          <Button type="primary" htmlType="submit">
            Save Category
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

export default CategoryAdd;
