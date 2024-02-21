import { HeartOutlined, MessageOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled, { css } from 'styled-components';
import { Skeleton } from 'antd';
import NoImg from '@/public/noimg.png';

const RealtyJobCard = ({ info, loading }: { info?: any; loading?: boolean }) => {
  const router = useRouter();

  return (
    <StyledDiv onClick={() => router.push(info?.link ?? '/posts/1')} $isImg={!info?.imgUrl}>
      <div
        style={{
          borderRadius: 16,
          overflow: 'hidden',
          textAlign: 'center',
          lineHeight: 22,
          width: 170,
        }}
      >
        <Image
          src={info?.imgUrl ?? NoImg}
          alt="sample image"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: info?.imgUrl ? '100%' : 140,
            height: info?.imgUrl ? '100%' : 135,
            objectFit: 'cover',
          }}
        />
      </div>
      <div>
        {loading && (
          <div>
            <Skeleton active />
          </div>
        )}
        {!loading && (
          <>
            <div style={{ margin: '10px 0', fontSize: 15 }}>
              <span>{info?.title ?? '제목'}</span>
            </div>
            <div style={{ color: 'grey' }}>{info?.region ?? '지역'}</div>
            {/* <div style={{ color: '#8b8581', marginTop: 10 }}>
              <HeartOutlined /> {info?.like ?? 0} · <MessageOutlined /> {info?.msgCnt ?? 0}
            </div> */}
            <div style={{ margin: '10px 0', fontWeight: 700, fontSize: 15 }}>
              {info?.unit} {info?.price ? Number(info?.price)?.toLocaleString() : 0}원
            </div>
          </>
        )}
      </div>
    </StyledDiv>
  );
};

export default RealtyJobCard;

const StyledDiv = styled.div<{ $isImg: boolean }>`
  display: flex;
  gap: 20px;
  :hover {
    cursor: pointer;
    img {
      transition: 0.3s;
      scale: 1.05;
    }
  }
  & > div:nth-child(1) {
    height: 180px;
    ${(props) =>
      props.$isImg &&
      css`
        background: #dee2e7;
      `}
  }
  & > div:nth-child(2) {
    flex: 1;
  }
  & > div:nth-child(2) > div:nth-child(1) {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;
