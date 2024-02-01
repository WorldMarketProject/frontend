'use client'

import { useEffect } from "react";
import { Alert, Button, message } from "antd";
import styled from "styled-components";
import Discord from '@/public/svg/discord.svg';
import Mail from '@/public/svg/mail.svg';
import MoneyImg from '@/public/money.png';
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Image from "next/image";
import CardComponent from "@/components/Card";

const Login = () => {
  return (
    <CardComponent content={<LoginComponent />} />
  );
};

const LoginComponent = () => {
  const router = useRouter();

  return (
    <div style={{ textAlign: 'center' }}>
      <Title>자유시장 로그인</Title>
      <Explain>
        <div>자유시장에서는 자유롭게 거래할 수 있고,</div>
        <div>부동산 및 아르바이트 정보도 얻을 수 있습니다.</div>
      </Explain>
      <Image src={MoneyImg} alt='not found' style={{ marginTop: 10 }} />
      <div style={{ marginTop: 10 }}>
        <RegisterButton type="primary" ghost icon={<Mail style={{ width: 23, height: 22, margin: '0 10px', verticalAlign: 'text-bottom' }} />} onClick={() => router.push('/auth/login/discord')}>이메일로 로그인</RegisterButton>
      </div>
    </div>
  )
}

export default Login;

const Title = styled.div`
  font-size: 26px;
  font-weight: 600;
`

const Explain = styled.div`
  font-size: 13px;
  color: #606060;
  margin: 12px 0;
`

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
`

const BtnGroup = styled.div`
  margin: 20px 0;
  font-size: 14px;
  color: #606060;
`

const StyledSpan = styled.span`
  && {
    margin: 0 5px;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`