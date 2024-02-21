import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import useIsMobile from '@/hooks/useIsMobile';
import NoSsr from '@/components/NoSsr';

const Banner = ({ path }: { path: string }) => {
  const isMobile = useIsMobile();

  const getInfo = () => {
    if (path === '/') {
      return {
        title: (
          <>
            <div>자유시장</div>
            <div>
              회원 간 <StyledSpan1>중고거래123</StyledSpan1>
            </div>
          </>
        ),
        subTitle: (
          <>
            <div>자유시장에서 따뜻한 거래를</div>
            <div>지금 경험해보세요.</div>
          </>
        ),
        background: '#f7f1eb',
        imgUrl: '/trade1.png',
      };
    }
    if (path === '/realty') {
      return {
        title: (
          <>
            <div>투명한</div>
            <div>
              <StyledSpan2>부동산 직거래</StyledSpan2>
            </div>
          </>
        ),
        subTitle: (
          <>
            <div>집이 필요할 때, 자유시장에서</div>
            <div>편하게 직거래해보세요.</div>
          </>
        ),
        background: '#d2edfa',
        imgUrl: '/realty.png',
      };
    }
    if (path === '/jobs') {
      return {
        title: (
          <>
            <div>편하게 찾는</div>
            <div>
              <StyledSpan3>아르바이트</StyledSpan3>
            </div>
          </>
        ),
        subTitle: (
          <>
            <div>내가 원하는 알바들</div>
            <div>쉽고 빠르게 찾아보세요.</div>
          </>
        ),
        background: '#fdeadf',
        imgUrl: '/jobs.png',
      };
    }
  };

  return (
    <>
      <div
        style={{
          background: getInfo()?.background,
          height: isMobile ? 230 : 350,
          overflow: 'hidden',
        }}
      >
        <NoSsr>
          <div className="container banner" style={{ display: 'flex', padding: '10px 16px' }}>
            <div style={{ flex: 1, marginTop: isMobile ? 30 : 65 }}>
              <div style={{ lineHeight: 1.4 }}>
                <h1>{getInfo()?.title}</h1>
              </div>
              <div style={{ lineHeight: 1.4 }}>{getInfo()?.subTitle}</div>
            </div>
            <div>
              <Image
                src={getInfo()?.imgUrl || ''}
                alt={getInfo()?.imgUrl || ''}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </NoSsr>
      </div>
    </>
  );
};

export default Banner;

const StyledSpan1 = styled.span`
  background: linear-gradient(to right, rgb(32 105 106), rgb(112, 141, 148));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledSpan2 = styled.span`
  background: linear-gradient(to right, rgb(27, 79, 107), rgb(79, 136, 166));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledSpan3 = styled.span`
  background: linear-gradient(to right, rgb(65, 58, 53), rgb(108, 97, 89));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
