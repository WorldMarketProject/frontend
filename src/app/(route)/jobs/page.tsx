'use client';

import { Col, Row } from 'antd';
import CardComponent from '@/components/Card';
import RecentSearch from '@/components/Main/RecentSearch';

const Jobs = () => (
  <Row gutter={[30, 30]}>
    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
      <Row gutter={[30, 30]}>
        <Col span={24}>
          <CardComponent content={<RecentSearch type="jobs" />} />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default Jobs;
