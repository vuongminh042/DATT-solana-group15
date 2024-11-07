import React, { useState } from 'react';
import { Button, Form, Input, Upload, Select, Typography, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const AddPost = () => {
    const [imageUrl, setImageUrl] = useState(null);

    // Xử lý form submit
    const onFinish = async () => {
        try {
            // Logic để gửi bài viết mới tới API
            const response = await axios.post('https://your-api-endpoint.com/posts', {
                title,
                description,
                image: imageUrl,
                category_id,
            });

            if (response.data.success) {
                message.success('Bài viết đã được thêm thành công!');
            } else {
                message.error('Có lỗi xảy ra khi thêm bài viết.');
            }
        } catch (error) {
            console.error('Error adding post:', error);
            message.error('Có lỗi xảy ra!');
        }
    };

    // Xử lý upload ảnh
    const handleImageUpload = (info) => {
        if (info.file.status === 'done') {
            setImageUrl(info.file.response?.url);  // Giả sử API trả về URL ảnh
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <Title level={2}>Thêm Bài viết Mới</Title>
            <Form
                name="add_post"
                onFinish={onFinish}
                layout="vertical"
                style={{ maxWidth: 600, margin: '0 auto' }}
            >
                {/* Tiêu đề bài viết */}
                <Form.Item
                    name="title"
                    label="Tiêu đề"
                    rules={[{ required: true, message: 'Vui lòng nhập tiêu đề bài viết!' }]}
                >
                    <Input placeholder="Nhập tiêu đề bài viết" />
                </Form.Item>

                {/* Mô tả bài viết */}
                <Form.Item
                    name="description"
                    label="Mô tả"
                    rules={[{ required: true, message: 'Vui lòng nhập mô tả bài viết!' }]}
                >
                    <TextArea rows={4} placeholder="Nhập mô tả bài viết" />
                </Form.Item>

                {/* Ảnh bài viết */}
                <Form.Item
                    name="image"
                    label="Ảnh"
                    rules={[{ required: true, message: 'Vui lòng tải lên ảnh!' }]}
                >
                    <Upload
                        action="/upload" // Thay đổi URL upload ảnh theo API của bạn
                        listType="picture"
                        onChange={handleImageUpload}
                        beforeUpload={() => false} // Ngừng tự động upload ảnh
                    >
                        <Button icon={<UploadOutlined />}>Tải lên ảnh</Button>
                    </Upload>
                </Form.Item>

                {/* Danh mục bài viết */}
                <Form.Item
                    name="category"
                    label="Danh mục"
                    rules={[{ required: true, message: 'Vui lòng chọn danh mục!' }]}
                >
                    <Select placeholder="Chọn danh mục">
                        <Select.Option value="1">Danh mục 1</Select.Option>
                        <Select.Option value="2">Danh mục 2</Select.Option>
                        <Select.Option value="3">Danh mục 3</Select.Option>
                    </Select>
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
