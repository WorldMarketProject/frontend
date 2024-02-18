import { Spin } from 'antd';
import styled from 'styled-components';

export const StyledBoxDiv = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #bbcedd;
  border-radius: 10px;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: 600;
  color: #348485;
`;

export const StyledSpin = styled(Spin)`
  && {
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;