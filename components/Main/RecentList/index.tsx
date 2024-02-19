import { Col, Row, Select, Table, TableColumnsType, Tag, SelectProps } from 'antd';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { loadStatusCodeList, loadTradeList } from '@/api/Api';
import { DataType, ElementType } from '@/types/RecentList/RecentList.interface';
import ItemCard from './ItemCard';

type TagRender = SelectProps['tagRender'];

const RecentList = () => {
  const {
    data: tradeData,
    isSuccess,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['tradeList'],
    queryFn: () => loadTradeList({ page: 1 }),
  });
  const [data, setData] = useState([]);
  const [codeList, setCodeList] = useState<ElementType[]>([]);

  const tagRender: TagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };

    const color = () => {
      if (value === 'ing') {
        return 'blue';
      }
      if (value === 'reserve') {
        return 'green';
      }
      if (value === 'complete') {
        return 'volcano';
      }
    };

    return (
      <Tag
        color={color()}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  };

  const getTradeList = async () => {
    const result = await loadTradeList({});
    if (result?.success) {
      setData(result?.list);
    } else {
      console.log(result?.message || '에러');
    }
  };

  const getCodeList = async () => {
    const result = await loadStatusCodeList();
    if (result?.success) {
      setCodeList(result?.list);
    } else {
      console.log(result?.message || '에러');
    }
  };

  const LoadingList = () => (
    <Row gutter={[15, 20]}>
      {new Array(8).map((e: any, i: number) => (
        <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
          <ItemCard key={i} loading />
        </Col>
      ))}
    </Row>
  );

  useEffect(() => {
    // getTradeList();
    // getCodeList();
  }, []);

  const sampleInfo1 = {
    imgUrl: '/bike.webp',
    title: '전기자전거',
    price: 50000,
    region: '울산 남구 신정동',
  };

  const sampleInfo2 = {
    imgUrl:
      'https://img.freepik.com/free-photo/top-view-composition-of-different-traveling-elements_23-2148884943.jpg?w=1800&t=st=1706790480~exp=1706791080~hmac=f0b352f31eae53fd74c55fa5bd21f19936aed1d5d11e740b2c6e59ad3f724e62',
    title:
      '옷 세트 판매합니다 1234옷 세트 판매합니다 1234옷 세트 판매합니다 1234옷 세트 판매합니다 1234',
    price: 50000,
    region: '울산 남구 신정동',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Row gutter={[10, 5]}>
        <Col xs={24} sm={24} md={24} lg={5} xl={5} xxl={5}>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>거래 종류</div>
          <div style={{ marginBottom: 10 }}>
            <Select
              defaultValue=""
              options={[
                { value: '', label: '중고거래' },
                { value: '/realty', label: '부동산' },
                { value: '/jobs', label: '아르바이트' },
              ]}
              // onChange={(e: string) => router.push(`${e}/reg-item`)}
              style={{ width: '100%' }}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={7}>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>거래 상태</div>
          <div style={{ marginBottom: 10 }}>
            <Select
              mode="multiple"
              defaultValue={['ing', 'reserve', 'complete']}
              tagRender={tagRender}
              options={[
                { value: 'ing', label: '판매중' },
                { value: 'reserve', label: '예약중' },
                { value: 'complete', label: '거래완료' },
              ]}
              style={{ width: '100%' }}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={5} xl={5} xxl={5}>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>지역</div>
          <div style={{ marginBottom: 10 }}>
            <Select
              defaultValue="ulsan"
              options={[{ value: 'ulsan', label: '울산' }]}
              style={{ width: '100%' }}
            />
          </div>
        </Col>
      </Row>
      {isLoading ? <LoadingList /> : ''}
      <div>
        <Row gutter={[15, 20]}>
          <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
            <ItemCard info={sampleInfo1} loading={isLoading} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
            <ItemCard info={sampleInfo2} loading={isLoading} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
            <ItemCard loading={isLoading} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
            <ItemCard loading={isLoading} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
            <ItemCard loading={isLoading} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
            <ItemCard loading={isLoading} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
            <ItemCard loading={isLoading} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
            <ItemCard loading={isLoading} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RecentList;
