'use client';

import { CameraOutlined } from '@ant-design/icons';
import { Modal, Button, Col, Input, Row, Select } from 'antd';
import { useRouter } from 'next/navigation';
import DaumPostcode from 'react-daum-postcode';
import { ChangeEvent, useState } from 'react';
import Title from '@/components/Title';

const RegItem = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<any>({});

  // 주소 검색 모달
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    // 시.도 저장
    const q1 = data.sido;
    // 구.군 저장
    const q3 =
      data.sigungu.length > 3 ? data.sigungu.split('').splice(0, 3).join('') : data.sigungu;
    // 상세주소 앞 2단어 제외하고 저장 ('서울 강남구' 제외하고 저장)
    const splitAddress = data.address.split(' ').splice(2).join(' ');
    const address = data?.address;
    setData({ ...data, address1: address });
    onToggleModal(); // 주소창은 자동으로 사라지므로 모달만 꺼주면
  };

  const handleOk = () => {
    onToggleModal();
  };

  const handleCancel = () => {
    onToggleModal();
  };

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
          <div style={{ display: 'flex' }}>
            <Input
              placeholder="주소를 입력해주세요."
              value={data?.address1}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setData({ ...data, address1: e.target.value })
              }
              style={{ flex: 1 }}
            />
            <Button
              type="primary"
              onClick={onToggleModal}
              style={{ background: '#919191', marginLeft: 10 }}
            >
              주소 검색
            </Button>
          </div>
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
      {isOpen && (
        <Modal open footer={false} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcode onComplete={handleComplete} style={{ paddingTop: 40 }} />
        </Modal>
      )}
    </>
  );
};

export default RegItem;
