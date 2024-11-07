import { Button, Form, Input, Select, Typography, message } from 'antd';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const { Title } = Typography;
const { TextArea } = Input;

const EditPost = () => {
    const [form] = Form.useForm();
    const [categories, setCategories] = useState([]);
    const [users, setUsers] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/post/${id}`);
                if (response.data.success) {
                    form.setFieldsValue(response.data.data);
                } else {
                    message.error('Failed to load post data');
                }
            } catch (error) {
                message.error("Failed to load post data");
                console.error("Error:", error);
            }
        };

        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/category");
                if (response.data.success) {
                    setCategories(response.data.data);
                } else {
                    message.error("Failed to load categories");
                }
            } catch (error) {
                message.error("Failed to load categories");
                console.error("Error:", error);
            }
        };

        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/auth");
                if (response.data.success) {
                    setUsers(response.data.data);
                } else {
                    message.error("Failed to load users");
                }
            } catch (error) {
                message.error("Failed to load users");
                console.error("Error:", error);
            }
        };

        fetchPost();
        fetchCategories();
        fetchUsers();
    }, [id, form]);

    const onFinish = async (values) => {
        try {
            const response = await axios.patch(`http://localhost:8000/api/post/${id}`, values);
            if (response.data.success) {
                message.success('Post updated successfully!');
                navigate('/dashboard/post-list');
            } else {
                message.error('Failed to update post');
            }
        } catch (error) {
            message.error('Error updating post');
            console.error('Error updating post:', error);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <Title level={2}>Edit Post</Title>
            <Form
                form={form}
                name="edit_post"
                onFinish={onFinish}
                layout="vertical"
                style={{ maxWidth: 600, margin: '0 auto' }}
            >
                

                {/* Category ID */}
                <Form.Item
                    name="category_id"
                    label="Category"
                    rules={[{ required: true, message: 'Please select a category!' }]}
                >
                    <Select placeholder="Select a category">
                        {categories.map((category) => (
                            <Select.Option key={category._id} value={category._id}>
                                {category.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item
                    name="title"
                    label="Title"
                    rules={[{ required: true, message: 'Please enter the post title!', min: 6, max: 255 }]}
                >
                    <Input placeholder="Enter post title" />
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Description"
                    rules={[{ required: true, message: 'Please enter the post description!' }]}
                >
                    <TextArea rows={4} placeholder="Enter post description" />
                </Form.Item>

                <Form.Item
                    name="images"
                    label="Image URL"
                    rules={[{ required: true, message: 'Please enter the image URL!', max: 255 }]}
                >
                    <Input placeholder="Enter image URL" />
                </Form.Item>

                <Form.Item
                    name="messages"
                    label="Message"
                    rules={[{ required: true, message: 'Please enter the message content!' }]}
                >
                    <TextArea rows={2} placeholder="Enter message content" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Update Post
                    </Button>
                    <Button type="default" onClick={() => navigate('/dashboard/post-list')} style={{ marginLeft: 8 }}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EditPost;
