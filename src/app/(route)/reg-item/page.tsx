'use client';

import { CameraOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row, Select } from 'antd';
import { useRouter } from 'next/navigation';
import Title from '@/components/Title';

const RegItem = () => {
  const router = useRouter();

  return (
    <>
      <Title content="거래 등록" />
      <Row gutter={[10, 10]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>거래 종류</div>
          <div style={{ marginBottom: 10 }}>
            <Select
              defaultValue=""
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
          <div style={{ fontWeight: 700, marginBottom: 10 }}>제목</div>
          <Input placeholder="제목을 입력해주세요." style={{ width: '100%' }} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>제목</div>
          <Input.TextArea
            placeholder="내용을 입력해주세요."
            style={{ width: '100%', height: 180, resize: 'none' }}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>주소</div>
          <Input placeholder="주소를 입력해주세요." style={{ width: '100%' }} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>상세 주소</div>
          <Input placeholder="상세 주소를 입력해주세요." style={{ width: '100%' }} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <div style={{ fontWeight: 700, marginBottom: 10 }}>
            상품 이미지 <span style={{ color: 'grey', fontWeight: 400 }}>(0/3)</span>
          </div>
          <div>
            <div
              style={{
                width: 130,
                height: 130,
                border: '1px solid #d9d9d9',
                borderRadius: 16,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <CameraOutlined style={{ fontSize: 30, color: '#cccccc' }} />
                <div style={{ color: 'grey', fontSize: 13 }}>이미지 등록</div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24} style={{ textAlign: 'right' }}>
          <Button type="primary" style={{ width: 180, height: 45, fontWeight: 600 }}>
            등록하기
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default RegItem;
