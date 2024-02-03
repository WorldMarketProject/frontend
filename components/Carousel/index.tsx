'use client'

import { useState, useEffect } from 'react';
import { Col, Row, Spin, Image as AntImage } from 'antd';
import Image from 'next/image';
import NoSSr from '../NoSsr';
import styled from 'styled-components';
import * as S from "./style";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const CarouselComponent = () => {
  const contents = [
    {
      img: '/bike.webp'
    },
    {
      img: '/not-found.png'
    },
    {
      img: '/money.png'
    }
  ];

  const SlickButtonFix = (
    props: {
      children: JSX.Element;
      slideCount?: number;
      currentSlide?: number;
    }
  ) => {
    const { children, currentSlide, slideCount, ...others } = props;
    return (
      <span {...others}>
        {children}
      </span>
    );
  };

  return (
    <>
      <div>
        <Row>
          <Col span={24} style={{ padding: '0 25px' }}>
            <NoSSr>
              <S.StyledCarousel
                arrows
                dotPosition={"bottom"}
                speed={600}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  transition: "0.35s",
                  width: '100%',
                  height: 420,
                }}
                nextArrow={<SlickButtonFix>
                  <></>
                </SlickButtonFix>}
                prevArrow={<SlickButtonFix>
                  <></>
                </SlickButtonFix>}
              >
                {
                  contents?.map((e, i) =>
                    <div key={i}>
                      <Row
                        style={{
                          maxWidth: 1200,
                          margin: "0 auto",
                          cursor: "pointer",
                        }}
                      >
                        <Col span={24} style={{ overflow: "hidden" }}>
                          <AntImage preview={{ mask: false }} src={e?.img} />
                        </Col>
                      </Row>
                    </div>)
                }
              </S.StyledCarousel>
            </NoSSr>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CarouselComponent;