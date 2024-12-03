import React, { useState, useEffect } from "react";
import { DeleteOutlined, EditOutlined, DollarOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Space, Table, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";

const CauseList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { Title } = Typography;

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8000/api/cause")
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const newData = result.data.data.map((item) => ({
            key: item?.item?.id ?? "",
            name: item?.item?.name ?? "Unknown",
            description: item?.item?.description ?? "No description",
            environment: item?.item?.environment ?? "N/A",
            imageUrl: item?.item?.imageUrl ?? "",
            collectionName: item?.item.collection?.name ?? "No collection",
            collectionDescription:
              item?.item.collection?.description ?? "No description",
          }));
          setData(newData);
        } else {
          message.error(result.message || "Failed to load causes");
        }
        setLoading(false);
      })
      .catch((error) => {
        message.error("Failed to load causes");
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  // Handler to list asset for sale
  const handleListForSale = async (assetId) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/api/wallet/market/${assetId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price: { currencyId: "USDC", naturalAmount: "1" },
        }),
      });
      const result = await response.json();
      if (result.success) {
        message.success("Asset listed for sale successfully!");
      } else {
        message.error(result.message || "Failed to list asset for sale");
      }
      if (result.success) {
        window.location.href = result.data.consentUrl;
      } else {
        console.log("Không thể niêm yết tài sản.");
      }
    } catch (error) {
      message.error("Failed to list asset for sale");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
    // navigate('https://app.gameshift.dev/consent?transaction=3473c141-9cfd-4e13-b71f-563a5f6066ae')
  };

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
          <Popconfirm
            title="Are you sure you want to list this asset for sale?"
            onConfirm={() => handleListForSale(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" icon={<DollarOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Title level={2}>Cause List</Title>
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
