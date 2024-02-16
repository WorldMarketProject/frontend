'use client';

import { useEffect } from 'react';
import { Alert, Button, message } from 'antd';
import styled from 'styled-components';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { UserOutlined } from '@ant-design/icons';
import Discord from '@/public/svg/discord.svg';
import Mail from '@/public/svg/mail.svg';
import JoinImg from '@/public/join.png';
import CardComponent from '@/components/Card';

const Join = () => <LoginComponent />;

const LoginComponent = () => {
  const router = useRouter();

  return (
    <div style={{ textAlign: 'center' }}>
      <Title>자유시장 회원가입</Title>
      <Explain>
        <div>자유시장에서는 자유롭게 거래할 수 있고,</div>
        <div>부동산 및 아르바이트 정보도 얻을 수 있습니다.</div>
      </Explain>
      <Image src={JoinImg} alt="join" style={{ width: 350, height: 250, marginTop: 10 }} />
      <div style={{ marginBottom: 30, fontSize: 12 }}>
        <a href="https://kr.freepik.com/free-vector/hand-drawn-flat-design-people-waving-illustration_21559261.htm#query=join&position=15&from_view=search&track=sph&uuid=41d7c4c3-21a7-4be5-a22e-01fb4a438911">
          작가 pikisuperstar
        </a>{' '}
        출처 Freepik
      </div>
      <div style={{ marginTop: 20 }}>
        <RegisterButton
          type="primary"
          ghost
          icon={<UserOutlined style={{ fontSize: 18, margin: '0 8px' }} />}
          onClick={() => router.push('/auth/join/id')}
        >
          아이디로 회원가입
        </RegisterButton>
      </div>
      <BtnGroup>
        <StyledSpan onClick={() => router.push('/auth/passwordIssue')} style={{ marginLeft: 0 }}>
          비밀번호 재설정
        </StyledSpan>
        {/*  · <StyledSpan onClick={() => router.push('/auth/findAccount')}>계정 찾기</StyledSpan> */}{' '}
        · <StyledSpan onClick={() => router.push('/auth/login')}>로그인 하러 가기</StyledSpan>
      </BtnGroup>
    </div>
  );
};

export default Join;

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
