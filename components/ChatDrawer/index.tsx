import { Avatar, Drawer, Empty } from 'antd';
import { useRecoilState } from 'recoil';
import { RollbackOutlined } from '@ant-design/icons';
import { Dispatch, SetStateAction, useState } from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import { chatDrawerState } from '@/recoil/states';
import * as S from './style';
import List from './List';
import Room from './Room';

const ChatDrawer = () => {
  const [isChatOpend, setIsChatOpend] = useRecoilState(chatDrawerState);
  const [clickSeq, setClickSeq] = useState(null);
  const isMobile = useIsMobile();

  const chatList = [
    {
      seq: 1,
      user_nm: 'testuser',
      time: '1시간 전',
      message: '구매 의향 있으신가요?',
    },
    {
      seq: 2,
      user_nm: 'testuser2',
      time: '21분 전',
      message: '안녕하세요 😊',
    },
  ];

  const closeDrawer = () => {
    setIsChatOpend(false);
    setClickSeq(null);
  };

  return (
    <>
      <Drawer
        title={
          <S.StyledTitleDiv>
            {clickSeq ? (
              <div>
                {chatList?.find((e: any) => e.seq === clickSeq)?.user_nm}
                <div
                  aria-hidden="true"
                  onClick={() => setClickSeq(null)}
                  style={{ float: 'right', cursor: 'pointer' }}
                >
                  <RollbackOutlined />
                </div>
              </div>
            ) : (
              `채팅(${chatList?.length})`
            )}
          </S.StyledTitleDiv>
        }
        width={isMobile ? '100%' : 420}
        open={isChatOpend}
        onClose={closeDrawer}
        styles={{
          body: {
            padding: 0,
          },
        }}
      >
        {clickSeq && <Room setClickSeq={setClickSeq} />}
        {!clickSeq && chatList?.length && <List chatList={chatList} setClickSeq={setClickSeq} />}
        {!chatList?.length && <Empty description="채팅이 존재하지 않습니다." />}
      </Drawer>
    </>
  );
};

export default ChatDrawer;
