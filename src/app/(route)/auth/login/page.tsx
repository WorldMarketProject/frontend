'use client';

import { Suspense, useEffect } from 'react';
import { Alert, Button, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Discord from '@/public/svg/discord.svg';
import Mail from '@/public/svg/mail.svg';
import MoneyImg from '@/public/money.png';
import TopMsg from '@/components/Login/TopMsg';

const Login = () => <LoginComponent />;

const LoginComponent = () => {
  const router = useRouter();

  return (
    <>
      <Suspense fallback={<div />}>
        <TopMsg />
      </Suspense>
      <div style={{ textAlign: 'center' }}>
        <Title>자유시장 로그인</Title>
        <Explain>
          <div>자유시장에서는 자유롭게 거래할 수 있고,</div>
          <div>부동산 및 아르바이트 정보도 얻을 수 있습니다.</div>
        </Explain>
        <Image src={MoneyImg} alt="not found" style={{ marginTop: 10 }} />
        <div style={{ marginBottom: 30, fontSize: 12 }}>
          <a href="https://kr.freepik.com/free-photo/3d-render-hand-dropping-golden-coins-on-white_36362346.htm#query=money&position=12&from_view=search&track=sph&uuid=bdc628c3-6add-49c4-9929-7f746b11d417">
            작가 upklyak
          </a>{' '}
          출처 Freepik
        </div>
        <div style={{ marginTop: 10 }}>
          <RegisterButton
            type="primary"
            ghost
            icon={<UserOutlined style={{ fontSize: 18, margin: '0 8px' }} />}
            onClick={() => router.push('/auth/login/id')}
          >
            아이디로 로그인
          </RegisterButton>
        </div>
        <BtnGroup>
          <StyledSpan onClick={() => router.push('/auth/passwordIssue')} style={{ marginLeft: 0 }}>
            비밀번호 재설정
          </StyledSpan>
          {/*  · <StyledSpan onClick={() => router.push('/auth/findAccount')}>계정 찾기</StyledSpan> */}{' '}
          · <StyledSpan onClick={() => router.push('/auth/join')}>회원가입</StyledSpan>
        </BtnGroup>
      </div>
    </>
  );
};

export default Login;

const Title = styled.div`
  font-size: 26px;
  font-weight: 600;
`;

const Explain = styled.div`
  font-size: 13px;
  color: #606060;
  margin: 12px 0;
`;

const RegisterButton = styled(Button)`
  && {
    width: 100%;
    height: 48px;
    text-align: center;
    padding-right: 45px;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 10px;
    border-radius: 16px;
  }
`;

const BtnGroup = styled.div`
  margin: 20px 0;
  font-size: 14px;
  color: #606060;
`;

const StyledSpan = styled.span`
  && {
    margin: 0 5px;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
