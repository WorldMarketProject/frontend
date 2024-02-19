'use client';

import { Button, Col, Row } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import CardComponent from '../Card';
import RecentList from './RecentList';
import RecentSearch from './RecentSearch';
import { useModal } from '@/hooks/useModal';

const Main = () => {
  const { Modal, isOpen, openModal, closeModal } = useModal();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get('token') === 'false') {
      openModal();
    }
  }, []);

  return (
    <div className="container">
      <Row gutter={[30, 30]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Row gutter={[30, 30]}>
            <Col span={24}>
              <CardComponent content={<RecentSearch type="used" />} />
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Row gutter={[30, 30]}>
            <Col span={24}>
              <CardComponent title="최근 등록된 목록" content={<RecentList />} />
            </Col>
          </Row>
        </Col>
      </Row>
      {searchParams.get('token') === 'false' && (
        <Modal title="토큰 만료 알림" isOpen={isOpen} closeModal={closeModal}>
          <div style={{ margin: '30px 0' }}>
            <div style={{ fontWeight: 700, fontSize: 16 }}>토큰이 만료되었습니다.</div>
            <div style={{ color: 'grey' }}>다시 로그인해주세요.</div>
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
            <Button
              onClick={() => {
                router.push('/');
                closeModal();
              }}
            >
              확인
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Main;
