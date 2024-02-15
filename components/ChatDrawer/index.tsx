import useIsMobile from "@/hooks/useIsMobile";
import { chatDrawerState } from "@/recoil/states";
import { Avatar, Drawer, Empty } from "antd";
import { useRecoilState } from "recoil";
import * as S from "./style";
import { UserOutlined } from "@ant-design/icons";

const ChatDrawer = () => {
  const [isChatOpend, setIsChatOpend] = useRecoilState(chatDrawerState);
  const isMobile = useIsMobile();

  const chatList = [
    {
      user_nm: "testuser",
      time: "1시간 전",
      message: "구매 의향 있으신가요?",
    },
    {
      user_nm: "testuser2",
      time: "21분 전",
      message: "안녕하세요 😊",
    },
  ];

  return (
    <>
      <Drawer
        title={<S.StyledTitleDiv>채팅</S.StyledTitleDiv>}
        width={isMobile ? "100%" : 420}
        open={isChatOpend}
        onClose={() => setIsChatOpend(false)}
      >
        {chatList?.length && (
          <>
            <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
              {chatList?.map((e: any, i: number) => (
                <ChatElement key={i} e={e} />
              ))}
            </div>
          </>
        )}
        {!chatList?.length && <Empty description="채팅이 존재하지 않습니다." />}
      </Drawer>
    </>
  );
};

const ChatElement = ({ e }: { e: any }) => {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <div>
        <Avatar
          style={{
            width: 60,
            height: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <UserOutlined style={{ fontSize: 34 }} />
        </Avatar>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          fontSize: 15,
          gap: 5,
        }}
      >
        <div>
          <b>{e?.user_nm}</b> <span>{e?.time}</span>
        </div>
        <div>{e?.message}</div>
      </div>
    </div>
  );
};

export default ChatDrawer;
