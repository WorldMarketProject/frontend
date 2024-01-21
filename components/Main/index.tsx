'use client'

import { Col, Row } from "antd";
import CardComponent from "../Card";

const Main = () => {
  return (
    <div className="container">
      <Row gutter={[40, 0]}>
        <Col span={6}>
          <Row gutter={[0, 30]}>
            <Col span={24}>
              <CardComponent title="최근 검색어" content={<>콘텐츠</>} height={130} />
            </Col>
            <Col span={24}>
              <CardComponent title="등록한 거래" content={<>콘텐츠</>} height={130} />
            </Col>
            <Col span={24}>
              <CardComponent title="완료된 거래" content={<>콘텐츠</>} height={130} />
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Row gutter={[0, 30]}>
            <Col span={24}>
              <CardComponent content={<>콘텐츠</>} height={300} />
            </Col>
            <Col span={24}>
              <CardComponent title="아이템" content={<>콘텐츠</>} height={350} />
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row gutter={[0, 30]}>
            <Col span={24}>
              <CardComponent title="내 정보" content={<>로그인을 해주세요.</>} height={130} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Main;