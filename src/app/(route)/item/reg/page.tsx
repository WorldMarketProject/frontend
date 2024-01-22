'use client'

import { useEffect } from "react";
import { Button, Col, Row, Radio, message, Input } from "antd";
import styled from "styled-components";
import CardComponent from "@/components/Card";

const RegItem = () => {
    const onClickReg = () => {
        message.info("준비중 입니다.")
    }

    return (
        <>
            <Title>거래 등록/수정</Title>
            <Row gutter={[20, 20]}>
                <Col span={24}>
                    <CardComponent content={<ItemComponent1 />} />
                </Col>
                <Col span={24}>
                    <CardComponent content={<ItemComponent2 />} />
                </Col>
                <Col span={24} style={{ display: 'flex', justifyContent: 'flex-end', gap: 15 }}>
                    <RegisterButton type="primary" onClick={onClickReg}>등록하기</RegisterButton>
                    {/* <BackButton>뒤로가기</BackButton> */}
                </Col>
            </Row>
        </>
    );
};

const ItemComponent1 = () => {
    return (
        <Row gutter={[15, 15]}>
            <Col xs={24} sm={24} md={24} lg={5} xl={5} xxl={5}>
                <StyledTitleDiv>거래 종류 선택</StyledTitleDiv>
                <Radio.Group defaultValue="a" buttonStyle="solid" size="large" style={{ display: 'flex', textAlign: 'center' }}>
                    <Radio.Button value="a" style={{ flex: 1 }}>구매하기</Radio.Button>
                    <Radio.Button value="b" style={{ flex: 1 }}>판매하기</Radio.Button>
                </Radio.Group>
            </Col>
            <Col xs={24} sm={24} md={24} lg={5} xl={5} xxl={5}>
                <StyledTitleDiv>마감 기한</StyledTitleDiv>
                <Input size="large" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
                <StyledTitleDiv>아이템 검색</StyledTitleDiv>
                <Input size="large" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={3} xl={3} xxl={3}>
                <StyledTitleDiv>STR</StyledTitleDiv>
                <Input size="large" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={3} xl={3} xxl={3}>
                <StyledTitleDiv>DEX</StyledTitleDiv>
                <Input size="large" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={3} xl={3} xxl={3}>
                <StyledTitleDiv>INT</StyledTitleDiv>
                <Input size="large" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={3} xl={3} xxl={3}>
                <StyledTitleDiv>LUK</StyledTitleDiv>
                <Input size="large" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={3} xl={3} xxl={3}>
                <StyledTitleDiv>공격력</StyledTitleDiv>
                <Input size="large" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={3} xl={3} xxl={3}>
                <StyledTitleDiv>마력</StyledTitleDiv>
                <Input size="large" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={3} xl={3} xxl={3}>
                <StyledTitleDiv>이동속도</StyledTitleDiv>
                <Input size="large" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={3} xl={3} xxl={3}>
                <StyledTitleDiv>점프력</StyledTitleDiv>
                <Input size="large" />
            </Col>
        </Row>
    )
}

const ItemComponent2 = () => {
    return (
        <Row gutter={[15, 15]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <StyledTitleDiv>제목</StyledTitleDiv>
                <Input size="large" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <StyledTitleDiv>내용</StyledTitleDiv>
                <Input.TextArea size="large" style={{ height: 250, resize: 'none' }} />
            </Col>
        </Row>
    )
}

export default RegItem;

const Title = styled.div`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 30px;
`

const StyledTitleDiv = styled.div`
    && {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 13px;
    }
`

const Explain = styled.div`
  font-size: 14px;
  color: #606060;
  margin: 12px 0;
`

const RegisterButton = styled(Button)`
  && {
    height: 48px;
    padding: 12px 30px 20px 30px;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
    border-radius: 16px;
    background: #5865F2;
  }
`

const BackButton = styled(Button)`
  && {
    height: 48px;
    padding: 12px 30px 20px 30px;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
    border-radius: 16px;
    color: #000;
    background: #fff;
  }
`

const BtnGroup = styled.div`
  margin: 20px 0;
  font-size: 14px;
  color: #606060;
`

const StyledSpan = styled.span`
  && {
    margin: 0 5px;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`