import { Carousel } from 'antd';
import styled from 'styled-components';

export const StyledCarousel = styled(Carousel)`
  && {
    .slick-dots button {
      border-radius: 30px;
      background: grey !important;
      border: 2px solid white;
    }
    .slick-arrow.slick-prev,
    .slick-arrow.slick-next {
      color: #868e96;
      font-size: 18px;
    }
  }
`;
