'use client'

import { Col, Row } from "antd";
import CardComponent from "../Card";
import BannerImg from "@/public/bannner.png"
import Image from "next/image";

const Main = () => {
  return (
    <div className="container">
      <Row gutter={[40, 30]}>
        <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6}>
          <Row gutter={[30, 30]}>
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
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Row gutter={[30, 30]}>
            <Col span={24}>
              <CardComponent content={<>콘텐츠</>} height={300} />
            </Col>
            <Col span={24}>
              <CardComponent title="아이템" content={<>콘텐츠</>} height={350} />
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6} xl={6} xxl={6}>
          <Row gutter={[30, 30]}>
            <Col span={24}>
              <CardComponent title="내 정보" content={<>로그인을 해주세요.</>} height={130} />
            </Col>
            <Col span={24}>
              <Image src={BannerImg} alt="배너" layout="responsive" style={{ maxWidth: '100%' }} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Main;