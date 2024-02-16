'use client';

import { Layout, Row, Col } from 'antd';
import { useRouter } from 'next/navigation';
import * as S from './style';

const { Footer } = Layout;

const FooterPage = () => {
  const router = useRouter();
  return (
    <Footer
      style={{
        padding: 0,
        fontSize: 13,
        color: '#44576c',
        background: '#f5f5f7',
      }}
    >
      <div className="container">
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontWeight: 700, color: '#98a8b9', marginBottom: 10 }}>2023 FreeMarket</div>
          <div>본 사이트는 상업적인 목적이 아닌 공부 목적으로 만들어졌습니다.</div>
          이미지 출처{' '}
          <a href="https://kr.freepik.com/free-vector/flat-design-reseller-illustration_29169159.htm#&uuid=b446de06-ebb0-486a-afda-bdffb22a43c7">
            Freepik
          </a>
        </div>
        <S.StyledDiv>
          <span
            aria-hidden="true"
            onClick={() => router.push('/privacy')}
            style={{ fontWeight: 700 }}
          >
            개인정보 처리방침
          </span>{' '}
          ·{' '}
          <span aria-hidden="true" onClick={() => router.push('/tos')}>
            이용약관
          </span>{' '}
          ·{' '}
          <span aria-hidden="true" onClick={() => router.push('/service')}>
            고객센터
          </span>
        </S.StyledDiv>
      </div>
    </Footer>
  );
};

export default FooterPage;
