import { Empty } from 'antd';
import * as S from './style';

const Trade = () => (
  <>
    <S.SubTitle>내가 등록한 중고거래</S.SubTitle>
    <S.StyledBoxDiv>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    </S.StyledBoxDiv>
    <S.SubTitle>내가 등록한 부동산</S.SubTitle>
    <S.StyledBoxDiv>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    </S.StyledBoxDiv>
    <S.SubTitle>내가 등록한 아르바이트</S.SubTitle>
    <S.StyledBoxDiv>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    </S.StyledBoxDiv>
  </>
);

export default Trade;
