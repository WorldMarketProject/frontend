import { Tag } from 'antd';

const CodeTag = ({ code }: { code: string }) => {
  // const code = record?.tr_s_code;
  const data = () => {
    if (code === 'ING') {
      return {
        color: 'blue',
        value: '거래중',
      };
    }
    if (code === 'COMPLETE') {
      return {
        color: 'green',
        value: '거래완료',
      };
    }
    if (code === 'CANCLE') {
      return {
        color: 'volcano',
        value: '거래취소',
      };
    }
    if (code === 'WAIT') {
      return {
        color: 'grey',
        value: '거래대기',
      };
    }
  };
  return (
    <>
      <Tag color={data()?.color} style={{ marginInlineEnd: 0 }}>
        {data()?.value}
      </Tag>
    </>
  );
};

export default CodeTag;
