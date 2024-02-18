'use client';

import { Avatar, Button, Col, Row } from 'antd';
import Image from 'next/image';
import styled from 'styled-components';
import CardComponent from '@/components/Card';
import CarouselComponent from '@/components/Carousel';
import RecentSearch from '@/components/Main/RecentSearch';
import UnknownAvatar from '@/public/unknown-avatar.png';
import PopularList from '@/components/Main/PopularList';

const tempText = `
<div property="schema:description" id="article-detail">
            <p>국산 원단 국산 솜 자체 공장 자체 생산
<br>자리 없어서 빨리 팔아요~
<br>세미마이크로 면입니다.
<br>ss사이즈 15000원 </p>

<p>q 사이즈 25000원 </p>

<p>베개커버 40 60 사이즈 개당 5천원
<br>베개솜 만원</p>

<p>와서 구경하시고 구매 안 되시는분들은
<br>배송 택배비 추가요금
<br>1개 4천원 2~3개 5천원 4개 6천원
<br>대량은 가져다 드려요~</p>
</div>
`;

const Posts = () => (
  <Row gutter={[30, 30]}>
    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
      <Row gutter={[30, 30]}>
        <Col span={24}>
          <CarouselComponent />
        </Col>
        <Col span={24}>
          <div style={{ marginBottom: 5, display: 'flex', gap: 10 }}>
            <div>
              <Avatar size={40} icon={<Image src={UnknownAvatar} alt="unknown" />} />
            </div>
            <StyledOutDiv>
              <StyledOutDiv style={{ fontSize: 14 }}>작성자</StyledOutDiv>
              <StyledOutDiv style={{ fontSize: 13, color: 'grey' }}>울산 남구 신정동</StyledOutDiv>
            </StyledOutDiv>
          </div>
        </Col>
        <Col span={24}>
          <div style={{ fontWeight: 700, fontSize: 18 }}>전기자전거</div>
          <div style={{ fontSize: 13, color: '#8697bf' }}>가구/인테리어 ∙ 1일 전</div>
          <div style={{ fontWeight: 700, fontSize: 18, margin: '10px 0' }}>50,000원</div>
          <div dangerouslySetInnerHTML={{ __html: tempText }} />
          <div style={{ fontSize: 13, color: '#8697bf' }}>관심 137 ∙ 채팅 85 ∙ 조회 2450</div>
        </Col>
        <Col span={24}>
          <Row gutter={[20, 20]}>
            <Col span={8}>
              <Button type="dashed" size="large" style={{ width: '100%' }}>
                ♡ 찜하기
              </Button>
            </Col>
            <Col span={8}>
              <Button type="primary" size="large" style={{ width: '100%', fontWeight: 600 }}>
                구매신청
              </Button>
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
);

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
