"use client";

import React from "react";
import { Card } from "antd";
import * as S from "./style";

const { Meta } = Card;

const CardComponent = ({
  title,
  content,
  width,
  height,
  transform,
}: {
  title?: string;
  content: string | React.ReactNode | JSX.Element;
  width?: number;
  height?: number;
  transform?: boolean;
}) => (
  <>
    {title && <S.StyledTitleDiv>{title}</S.StyledTitleDiv>}
    <S.StyledCard
      $transform={transform}
      style={{ width: width, height: height }}
    >
      {content}
    </S.StyledCard>
  </>
);

export default CardComponent;
