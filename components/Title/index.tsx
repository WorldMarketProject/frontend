import * as S from './style';

const Title = ({ content }: { content?: string | React.ReactNode }) => (
  <S.StyledTitle>{content}</S.StyledTitle>
);

export default Title;
