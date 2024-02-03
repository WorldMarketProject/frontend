'use client'

import CardComponent from "@/components/Card";
import RecentSearch from "@/components/Main/RecentSearch";
import { Col, Row } from "antd";

const Realty = () => {
    return (
        <Row gutter={[30, 30]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Row gutter={[30, 30]}>
                    <Col span={24}>
                        <CardComponent content={<RecentSearch type="realty" />} />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Realty;