import { loadStatusCodeList, loadTradeList } from "@/api/Api";
import { DataType, ElementType } from "@/types/RecentList/RecentList.interface";
import { Col, Row, Select, Table, TableColumnsType } from "antd";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

const RecentList = () => {
  const [data, setData] = useState([]);
  const [codeList, setCodeList] = useState<ElementType[]>([]);

  const columns: TableColumnsType<DataType> = [
    {
      title: "유형",
      dataIndex: "tr_type",
      key: "tr_type",
      width: 60,
      align: "center",
      render: (text) => {
        const element: ElementType | undefined = codeList?.find(
          (e: any) => e?.code_seq === text
        );
        return <>{element?.code_step3}</>;
      },
    },
    {
      title: "상태",
      dataIndex: "tr_type",
      key: "tr_type",
      width: 85,
      align: "center",
      render: (text) => {
        const element: ElementType | undefined = codeList?.find(
          (e: any) => e?.code_seq === text
        );
        const bgColor = element?.code_nm === "완료" ? "#7986e7" : "grey";
        return (
          <>
            <span
              style={{
                background: bgColor,
                padding: 6,
                color: "#fff",
                fontWeight: 700,
                borderRadius: 8,
              }}
            >
              {element?.code_nm}
            </span>
          </>
        );
      },
    },
    {
      title: "제목",
      dataIndex: "tr_title",
      key: "tr_title",
      align: "center",
    },
    {
      title: "아이템명",
      dataIndex: "itm_nm",
      key: "itm_nm",
      align: "center",
    },
    {
      title: "수량",
      dataIndex: "count",
      key: "count",
      align: "center",
      width: 70,
      render: () => <>1</>,
    },
    {
      title: "가격",
      dataIndex: "price",
      key: "price",
      align: "center",
      render: (text) => Number(text)?.toLocaleString(),
    },
    {
      title: "등록일",
      dataIndex: "reg_dt",
      key: "reg_dt",
      align: "center",
    },
  ];

  const getTradeList = async () => {
    const result = await loadTradeList({});
    if (result?.success) {
      setData(result?.list);
    } else {
      console.log(result?.message || "에러");
    }
  };

  const getCodeList = async () => {
    const result = await loadStatusCodeList();
    if (result?.success) {
      setCodeList(result?.list);
    } else {
      console.log(result?.message || "에러");
    }
  };

  useEffect(() => {
    // getTradeList();
    // getCodeList();
  }, []);

  const sampleInfo1 = {
    imgUrl: "/bike.webp",
    title: "전기자전거",
    price: 50000,
    region: "울산 남구 신정동",
  };

  const sampleInfo2 = {
    imgUrl:
      "https://img.freepik.com/free-photo/top-view-composition-of-different-traveling-elements_23-2148884943.jpg?w=1800&t=st=1706790480~exp=1706791080~hmac=f0b352f31eae53fd74c55fa5bd21f19936aed1d5d11e740b2c6e59ad3f724e62",
    title:
      "옷 세트 판매합니다 1234옷 세트 판매합니다 1234옷 세트 판매합니다 1234옷 세트 판매합니다 1234",
    price: 50000,
    region: "울산 남구 신정동",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ fontWeight: 700 }}>지역</div>
      <div style={{ marginBottom: 10 }}>
        <Select
          defaultValue={"ulsan"}
          options={[{ value: "ulsan", label: "울산" }]}
          style={{ width: 130 }}
        />
      </div>
      <div>
        <Row gutter={[15, 20]}>
          <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
            <ItemCard info={sampleInfo1} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
            <ItemCard info={sampleInfo2} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
            <ItemCard />
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
            <ItemCard />
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
            <ItemCard />
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
            <ItemCard />
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
            <ItemCard />
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
            <ItemCard />
          </Col>
        </Row>
      </div>
      {/* <div>
                <Table rowKey={(record) => record?.tr_title + record?.reg_dt} columns={columns} dataSource={data} />
            </div> */}
    </div>
  );
};

export default RecentList;
