import { Button, Form, Input, Space, Typography, message } from "antd";
import { useNavigate } from "react-router-dom"; // Điều hướng giữa các trang
import { useState } from "react"; // Quản lý trạng thái

const { Title } = Typography;

const CategoryAdd = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Trạng thái khi gửi dữ liệu

  // Xử lý khi form được submit
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:8000/api/wallet/create-nft",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const data = await response.json();
      console.log(data);

      if (response && data) {
        message.success("Category added successfully!");
        navigate("/dashboard/category-list"); // Điều hướng đến trang danh sách danh mục
      } else {
        message.error(data.message || "Failed to add category");
      }
    } catch (error) {
      message.error("Failed to add category");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
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
          name="imageUrl"
          label="Category Image URL"
          rules={[{ required: true, message: "Please enter the image URL!" }]}
        >
          <Input placeholder="Enter image URL" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please enter a description!" }]}
        >
          <Input.TextArea rows={4} placeholder="Enter category description" />
        </Form.Item>

        <Space>
          <Button type="primary" htmlType="submit" loading={loading}>
            {loading ? "Saving..." : "Save Category"}
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
