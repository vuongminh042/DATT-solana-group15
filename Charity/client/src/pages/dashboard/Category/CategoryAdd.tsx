import { Button, Form, Input, Space, Typography } from 'antd';

const { Title } = Typography;

const CategoryAdd = () => {
    const onFinish = () => {
    };

    return (
        <div>
            <Title level={2}>Add New Category</Title>
            <Form
                name="category_add"
                onFinish={onFinish}
                layout="vertical"
                initialValues={{
                    name: '',
                    description: '',
                }}
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
                        Save Category
                    </Button>
                    <Button type="default" href="/category-list">
                        Cancel
                    </Button>
                </Space>
            </Form>
        </div>
    );
};

export default CategoryAdd;
