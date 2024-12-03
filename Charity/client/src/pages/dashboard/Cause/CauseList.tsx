import React, { useState, useEffect } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Space, Table, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";

const CauseList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { Title } = Typography;

  useEffect(() => {
    setLoading(true);
    // Fetch data from the API
    fetch("http://localhost:8000/api/cause")
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const newData = result.data.data.map((item) => ({
            key: item?.item?.id ?? "", // Ensure item.id exists, fallback to empty string
            name: item?.item?.name ?? "Unknown", // Fallback to 'Unknown' if item.name is undefined
            description: item?.item?.description ?? "No description", // Fallback to 'No description'
            environment: item?.item?.environment ?? "N/A", // Fallback to 'N/A'
            imageUrl: item?.item?.imageUrl ?? "", // Fallback to empty string if imageUrl is missing
            collectionName: item?.item.collection?.name ?? "No collection", // Fallback if collection is undefined
            collectionDescription:
              item?.item.collection?.description ?? "No description", // Fallback
          }));
          setData(newData); // Set data state
          console.log(newData); // Log the new data after it's set
        } else {
          message.error(result.message || "Failed to load categories");
        }
        setLoading(false);
      })
      .catch((error) => {
        message.error("Failed to load categories");
        console.error("Error:", error);
        setLoading(false);
      });
  }, []); // Empty dependency array, so it only runs on mount

  const columns = [
    {
      title: "Cause Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Environment",
      dataIndex: "environment",
      key: "environment",
    },
    {
      title: "Collection Name",
      dataIndex: "collectionName",
      key: "collectionName",
    },
    {
      title: "Collection Description",
      dataIndex: "collectionDescription",
      key: "collectionDescription",
    },
    {
      title: "Image",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (imageUrl) => (
        <img
          src={imageUrl}
          alt="Category"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="link"
            onClick={() => navigate(`/dashboard/cause-edit/${record.key}`)}
          >
            <EditOutlined />
          </Button>
          {/* <Popconfirm
            title="Are you sure you want to delete this category?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger><DeleteOutlined /></Button>
          </Popconfirm> */}
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Title level={2}>Cause List</Title>
      <Button
        type="primary"
        style={{ marginBottom: 16 }}
        onClick={() => navigate("/dashboard/category-add")}
      >
        Add Category
      </Button>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey="key"
      />
    </div>
  );
};

export default CauseList;
