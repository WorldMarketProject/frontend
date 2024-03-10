import { Col, Row, Select, Table, TableColumnsType, Tag, SelectProps } from 'antd';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { DataType, ElementType } from '@/types/RecentList/RecentList.interface';
import ItemCard from './ItemCard';
import RealtyJobCard from './RealtyJobCard';
import { loadStatusCodeList, loadTradeList } from '@/api/trade/api';

type TagRender = SelectProps['tagRender'];

const RecentList = () => {
  const {
    data: tradeData,
    isSuccess,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['tradeList'],
    queryFn: () => loadTradeList({ tr_t_seq: 1 }),
  });
  const [data, setData] = useState([]);
  const [codeList, setCodeList] = useState<ElementType[]>([]);
  const pathname = usePathname();
  const isNotTrans = !(
    pathname?.split('/')?.[1] === 'realty' || pathname?.split('/')?.[1] === 'jobs'
  );

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
      if (value === 'wait') {
        return 'grey';
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

  const LoadingList = () => (
    <Row gutter={[15, 20]}>
      {new Array(8).fill('').map((e: any, i: number) => (
        <Col key={i} xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
          <ItemCard key={i} loading />
        </Col>
      ))}
    </Row>
  );

  const sampleInfo3 = {
    imgUrl: '/t1.jpeg',
    title: '물건 찾는거 도와주실분',
    unit: '일급',
    price: 60000,
    region: '울산 동구 전하동',
  };

  const sampleInfo4 = {
    imgUrl: '/t2.jpeg',
    title: '독서실 청소 알바 구합니다',
    unit: '월급',
    price: 750000,
    region: '울산 남구 신정동',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Row gutter={[10, 5]}>
        {isNotTrans && (
          <>
            <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={7}>
              <div style={{ fontWeight: 700, marginBottom: 10 }}>거래 상태</div>
              <div style={{ marginBottom: 10 }}>
                <Select
                  mode="multiple"
                  defaultValue={['ing', 'complete', 'wait']}
                  tagRender={tagRender}
                  options={[
                    { value: 'ing', label: '거래중' },
                    { value: 'complete', label: '거래완료' },
                    { value: 'wait', label: '거래대기' },
                    { value: 'cancel', label: '거래삭제' },
                  ]}
                  style={{ width: '100%' }}
                />
              </div>
            </Col>
          </>
        )}
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
          {isNotTrans && (
            <>
              {tradeData?.list?.map((e: any, i: any) => (
                <Col key={i} xs={12} sm={12} md={12} lg={8} xl={8} xxl={6}>
                  <ItemCard info={e} loading={isLoading} />
                </Col>
              ))}
            </>
          )}
          {!isNotTrans && (
            <>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                <RealtyJobCard info={sampleInfo3} loading={isLoading} />
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                <RealtyJobCard info={sampleInfo4} loading={isLoading} />
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                <RealtyJobCard loading={isLoading} />
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                <RealtyJobCard loading={isLoading} />
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                <RealtyJobCard loading={isLoading} />
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                <RealtyJobCard loading={isLoading} />
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                <RealtyJobCard loading={isLoading} />
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                <RealtyJobCard loading={isLoading} />
              </Col>
            </>
          )}
        </Row>
      </div>
    </div>
  );
};

export default RecentList;
