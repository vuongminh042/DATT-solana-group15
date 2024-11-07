import { Button, Form, Input, Space, Typography, message } from 'antd';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const { Title } = Typography;

const CategoryEdit = () => {
    const [form] = Form.useForm();  // Initialize form instance
    const navigate = useNavigate();
    const { id } = useParams(); // Assuming route is like /edit-category/:id to get the category ID

    // Fetch category data by ID when the component mounts
    useEffect(() => {
        // Replace with actual API call to fetch category by ID
        fetch(`/api/categories/${id}`)
            .then(response => response.json())
            .then(data => {
                form.setFieldsValue({
                    name: data.name,
                    description: data.description,
                });
            })
            .catch(error => {
                message.error('Failed to load category data');
                console.error('Error:', error);
            });
    }, [id, form]);

    // Handle form submission for updating category
    const onFinish = (values) => {
        // Replace with actual API call to update the category
        fetch(`/api/categories/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then(response => response.json())
            .then(data => {
                message.success('Category updated successfully!');
                navigate('/category-list'); // Redirect after successful update
            })
            .catch(error => {
                message.error('Failed to update category');
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <Title level={2}>Edit Category</Title>
            <Form
                form={form}
                name="category_edit"
                onFinish={onFinish}
                layout="vertical"
                style={{ maxWidth: 600, margin: '0 auto' }}
            >
                <Form.Item
                    name="name"
                    label="Category Name"
                    rules={[{ required: true, message: 'Please enter the category name!' }]}
                >
                    <Input placeholder="Enter category name" />
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Description"
                    rules={[{ required: true, message: 'Please enter a description!' }]}
                >
                    <Input.TextArea rows={4} placeholder="Enter category description" />
                </Form.Item>

                <Space>
                    <Button type="primary" htmlType="submit">
                        Update Category
                    </Button>
                    <Button type="default" onClick={() => navigate('/category-list')}>
                        Cancel
                    </Button>
                </Space>
            </Form>
        </div>
    );
};

export default CategoryEdit;
