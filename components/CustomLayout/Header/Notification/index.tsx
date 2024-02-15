import { Empty, Row } from "antd";
import * as S from "./style";

const Notification = () => (
  <S.StyledPopoverDiv
    style={{
      width: 320,
      height: 450,
      overflowY: "auto",
      overflowX: "hidden",
    }}
  >
    <Row gutter={[25, 25]} style={{ paddingTop: 20, padding: 10 }}>
      <S.StyledEmpty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="알림이 존재하지 않습니다."
      />
    </Row>
  </S.StyledPopoverDiv>
);
export default Notification;
