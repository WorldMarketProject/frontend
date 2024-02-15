import { Card } from "antd";
import styled, { css } from "styled-components";

export const StyledTitleDiv = styled.div`
  && {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 13px;
  }
`;

export const StyledCard = styled(Card)<{ $transform?: boolean }>`
  && {
    width: 100%;
    box-shadow: 0 1px 12px 0 rgba(129, 137, 143, 0.08);
    transition: all 0.1s linear;
    ${(props) =>
      props.$transform === true &&
      css`
        &:hover {
          transform: scale(1.01);
          box-shadow: 0 1px 12px 0 rgba(129, 137, 143, 0.38);
        }
      `}
  }
`;
