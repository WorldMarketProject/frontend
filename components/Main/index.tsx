'use client'

import { Col, Row } from "antd";
import CardComponent from "../Card";
import BannerImg from "@/public/banner.png"
import Image from "next/image";
import RecentList from "./RecentList";
import RecentSearch from "./RecentSearch";
import RequiredLoginMsg from "./RequiredLoginMsg";

const Main = () => {
  return (
    <div className="container">
      <Row gutter={[30, 30]}>
        <Col xs={24} sm={24} md={24} lg={5} xl={5} xxl={5}>
          <Row gutter={[30, 30]}>
            <Col span={24}>
              <CardComponent title="최근 검색어" content={<RecentSearch />} />
            </Col>
            <Col span={24}>
              <CardComponent title="등록한 거래" content={<>등록한 거래 목록</>} height={130} />
            </Col>
            <Col span={24}>
              <CardComponent title="완료된 거래" content={<>완료된 거래 (채팅 내역이 있는)</>} height={130} />
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
          <Row gutter={[30, 30]}>
            <Col span={24}>
              <CardComponent title="최근 등록된 목록" content={<RecentList />} />
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={24} lg={5} xl={5} xxl={5}>
          <Row gutter={[30, 30]}>
            <Col span={24}>
              <CardComponent title="내 정보" content={<RequiredLoginMsg />} />
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