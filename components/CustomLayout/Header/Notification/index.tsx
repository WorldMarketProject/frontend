import { Empty, Row } from "antd";
import styled from "styled-components";

const Notification = () => (
  <StyledPopoverDiv
    style={{
      width: 320,
      height: 450,
      overflowY: "auto",
      overflowX: "hidden",
    }}
  >
    <Row gutter={[25, 25]} style={{ paddingTop: 20, padding: 10 }}>
      <StyledEmpty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="알림이 존재하지 않습니다."
      />
      {/* 더미 항목 */}
      {/* <Alert3 />
        <Alert2 />
        <Alert key={1} />
        <Alert key={2} />
        <Alert key={3} /> */}
    </Row>
  </StyledPopoverDiv>
);
export default Notification;

const StyledPopoverDiv = styled.div`
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #45556066;
    border-radius: 20px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
`;

const StyledEmpty = styled(Empty)`
  && {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 360px;
    justify-content: center;
    align-items: center;

    > .ant-empty-description {
      color: grey;
      font-size: 14px;
    }
  }
`;
