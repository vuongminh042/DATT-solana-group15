import React, { useState, useEffect } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { Button, Input, Popconfirm, Space, Table, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";

const CauseList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingKey, setEditingKey] = useState(null);
  const [priceInput, setPriceInput] = useState("");
  const navigate = useNavigate();
  const { Title } = Typography;

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

  const handleListForSale = async (assetId) => {
    setLoading(true);

    if (!priceInput || isNaN(priceInput)) {
      message.error("Vui lòng nhập giá trị hợp lệ!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8000/api/wallet/market/${assetId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            price: { currencyId: "USDC", naturalAmount: priceInput },
          }),
        }
      );
      const result = await response.json();

      if (result.success) {
        message.success("Niêm yết thành công!");
        window.location.href = result.data.consentUrl;
      } else {
        message.error(result.message || "Không thể niêm yết tài sản");
      }
    } catch (error) {
      message.error("Có lỗi xảy ra khi niêm yết!");
      console.error("Error:", error);
    } finally {
      setLoading(false);
      setEditingKey(null);
    }
  };

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
        fetchCauseList(); // Cập nhật danh sách sau khi hủy
        window.location.href = result.data.consentUrl;

      } else {
        message.error(result.message || "Không thể hủy niêm yết!");
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
      title: "Giá (USDC)",
      dataIndex: "price",
      key: "price",
      render: (price) => (price !== "Chưa bán" ? `${price} USDC` : price),
    },
    {
      title: "Hình ảnh",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (imageUrl) => (
        <img
          src={imageUrl}
          alt="NFT"
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

          {editingKey === record.key ? (
            <Input
              placeholder="Nhập giá (USDC)"
              value={priceInput}
              onChange={(e) => setPriceInput(e.target.value)}
              style={{ width: 120, marginRight: 8 }}
            />
          ) : null}

          <Popconfirm
            title="Bạn có chắc chắn muốn niêm yết tài sản này?"
            onConfirm={() => handleListForSale(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="link"
              icon={<DollarOutlined />}
              onClick={() => setEditingKey(record.key)}
            >
              Bán
            </Button>
          </Popconfirm>

          <Popconfirm
            title="Bạn có chắc chắn muốn hủy niêm yết tài sản này?"
            onConfirm={() => handleCancelListing(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" icon={<DeleteOutlined />} danger>
              Hủy niêm yết
            </Button>
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
