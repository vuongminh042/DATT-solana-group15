import { Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const AddPost = () => {
    const onFinish = async (values: unknown) => {
        // Gửi dữ liệu bài viết mới tới server
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        });

        if (response.ok) {
            message.success('Bài viết đã được thêm thành công!');
            // Có thể thêm logic để điều hướng về trang danh sách bài viết sau khi thêm thành công
        } else {
            message.error('Có lỗi xảy ra khi thêm bài viết.');
        }
    };

    return (
        <div>
            <h2>Thêm Bài Viết</h2>
            <Form
                name="add-post"
                onFinish={onFinish}
                layout="vertical"
            >
                <Form.Item
                    label="Tiêu đề"
                    name="title"
                    rules={[{ required: true, message: 'Vui lòng nhập tiêu đề!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Danh mục"
                    name="category_id"
                    rules={[{ required: true, message: 'Vui lòng nhập danh mục!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Mô tả"
                    name="description"
                    rules={[{ required: true, message: 'Vui lòng nhập mô tả!' }]}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    label="Hình ảnh"
                    name="images"
                    rules={[{ required: true, message: 'Vui lòng tải lên hình ảnh!' }]}
                >
                    <Upload
                        beforeUpload={() => false} // Ngăn không cho tự động tải lên
                        onChange={({ fileList }) => {
                            if (fileList.length > 0) {
                                // Giả định là lấy URL của hình ảnh
                                values.images = fileList[0].originFileObj; // Cần xử lý để lấy URL hợp lệ
                            }
                        }}
                    >
                        <Button icon={<UploadOutlined />}>Tải lên hình ảnh</Button>
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Thêm Bài Viết
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddPost;
