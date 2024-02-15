"use client";

import { Col, Row, Spin, Image as AntImage } from "antd";
import * as S from "./style";

const CarouselComponent = () => {
  const contents = [
    {
      img: "/bike.webp",
    },
    {
      img: "/not-found.png",
    },
    {
      img: "/money.png",
    },
  ];

  const SlickButtonFix = (props: {
    children: JSX.Element;
    slideCount?: number;
    currentSlide?: number;
  }) => {
    const { children, currentSlide, slideCount, ...others } = props;
    return <span {...others}>{children}</span>;
  };

  return (
    <>
      <div>
        <Row>
          <Col span={24} style={{ padding: "0 25px" }}>
            <S.StyledCarousel
              arrows
              dotPosition={"bottom"}
              speed={600}
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                transition: "0.35s",
                width: "100%",
                height: 420,
              }}
              nextArrow={
                <SlickButtonFix>
                  <></>
                </SlickButtonFix>
              }
              prevArrow={
                <SlickButtonFix>
                  <></>
                </SlickButtonFix>
              }
            >
              {contents?.map((e, i) => (
                <div key={i}>
                  <AntImage
                    preview={{ mask: false }}
                    src={e?.img}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              ))}
            </S.StyledCarousel>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CarouselComponent;
