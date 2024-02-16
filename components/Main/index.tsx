'use client';

import { Col, Row } from 'antd';
import Image from 'next/image';
import CardComponent from '../Card';
import BannerImg from '@/public/banner.png';
import RecentList from './RecentList';
import RecentSearch from './RecentSearch';
import RequiredLoginMsg from './RequiredLoginMsg';

const Main = () => (
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
  </div>
);

export default Main;
