import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { Dispatch, SetStateAction } from 'react';
import * as S from '../style';

const List = ({ chatList, setClickSeq }: { chatList: any; setClickSeq: any }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
    {chatList?.map((e: any, i: number) => (
      <ChatElement key={i} e={e} setClickSeq={setClickSeq} />
    ))}
  </div>
);

const ChatElement = ({
  e,
  setClickSeq,
}: {
  e: any;
  setClickSeq: Dispatch<SetStateAction<any>>;
}) => (
  <S.StyledChatDiv aria-hidden="true" onClick={() => setClickSeq(e?.seq)}>
    <div>
      <Avatar
        style={{
          width: 60,
          height: 60,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <UserOutlined style={{ fontSize: 34 }} />
      </Avatar>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: 15,
        gap: 5,
      }}
    >
      <div>
        <b>{e?.user_nm}</b> <span>{e?.time}</span>
      </div>
      <div>{e?.message}</div>
    </div>
  </S.StyledChatDiv>
);

export default List;
