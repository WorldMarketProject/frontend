import { FileImageOutlined } from '@ant-design/icons';
import { Button, Input, message as antMessage } from 'antd';
import React, {
  CSSProperties,
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

const Room = ({ setClickSeq }: { setClickSeq: any }) => {
  const messages = useRef<any>(null);
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState<any>([]);

  const pushMessage = () => {
    if (!message) {
      antMessage.warning('메시지 입력 후 전송해주세요.');
      return;
    }
    setMessage('');
    setMessageList([
      ...messageList,
      { type: 'me', message, time: '오후 2:00' },
      { type: 'you', message, time: '오후 2:00' },
    ]);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageList]);

  const scrollToBottom = () => {
    if (messages.current) {
      messages.current.scrollTop = messages.current.scrollHeight;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', height: 50, padding: 15 }}>
        <div style={{ width: 50, marginRight: 15 }}>
          <div style={{ height: '100%', background: 'grey', borderRadius: 12 }} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 3,
            flex: 1,
          }}
        >
          <div>
            <b>50,000원</b>
          </div>
          <div>물건타이틀</div>
        </div>
      </div>
      <div
        ref={messages}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 7,
          background: '#e9edef',
          flex: 1,
          padding: 15,
          overflowY: 'scroll',
        }}
      >
        {messageList?.map((e: any, i: number) => (
          <Bubble key={i} type={e.type} message={e.message} time={e.time} />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: '#fff',
          height: 130,
          borderTop: '1px solid black',
          padding: 15,
        }}
      >
        <Input.TextArea
          value={message}
          onKeyPress={(e: KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              pushMessage();
            }
          }}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            Number(e.target.value?.length) > 500
              ? antMessage.warning('글자수가 초과되었습니다.')
              : setMessage(e.target.value)
          }
          placeholder="메시지를 입력해주세요."
          style={{ flex: 1, resize: 'none', border: 'none' }}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            height: 35,
          }}
        >
          <div>
            <FileImageOutlined style={{ fontSize: 18 }} />
          </div>
          <div>
            <span style={{ marginRight: 7, color: 'grey' }}>{message?.length}/500</span>
            <Button
              type="primary"
              size="small"
              onClick={pushMessage}
              style={{ background: '#363c45' }}
            >
              전송
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const commonBubbleStyles: CSSProperties = {
  display: 'inline-block',
  padding: 12,
  borderRadius: 14,
  maxWidth: '65%',
};

const commonTimeStyles: CSSProperties = {
  display: 'inline-block',
  verticalAlign: 'bottom',
  color: 'grey',
  fontSize: 13,
};

const Bubble = ({ type, message, time }: { type: string; message: string; time: string }) =>
  type === 'me' ? (
    <div style={{ textAlign: 'right' }}>
      <div style={{ ...commonTimeStyles, marginRight: 5 }}>{time}</div>
      <div
        style={{
          ...commonBubbleStyles,
          background: '#363C45',
          color: '#fff',
          borderTopRightRadius: 5,
        }}
      >
        {message}
      </div>
    </div>
  ) : (
    <div style={{ textAlign: 'left' }}>
      <div
        style={{ ...commonBubbleStyles, background: '#fff', color: '#000', borderTopLeftRadius: 5 }}
      >
        <div>{message}</div>
      </div>
      <div style={{ ...commonTimeStyles, marginLeft: 5 }}>{time}</div>
    </div>
  );

export default Room;
