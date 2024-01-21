'use client'

import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';

const { Meta } = Card;

const CardComponent = ({ title, content, width, height }: { title?: string, content: string | React.ReactNode | JSX.Element, width?: number, height?: number }) => (
  <>
    {title && <StyledTitleDiv>{title}</StyledTitleDiv>}
    <StyledCard
      style={{ width: width || '100%', height: height || 300 }}
    >
      {content}
    </StyledCard>
  </>
);

export default CardComponent;

const StyledTitleDiv = styled.div`
    && {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 13px;
    }
`

const StyledCard = styled(Card)`
    && {
        width: 100%;
        height: 105px;
        box-shadow: 0 2px 12px 0 rgba(129, 137, 143, 0.18);
        transition: all 0.1s linear;
        &:hover {
            transform: scale(1.01);
            box-shadow: 0 2px 12px 0 rgba(129, 137, 143, 0.38);
        }
    }
`