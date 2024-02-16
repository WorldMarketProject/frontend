'use client';

import { Button, Col, Input, Row, Select } from 'antd';
import { useRouter } from 'next/navigation';
import Title from '@/components/Title';

const RegItem = () => {
  const router = useRouter();

  return (
    <>
      <Title content="아르바이트 등록" />
      <Row gutter={[10, 10]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>거래 종류</div>
          <div style={{ marginBottom: 10 }}>
            <Select
              defaultValue="/jobs"
              options={[
                { value: '', label: '중고거래' },
                { value: '/realty', label: '부동산' },
                { value: '/jobs', label: '아르바이트' },
              ]}
              onChange={(e: string) => router.push(`${e}/reg-item`)}
              style={{ width: 150 }}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          아르바이트
        </Col>
      </Row>
    </>
  );
};

export default RegItem;
