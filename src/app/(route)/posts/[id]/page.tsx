'use client';

import { Alert, Avatar, Button, Col, Modal, Row } from 'antd';
import Image from 'next/image';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import moment from 'moment';
import CardComponent from '@/components/Card';
import CarouselComponent from '@/components/Carousel';
import RecentSearch from '@/components/Main/RecentSearch';
import UnknownAvatar from '@/public/unknown-avatar.png';
import PopularList from '@/components/Main/PopularList';
import { loadTradeDetail } from '@/api/trade/api';
import 'moment/locale/ko';
import { useModal } from '@/hooks/useModal';
import NoImg from '@/public/noimg.png';
import CodeTag from '@/components/CodeTag';

const Posts = ({ params }: { params: { id: number } }) => {
  const router = useRouter();
  const formData = {
    tr_seq: params?.id,
  };
  const {
    data: tradeData,
    isSuccess,
    isError,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['tradeDetail', params?.id],
    queryFn: () => loadTradeDetail(formData),
  });

  const { Modal, isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    if (tradeData && !tradeData?.success) {
      openModal();
    }
  }, [tradeData]);

  return tradeData && tradeData?.success ? (
    <Row gutter={[30, 30]}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <Row gutter={[30, 30]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={15} xxl={15}>
            {tradeData?.files?.length !== 0 && <CarouselComponent />}
            {tradeData?.files?.length === 0 && (
              <div
                style={{
                  height: 300,
                  background: '#D7DBE1',
                  borderRadius: 16,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div>
                  <Image
                    src={NoImg}
                    alt="sample image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: 100,
                      height: 100,
                      objectFit: 'cover',
                    }}
                  />
                  <div style={{ textAlign: 'center', color: 'grey' }}>등록된 이미지 없음</div>
                </div>
              </div>
            )}
            <Row gutter={[20, 20]}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <div style={{ margin: '20px 0', display: 'flex', gap: 10 }}>
                  <div>
                    <Avatar size={40} icon={<Image src={UnknownAvatar} alt="unknown" />} />
                  </div>
                  <StyledOutDiv>
                    <StyledOutDiv style={{ fontSize: 14 }}>
                      {tradeData?.detail?.user_nick}
                    </StyledOutDiv>
                    <StyledOutDiv style={{ fontSize: 13, color: 'grey' }}>
                      {tradeData?.detail?.tr_addr}
                    </StyledOutDiv>
                  </StyledOutDiv>
                </div>
                <div style={{ marginBottom: 15 }}>
                  <CodeTag code={tradeData?.detail?.tr_s_code} />
                </div>
                <div style={{ fontWeight: 800, fontSize: 24 }}>{tradeData?.detail?.tr_title}</div>
                <div style={{ fontSize: 13, color: '#7f9bca' }}>
                  {tradeData?.detail?.tr_t_nm} ∙ {moment(tradeData?.detail?.reg_dt).fromNow()}
                </div>
                <div style={{ marginTop: 10, color: '#D72837' }}>
                  마감일: {tradeData?.detail?.limit_dt}
                </div>
                <div style={{ fontWeight: 800, fontSize: 28, margin: '10px 0' }}>
                  {Number(tradeData?.detail?.tr_price)?.toLocaleString()}원
                </div>
                <div dangerouslySetInnerHTML={{ __html: tradeData?.detail?.tr_content }} />
                <div style={{ fontSize: 13, color: '#7f9bca', marginTop: 15 }}>
                  관심 0 ∙ 채팅 0 ∙ 조회 0
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={9} xxl={9}>
            <Row gutter={[0, 20]}>
              <Col span={24}>
                <CardComponent
                  content={
                    <Row gutter={[20, 20]}>
                      <Col span={24}>
                        <StyledButton type="dashed" size="large">
                          ♡ 찜하기
                        </StyledButton>
                      </Col>
                      <Col span={24}>
                        <StyledButton
                          type="primary"
                          size="large"
                          style={{ fontWeight: 600 }}
                          disabled={tradeData?.detail?.tr_s_code !== 'WAIT'}
                        >
                          구매신청
                        </StyledButton>
                      </Col>
                    </Row>
                  }
                />
              </Col>
              <Col span={24}>
                <StyledAlert
                  description={
                    <div>
                      거래를 진행하고 싶으시다면 상단의 <b>구매신청</b> 버튼을 눌러보세요. 판매자가
                      확인하면 채팅을 하실 수 있습니다.
                    </div>
                  }
                  type="info"
                  showIcon
                  style={{ background: '#fff', borderColor: '#ddd' }}
                />
              </Col>
            </Row>
          </Col>
          <Col span={24} style={{ marginTop: 20 }}>
            <StyledTitleDiv>인기 있는 물품</StyledTitleDiv>
            <PopularList />
          </Col>
        </Row>
      </Col>
    </Row>
  ) : (
    <Modal title="알림" isOpen={isOpen} closeModal={closeModal}>
      <div style={{ margin: '30px 0' }}>
        <div style={{ fontWeight: 700, fontSize: 16 }}>문제가 발생하였습니다.</div>
        <div style={{ color: 'grey' }}>{tradeData?.message || 'error'}</div>
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
  );
};

export default Posts;

const StyledOutDiv = styled.div`
  && {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;

const StyledTitleDiv = styled.div`
  && {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 13px;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 50px !important;
`;

const StyledAlert = styled(Alert)`
  & .ant-alert-icon {
    color: #348485 !important;
  }
`;
