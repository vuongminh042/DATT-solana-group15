import React, { useState, useEffect } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { Button, Popconfirm, Space, Table, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";

const CauseList = () => {
  const [data, setData] = useState([]); // Danh sách dữ liệu NFT
  const [loading, setLoading] = useState(false); // Trạng thái loading
  const navigate = useNavigate();
  const { Title } = Typography;

  // Fetch dữ liệu danh sách NFT từ API khi component được mount
  useEffect(() => {
    fetchCauseList();
  }, []);

  const fetchCauseList = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/cause");
      const result = await response.json();

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
          price: item?.item?.price?.naturalAmount ?? "Chưa bán",
        }));
        setData(newData);
      } else {
        message.error(result.message || "Failed to load causes");
      }
    } catch (error) {
      message.error("Failed to load causes");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handler niêm yết tài sản
  const handleListForSale = async (assetId) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8000/api/wallet/market/${assetId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            price: { currencyId: "USDC", naturalAmount: "1" },
          }),
        }
      );
      const result = await response.json();

      if (result.success) {
        message.success("Asset listed for sale successfully!");
        window.location.href = result.data.consentUrl;
      } else {
        message.error(result.message || "Failed to list asset for sale");
      }
    } catch (error) {
      message.error("Failed to list asset for sale");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handler hủy niêm yết tài sản
  const handleCancelListing = async (assetId) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8000/api/wallet/delete/${assetId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();

      if (result) {
        message.success("Hủy niêm yết thành công!");
        window.location.href = result.data.consentUrl;
        fetchCauseList(); // Cập nhật lại danh sách sau khi hủy
      } else {
        message.error(result.message || "Hủy niêm yết thất bại!");
      }
    } catch (error) {
      message.error("Có lỗi xảy ra khi hủy niêm yết!");
      console.error("Error canceling listing:", error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "Tên NFT",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Môi trường",
      dataIndex: "environment",
      key: "environment",
    },
    {
      title: "Bộ sưu tập",
      dataIndex: "collectionName",
      key: "collectionName",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Hình ảnh",
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
      title: "Hành động",
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
            title="Bạn có chắc chắn muốn niêm yết tài sản này?"
            onConfirm={() => handleListForSale(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" icon={<DollarOutlined />} />
          </Popconfirm>
          <Popconfirm
            title="Bạn có chắc chắn muốn hủy niêm yết tài sản này?"
            onConfirm={() => handleCancelListing(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" icon={<DeleteOutlined />} danger />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Title level={2}>Danh sách NFT</Title>
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
